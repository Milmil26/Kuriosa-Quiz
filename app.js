// Kuriosa app logic. Membutuhkan data.js (variabel D) dimuat lebih dulu.
var OWL = "assets/owl.png", LOGO = "assets/logo.webp";
var MAS = { hore: "assets/maskot-hore.png", bingung: "assets/maskot-bingung.png", sedih: "assets/maskot-sedih.png", normal: "assets/maskot1.png" };
var MODS={ct:D,pl:D_PL,cr:D_CR},MK=['ct','pl','cr'];D.key='ct';D.short='Computational Thinking';D.blurb='Pecah masalah, kenali pola, dan susun langkah.';
function tsid(t){for(var i=0;i<D.sections.length;i++){if(D.sections[i].questions.some(function(q){return q.tag===t}))return D.sections[i].id}}
var ST;try{ST=JSON.parse(localStorage.getItem('kuriosa_v1'))}catch(e){}ST=ST||{v:2,name:'',sec:{},tag:{},fin:{},log:[]};
if(!ST.v){var _s={},_t={};Object.keys(ST.sec||{}).forEach(function(k){_s['ct:'+k]=ST.sec[k]});Object.keys(ST.tag||{}).forEach(function(k){_t['ct:'+k]=ST.tag[k]});ST.sec=_s;ST.tag=_t;ST.fin=ST.fin&&ST.fin.pct!==undefined?{ct:ST.fin}:(ST.fin||{});ST.log=ST.log||[];ST.v=2}
function sg(id){return ST.sec[D.key+':'+id]}
function fin(){return (ST.fin||{})[D.key]}
function save(){try{localStorage.setItem('kuriosa_v1',JSON.stringify(ST))}catch(e){}if(typeof cloudPush==='function')cloudPush()}
var app=document.getElementById('app'),S=null;
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function sec(id){return D.sections.filter(function(s){return s.id===id})[0]}
function idx(id){return D.sections.indexOf(sec(id))}
function open_(i){return i===0||!!sg(D.sections[i-1].id)}
function nDone(){return D.sections.filter(function(s){return sg(s.id)}).length}
function bd(m){return m>=80?['b-ok','Dikuasai']:m>=50?['b-mid','Hampir paham']:['b-low','Perlu diulang']}
function log(t){ST.log.unshift({t:t,d:new Date().toLocaleDateString('id-ID',{day:'numeric',month:'short'})});ST.log=ST.log.slice(0,5)}
function bar(p,l){return '<div class="bar" role="img" aria-label="'+l+' '+p+' persen"><i style="width:'+p+'%"></i></div>'}
function nextStep(){var n=nDone();return n<D.sections.length?{h:'#learn-'+D.key+'-'+D.sections[n].id,t:D.sections[n].title,n:n+1}:{h:'#final-'+D.key,t:'Final quiz',n:6}}
/* views */
function home(){app.innerHTML='<div class="hero"><div><h1>Belajar sampai benar-benar paham.</h1><p>Materi singkat, latihan langsung, dan feedback yang menjelaskan jawabanmu, bukan sekadar benar atau salah.</p><div class="acts" style="margin-top:14px"><a class="btn" href="#dashboard">Start Learning</a><a class="btn ghost" href="#explore">Explore</a></div></div><img alt="Maskot burung hantu Kuriosa" src="'+LOGO+'"></div>'+
'<div><h2>Cara belajar di Kuriosa</h2><ol class="steps">'+[['Explore','Pilih topik dan lihat tujuannya.'],['Learn','Materi singkat dan contoh nyata.'],['Check','Jawab soal tiap bagian.'],['Get feedback','Tahu alasan tiap jawaban.'],['Reflect','Lihat konsep yang dikuasai.'],['Try again','Ulang atau kuis remedial.']].map(function(s,i){return '<li><div class="n">'+(i+1)+'</div><h3>'+s[0]+'</h3><p>'+s[1]+'</p></li>'}).join('')+'</ol></div>'+
'<div><h2>Modul pilihan</h2><div class="col">'+MK.map(function(k){var m=MODS[k];return '<div class="card"><span class="tag">'+m.category+'</span><h2 style="margin-top:6px">'+m.title+'</h2><p>'+m.blurb+' 5 bagian dan final quiz 10 soal.</p><div class="acts" style="margin-top:12px"><a class="btn" href="#module-'+k+'">Lihat modul</a></div></div>'}).join('')+'</div></div>'}
function dash(){var o=D,tags=Object.keys(ST.tag),ms=tags.filter(function(t){return ST.tag[t]>=80}).length,wk=tags.length-ms,avg=tags.length?Math.round(tags.reduce(function(a,t){return a+ST.tag[t]},0)/tags.length):0,tot=0,cards='';
 MK.forEach(function(k){D=MODS[k];var n=nDone(),f=fin(),ns=nextStep();tot+=n;var p=Math.round((n+(f?1:0))/6*100);
  cards+='<div class="card"><span class="meta">'+D.title+' · '+(f?'Selesai':'Langkah '+ns.n+' dari 6')+'</span><h3 style="font-size:22px;margin:2px 0 8px">'+(f?'Semua bagian selesai':ns.t)+'</h3>'+bar(p,'Progress modul')+'<div style="margin-top:12px"><a class="btn" href="'+(f?'#module-'+k:ns.h)+'">'+(f?'Lihat modul':n?'Continue':'Start')+'</a></div></div>'});
 D=o;
 var h=ST.name?'':'<div class="card"><h2>Siapa nama panggilanmu?</h2><div class="field"><input id="nm" aria-label="Nama panggilan" placeholder="Misalnya Dina" maxlength="20"><button class="btn sm" data-a="name">Simpan</button></div><p class="err" id="nerr" role="alert"></p></div>';
 if(authOn()&&!USER)h+='<div class="card"><p>Masuk agar progress tersimpan di semua perangkatmu. <a href="#login" style="text-decoration:underline;font-weight:800">Masuk atau daftar</a></p></div>';
 app.innerHTML='<div class="welcome"><img alt="" src="'+OWL+'"><div><h1>Halo, '+esc(ST.name||'Teman')+'!</h1><p style="margin:2px 0 0">'+(tot?'Lanjut belajar yuk.':'Yuk mulai belajar hari ini.')+'</p></div></div>'+h+
 '<section><h2>Continue learning</h2><div class="col">'+cards+'</div></section>'+
 '<section><h2>Progress belajarmu</h2><div class="stats"><div class="stat"><b>'+tot+'/'+(MK.length*5)+'</b><span>bagian selesai</span></div><div class="stat"><b>'+ms+'</b><span>konsep dikuasai</span></div><div class="stat"><b>'+avg+'%</b><span>rata-rata penguasaan</span></div><div class="stat w"><b>'+wk+'</b><span>perlu diulang</span></div></div></section>'+
 '<section><h2>Recent activity</h2><div class="card">'+(ST.log.length?'<ul class="act">'+ST.log.map(function(l){return '<li><span>'+esc(l.t)+'</span><span class="meta">'+l.d+'</span></li>'}).join('')+'</ul>':'<p>Belum ada aktivitas. Mulai dari bagian pertama.</p>')+'</div></section>'}
