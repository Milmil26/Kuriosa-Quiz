// Konten modul Pola Bilangan dan Logika
var D_PL = {
 "key": "pl",
 "id": "pola-bilangan-logika",
 "title": "Pola Bilangan dan Logika",
 "short": "Pola dan Logika",
 "category": "Science and Mathematics",
 "level": "Pemula",
 "minutes": 40,
 "blurb": "Temukan aturan di balik deret angka dan argumen.",
 "objectives": [
  "Menemukan selisih dan rasio tetap dalam deret bilangan",
  "Memprediksi suku berikutnya dari sebuah pola",
  "Menentukan negasi serta memakai dan/atau dengan benar",
  "Memahami jika-maka beserta kontrapositifnya",
  "Menarik kesimpulan yang sah dan mengenali penalaran keliru"
 ],
 "mastery": {
  "dikuasai": 80,
  "hampir": 50
 },
 "concepts": {
  "n1": "Menemukan selisih",
  "n2": "Memprediksi suku berikutnya",
  "n3": "Pola perkalian",
  "n4": "Mengenali jenis pola",
  "l1": "Pernyataan dan negasi",
  "l2": "Dan serta atau",
  "l3": "Pernyataan jika-maka",
  "l4": "Kebalikan dan kontrapositif",
  "r1": "Menarik kesimpulan",
  "r2": "Mengenali penalaran keliru"
 },
 "sections": [
  {
   "id": "pola-selisih",
   "no": 1,
   "title": "Pola Selisih Tetap",
   "minutes": 8,
   "goal": "Kamu bisa menemukan selisih tetap dalam deret bilangan dan memakainya untuk memprediksi suku berikutnya.",
   "material": [
    "Pola bilangan adalah deretan angka yang mengikuti suatu aturan. Salah satu aturan paling sederhana adalah selisih tetap: setiap angka bertambah (atau berkurang) dengan jumlah yang sama.",
    "Cara mencarinya: kurangkan dua angka yang bersebelahan. Kalau hasilnya selalu sama, itulah selisih tetapnya. Suku berikutnya didapat dengan menambahkan selisih itu pada angka terakhir."
   ],
   "example": "Kamu menabung dan tiap minggu tabunganmu naik Rp5.000: 10.000, 15.000, 20.000. Dengan pola ini, kamu bisa memperkirakan tabungan minggu berikutnya tanpa menunggu.",
   "viz": {
    "top": "3, 7, 11, 15, ...",
    "parts": [
     "+4",
     "+4",
     "+4",
     "+4"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "n1",
     "q": "Pada deret 5, 9, 13, 17, … berapa selisih tetapnya?",
     "o": [
      {
       "t": "3",
       "w": "Cek dari 5 ke 9. Selisihnya 4, bukan 3."
      },
      {
       "t": "4",
       "ok": true
      },
      {
       "t": "5",
       "w": "5 adalah suku pertama, bukan selisih antar suku."
      },
      {
       "t": "9",
       "w": "9 adalah suku kedua. Selisih diperoleh dengan mengurangkan dua suku bersebelahan."
      }
     ],
     "r": "Tepat. 9 - 5 = 4, 13 - 9 = 4, dan seterusnya, jadi selisih tetapnya 4.",
     "h": "Kurangkan suku kedua dengan suku pertama, lalu cek apakah suku-suku berikutnya memberi hasil yang sama."
    },
    {
     "k": "tf",
     "tag": "n1",
     "q": "Benar atau salah: deret 20, 17, 14, 11 punya selisih tetap, yaitu turun 3 di setiap langkah.",
     "o": [
      {
       "t": "Benar",
       "ok": true
      },
      {
       "t": "Salah",
       "w": "Tiap suku turun 3 secara konsisten, jadi selisihnya tetap, yaitu -3. Selisih tetap boleh bernilai negatif."
      }
     ],
     "r": "Tepat. Selisih tetap bisa menaik maupun menurun, selama jumlahnya sama di tiap langkah.",
     "h": "Hitung 20 - 17, 17 - 14, dan 14 - 11. Apakah hasilnya sama?"
    },
    {
     "k": "mc",
     "tag": "n2",
     "q": "Perhatikan deret 6, 11, 16, 21, … Angka berikutnya adalah?",
     "o": [
      {
       "t": "22",
       "w": "Itu bertambah 1, padahal selisih deret ini 5."
      },
      {
       "t": "25",
       "w": "Dari 21 ke 25 selisihnya 4. Selisih deret ini 5."
      },
      {
       "t": "26",
       "ok": true
      },
      {
       "t": "31",
       "w": "Itu loncat 10 dari 21. Selisihnya hanya 5."
      }
     ],
     "r": "Tepat. Selisihnya 5, jadi 21 + 5 = 26.",
     "h": "Cari selisihnya dulu dari dua suku pertama, lalu tambahkan ke suku terakhir."
    },
    {
     "k": "dd",
     "tag": "n2",
     "q": "Tempatkan tiap deret ke kotak yang tepat.",
     "z": {
      "a": "Selisih tetap",
      "b": "Bukan selisih tetap"
     },
     "it": [
      {
       "t": "2, 4, 6, 8",
       "z": "a"
      },
      {
       "t": "10, 20, 30, 40",
       "z": "a"
      },
      {
       "t": "50, 45, 40, 35",
       "z": "a"
      },
      {
       "t": "1, 2, 4, 8",
       "z": "b"
      },
      {
       "t": "1, 4, 9, 16",
       "z": "b"
      }
     ],
     "r": "Betul. Deret 1, 2, 4, 8 selisihnya 1, 2, 4 (berubah), dan 1, 4, 9, 16 selisihnya 3, 5, 7 (berubah). Tiga deret lain punya selisih yang selalu sama.",
     "w": "Deret selisih tetap punya hasil pengurangan yang sama di setiap pasangan suku. Kalau hasilnya berubah-ubah, itu bukan selisih tetap.",
     "h": "Kurangkan tiap pasang angka bersebelahan di tiap deret. Apakah semuanya sama?"
    }
   ]
  },
  {
   "id": "pola-perkalian",
   "no": 2,
   "title": "Pola Perkalian",
   "minutes": 8,
   "goal": "Kamu bisa mengenali pola perkalian tetap dan membedakannya dari pola selisih tetap.",
   "material": [
    "Ada deret yang tiap angkanya dikalikan dengan bilangan yang sama, bukan ditambah. Bilangan pengali itu disebut rasio. Contohnya 2, 4, 8, 16 punya rasio 2.",
    "Cara mencari rasio: bagi suku dengan suku sebelumnya. Kalau hasilnya selalu sama, polanya perkalian tetap. Deret seperti ini tumbuh jauh lebih cepat daripada deret selisih tetap."
   ],
   "example": "Selembar kertas dilipat dua berulang kali. Jumlah lapisannya 1, 2, 4, 8, 16, dan tiap lipatan menggandakan jumlah sebelumnya.",
   "viz": {
    "top": "1, 2, 4, 8, ...",
    "parts": [
     "x2",
     "x2",
     "x2",
     "x2"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "n3",
     "q": "Pada deret 3, 6, 12, 24, … berapa rasio tetapnya?",
     "o": [
      {
       "t": "2",
       "ok": true
      },
      {
       "t": "3",
       "w": "3 adalah suku pertama, bukan pengali."
      },
      {
       "t": "4",
       "w": "3 x 4 = 12, bukan 6. Pengalinya harus berlaku dari suku pertama ke kedua."
      },
      {
       "t": "6",
       "w": "6 adalah suku kedua. Rasio diperoleh dengan membagi 6 oleh 3."
      }
     ],
     "r": "Tepat. 6 : 3 = 2, 12 : 6 = 2, 24 : 12 = 2, jadi rasionya 2.",
     "h": "Bagi suku kedua dengan suku pertama, lalu cek di pasangan berikutnya."
    },
    {
     "k": "mc",
     "tag": "n3",
     "q": "Perhatikan deret 2, 6, 18, 54, … Angka berikutnya adalah?",
     "o": [
      {
       "t": "60",
       "w": "Itu menambah 6 dari 54, padahal polanya perkalian."
      },
      {
       "t": "72",
       "w": "Itu menambah 18. Deret ini naik dengan perkalian, bukan penjumlahan."
      },
      {
       "t": "108",
       "w": "Itu mengalikan 2, tetapi rasio deret ini 3 (6 : 2 = 3)."
      },
      {
       "t": "162",
       "ok": true
      }
     ],
     "r": "Tepat. Rasionya 3, jadi 54 x 3 = 162.",
     "h": "Bagi 6 dengan 2 untuk menemukan rasionya, lalu kalikan suku terakhir dengan rasio itu."
    },
    {
     "k": "mc",
     "tag": "n4",
     "q": "Manakah deret yang polanya perkalian tetap?",
     "o": [
      {
       "t": "5, 10, 15, 20",
       "w": "Selisihnya selalu 5, jadi ini selisih tetap, bukan perkalian."
      },
      {
       "t": "5, 10, 20, 40",
       "ok": true
      },
      {
       "t": "5, 6, 8, 11",
       "w": "Selisihnya 1, 2, 3 (berubah), jadi bukan perkalian maupun selisih tetap."
      },
      {
       "t": "5, 7, 9, 11",
       "w": "Selisihnya selalu 2, jadi ini selisih tetap."
      }
     ],
     "r": "Tepat. Tiap suku dikali 2: 5, 10, 20, 40.",
     "h": "Cek dua hal: apakah selisihnya sama, atau apakah hasil baginya sama?"
    },
    {
     "k": "tf",
     "tag": "n4",
     "q": "Benar atau salah: deret 2, 4, 6, 8 dan deret 2, 4, 8, 16 punya pola yang sama karena dua suku pertamanya sama.",
     "o": [
      {
       "t": "Benar",
       "w": "Dua suku pertama yang sama belum cukup. Deret pertama bertambah 2, sedangkan deret kedua dikali 2."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Selalu periksa lebih dari dua suku sebelum menyimpulkan pola.",
     "h": "Teruskan kedua deret sampai suku keempat. Apakah angkanya masih sama?"
    }
   ]
  },
  {
   "id": "pernyataan-negasi",
   "no": 3,
   "title": "Pernyataan dan Negasi",
   "minutes": 8,
   "goal": "Kamu bisa membedakan pernyataan dari kalimat lain, menentukan negasi, dan memakai kata dan serta atau dengan benar.",
   "material": [
    "Pernyataan adalah kalimat yang pasti benar atau pasti salah. Pertanyaan dan perintah bukan pernyataan. \"12 + 3 = 20\" tetap pernyataan, karena bisa dipastikan salah.",
    "Negasi adalah kebalikan nilai kebenaran. Negasi dari \"Semua siswa hadir\" adalah \"Tidak semua siswa hadir\", bukan \"Semua siswa tidak hadir\". Kata DAN benar bila keduanya benar. Kata ATAU benar bila minimal salah satu benar."
   ],
   "example": "Aturan masuk konser: \"Bawa kartu DAN tiket\" menuntut dua-duanya. Kalau aturannya \"kartu ATAU tiket\", cukup membawa salah satu.",
   "viz": {
    "top": "p DAN q  vs  p ATAU q",
    "parts": [
     "DAN: dua-duanya",
     "ATAU: salah satu",
     "Negasi: kebalikan",
     "Pernyataan: benar/salah"
    ]
   },
   "questions": [
    {
     "k": "dd",
     "tag": "l1",
     "q": "Tempatkan tiap kalimat ke kotak yang tepat.",
     "z": {
      "a": "Pernyataan",
      "b": "Bukan pernyataan"
     },
     "it": [
      {
       "t": "7 lebih besar dari 5",
       "z": "a"
      },
      {
       "t": "12 + 3 = 20",
       "z": "a"
      },
      {
       "t": "Air membeku pada 0 derajat Celsius",
       "z": "a"
      },
      {
       "t": "Tolong tutup pintunya",
       "z": "b"
      },
      {
       "t": "Jam berapa sekarang?",
       "z": "b"
      }
     ],
     "r": "Betul. Pernyataan bisa dinilai benar atau salah, termasuk 12 + 3 = 20 yang salah. Perintah dan pertanyaan tidak bisa dinilai benar atau salah.",
     "w": "Pernyataan adalah kalimat yang bisa dipastikan benar atau salah. Perintah dan pertanyaan tidak punya nilai benar atau salah.",
     "h": "Tanyakan pada tiap kalimat: apakah masuk akal kalau dibilang benar atau salah?"
    },
    {
     "k": "mc",
     "tag": "l1",
     "q": "Apa negasi dari pernyataan \"Semua siswa hadir hari ini\"?",
     "o": [
      {
       "t": "Semua siswa tidak hadir hari ini",
       "w": "Itu terlalu kuat: artinya tidak ada yang hadir. Negasinya cukup bahwa ada satu yang tidak hadir."
      },
      {
       "t": "Tidak semua siswa hadir hari ini",
       "ok": true
      },
      {
       "t": "Sebagian siswa hadir hari ini",
       "w": "Pernyataan ini bisa benar bersamaan dengan yang asli, jadi bukan kebalikannya."
      },
      {
       "t": "Siswa hadir hari ini",
       "w": "Maknanya hampir sama dengan pernyataan asli, jadi bukan negasi."
      }
     ],
     "r": "Tepat. Cukup satu siswa yang tidak hadir untuk membuat pernyataan aslinya salah.",
     "h": "Negasi harus selalu bernilai salah ketika pernyataan asli benar, dan sebaliknya."
    },
    {
     "k": "mc",
     "tag": "l2",
     "q": "Aturan: \"Kamu boleh masuk jika membawa kartu DAN tiket.\" Andi hanya membawa kartu. Bolehkah ia masuk?",
     "o": [
      {
       "t": "Boleh, karena salah satu sudah cukup",
       "w": "Itu berlaku untuk kata ATAU. Kata DAN menuntut keduanya."
      },
      {
       "t": "Tidak, karena syarat DAN menuntut keduanya",
       "ok": true
      },
      {
       "t": "Boleh, karena kartu lebih penting dari tiket",
       "w": "Aturannya tidak membedakan mana yang lebih penting."
      },
      {
       "t": "Tidak bisa ditentukan",
       "w": "Aturannya jelas: kedua syarat harus terpenuhi."
      }
     ],
     "r": "Tepat. Dengan kata DAN, kedua syarat harus terpenuhi. Andi belum membawa tiket.",
     "h": "Ingat arti DAN: benar bila keduanya benar. Apakah Andi memenuhi keduanya?"
    },
    {
     "k": "tf",
     "tag": "l2",
     "q": "Benar atau salah: pernyataan \"hari ini hujan ATAU berangin\" tetap benar jika hari itu hujan dan berangin sekaligus.",
     "o": [
      {
       "t": "Benar",
       "ok": true
      },
      {
       "t": "Salah",
       "w": "Dalam logika, ATAU benar bila minimal salah satu benar, termasuk jika keduanya benar."
      }
     ],
     "r": "Tepat. ATAU hanya salah bila kedua bagian salah.",
     "h": "Pikirkan kapan pernyataan dengan ATAU menjadi salah. Apakah ketika keduanya benar?"
    }
   ]
  },
  {
   "id": "jika-maka",
   "no": 4,
   "title": "Jika-Maka",
   "minutes": 8,
   "goal": "Kamu bisa memahami pernyataan jika-maka serta membedakan kebalikan dan kontrapositifnya.",
   "material": [
    "Pernyataan \"jika p maka q\" berarti: setiap kali p terjadi, q pasti terjadi. Tetapi q bisa terjadi tanpa p. Jadi arah sebaliknya, \"jika q maka p\", tidak otomatis benar.",
    "Ada satu bentuk yang selalu setara dengan pernyataan asli, yaitu kontrapositif: \"jika bukan q maka bukan p\". Kalau aturan aslinya benar, kontrapositifnya pasti benar."
   ],
   "example": "Jika hujan, maka jalan basah. Jalan basah belum tentu karena hujan (bisa karena disiram). Tetapi jika jalan tidak basah, pasti tidak sedang hujan.",
   "viz": {
    "top": "Jika p maka q",
    "parts": [
     "Asli: p lalu q",
     "Kebalikan: belum tentu",
     "Kontrapositif: pasti benar",
     "Invers: belum tentu"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "l3",
     "q": "Aturan perpustakaan: \"Jika kamu anggota, maka kamu boleh meminjam buku.\" Dina adalah anggota. Apa yang pasti benar?",
     "o": [
      {
       "t": "Dina boleh meminjam buku",
       "ok": true
      },
      {
       "t": "Dina belum boleh meminjam buku",
       "w": "Dina memenuhi syarat anggota, jadi aturan memberinya izin."
      },
      {
       "t": "Semua orang boleh meminjam buku",
       "w": "Aturan hanya menyebut anggota, bukan semua orang."
      },
      {
       "t": "Dina wajib meminjam buku",
       "w": "Aturan memberi izin, bukan kewajiban."
      }
     ],
     "r": "Tepat. Dina memenuhi syarat \"anggota\", jadi ia pasti boleh meminjam.",
     "h": "Ketika bagian \"jika\" terpenuhi, apa yang dijamin oleh bagian \"maka\"?"
    },
    {
     "k": "tf",
     "tag": "l3",
     "q": "Benar atau salah: dari \"Jika hujan maka jalan basah\" dan \"Jalan basah\", kita pasti bisa menyimpulkan hari itu hujan.",
     "o": [
      {
       "t": "Benar",
       "w": "Jalan bisa basah karena hal lain, misalnya disiram atau tumpahan air. Aturan asli tidak berlaku terbalik."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Arah sebaliknya dari jika-maka tidak otomatis benar.",
     "h": "Sebutkan satu cara lain yang bisa membuat jalan basah selain hujan."
    },
    {
     "k": "mc",
     "tag": "l4",
     "q": "Apa kontrapositif dari \"Jika hujan, maka jalan basah\"?",
     "o": [
      {
       "t": "Jika jalan basah, maka hujan",
       "w": "Itu kebalikan biasa, dan belum tentu benar."
      },
      {
       "t": "Jika jalan tidak basah, maka tidak hujan",
       "ok": true
      },
      {
       "t": "Jika tidak hujan, maka jalan tidak basah",
       "w": "Itu invers, dan belum tentu benar karena jalan bisa disiram."
      },
      {
       "t": "Jika hujan, maka jalan tidak basah",
       "w": "Itu bertentangan dengan pernyataan asli."
      }
     ],
     "r": "Tepat. Kontrapositif membalik arah sekaligus meniadakan kedua bagian, dan selalu setara dengan aslinya.",
     "h": "Kontrapositif: balik urutannya, lalu beri kata \"tidak\" pada kedua bagian."
    },
    {
     "k": "dd",
     "tag": "l4",
     "q": "Aturan: \"Jika bilangan kelipatan 6, maka bilangan itu genap.\" Tempatkan tiap kesimpulan ke kotak yang tepat.",
     "z": {
      "a": "Pasti benar",
      "b": "Belum tentu benar"
     },
     "it": [
      {
       "t": "Bilangan itu 18 (kelipatan 6), jadi genap",
       "z": "a"
      },
      {
       "t": "Bilangan itu ganjil, jadi bukan kelipatan 6",
       "z": "a"
      },
      {
       "t": "Bilangan itu 30, jadi genap",
       "z": "a"
      },
      {
       "t": "Bilangan itu genap, jadi kelipatan 6",
       "z": "b"
      },
      {
       "t": "Bilangan itu bukan kelipatan 6, jadi ganjil",
       "z": "b"
      }
     ],
     "r": "Betul. Tiga kesimpulan pertama mengikuti aturan atau kontrapositifnya. Bilangan genap seperti 4 bukan kelipatan 6, jadi dua kesimpulan lain belum tentu benar.",
     "w": "Hanya aturan asli dan kontrapositifnya yang pasti benar. Kebalikan dan invers perlu diuji dengan contoh.",
     "h": "Coba bilangan 4 untuk menguji dua kesimpulan terakhir."
    }
   ]
  },
  {
   "id": "penalaran",
   "no": 5,
   "title": "Penalaran dan Kesimpulan",
   "minutes": 8,
   "goal": "Kamu bisa menarik kesimpulan yang sah dari premis dan mengenali penalaran yang keliru.",
   "material": [
    "Penalaran dimulai dari premis (informasi yang diberikan) menuju kesimpulan. Kesimpulan sah bila pasti benar ketika semua premisnya benar. Kesimpulan tidak boleh memakai informasi yang tidak ada di premis.",
    "Beberapa kekeliruan yang sering muncul: menyimpulkan dari satu atau dua contoh saja, membalik arah jika-maka, dan menganggap dua kejadian yang bersamaan pasti punya hubungan sebab-akibat."
   ],
   "example": "Setelah dua kali minum kopi, nilai ujianmu bagus. Belum tentu kopi penyebabnya: bisa karena kamu belajar lebih giat. Dua kejadian bersamaan belum membuktikan sebab-akibat.",
   "viz": {
    "top": "Premis lalu kesimpulan",
    "parts": [
     "Premis 1",
     "Premis 2",
     "Kesimpulan sah",
     "Kesimpulan keliru"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "r1",
     "q": "Premis: Semua burung punya sayap. Merpati adalah burung. Kesimpulan mana yang sah?",
     "o": [
      {
       "t": "Semua yang punya sayap adalah burung",
       "w": "Itu membalik arah. Kelelawar dan serangga juga punya sayap tetapi bukan burung."
      },
      {
       "t": "Merpati punya sayap",
       "ok": true
      },
      {
       "t": "Merpati bisa terbang sangat jauh",
       "w": "Kemampuan terbang jauh tidak disebut di premis."
      },
      {
       "t": "Tidak ada kesimpulan yang bisa ditarik",
       "w": "Kesimpulan bisa ditarik: merpati termasuk burung, dan semua burung bersayap."
      }
     ],
     "r": "Tepat. Merpati termasuk burung, dan semua burung bersayap, jadi merpati pasti bersayap.",
     "h": "Gabungkan kedua premis: merpati termasuk kelompok apa, dan apa sifat kelompok itu?"
    },
    {
     "k": "mc",
     "tag": "r1",
     "q": "Premis 1: Jika lampu merah, kendaraan berhenti. Premis 2: Kendaraan tidak berhenti. Kesimpulan mana yang sah?",
     "o": [
      {
       "t": "Lampu merah",
       "w": "Kalau lampu merah, kendaraan harus berhenti. Padahal tidak berhenti."
      },
      {
       "t": "Lampu tidak merah",
       "ok": true
      },
      {
       "t": "Kendaraan itu melanggar aturan",
       "w": "Itu tidak disebut di premis. Bisa saja lampunya memang bukan merah."
      },
      {
       "t": "Lampu hijau",
       "w": "Lampu bisa kuning atau mati. Premis hanya memastikan lampunya tidak merah."
      }
     ],
     "r": "Tepat. Ini kontrapositif: kendaraan tidak berhenti, maka lampu tidak merah.",
     "h": "Gunakan kontrapositif: \"jika bukan q maka bukan p\"."
    },
    {
     "k": "mc",
     "tag": "r2",
     "q": "Budi minum kopi dua kali sebelum ujian dan nilainya bagus. Ia menyimpulkan kopi membuat nilainya bagus. Apa kelemahan penalarannya?",
     "o": [
      {
       "t": "Kopi tidak boleh diminum sebelum ujian",
       "w": "Masalahnya ada di penalarannya, bukan pada kopi."
      },
      {
       "t": "Dua kejadian yang bersamaan belum membuktikan sebab-akibat",
       "ok": true
      },
      {
       "t": "Nilai bagus tidak bisa dijelaskan",
       "w": "Nilai bagus bisa dijelaskan oleh banyak hal, misalnya belajar."
      },
      {
       "t": "Dua kali itu terlalu banyak",
       "w": "Jumlah kopinya bukan inti masalah. Contohnya terlalu sedikit untuk menyimpulkan sebab."
      }
     ],
     "r": "Tepat. Dua hal yang terjadi bersamaan belum tentu punya hubungan sebab-akibat, dan dua contoh belum cukup.",
     "h": "Apa penjelasan lain yang mungkin untuk nilai bagus tersebut?"
    },
    {
     "k": "dd",
     "tag": "r2",
     "q": "Tempatkan tiap penalaran ke kotak yang tepat.",
     "z": {
      "a": "Penalaran sah",
      "b": "Penalaran keliru"
     },
     "it": [
      {
       "t": "Semua segitiga punya tiga sisi; bangun ini segitiga; jadi bangun ini punya tiga sisi",
       "z": "a"
      },
      {
       "t": "Jika bilangan habis dibagi 10, maka habis dibagi 5; 40 habis dibagi 10; jadi 40 habis dibagi 5",
       "z": "a"
      },
      {
       "t": "Dua kali bertemu kucing hitam lalu sial; jadi kucing hitam membawa sial",
       "z": "b"
      },
      {
       "t": "Semua kucing berbulu; kelinci berbulu; jadi kelinci adalah kucing",
       "z": "b"
      },
      {
       "t": "Semua toko di jalan itu tutup jam 9; toko ini tutup jam 9; jadi toko ini ada di jalan itu",
       "z": "b"
      }
     ],
     "r": "Betul. Dua penalaran pertama pasti benar jika premisnya benar. Tiga lainnya keliru: menyimpulkan dari dua contoh, membalik arah, dan membalik arah lagi.",
     "w": "Penalaran sah bila kesimpulannya pasti benar saat premis benar. Contoh yang sedikit dan arah yang dibalik membuat kesimpulan tidak pasti.",
     "h": "Tanyakan pada tiap kartu: kalau premisnya benar, apakah kesimpulannya pasti benar?"
    }
   ]
  }
 ],
 "finalQuiz": [
  {
   "k": "mc",
   "tag": "n1",
   "q": "Berapa selisih tetap pada deret 12, 19, 26, 33?",
   "o": [
    {
     "t": "6",
     "w": "Dari 12 ke 19 selisihnya 7, bukan 6."
    },
    {
     "t": "7",
     "ok": true
    },
    {
     "t": "12",
     "w": "12 adalah suku pertama, bukan selisih."
    },
    {
     "t": "19",
     "w": "19 adalah suku kedua, bukan selisih."
    }
   ],
   "r": "Selisihnya 7: 19 - 12 = 7, 26 - 19 = 7, 33 - 26 = 7.",
   "h": "Kurangkan dua suku yang bersebelahan."
  },
  {
   "k": "mc",
   "tag": "n2",
   "q": "Angka berikutnya pada deret 100, 90, 80, 70, … adalah?",
   "o": [
    {
     "t": "50",
     "w": "Itu turun 20 dari 70. Deret ini turun 10."
    },
    {
     "t": "60",
     "ok": true
    },
    {
     "t": "65",
     "w": "Itu turun 5, padahal selisihnya 10."
    },
    {
     "t": "80",
     "w": "Itu angka yang sudah muncul sebelumnya."
    }
   ],
   "r": "Deret turun 10 tiap langkah, jadi 70 - 10 = 60.",
   "h": "Cari selisihnya dulu, lalu terapkan pada suku terakhir."
  },
  {
   "k": "mc",
   "tag": "n3",
   "q": "Pada deret 4, 12, 36, … angka berikutnya adalah?",
   "o": [
    {
     "t": "48",
     "w": "Itu menambah 12, padahal polanya perkalian."
    },
    {
     "t": "72",
     "w": "Itu menambah 36. Deret ini naik dengan perkalian."
    },
    {
     "t": "108",
     "ok": true
    },
    {
     "t": "144",
     "w": "Itu mengalikan 4, padahal rasionya 3."
    }
   ],
   "r": "Rasionya 3 (12 : 4 = 3), jadi 36 x 3 = 108.",
   "h": "Bagi suku kedua dengan suku pertama untuk menemukan rasio."
  },
  {
   "k": "tf",
   "tag": "n4",
   "q": "Benar atau salah: deret 1, 3, 9, 27 memiliki selisih tetap.",
   "o": [
    {
     "t": "Benar",
     "w": "Selisihnya 2, 6, 18 (berubah). Deret ini memakai perkalian tetap, yaitu x3."
    },
    {
     "t": "Salah",
     "ok": true
    }
   ],
   "r": "Tepat. Deret ini berpola perkalian dengan rasio 3, bukan selisih tetap.",
   "h": "Hitung selisih tiap pasangan. Apakah hasilnya sama?"
  },
  {
   "k": "mc",
   "tag": "l1",
   "q": "Apa negasi dari \"Semua kue di meja itu manis\"?",
   "o": [
    {
     "t": "Semua kue di meja itu tidak manis",
     "w": "Itu terlalu kuat. Negasinya cukup satu kue yang tidak manis."
    },
    {
     "t": "Tidak semua kue di meja itu manis",
     "ok": true
    },
    {
     "t": "Beberapa kue di meja itu manis",
     "w": "Ini bisa benar bersamaan dengan pernyataan asli, jadi bukan kebalikannya."
    },
    {
     "t": "Kue di meja itu manis",
     "w": "Maknanya sama dengan pernyataan asli."
    }
   ],
   "r": "Cukup satu kue yang tidak manis untuk membuat pernyataan aslinya salah.",
   "h": "Negasi harus salah ketika pernyataan asli benar."
  },
  {
   "k": "mc",
   "tag": "l2",
   "q": "Syarat lulus: nilai ujian minimal 70 ATAU nilai tugas minimal 80. Rani mendapat ujian 65 dan tugas 85. Apakah ia lulus?",
   "o": [
    {
     "t": "Tidak, karena ujiannya di bawah 70",
     "w": "Dengan ATAU, tidak semua syarat harus terpenuhi."
    },
    {
     "t": "Tidak, karena harus dua-duanya",
     "w": "Itu berlaku untuk DAN, bukan ATAU."
    },
    {
     "t": "Lulus, karena salah satu syarat terpenuhi",
     "ok": true
    },
    {
     "t": "Tidak bisa ditentukan",
     "w": "Datanya cukup: tugasnya 85, memenuhi syarat minimal 80."
    }
   ],
   "r": "Dengan ATAU, cukup satu syarat terpenuhi. Tugas Rani 85, jadi ia lulus.",
   "h": "Kapan pernyataan dengan ATAU benar?"
  },
  {
   "k": "mc",
   "tag": "l3",
   "q": "Aturan toko: \"Jika belanja lebih dari Rp100.000, maka dapat tas gratis.\" Sari belanja Rp150.000. Apa yang pasti benar?",
   "o": [
    {
     "t": "Sari wajib mengambil tas gratis",
     "w": "Aturan memberi hak, bukan kewajiban."
    },
    {
     "t": "Sari berhak mendapat tas gratis",
     "ok": true
    },
    {
     "t": "Tas gratis hanya untuk belanja Rp150.000",
     "w": "Aturan berlaku mulai lebih dari Rp100.000."
    },
    {
     "t": "Sari mendapat diskon",
     "w": "Aturan tidak menyebut diskon."
    }
   ],
   "r": "Belanja Sari melebihi Rp100.000, jadi ia berhak atas tas gratis.",
   "h": "Apakah syarat \"jika\" terpenuhi? Lalu apa yang dijamin oleh \"maka\"?"
  },
  {
   "k": "dd",
   "tag": "l4",
   "q": "Aturan: \"Jika bilangan habis dibagi 9, maka habis dibagi 3.\" Tempatkan tiap kesimpulan ke kotak yang tepat.",
   "z": {
    "a": "Pasti benar",
    "b": "Belum tentu benar"
   },
   "it": [
    {
     "t": "27 habis dibagi 9, jadi habis dibagi 3",
     "z": "a"
    },
    {
     "t": "81 habis dibagi 9, jadi habis dibagi 3",
     "z": "a"
    },
    {
     "t": "Bilangan tidak habis dibagi 3, jadi tidak habis dibagi 9",
     "z": "a"
    },
    {
     "t": "Bilangan habis dibagi 3, jadi habis dibagi 9",
     "z": "b"
    },
    {
     "t": "Bilangan tidak habis dibagi 9, jadi tidak habis dibagi 3",
     "z": "b"
    }
   ],
   "r": "Betul. Tiga yang pertama mengikuti aturan atau kontrapositifnya. Bilangan 6 habis dibagi 3 tetapi tidak habis dibagi 9, jadi dua lainnya belum tentu benar.",
   "w": "Hanya aturan asli dan kontrapositifnya yang pasti benar. Uji sisanya dengan bilangan 6.",
   "h": "Coba bilangan 6 untuk menguji dua kesimpulan terakhir."
  },
  {
   "k": "mc",
   "tag": "r1",
   "q": "Premis: Semua mahasiswa kelas A lulus. Tia mahasiswa kelas A. Kesimpulan yang sah?",
   "o": [
    {
     "t": "Semua yang lulus adalah kelas A",
     "w": "Itu membalik arah. Mungkin ada mahasiswa kelas lain yang juga lulus."
    },
    {
     "t": "Tia lulus",
     "ok": true
    },
    {
     "t": "Tia mendapat nilai tertinggi",
     "w": "Nilai tertinggi tidak disebut di premis."
    },
    {
     "t": "Tia belum tentu lulus",
     "w": "Premis menjamin semua mahasiswa kelas A lulus."
    }
   ],
   "r": "Tia termasuk kelas A dan semua kelas A lulus, jadi Tia pasti lulus.",
   "h": "Gabungkan kedua premis: Tia ada di kelompok mana, dan apa sifat kelompok itu?"
  },
  {
   "k": "tf",
   "tag": "r2",
   "q": "Benar atau salah: seorang pelanggan mengeluh setelah promo dimulai, jadi promo pasti penyebab keluhannya.",
   "o": [
    {
     "t": "Benar",
     "w": "Kejadian yang berurutan belum tentu punya hubungan sebab-akibat. Keluhan bisa berasal dari hal lain."
    },
    {
     "t": "Salah",
     "ok": true
    }
   ],
   "r": "Tepat. Perlu bukti tambahan sebelum menyimpulkan sebab-akibat.",
   "h": "Apa penjelasan lain yang mungkin untuk keluhan itu?"
  }
 ]
};