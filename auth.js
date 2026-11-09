// Kuriosa: login + sinkronisasi progress dengan Supabase.
// Jika config.js belum diisi, aplikasi berjalan sebagai mode tamu (progress hanya di browser).
var CFG = window.KURIOSA_CONFIG || {}, SB = null, USER = null, SYNC = '', pushT = null, AM = 'in', AMSG = null;
function authOn() { return !!SB; }
function emptyST() { return { v: 2, name: '', sec: {}, tag: {}, fin: {}, log: [] }; }
function navAuth() { var a = document.getElementById('navauth'); if (a) a.textContent = USER ? 'Akun' : 'Masuk'; }
function hi(a, b) { return Math.max(a || 0, b || 0); }
function mergeST(a, b) { // gabung progress lokal (a) dengan cloud (b), ambil nilai tertinggi
  if (!b) return a;
  var r = emptyST(); r.name = a.name || b.name || '';
  [a, b].forEach(function (x) {
    Object.keys(x.sec || {}).forEach(function (k) { var o = r.sec[k]; r.sec[k] = { pct: hi(o && o.pct, x.sec[k].pct) }; });
    Object.keys(x.tag || {}).forEach(function (k) { r.tag[k] = hi(r.tag[k], x.tag[k]); });
    Object.keys(x.fin || {}).forEach(function (k) { var o = r.fin[k], n = x.fin[k]; if (!o || n.pct > o.pct || (n.pct === o.pct && (n.pts || 0) > (o.pts || 0))) r.fin[k] = n; });
    (x.log || []).forEach(function (l) { if (!r.log.some(function (m) { return m.t === l.t && m.d === l.d; })) r.log.push(l); });
  });
  r.log = r.log.slice(0, 5); return r;
}
function cloudPush() {
  if (!SB || !USER) return; clearTimeout(pushT);
  pushT = setTimeout(function () {
    if (!USER) return;
    SB.from('progress').upsert({ user_id: USER.id, data: ST, updated_at: new Date().toISOString() })
      .then(function (r) { SYNC = r && r.error ? 'error' : 'ok'; }, function () { SYNC = 'error'; });
  }, 800);
}
function cloudPull() {
  if (!SB || !USER) return Promise.resolve();
  return SB.from('progress').select('data').eq('user_id', USER.id).maybeSingle().then(function (r) {
    if (r.error) { SYNC = 'error'; return; }
    ST = mergeST(ST, r.data && r.data.data); SYNC = 'ok'; save();
  }, function () { SYNC = 'error'; });
}
function initAuth(done) {
  if (!(window.supabase && CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY)) { navAuth(); return done && done(); }
  SB = window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY); bindAuth();
  SB.auth.onAuthStateChange(function (ev, s) {
    setTimeout(function () { // jangan memanggil Supabase langsung di dalam callback
      var u = s && s.user || null;
      if (ev === 'SIGNED_IN' && u && (!USER || USER.id !== u.id)) {
        USER = u; navAuth();
        cloudPull().then(function () { if (/login|access_token/.test(location.hash)) location.hash = '#dashboard'; else route(); });
      } else if (ev === 'SIGNED_OUT') {
        USER = null; clearTimeout(pushT); ST = emptyST(); try { localStorage.setItem('kuriosa_v1', JSON.stringify(ST)); } catch (e) {}
        navAuth(); location.hash = '#home'; route();
      }
    }, 0);
  });
  SB.auth.getSession().then(function (r) { USER = r.data && r.data.session ? r.data.session.user : null; return USER ? cloudPull() : 0; })
    .catch(function () {}).then(function () { navAuth(); if (/access_token/.test(location.hash)) location.hash = USER ? '#dashboard' : '#home'; done && done(); });
}
function errId(e) {
  var m = (e && e.message || '').toLowerCase();
  if (m.indexOf('invalid login') > -1) return 'Email atau password salah.';
  if (m.indexOf('already registered') > -1) return 'Email ini sudah terdaftar. Coba masuk.';
  if (m.indexOf('at least') > -1) return 'Password minimal 6 karakter.';
  if (m.indexOf('not confirmed') > -1) return 'Email belum dikonfirmasi. Cek kotak masukmu.';
  if (m.indexOf('rate limit') > -1 || m.indexOf('too many') > -1) return 'Terlalu banyak percobaan. Tunggu sebentar lalu coba lagi.';
  return 'Terjadi kesalahan. Coba lagi sebentar lagi.';
}
function login() {
  var h = '<div><h1>' + (USER ? 'Akunmu' : AM === 'up' ? 'Buat akun' : 'Masuk') + '</h1><p>Simpan progress belajarmu dan lanjutkan dari perangkat mana pun.</p></div>';
  if (!authOn()) {
    h += '<div class="card"><h2>Mode tamu</h2><p>Akun belum diaktifkan. Progress tersimpan di browser ini saja. Untuk mengaktifkan login, isi <b>config.js</b> dengan URL dan anon key Supabase.</p><div class="acts" style="margin-top:12px"><a class="btn" href="#dashboard">Ke Dashboard</a></div></div>';
  } else if (USER) {
    h += '<div class="card"><h2>' + esc(ST.name || 'Pelajar Kuriosa') + '</h2><p>' + esc(USER.email || '') + '</p><p class="meta">' + (SYNC === 'error' ? 'Sinkronisasi gagal. Progress tetap aman di browser ini.' : 'Progress tersinkron ke akunmu.') + '</p><div class="acts" style="margin-top:12px"><a class="btn" href="#dashboard">Ke Dashboard</a><button class="btn ghost" data-x="out">Keluar</button></div></div>';
  } else {
    var up = AM === 'up';
    h += '<div class="card"><div class="acts" style="margin-bottom:12px"><button class="btn sm' + (up ? ' ghost' : '') + '" data-x="mode" data-m="in" aria-pressed="' + !up + '">Masuk</button><button class="btn sm' + (up ? '' : ' ghost') + '" data-x="mode" data-m="up" aria-pressed="' + up + '">Daftar</button></div>' +
      (up ? '<p><label for="an">Nama panggilan</label></p><div class="field"><input id="an" maxlength="20" autocomplete="nickname" placeholder="Misalnya Dina"></div>' : '') +
      '<p><label for="ae">Email</label></p><div class="field"><input id="ae" type="email" autocomplete="email" placeholder="nama@email.com"></div>' +
      '<p><label for="ap">Password</label></p><div class="field"><input id="ap" type="password" autocomplete="' + (up ? 'new-password' : 'current-password') + '" placeholder="Minimal 6 karakter"></div>' +
      '<p class="err" id="amsg" role="alert" style="margin-top:10px">' + (AMSG ? esc(AMSG) : '') + '</p>' +
      '<div class="col" style="margin-top:12px"><button class="btn" data-x="go">' + (up ? 'Daftar' : 'Masuk') + '</button><button class="btn ghost" data-x="google">Lanjut dengan Google</button>' + (up ? '' : '<button class="btn sm ghost" data-x="reset">Lupa password?</button>') + '</div></div>' +
      '<p class="meta">Tanpa akun pun kamu tetap bisa belajar. <a href="#dashboard" style="text-decoration:underline">Lanjut sebagai tamu</a></p>';
  }
  app.innerHTML = h;
}
function amsg(t, ok) { AMSG = t; var e = document.getElementById('amsg'); if (e) { e.textContent = t; e.style.color = ok ? '#1F5A1E' : ''; } }
function submitAuth() {
  var em = (document.getElementById('ae').value || '').trim(), pw = document.getElementById('ap').value || '', up = AM === 'up';
  var nm = up ? (document.getElementById('an').value || '').trim() : '';
  if (!/^\S+@\S+\.\S+$/.test(em)) return amsg('Isi alamat email yang benar.');
  if (pw.length < 6) return amsg('Password minimal 6 karakter.');
  if (up && !nm) return amsg('Isi nama panggilanmu dulu.');
  amsg('Memproses...', true);
  var p = up ? SB.auth.signUp({ email: em, password: pw, options: { data: { name: nm } } }) : SB.auth.signInWithPassword({ email: em, password: pw });
  p.then(function (r) {
    if (r.error) return amsg(errId(r.error));
    if (up) { if (nm && !ST.name) { ST.name = nm; save(); } if (!r.data.session) { AM = 'in'; AMSG = null; login(); amsg('Akun dibuat. Cek emailmu untuk konfirmasi, lalu masuk.', true); } }
  }, function () { amsg('Tidak bisa terhubung. Periksa koneksi internetmu.'); });
}
function bindAuth() {
app.addEventListener('click', function (e) {
  var t = e.target.closest('[data-x]'); if (!t || !SB) return; var x = t.dataset.x;
  if (x === 'mode') { AM = t.dataset.m; AMSG = null; login(); }
  else if (x === 'go') submitAuth();
  else if (x === 'out') { SB.auth.signOut(); }
  else if (x === 'google') SB.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } }).then(function (r) { if (r.error) amsg('Login Google belum diaktifkan di proyek ini.'); });
  else if (x === 'reset') {
    var em = (document.getElementById('ae').value || '').trim(); if (!/^\S+@\S+\.\S+$/.test(em)) return amsg('Isi email dulu, lalu klik Lupa password.');
    SB.auth.resetPasswordForEmail(em, { redirectTo: location.origin + location.pathname }).then(function (r) { amsg(r.error ? errId(r.error) : 'Tautan reset password sudah dikirim ke emailmu.', !r.error); });
  }
});
app.addEventListener('keydown', function (e) { if (e.key === 'Enter' && SB && !USER && /^(ae|ap|an)$/.test(e.target.id)) submitAuth(); });
}