var QF={q:'',c:'Semua'};
function explore(){var o=D;app.innerHTML='<div><h1>Explore modules</h1><p>Pilih topik, lihat tujuan belajarnya, lalu mulai.</p></div><div class="field"><input id="q" type="search" aria-label="Cari modul" placeholder="Cari modul" value="'+esc(QF.q)+'"></div><div class="acts" id="cf"></div><div class="col" id="ml" aria-live="polite"></div>';
 var C=['Semua','Digital and Technology','Science and Mathematics','Knowledge and Skills'];
 document.getElementById('cf').innerHTML=C.map(function(c){return '<button class="btn sm'+(QF.c===c?'':' ghost')+'" data-a="cat" data-c="'+c+'" aria-pressed="'+(QF.c===c)+'">'+c+'</button>'}).join('');
 var M=MK.map(function(k){var m=MODS[k];return{c:m.category,t:m.title,d:m.blurb,k:k,x:m.sections.map(function(s){return s.title}).join(' ')}});
 var q=QF.q.toLowerCase(),r=M.filter(function(m){return(QF.c==='Semua'||m.c===QF.c)&&(!q||(m.t+' '+m.d+' '+m.x).toLowerCase().indexOf(q)>-1)});
 document.getElementById('ml').innerHTML=r.length?r.map(function(m){var s='';if(m.k){D=MODS[m.k];s=bar(Math.round((nDone()+(fin()?1:0))/6*100),'Progress')+'<p class="meta">5 bagian · 40 menit · Pemula</p><div style="margin-top:8px"><a class="btn sm" href="#module-'+m.k+'">Lihat modul</a></div>'}else s='<p class="meta">Segera hadir</p>';return '<article class="card"><span class="tag">'+m.c+'</span><h2 style="margin-top:6px">'+m.t+'</h2><p>'+m.d+'</p>'+s+'</article>'}).join(''):'<div class="card"><h2>Belum ketemu</h2><p>Coba kata kunci lain.</p></div>';D=o}
