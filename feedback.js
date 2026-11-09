// Kuriosa: form masukan di footer.
// Login: masukan tersimpan dengan user_id + email. Tamu: anonim (tanpa email), satu kali per perangkat.
(function () {
  var DK = 'kuriosa_device', SK = 'kuriosa_fb_anon', CK = 'kuriosa_fb_last', MAXL = 1000, MINL = 5;
  var CAT = [['saran', 'Saran'], ['bug', 'Masalah teknis'], ['konten', 'Materi atau soal'], ['lainnya', 'Lainnya']];
  var dlg = null, busy = false, done = false;
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function did() { // ID perangkat acak, dipakai untuk membatasi masukan anonim
    var v = ls(DK);
    if (!v) { v = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(36).slice(2); ls(DK, v); }
    return v;
  }
  function box() {
    if (dlg) return dlg;
    dlg = document.createElement('dialog'); dlg.id = 'fbd'; dlg.setAttribute('aria-labelledby', 'fbt'); document.body.appendChild(dlg);
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) return dlg.close();
      var t = e.target.closest('[data-f]'); if (!t) return;
      if (t.dataset.f === 'x') dlg.close(); else if (t.dataset.f === 'send') send();
    });
    dlg.addEventListener('input', function (e) { if (e.target.id === 'fm') document.getElementById('fc').textContent = e.target.value.length + '/' + MAXL; });
    return dlg;
  }
  function render() {
    var logged = !!USER, on = authOn(), sent = ls(SK) === '1';
    var h = '<div class="fbx"><div class="acts" style="justify-content:space-between;align-items:center"><h2 id="fbt" style="margin:0">Kirim masukan</h2><button class="btn sm ghost" data-f="x">Tutup</button></div>';
    if (done) {
      h += '<p>Terima kasih! Masukanmu sudah kami terima dan akan kami baca.</p><div class="acts"><button class="btn" data-f="x">Selesai</button></div>';
    } else if (!on) {
      h += '<p>Fitur masukan aktif setelah Supabase dikonfigurasi di <b>supabase-config.js</b>.</p>';
    } else if (!logged && sent) {
      h += '<p>Masukan anonim dari perangkat ini sudah terkirim. Batasnya satu kali per perangkat untuk mencegah spam. Masuk ke akunmu kalau mau mengirim lagi.</p><div class="acts"><a class="btn" href="#login" data-f="x">Masuk</a></div>';
    } else {
      h += '<p class="meta">' + (logged ? 'Dikirim sebagai ' + esc(USER.email || 'akunmu') + '.' : 'Dikirim anonim tanpa email, satu kali per perangkat. Masuk dulu kalau mau mengirim lebih dari sekali.') + '</p>' +
        '<label for="fk">Jenis masukan</label><select id="fk">' + CAT.map(function (c) { return '<option value="' + c[0] + '">' + c[1] + '</option>'; }).join('') + '</select>' +
        '<label for="fm">Masukanmu</label><textarea id="fm" rows="5" maxlength="' + MAXL + '" placeholder="Ceritakan saran atau masalah yang kamu temui"></textarea><div class="meta" id="fc">0/' + MAXL + '</div>' +
        '<input class="hp" id="fw" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">' +
        '<p class="err" id="fe" role="alert"></p><div class="acts"><button class="btn" data-f="send">Kirim</button></div>';
    }
    box().innerHTML = h + '</div>';
  }
  function send() {
    if (busy) return;
    var m = (document.getElementById('fm').value || '').trim(), k = document.getElementById('fk').value, e = document.getElementById('fe'), logged = !!USER;
    e.style.color = '';
    if (m.length < MINL) { e.textContent = 'Tulis minimal ' + MINL + ' karakter ya.'; return; }
    if (document.getElementById('fw').value) { done = true; return render(); } // jebakan bot: pura-pura berhasil
    if (logged && Date.now() - (+ls(CK) || 0) < 30000) { e.textContent = 'Tunggu sebentar sebelum mengirim lagi.'; return; }
    busy = true; e.textContent = 'Mengirim...'; e.style.color = '#1F5A1E';
    var row = { category: k, message: m, page: location.hash || '#home', device_id: did() };
    if (logged) { row.user_id = USER.id; row.email = USER.email; }
    SB.from('feedback').insert(row).then(function (r) {
      busy = false;
      if (r.error) {
        if (r.error.code === '23505') { ls(SK, '1'); return render(); }
        e.style.color = ''; e.textContent = 'Gagal mengirim. Coba lagi sebentar lagi.'; return;
      }
      if (logged) ls(CK, String(Date.now())); else ls(SK, '1');
      done = true; render();
    }, function () { busy = false; e.style.color = ''; e.textContent = 'Tidak bisa terhubung. Periksa koneksi internetmu.'; });
  }
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#fbo')) return;
    done = false; render(); var d = box();
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  });
})();