function mod(){var n=nDone(),ns=nextStep();
 var rows=D.sections.map(function(s,i){var d=sg(s.id),o=open_(i),c=d?'done':o?'next':'lock';
  var inner='<span class="ic">'+(d?'✓':o?'▶':'•')+'</span><span><b>'+s.no+'. '+s.title+'</b><small>'+(o?s.minutes+' menit':'Terkunci')+'</small></span>'+(d?'<span class="sc">'+d.pct+'%</span>':'');
  return '<li>'+(o?'<a class="ls '+c+'" href="#learn-'+D.key+'-'+s.id+'">'+inner+'</a>':'<button class="ls lock" data-a="lock" data-n="'+D.sections[i-1].title+'">'+inner+'</button>')+'</li>'}).join('');
 var fo=n===5;rows+='<li>'+(fo?'<a class="ls '+(fin()?'done':'next')+'" href="#final-'+D.key+'"><span class="ic">'+(fin()?'✓':'▶')+'</span><span><b>Final quiz</b><small>10 soal</small></span>'+(fin()?'<span class="sc">'+ST.fin.pct+'%</span>':'')+'</a>':'<button class="ls lock" data-a="lock" data-n="'+D.sections[4].title+'"><span class="ic">•</span><span><b>Final quiz</b><small>10 soal · terkunci</small></span></button>')+'</li>';
 app.innerHTML='<div class="card"><a class="meta" href="#explore">← Kembali ke Explore</a><br><span class="tag">'+D.category+'</span><h1 style="margin-top:6px">'+D.title+'</h1><p class="meta">'+D.minutes+' menit · '+D.level+' · 5 bagian</p></div>'+
 '<section><h2>Setelah modul ini, kamu bisa</h2><div class="card"><ol class="obj">'+D.objectives.map(function(o){return '<li>'+o+'</li>'}).join('')+'</ol></div></section>'+
 '<section><h2>Progress</h2>'+bar(Math.round(n/6*100),'Progress modul')+'<p class="meta">'+n+' dari 5 bagian selesai</p><div style="margin-top:8px"><a class="btn" href="'+(fin()?'#final-'+D.key:ns.h)+'">'+(n?'Continue: '+ns.t:'Start Learning')+'</a></div></section>'+
 '<section><h2>Daftar bagian</h2><ul class="lsl">'+rows+'</ul><p class="meta" id="msg" aria-live="polite" style="margin-top:8px"></p></section>'}
/* learn + quiz engine */
function learnHtml(s,btn){return '<div><span class="tag">'+D.short+' · Bagian '+s.no+'</span><h1 style="margin-top:6px">'+s.title+'</h1></div><div class="goal"><small>Tujuan bagian ini</small>'+s.goal+'</div><div class="card"><h2>Penjelasan</h2>'+s.material.map(function(p){return '<p>'+p+'</p>'}).join('')+'<div class="viz" aria-label="Ilustrasi konsep"><span class="big">'+s.viz.top+'</span><div class="parts">'+s.viz.parts.map(function(p){return '<span>'+p+'</span>'}).join('')+'</div></div></div><div class="card"><h2>Contoh sehari-hari</h2><p>'+s.example+'</p></div><div class="acts">'+btn+'</div>'}
function learn(id){var i=idx(id);if(i<0){location.hash='#explore';return}
 if(!open_(i)){app.innerHTML='<div class="card"><h2>Bagian ini masih terkunci</h2><p>Selesaikan '+D.sections[i-1].title+' dulu.</p><div style="margin-top:10px"><a class="btn" href="#module-'+D.key+'">Kembali ke modul</a></div></div>';return}
 var s=D.sections[i];s.questions.forEach(function(q){q.sid=s.id});S={ctx:'sec',id:id,base:s.questions,qs:s.questions};
 app.innerHTML=learnHtml(s,'<button class="btn" data-a="go">Mulai latihan</button><a class="btn ghost" href="#module-'+D.key+'">Kembali ke modul</a>')}
function final_(){if(nDone()<5){app.innerHTML='<div class="card"><h2>Final quiz masih terkunci</h2><p>Selesaikan 5 bagian dulu.</p><div style="margin-top:10px"><a class="btn" href="#module-'+D.key+'">Kembali ke modul</a></div></div>';return}
 D.finalQuiz.forEach(function(q){q.sid=tsid(q.tag)});S={ctx:'fin',base:D.finalQuiz,qs:D.finalQuiz};
 app.innerHTML='<div><span class="tag">Final quiz</span><h1 style="margin-top:6px">Uji pemahamanmu</h1></div><div class="goal"><small>Tujuan</small>Mengukur pemahaman seluruh modul, 10 soal dari semua konsep.</div><div class="card"><h2>Cara kerja waktu</h2><p>Tiap soal punya batas waktu: 30 detik, dan 45 detik untuk drag-and-drop. Makin cepat kamu menjawab dengan benar, makin tinggi poin kecepatanmu (maksimal 1000 per soal).</p><p>Penguasaan konsep tetap dinilai dari ketepatan, bukan kecepatan. Kalau waktu habis, kamu masih bisa menjawab dan belajar dari feedback, hanya poin kecepatannya 0.</p></div><div class="acts"><button class="btn" data-a="go">Mulai final quiz</button><a class="btn ghost" href="#module-'+D.key+'">Kembali</a></div>'}
var TI=null;
function left(){return Math.max(0,S.lim-((S.pz||Date.now())-S.t0)/1000)}
function tmH(){if(S.ctx!=='fin')return '';var l=left(),f=l/S.lim;return '<div class="tm"><div class="bar" role="timer" aria-label="Sisa waktu"><i id="ti" class="'+(f<.25?'lo':'')+'" style="width:'+Math.round(f*100)+'%"></i></div><b id="tn">'+Math.ceil(l)+'</b></div><p class="meta" id="tw" role="status" style="margin:0">'+(S.late&&!S.done?'Waktu habis. Poin kecepatan 0, tapi kamu tetap bisa menjawab untuk belajar.':'')+'</p>'}
function tick(){if(!S||S.ctx!=='fin'||S.done||S.pz)return;var l=left(),f=l/S.lim,i=document.getElementById('ti'),n=document.getElementById('tn');if(i){i.style.width=Math.round(f*100)+'%';i.className=f<.25?'lo':''}if(n)n.textContent=Math.ceil(l);if(l<=0&&!S.late){S.late=true;var w=document.getElementById('tw');if(w)w.textContent='Waktu habis. Poin kecepatan 0, tapi kamu tetap bisa menjawab untuk belajar.'}}
function startT(){clearInterval(TI);TI=setInterval(tick,250)}
function begin(list){list.forEach(function(q){if(q.k==='mc'){for(var i=q.o.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),x=q.o[i];q.o[i]=q.o[j];q.o[j]=x}}});S.qs=list;S.i=0;S.res=[];S.pts=0;quiz()}
function cur(){return S.qs[S.i]}
function quiz(){S.keep='';S.att=0;S.sel=null;S.tried=[];S.pl={};S.done=false;S.bad=null;S.late=false;S.pz=0;if(S.ctx==='fin'){S.lim=cur().k==='dd'?45:30;S.t0=Date.now();startT()}draw()}
function esc2(x){return esc(x)}
function draw(){var q=cur(),n=S.qs.length,h=tmH()+bar(Math.round(S.i/n*100),'Progress soal')+'<div class="meta">Soal '+(S.i+1)+' dari '+n+'</div><div><span class="tag">'+D.concepts[q.tag]+'</span></div><div class="card"><div class="q">'+esc(q.q)+'</div>';
 if(q.k==='dd')h+=ddH(q);else{h+='<div class="opts'+(q.k==='tf'?' tf':'')+'">';q.o.forEach(function(o,i){var c='opt',d='';if(S.tried.indexOf(i)>-1){c+=' tried';d=' disabled'}if(S.done){d=' disabled';if(o.ok)c+=' right'}h+='<button class="'+c+'"'+d+' data-a="pick" data-i="'+i+'" aria-pressed="'+(S.sel===i)+'">'+(q.k==='tf'?'':'<span class="l">'+'ABCD'[i]+'</span>')+'<span>'+esc(o.t)+'</span></button>'});h+='</div>'}
 h+='<p class="err" id="err" role="alert"></p>'+(S.done?'<div class="acts" style="margin-top:10px"><button class="btn" data-a="next">'+(S.i+1<S.qs.length?'Soal berikutnya':'Lihat hasil')+'</button></div>':'<div class="acts" style="margin-top:10px"><button class="btn" data-a="chk">Periksa jawaban</button></div>')+'</div>';
 var f=S.fb;S.fb='';if(f)h+='<dialog class="fbm" id="fbm" aria-labelledby="fbmt">'+f+'</dialog>';
 app.innerHTML=h;
 if(f){var d=document.getElementById('fbm');d.addEventListener('close',resumeT);if(d.showModal)d.showModal();else d.setAttribute('open','')}}
function resumeT(){if(S&&S.ctx==='fin'&&S.pz&&!S.done){S.t0+=Date.now()-S.pz;S.pz=0}}
function ddH(q){var pool=[],h='';q.it.forEach(function(x,i){if(S.pl[i]===undefined)pool.push(i)});
 function chip(i){return '<button class="chp'+(S.bad&&S.bad.indexOf(i)>-1?' bad':'')+'" draggable="true" data-a="chip" data-i="'+i+'" aria-pressed="'+(S.sel===i)+'">'+esc(q.it[i].t)+'</button>'}
 h+='<p style="font-size:15px">Ketuk kartu, lalu ketuk kotaknya. Di komputer, kartu juga bisa diseret.</p><div class="pool" data-a="zone" data-z="" aria-label="Kartu belum ditempatkan">'+pool.map(chip).join('')+'</div><div class="zones">';
 ['a','b'].forEach(function(z){var m=[];q.it.forEach(function(x,i){if(S.pl[i]===z)m.push(i)});h+='<div class="zone" data-a="zone" data-z="'+z+'" role="group" aria-label="'+esc(q.z[z])+'"><h3>'+esc(q.z[z])+'</h3><div class="cs">'+m.map(chip).join('')+'</div></div>'});return h+'</div>'}
function fb(c,t,b,a,m){return '<div class="fb '+c+'"><img class="mas" alt="" src="'+MAS[m||'normal']+'"><div><b id="fbmt">'+t+'</b><p>'+esc(b)+'</p></div>'+(a?'<div class="acts">'+a+'</div>':'')+'</div>'}
function nxt(){return '<button class="btn" data-a="next">'+(S.i+1<S.qs.length?'Soal berikutnya':'Lihat hasil')+'</button>'}
function check(){var q=cur(),ok,why='';
 if(q.k==='dd'){if(Object.keys(S.pl).length<q.it.length){err('Tempatkan semua kartu dulu.');return}S.bad=[];q.it.forEach(function(x,i){if(S.pl[i]!==x.z)S.bad.push(i)});ok=!S.bad.length;why=q.w}
 else{if(S.sel===null){err('Pilih satu jawaban dulu.');return}var o=q.o[S.sel];ok=!!o.ok;why=o.w}
 S.att++;
 if(ok){S.res.push({tag:q.tag,p:S.att===1?100:S.att===2?60:30});var sp=0;if(S.ctx==='fin'){var lf=left();sp=lf<=0?0:S.att===1?Math.round(500+500*lf/S.lim):200;S.pts+=sp;S.pz=Date.now()}S.done=true;S.bad=null;S.fb=fb('ok',S.att===1?'Tepat!':'Benar, kamu berhasil!',q.r+(S.ctx==='fin'?' +'+sp+' poin kecepatan.':''),nxt(),'hore');draw();return}
 if(S.ctx==='fin'&&!S.pz)S.pz=Date.now();
 if(q.k!=='dd'){S.tried.push(S.sel);S.sel=null}
 var bk='<button class="btn ghost" data-a="back">Pelajari lagi: '+sec(q.sid).title+'</button>';
 S.fb=S.att===1?fb('no','Hampir benar!',why+(q.k==='dd'?' Kartu yang perlu dicek ditandai merah muda.':''),'<button class="btn" data-a="closefb">Coba lagi</button>','bingung'):S.att===2?fb('hint','Ini petunjuk tambahan',q.h,bk+'<button class="btn" data-a="closefb">Coba lagi</button>','normal'):fb('hint','Yuk lihat jawabannya bersama',q.h,bk+'<button class="btn" data-a="reveal">Lihat jawaban</button><button class="btn" data-a="closefb">Coba lagi</button>','sedih');draw()}
function err(m){var e=document.getElementById('err');if(e)e.textContent=m}
function reveal(){var q=cur();S.res.push({tag:q.tag,p:0});S.done=true;S.bad=null;S.pz=Date.now();if(q.k==='dd')q.it.forEach(function(x,i){S.pl[i]=x.z});S.fb=fb('hint','Jawaban yang tepat',q.r,nxt(),'normal');draw()}
function result(){clearInterval(TI);var by={},tot=0;S.res.forEach(function(r){(by[r.tag]=by[r.tag]||[]).push(r.p);tot+=r.p});
 var first=S.res.filter(function(r){return r.p===100}).length,pct=Math.round(tot/S.res.length),weak=[],rows='';
 Object.keys(by).forEach(function(t){var m=Math.round(by[t].reduce(function(a,b){return a+b},0)/by[t].length),b=bd(m);ST.tag[D.key+':'+t]=m;if(m<80)weak.push(t);rows+='<div><div class="h"><span>'+D.concepts[t]+'</span><span class="badge '+b[0]+'">'+b[1]+'</span></div>'+bar(m,D.concepts[t])+'</div>'});
 var c=S.ctx,btns='',ttl=c==='fin'?'Hasil final quiz':c==='rem'?'Hasil kuis remedial':'Hasil bagian '+sec(S.id).title;
 if(c==='sec'){ST.sec[D.key+':'+S.id]={pct:pct};log('Selesai bagian: '+sec(S.id).title+' ('+pct+'%)')}
 if(c==='fin'){ST.fin=ST.fin||{};ST.fin[D.key]={pct:pct,pts:S.pts};log('Final quiz selesai ('+pct+'%, '+S.pts+' poin)')}
 if(c==='rem')log('Kuis remedial selesai ('+pct+'%)');save();
 S.weak=weak;var pool=[];if(weak.length){(c==='sec'?S.base:D.sections.reduce(function(a,s){s.questions.forEach(function(q){q.sid=s.id});return a.concat(s.questions)},[])).forEach(function(q){if(weak.indexOf(q.tag)>-1)pool.push(q)});S.pool=pool.slice(0,8)}
 if(weak.length&&c!=='rem')btns+='<button class="btn" data-a="rem">Kuis remedial: '+weak.length+' konsep</button>';
 if(c==='sec'){var i=idx(S.id);btns+='<a class="btn'+(weak.length?' ghost':'')+'" href="'+(i<4?'#learn-'+D.key+'-'+D.sections[i+1].id:'#final-'+D.key)+'">'+(i<4?'Lanjut: '+D.sections[i+1].title:'Lanjut ke final quiz')+'</a><button class="btn ghost" data-a="re">Ulang materi</button>'}
 if(c==='fin')btns+='<button class="btn ghost" data-a="refin">Ulang final quiz</button>';
 btns+='<a class="btn ghost" href="#module-'+D.key+'">Kembali ke modul</a>';
 var msg=weak.length?'Ada '+weak.length+' konsep yang perlu dimantapkan.':'Hebat! Semua konsep sudah kamu kuasai.';
 app.innerHTML='<div class="rm"><img class="mas" alt="" src="'+MAS[pct>=80?'hore':pct>=50?'normal':'sedih']+'"></div><h1>'+ttl+'</h1><div class="card score"><div class="ring" aria-label="Benar di percobaan pertama '+first+' dari '+S.res.length+'">'+first+'/'+S.res.length+'</div><div><h2>'+msg+'</h2><p style="font-size:15px">Angka menunjukkan soal yang benar di percobaan pertama. Skor penguasaan: '+pct+'%.</p>'+(c==='fin'?'<p style="font-size:15px"><b>Poin kecepatan: '+S.pts+'</b> dari maksimal '+(S.qs.length*1000)+'. Makin cepat dan tepat, makin tinggi.</p>':'')+'</div></div><div class="card"><h2>Penguasaan per konsep</h2><div class="con">'+rows+'</div></div><div class="col">'+btns+'</div>'}
function go(){begin(S.base)}
app.addEventListener('click',function(e){var t=e.target.closest('[data-a]');if(!t)return;var a=t.dataset.a;
 if(a==='name'){var v=document.getElementById('nm').value.trim();if(!v){document.getElementById('nerr').textContent='Isi nama panggilanmu dulu.';return}ST.name=v;save();dash()}
 else if(a==='cat'){QF.c=t.dataset.c;explore()}
 else if(a==='lock'){document.getElementById('msg').textContent='Selesaikan '+t.dataset.n+' dulu untuk membuka ini.'}
 else if(a==='go'){go()}
 else if(a==='re'){learn(S.id)}
 else if(a==='refin'){final_();go()}
 else if(a==='rem'){S.ctx='rem';begin(S.pool)}
 else if(a==='pick'){S.sel=+t.dataset.i;draw()}
 else if(a==='chk'){check()}
 else if(a==='next'){S.i++;S.i<S.qs.length?quiz():result()}
 else if(a==='reveal'){reveal()}
 else if(a==='closefb'){var m=document.getElementById('fbm');if(m)m.close()}
 else if(a==='back'){var s=sec(cur().sid);if(S.ctx==='fin'&&!S.pz)S.pz=Date.now();app.innerHTML=learnHtml(s,'<button class="btn" data-a="resume">Kembali ke soal</button>')}
 else if(a==='resume'){if(S.ctx==='fin'&&S.pz&&!S.done){S.t0+=Date.now()-S.pz;S.pz=0}draw()}
 else if(a==='chip'){if(S.done)return;var i=+t.dataset.i,zn=t.closest('[data-z]');if(S.sel!==null&&S.sel!==i&&zn){if(zn.dataset.z)S.pl[S.sel]=zn.dataset.z;else delete S.pl[S.sel];S.sel=null}else S.sel=S.sel===i?null:i;S.bad=null;draw()}
 else if(a==='zone'&&!S.done&&S.sel!==null){if(t.dataset.z)S.pl[S.sel]=t.dataset.z;else delete S.pl[S.sel];S.sel=null;S.bad=null;draw()}});
app.addEventListener('input',function(e){if(e.target.id==='q'){QF.q=e.target.value;var p=e.target.selectionStart;explore();var el=document.getElementById('q');el.focus();el.setSelectionRange(p,p)}});
app.addEventListener('dragstart',function(e){var c=e.target.closest('.chp');if(c){S.sel=+c.dataset.i;e.dataTransfer.setData('text/plain',c.dataset.i)}});
app.addEventListener('dragover',function(e){if(e.target.closest('[data-a="zone"]'))e.preventDefault()});
app.addEventListener('drop',function(e){var z=e.target.closest('[data-a="zone"]');if(!z||S.sel===null||S.done)return;e.preventDefault();if(z.dataset.z)S.pl[S.sel]=z.dataset.z;else delete S.pl[S.sel];S.sel=null;S.bad=null;draw()});
var rb=document.getElementById('rs'),armed=0;rb.onclick=function(){if(!armed){armed=1;rb.textContent='Yakin? Klik lagi';setTimeout(function(){armed=0;rb.textContent='Reset progress'},4000)}else{ST={v:2,name:'',sec:{},tag:{},fin:{},log:[]};save();armed=0;rb.textContent='Progress direset';route()}};
function about(){app.innerHTML='<div><h1>Tentang Kuriosa</h1><p>Kuriosa adalah tempat belajar yang membuatmu penasaran, berlatih, lalu menemukan jawabannya sendiri.</p></div><div class="card"><h2>Prinsip belajar kami</h2><ul class="obj"><li><b>Setiap aktivitas punya tujuan.</b> Kamu selalu tahu kenapa mengerjakan sesuatu.</li><li><b>Feedback menjelaskan, bukan menghakimi.</b> Jawaban salah adalah bahan belajar.</li><li><b>Kamu melihat kemajuanmu.</b> Penguasaan dilihat per konsep, bukan hanya skor.</li></ul></div><div class="card"><h2>Alur belajar</h2><p>Explore, Learn, Check, Get feedback, Reflect, lalu Try again sampai konsepnya benar-benar kamu pahami.</p></div><div class="card"><h2>Tentang data kamu</h2><p>Saat ini progress hanya tersimpan di browser ini. Fitur akun dan sinkronisasi antar perangkat akan menyusul.</p></div><div class="acts"><a class="btn" href="#explore">Start Learning</a></div>'}
function route(){clearInterval(TI);var h=location.hash.slice(1)||'home',k=h.split('-')[0],r=h.slice(k.length+1),m=r.split('-')[0];
 document.querySelectorAll('nav a').forEach(function(a){a.removeAttribute('aria-current');if(a.dataset.n===(k==='module'||k==='learn'||k==='final'?'explore':h))a.setAttribute('aria-current','page')});
 if(h==='home')home();else if(h==='dashboard')dash();else if(h==='explore')explore();else if(h==='about')about();else if(h==='login')login();
 else if((k==='module'||k==='final')&&MODS[r]){D=MODS[r];k==='module'?mod():final_()}
 else if(k==='learn'&&MODS[m]){D=MODS[m];learn(r.slice(m.length+1))}
 else home();
 window.scrollTo(0,0)}
window.addEventListener('hashchange',route);initAuth(route);