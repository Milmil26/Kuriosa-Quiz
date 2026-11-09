// Konten modul Critical Thinking
var D_CR = {
 "key": "cr",
 "id": "critical-thinking",
 "title": "Critical Thinking",
 "short": "Critical Thinking",
 "category": "Knowledge and Skills",
 "level": "Pemula",
 "minutes": 40,
 "blurb": "Nilai informasi, ajukan pertanyaan tajam, ambil keputusan.",
 "objectives": [
  "Menjelaskan berpikir kritis dan membedakan fakta dari opini",
  "Menilai sumber informasi dan mengeceknya secara silang",
  "Mengenali bias dan asumsi tersembunyi",
  "Memisahkan klaim dari alasan serta mengenali kekeliruan berpikir",
  "Menimbang pilihan dengan kriteria dan merefleksikan keputusan"
 ],
 "mastery": {
  "dikuasai": 80,
  "hampir": 50
 },
 "concepts": {
  "c1": "Arti berpikir kritis",
  "c2": "Fakta dan opini",
  "s1": "Memeriksa sumber",
  "s2": "Mengecek silang",
  "b1": "Mengenali bias",
  "b2": "Asumsi tersembunyi",
  "a1": "Klaim dan bukti",
  "a2": "Kekeliruan berpikir",
  "k1": "Menimbang pilihan",
  "k2": "Memutuskan dan merefleksi"
 },
 "sections": [
  {
   "id": "apa-itu-bk",
   "no": 1,
   "title": "Apa itu Berpikir Kritis?",
   "minutes": 8,
   "goal": "Kamu bisa menjelaskan apa itu berpikir kritis dan membedakan fakta dari opini.",
   "material": [
    "Berpikir kritis adalah kebiasaan menilai informasi dengan bertanya dan memeriksa bukti sebelum percaya atau memutuskan. Ini bukan berarti menolak semua hal atau mencari-cari kesalahan orang lain.",
    "Pertanyaan pemandu: Apa buktinya? Siapa yang mengatakannya? Adakah penjelasan lain? Langkah pertama yang berguna adalah membedakan fakta (bisa dicek kebenarannya) dari opini (pendapat atau penilaian pribadi)."
   ],
   "example": "Iklan bilang \"Minuman ini paling enak sedunia\" (opini, tiap orang berbeda). Label di kemasan menulis \"10 gram gula per sajian\" (fakta, bisa kamu cek sendiri).",
   "viz": {
    "top": "Sebuah informasi",
    "parts": [
     "Apa buktinya?",
     "Siapa yang bilang?",
     "Fakta atau opini?",
     "Ada penjelasan lain?"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "c1",
     "q": "Pernyataan mana yang paling tepat menggambarkan berpikir kritis?",
     "o": [
      {
       "t": "Menolak semua yang dikatakan orang lain",
       "w": "Berpikir kritis tetap terbuka pada informasi yang punya bukti kuat. Menolak semuanya bukan sikap kritis, melainkan sikap tertutup."
      },
      {
       "t": "Menilai informasi dengan bertanya dan memeriksa bukti",
       "ok": true
      },
      {
       "t": "Mencari kesalahan orang supaya menang berdebat",
       "w": "Tujuan berpikir kritis adalah menilai dengan baik, bukan memenangkan debat."
      },
      {
       "t": "Memercayai informasi yang paling banyak dibagikan",
       "w": "Banyak dibagikan tidak membuktikan sesuatu benar."
      }
     ],
     "r": "Tepat. Berpikir kritis berarti menilai informasi lewat pertanyaan dan bukti, lalu baru memutuskan.",
     "h": "Apa yang dilakukan orang yang berpikir kritis sebelum percaya pada sebuah klaim?"
    },
    {
     "k": "tf",
     "tag": "c1",
     "q": "Benar atau salah: berpikir kritis berarti tidak boleh memercayai apa pun.",
     "o": [
      {
       "t": "Benar",
       "w": "Berpikir kritis bukan tidak percaya apa pun. Hal yang didukung bukti kuat tetap layak dipercaya."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Berpikir kritis berarti percaya secukupnya sesuai kekuatan buktinya.",
     "h": "Apakah orang yang kritis tidak pernah percaya apa pun, atau percaya sesuai bukti?"
    },
    {
     "k": "dd",
     "tag": "c2",
     "q": "Tempatkan tiap kalimat ke kotak yang tepat.",
     "z": {
      "a": "Fakta",
      "b": "Opini"
     },
     "it": [
      {
       "t": "Air mendidih pada 100 derajat Celsius di permukaan laut",
       "z": "a"
      },
      {
       "t": "Toko itu buka pukul 09.00",
       "z": "a"
      },
      {
       "t": "Gunung Everest lebih tinggi dari 8.000 meter",
       "z": "a"
      },
      {
       "t": "Film itu paling seru tahun ini",
       "z": "b"
      },
      {
       "t": "Kucing lebih menyenangkan daripada anjing",
       "z": "b"
      }
     ],
     "r": "Betul. Fakta bisa dicek dengan bukti. Penilaian seperti \"paling seru\" atau \"lebih menyenangkan\" adalah opini.",
     "w": "Fakta bisa dibuktikan atau dicek. Opini bergantung pada selera dan penilaian pribadi.",
     "h": "Tanyakan pada tiap kalimat: bagaimana cara mengecek kebenarannya? Kalau tidak ada caranya, kemungkinan itu opini."
    },
    {
     "k": "mc",
     "tag": "c2",
     "q": "Kalimat mana yang merupakan fakta?",
     "o": [
      {
       "t": "Sekolah itu paling bagus di kota",
       "w": "\"Paling bagus\" adalah penilaian, jadi ini opini."
      },
      {
       "t": "Sekolah itu punya 12 ruang kelas",
       "ok": true
      },
      {
       "t": "Guru di sekolah itu pasti ramah",
       "w": "Ini generalisasi dan penilaian, bukan sesuatu yang bisa dicek begitu saja."
      },
      {
       "t": "Sebaiknya semua orang bersekolah di sana",
       "w": "\"Sebaiknya\" menunjukkan pendapat, jadi ini opini."
      }
     ],
     "r": "Tepat. Jumlah ruang kelas bisa dihitung dan dicek.",
     "h": "Pilih kalimat yang bisa dibuktikan dengan menghitung, mengukur, atau melihat data."
    }
   ]
  },
  {
   "id": "menilai-sumber",
   "no": 2,
   "title": "Menilai Sumber Informasi",
   "minutes": 8,
   "goal": "Kamu bisa menilai apakah sebuah sumber layak dipercaya dan mengecek informasi lewat sumber lain.",
   "material": [
    "Sebelum percaya pada sebuah informasi, periksa sumbernya. Siapa penulisnya dan apakah ia ahli di bidang itu? Apa tujuannya: memberi informasi, menjual produk, atau menarik perhatian? Kapan dibuat? Apakah ada data atau rujukan yang bisa dicek?",
    "Lakukan cek silang: bandingkan dengan dua atau tiga sumber lain yang independen. Waspadai judul yang sensasional, tidak ada nama penulis, dan ajakan \"sebarkan segera\"."
   ],
   "example": "Pesan berantai bilang air lemon menyembuhkan semua penyakit, tanpa nama penulis. Kamu bisa mengecek di situs lembaga kesehatan resmi sebelum percaya atau meneruskannya.",
   "viz": {
    "top": "Menilai sumber",
    "parts": [
     "Siapa penulisnya?",
     "Apa tujuannya?",
     "Kapan dibuat?",
     "Ada rujukan?"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "s1",
     "q": "Kamu menemukan artikel tentang obat. Hal mana yang paling menambah kepercayaanmu?",
     "o": [
      {
       "t": "Artikel dibagikan ribuan kali",
       "w": "Banyak dibagikan tidak membuktikan isinya benar."
      },
      {
       "t": "Ditulis oleh dokter dan mencantumkan rujukan penelitian",
       "ok": true
      },
      {
       "t": "Judulnya meyakinkan dengan huruf kapital",
       "w": "Tampilan dan gaya judul tidak menunjukkan kebenaran isinya."
      },
      {
       "t": "Dipenuhi iklan produk obat",
       "w": "Iklan menunjukkan ada tujuan komersial yang bisa memengaruhi isi."
      }
     ],
     "r": "Tepat. Penulis yang ahli dan rujukan yang bisa dicek membuat informasi lebih layak dipercaya.",
     "h": "Cari tanda yang bisa kamu cek: keahlian penulis dan bukti yang disebutkan."
    },
    {
     "k": "tf",
     "tag": "s1",
     "q": "Benar atau salah: informasi yang sudah berusia 10 tahun selalu tetap akurat.",
     "o": [
      {
       "t": "Benar",
       "w": "Banyak hal berubah, misalnya teknologi, aturan, dan temuan ilmiah. Karena itu tanggal informasi perlu diperiksa."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Selalu cek kapan informasi dibuat, terutama untuk topik yang cepat berubah.",
     "h": "Apakah semua hal tetap sama selama sepuluh tahun?"
    },
    {
     "k": "mc",
     "tag": "s2",
     "q": "Kamu membaca klaim mengejutkan di satu situs. Langkah terbaik berikutnya?",
     "o": [
      {
       "t": "Langsung membagikannya agar orang lain tahu",
       "w": "Membagikan sebelum dicek bisa menyebarkan informasi yang salah."
      },
      {
       "t": "Percaya karena tampilan situsnya profesional",
       "w": "Tampilan profesional tidak menjamin isinya benar."
      },
      {
       "t": "Mencari sumber independen lain yang melaporkan hal yang sama",
       "ok": true
      },
      {
       "t": "Mengabaikannya karena hal mengejutkan pasti salah",
       "w": "Mengejutkan belum tentu salah. Yang perlu dilakukan adalah mengeceknya."
      }
     ],
     "r": "Tepat. Cek silang dengan sumber independen membantu memastikan klaim itu benar atau tidak.",
     "h": "Satu sumber belum cukup. Apa yang bisa kamu lakukan untuk membandingkannya?"
    },
    {
     "k": "dd",
     "tag": "s2",
     "q": "Tempatkan tiap ciri ke kotak yang tepat.",
     "z": {
      "a": "Tanda layak dipercaya",
      "b": "Tanda perlu waspada"
     },
     "it": [
      {
       "t": "Mencantumkan nama penulis dan keahliannya",
       "z": "a"
      },
      {
       "t": "Memberi rujukan atau data yang bisa dicek",
       "z": "a"
      },
      {
       "t": "Tanggal terbit jelas dan masih baru",
       "z": "a"
      },
      {
       "t": "Judul sensasional tanpa sumber",
       "z": "b"
      },
      {
       "t": "Meminta kamu segera menyebarkannya",
       "z": "b"
      }
     ],
     "r": "Betul. Penulis jelas, rujukan, dan tanggal membuat informasi bisa dicek. Judul sensasional dan desakan menyebar adalah tanda waspada.",
     "w": "Sumber yang baik memberi cara untuk dicek. Sumber yang mendesak dan tidak transparan perlu diwaspadai.",
     "h": "Tanyakan pada tiap ciri: apakah ini membantu kamu mengecek kebenarannya?"
    }
   ]
  },
  {
   "id": "bias-asumsi",
   "no": 3,
   "title": "Bias dan Asumsi",
   "minutes": 8,
   "goal": "Kamu bisa mengenali bias dan asumsi yang memengaruhi cara kita menilai informasi.",
   "material": [
    "Bias adalah kecenderungan berpikir yang condong ke satu arah tanpa kita sadari. Salah satunya bias konfirmasi: hanya mencari dan memercayai informasi yang sesuai dengan keyakinan kita.",
    "Asumsi adalah anggapan yang dianggap benar tanpa dicek. Untuk menghadapinya, cari bukti yang bertentangan dan tanyakan pada diri sendiri: apa yang sedang aku anggap benar di sini?"
   ],
   "example": "Kamu yakin tim A pasti juara, jadi hanya membaca berita kemenangan tim A dan melewatkan berita pemain andalannya cedera.",
   "viz": {
    "top": "Cara berpikirmu",
    "parts": [
     "Bias konfirmasi",
     "Asumsi tersembunyi",
     "Cari bukti lawan",
     "Tanya diri sendiri"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "b1",
     "q": "Rina yakin suplemen X ampuh, jadi ia hanya membaca ulasan positif dan melewatkan ulasan negatif. Ini contoh apa?",
     "o": [
      {
       "t": "Berpikir kritis",
       "w": "Berpikir kritis mempertimbangkan bukti dari berbagai sisi, bukan hanya yang mendukung."
      },
      {
       "t": "Bias konfirmasi",
       "ok": true
      },
      {
       "t": "Cek silang",
       "w": "Cek silang membandingkan banyak sumber, sedangkan Rina memilih sumber yang sesuai keyakinannya."
      },
      {
       "t": "Pernyataan fakta",
       "w": "Ini tentang cara Rina memilih informasi, bukan tentang jenis kalimatnya."
      }
     ],
     "r": "Tepat. Bias konfirmasi membuat kita hanya mencari informasi yang cocok dengan keyakinan.",
     "h": "Rina hanya memilih informasi yang cocok dengan apa? Lalu apa namanya?"
    },
    {
     "k": "tf",
     "tag": "b1",
     "q": "Benar atau salah: hanya orang lain yang bisa terkena bias, sedangkan kita sendiri selalu objektif.",
     "o": [
      {
       "t": "Benar",
       "w": "Semua orang bisa terkena bias, termasuk kita. Justru karena tidak terasa, perlu dilatih untuk disadari."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Mengakui bahwa kita bisa bias adalah langkah awal untuk menguranginya.",
     "h": "Apakah ada orang yang kebal terhadap kecenderungan berpikir?"
    },
    {
     "k": "mc",
     "tag": "b2",
     "q": "\"Budi pasti terlambat karena ia malas.\" Asumsi apa yang tersembunyi di sini?",
     "o": [
      {
       "t": "Budi tidak pernah terlambat",
       "w": "Kalimat itu sedang membahas keterlambatan Budi."
      },
      {
       "t": "Keterlambatannya pasti karena malas, tanpa mengecek penyebab lain",
       "ok": true
      },
      {
       "t": "Malas itu hal yang baik",
       "w": "Kalimat itu tidak menilai malas sebagai hal baik."
      },
      {
       "t": "Tidak ada asumsi, itu fakta",
       "w": "Penyebabnya belum dicek, jadi itu asumsi."
      }
     ],
     "r": "Tepat. Penyebab keterlambatan bisa banyak, misalnya macet atau sakit, dan belum dicek.",
     "h": "Apakah sudah dicek alasan Budi terlambat?"
    },
    {
     "k": "dd",
     "tag": "b2",
     "q": "Sebuah toko tutup lebih awal. Tempatkan tiap kalimat ke kotak yang tepat.",
     "z": {
      "a": "Asumsi (belum dicek)",
      "b": "Fakta (sudah teramati)"
     },
     "it": [
      {
       "t": "Toko itu tutup karena sepi pembeli",
       "z": "a"
      },
      {
       "t": "Pemiliknya pasti bangkrut",
       "z": "a"
      },
      {
       "t": "Tidak ada yang mau membeli di sana",
       "z": "a"
      },
      {
       "t": "Pintu toko terkunci pukul 10.00",
       "z": "b"
      },
      {
       "t": "Ada tulisan \"tutup\" di pintu",
       "z": "b"
      }
     ],
     "r": "Betul. Pintu terkunci dan tulisan di pintu bisa kamu amati. Alasan di balik penutupan adalah dugaan yang belum dicek.",
     "w": "Fakta bisa kamu amati atau cek. Dugaan tentang alasan atau penyebab tanpa bukti adalah asumsi.",
     "h": "Tanyakan: apakah ini bisa kamu lihat langsung, atau hanya dugaan?"
    }
   ]
  },
  {
   "id": "argumen-kekeliruan",
   "no": 4,
   "title": "Argumen dan Kekeliruan",
   "minutes": 8,
   "goal": "Kamu bisa membedakan klaim dari alasan serta mengenali kekeliruan berpikir yang umum.",
   "material": [
    "Argumen terdiri dari klaim (pendapat yang diajukan) dan alasan atau bukti yang mendukungnya. Argumen kuat bila alasannya relevan, cukup, dan bisa dicek. Suara keras bukan tanda argumen kuat.",
    "Tiga kekeliruan yang sering muncul: menyerang orangnya, bukan argumennya; generalisasi terburu-buru (dari satu atau dua contoh ke semuanya); dan dikotomi palsu (seolah hanya ada dua pilihan)."
   ],
   "example": "\"Jangan dengarkan sarannya, dia kan baru lulus.\" Ini menyerang orangnya. Cara yang tepat adalah menilai isi sarannya dan buktinya.",
   "viz": {
    "top": "Argumen",
    "parts": [
     "Klaim",
     "Alasan",
     "Bukti",
     "Kekeliruan?"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "a1",
     "q": "\"Sebaiknya kita naik bus ke acara itu, karena parkir di sana sangat terbatas.\" Mana klaim dalam kalimat ini?",
     "o": [
      {
       "t": "Parkir di sana sangat terbatas",
       "w": "Ini alasan yang dipakai untuk mendukung klaim."
      },
      {
       "t": "Sebaiknya kita naik bus ke acara itu",
       "ok": true
      },
      {
       "t": "Kita tidak punya mobil",
       "w": "Hal ini tidak disebut dalam kalimat."
      },
      {
       "t": "Acara itu berlangsung pagi hari",
       "w": "Hal ini tidak disebut dalam kalimat."
      }
     ],
     "r": "Tepat. Klaimnya adalah apa yang ingin diyakinkan, yaitu naik bus. Parkir terbatas adalah alasannya.",
     "h": "Klaim adalah apa yang ingin dibuktikan. Alasan adalah jawaban atas pertanyaan \"mengapa?\"."
    },
    {
     "k": "tf",
     "tag": "a1",
     "q": "Benar atau salah: argumen yang disampaikan dengan suara keras dan percaya diri otomatis lebih kuat.",
     "o": [
      {
       "t": "Benar",
       "w": "Kekuatan argumen ditentukan oleh alasan dan buktinya, bukan oleh cara menyampaikannya."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Perhatikan isi alasannya, bukan seberapa keras suaranya.",
     "h": "Apa yang membuat sebuah argumen kuat: nada suara atau alasannya?"
    },
    {
     "k": "mc",
     "tag": "a2",
     "q": "\"Dua kali beli di toko itu barangnya rusak, jadi semua barang di sana pasti rusak.\" Apa kekeliruannya?",
     "o": [
      {
       "t": "Menyerang orangnya",
       "w": "Kalimat itu tidak menyerang seseorang, tetapi menyimpulkan terlalu luas."
      },
      {
       "t": "Dikotomi palsu",
       "w": "Kalimat itu tidak menyodorkan dua pilihan saja."
      },
      {
       "t": "Generalisasi terburu-buru",
       "ok": true
      },
      {
       "t": "Tidak ada kekeliruan",
       "w": "Dua contoh belum cukup untuk menyimpulkan semua barang."
      }
     ],
     "r": "Tepat. Dua contoh belum cukup untuk menyimpulkan seluruh barang di toko.",
     "h": "Berapa contoh yang dipakai, dan seluas apa kesimpulannya?"
    },
    {
     "k": "dd",
     "tag": "a2",
     "q": "Tempatkan tiap kalimat ke kotak yang tepat.",
     "z": {
      "a": "Kekeliruan berpikir",
      "b": "Argumen yang masuk akal"
     },
     "it": [
      {
       "t": "Dia tidak pantas didengar, dia kan masih magang",
       "z": "a"
      },
      {
       "t": "Pilih belajar sekarang atau gagal selamanya",
       "z": "a"
      },
      {
       "t": "Satu temanku gagal setelah ikut kursus itu, jadi kursusnya sia-sia",
       "z": "a"
      },
      {
       "t": "Uji lab menunjukkan baterai bertahan 5 jam, kurang dari klaim 10 jam",
       "z": "b"
      },
      {
       "t": "Tiga pembeli berbeda menyebut baterainya cepat habis, jadi baterainya kemungkinan lemah",
       "z": "b"
      }
     ],
     "r": "Betul. Tiga kalimat pertama menyerang orang, menyodorkan dua pilihan saja, dan menggeneralisasi dari satu contoh. Dua lainnya memakai bukti yang bisa dicek.",
     "w": "Argumen yang masuk akal memakai bukti yang relevan dan cukup. Kekeliruan menyerang orang, menyempitkan pilihan, atau menggeneralisasi.",
     "h": "Tanyakan: apakah ada bukti yang relevan, atau hanya menyerang orang dan menyimpulkan terlalu luas?"
    }
   ]
  },
  {
   "id": "keputusan",
   "no": 5,
   "title": "Mengambil Keputusan",
   "minutes": 8,
   "goal": "Kamu bisa menimbang pilihan dengan kriteria yang jelas dan merefleksikan keputusanmu.",
   "material": [
    "Keputusan yang baik dibangun dari langkah yang jelas: tentukan tujuan, kumpulkan pilihan, tentukan kriteria (misalnya biaya, waktu, risiko), nilai tiap pilihan, lalu putuskan.",
    "Setelah itu, lakukan refleksi: apa hasilnya, dan apa yang bisa diperbaiki? Keputusan yang baik tidak selalu berujung hasil sempurna. Yang dinilai adalah prosesnya. Hindari memutuskan karena ikut-ikutan atau emosi sesaat."
   ],
   "example": "Memilih laptop untuk kuliah: tujuannya jelas, kriterianya harga, baterai, dan bobot, lalu kamu membandingkan tiga pilihan sebelum memutuskan.",
   "viz": {
    "top": "Proses keputusan",
    "parts": [
     "Tujuan",
     "Pilihan",
     "Kriteria",
     "Refleksi"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "k1",
     "q": "Kamu akan membeli ponsel baru. Langkah pertama yang paling tepat?",
     "o": [
      {
       "t": "Membeli yang dipakai teman-temanmu",
       "w": "Ikut-ikutan belum tentu cocok dengan kebutuhanmu."
      },
      {
       "t": "Menentukan tujuan dan kriteria, misalnya anggaran dan kebutuhan",
       "ok": true
      },
      {
       "t": "Memilih yang iklannya paling sering muncul",
       "w": "Seringnya iklan tampil tidak menunjukkan kualitas."
      },
      {
       "t": "Memilih yang termahal karena pasti terbaik",
       "w": "Harga tinggi tidak otomatis berarti paling cocok."
      }
     ],
     "r": "Tepat. Tujuan dan kriteria yang jelas membuat perbandingan pilihan lebih terarah.",
     "h": "Sebelum membandingkan pilihan, apa yang perlu kamu tentukan lebih dulu?"
    },
    {
     "k": "tf",
     "tag": "k1",
     "q": "Benar atau salah: keputusan yang baik pasti selalu memberi hasil yang sempurna.",
     "o": [
      {
       "t": "Benar",
       "w": "Hasil dipengaruhi banyak hal di luar kendali kita. Keputusan yang baik dinilai dari prosesnya, bukan hanya hasilnya."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Proses yang berbasis bukti dan kriteria tetap bisa menghasilkan hasil yang kurang ideal, dan itu bahan belajar.",
     "h": "Apakah semua hal yang memengaruhi hasil ada di tanganmu?"
    },
    {
     "k": "mc",
     "tag": "k2",
     "q": "Setelah membeli, ponselmu ternyata baterainya cepat habis. Apa yang paling baik dilakukan?",
     "o": [
      {
       "t": "Menyalahkan penjual saja",
       "w": "Itu tidak membantu keputusan berikutnya jadi lebih baik."
      },
      {
       "t": "Melupakannya begitu saja",
       "w": "Tanpa refleksi, kesalahan yang sama bisa terulang."
      },
      {
       "t": "Merefleksikan kriteria yang terlewat, lalu memakainya untuk keputusan berikutnya",
       "ok": true
      },
      {
       "t": "Menyimpulkan semua ponsel baru pasti buruk",
       "w": "Itu generalisasi dari satu pengalaman."
      }
     ],
     "r": "Tepat. Refleksi mengubah pengalaman menjadi pelajaran untuk keputusan berikutnya.",
     "h": "Apa yang bisa kamu pelajari agar keputusan berikutnya lebih baik?"
    },
    {
     "k": "dd",
     "tag": "k2",
     "q": "Tempatkan tiap dasar keputusan ke kotak yang tepat.",
     "z": {
      "a": "Dasar yang baik",
      "b": "Dasar yang kurang baik"
     },
     "it": [
      {
       "t": "Anggaran dan kebutuhan yang jelas",
       "z": "a"
      },
      {
       "t": "Perbandingan beberapa pilihan",
       "z": "a"
      },
      {
       "t": "Bukti dari ulasan dan uji yang bisa dicek",
       "z": "a"
      },
      {
       "t": "Ikut-ikutan karena semua orang membeli",
       "z": "b"
      },
      {
       "t": "Keputusan sesaat saat sedang marah atau terburu-buru",
       "z": "b"
      }
     ],
     "r": "Betul. Kriteria jelas, perbandingan, dan bukti membuat keputusan lebih kuat. Ikut-ikutan dan emosi sesaat jarang menghasilkan keputusan yang tepat.",
     "w": "Keputusan yang baik berpijak pada kriteria dan bukti, bukan tekanan orang lain atau emosi sesaat.",
     "h": "Tanyakan pada tiap kartu: apakah ini memakai informasi dan kriteria, atau hanya dorongan sesaat?"
    }
   ]
  }
 ],
 "finalQuiz": [
  {
   "k": "mc",
   "tag": "c1",
   "q": "Pertanyaan mana yang mencerminkan berpikir kritis saat membaca berita?",
   "o": [
    {
     "t": "Apakah berita ini sesuai dengan yang kupikirkan?",
     "w": "Mencari yang sesuai dengan pikiran sendiri bisa menjadi bias."
    },
    {
     "t": "Apa buktinya, dan siapa yang mengatakannya?",
     "ok": true
    },
    {
     "t": "Berapa banyak orang yang sudah membagikannya?",
     "w": "Jumlah pembagian tidak membuktikan kebenaran."
    },
    {
     "t": "Apakah judulnya menarik?",
     "w": "Judul menarik tidak menjamin isi yang akurat."
    }
   ],
   "r": "Bukti dan sumber adalah dua hal pertama yang ditanyakan orang yang berpikir kritis.",
   "h": "Cari pertanyaan yang menuntut bukti dan kejelasan sumber."
  },
  {
   "k": "mc",
   "tag": "c2",
   "q": "Kalimat mana yang merupakan opini?",
   "o": [
    {
     "t": "Matematika diajarkan 4 jam seminggu di kelas kami",
     "w": "Ini bisa dicek lewat jadwal, jadi fakta."
    },
    {
     "t": "Pelajaran matematika adalah yang paling membosankan",
     "ok": true
    },
    {
     "t": "Ujian matematika diadakan hari Rabu",
     "w": "Ini bisa dicek lewat jadwal, jadi fakta."
    },
    {
     "t": "Nilai rata-rata kelas matematika adalah 78",
     "w": "Ini bisa dicek lewat data nilai, jadi fakta."
    }
   ],
   "r": "\"Paling membosankan\" adalah penilaian pribadi, sehingga ini opini.",
   "h": "Opini memuat penilaian seperti \"paling\", \"membosankan\", atau \"bagus\"."
  },
  {
   "k": "mc",
   "tag": "s1",
   "q": "Kamu mencari informasi kesehatan. Sumber mana yang paling dapat dipercaya?",
   "o": [
    {
     "t": "Pesan berantai tanpa nama penulis",
     "w": "Tanpa penulis, tidak ada yang bisa dimintai pertanggungjawaban atau dicek."
    },
    {
     "t": "Situs lembaga kesehatan resmi yang mencantumkan tanggal dan rujukan",
     "ok": true
    },
    {
     "t": "Unggahan viral seorang selebritas",
     "w": "Terkenal tidak sama dengan ahli di bidang kesehatan."
    },
    {
     "t": "Iklan yang menjual produknya",
     "w": "Iklan punya tujuan menjual, sehingga isinya bisa berat sebelah."
    }
   ],
   "r": "Lembaga resmi dengan rujukan dan tanggal yang jelas memudahkan kamu mengecek informasinya.",
   "h": "Cari sumber yang memberi cara untuk dicek: penulis, tanggal, dan rujukan."
  },
  {
   "k": "tf",
   "tag": "s2",
   "q": "Benar atau salah: membaca satu sumber saja sudah cukup selama sumber itu terlihat meyakinkan.",
   "o": [
    {
     "t": "Benar",
     "w": "Tampilan meyakinkan tidak menjamin isinya benar. Cek silang dengan sumber independen tetap diperlukan."
    },
    {
     "t": "Salah",
     "ok": true
    }
   ],
   "r": "Tepat. Cek silang membantu memastikan informasi tidak hanya terlihat benar.",
   "h": "Apakah tampilan yang meyakinkan sama dengan bukti?"
  },
  {
   "k": "mc",
   "tag": "b1",
   "q": "Dani hanya mengikuti akun yang sependapat dengannya, lalu merasa semua orang setuju. Apa masalahnya?",
   "o": [
    {
     "t": "Tidak ada masalah, itu cara berpikir kritis",
     "w": "Berpikir kritis justru mempertimbangkan pandangan yang berbeda."
    },
    {
     "t": "Bias konfirmasi membuatnya jarang melihat pandangan lain",
     "ok": true
    },
    {
     "t": "Ia terlalu banyak membaca",
     "w": "Banyaknya membaca bukan masalah. Yang bermasalah adalah pilihan sumbernya."
    },
    {
     "t": "Akun yang ia ikuti pasti salah",
     "w": "Belum tentu salah. Masalahnya Dani hanya melihat satu sisi."
    }
   ],
   "r": "Dani hanya melihat satu sisi, sehingga gambarannya tentang \"semua orang\" menjadi keliru.",
   "h": "Apa yang terjadi jika kita hanya melihat informasi yang sesuai keyakinan?"
  },
  {
   "k": "dd",
   "tag": "b2",
   "q": "Nilai ujian Sita turun. Tempatkan tiap kalimat ke kotak yang tepat.",
   "z": {
    "a": "Asumsi (belum dicek)",
    "b": "Fakta (sudah teramati)"
   },
   "it": [
    {
     "t": "Sita pasti kurang belajar",
     "z": "a"
    },
    {
     "t": "Sita sudah tidak peduli lagi dengan sekolah",
     "z": "a"
    },
    {
     "t": "Pasti ada masalah di rumah Sita",
     "z": "a"
    },
    {
     "t": "Nilai ujian Sita turun dari 85 menjadi 70",
     "z": "b"
    },
    {
     "t": "Sita mendapat 70 pada ujian terakhir",
     "z": "b"
    }
   ],
   "r": "Betul. Angka nilai bisa dicek di lembar ujian. Penyebab turunnya nilai masih dugaan yang belum dicek.",
   "w": "Fakta bisa kamu cek lewat data. Alasan di balik fakta itu, bila belum dibuktikan, adalah asumsi.",
   "h": "Tanyakan: bisa dicek lewat data, atau hanya dugaan penyebab?"
  },
  {
   "k": "mc",
   "tag": "a1",
   "q": "\"Kita harus menanam pohon di sekolah, karena pohon menurunkan suhu dan membuat udara lebih segar.\" Mana alasan dalam argumen ini?",
   "o": [
    {
     "t": "Kita harus menanam pohon di sekolah",
     "w": "Ini klaim yang ingin diyakinkan."
    },
    {
     "t": "Pohon menurunkan suhu dan membuat udara lebih segar",
     "ok": true
    },
    {
     "t": "Menanam pohon itu mahal",
     "w": "Hal ini tidak disebut dalam kalimat."
    },
    {
     "t": "Sekolah itu butuh tempat parkir",
     "w": "Hal ini tidak disebut dalam kalimat."
    }
   ],
   "r": "Alasan adalah jawaban atas \"mengapa?\": karena pohon menurunkan suhu dan membuat udara lebih segar.",
   "h": "Cari bagian yang menjawab pertanyaan \"mengapa kita harus menanam pohon?\"."
  },
  {
   "k": "mc",
   "tag": "a2",
   "q": "\"Kamu harus setuju denganku, atau berarti kamu tidak peduli lingkungan.\" Apa kekeliruannya?",
   "o": [
    {
     "t": "Generalisasi terburu-buru",
     "w": "Kalimat itu tidak menyimpulkan dari sedikit contoh."
    },
    {
     "t": "Dikotomi palsu",
     "ok": true
    },
    {
     "t": "Argumen berbasis bukti",
     "w": "Tidak ada bukti yang disebutkan, hanya dua pilihan."
    },
    {
     "t": "Fakta yang bisa dicek",
     "w": "Pernyataannya tidak bisa dicek dan menyederhanakan pilihan."
    }
   ],
   "r": "Seolah hanya ada dua pilihan, padahal orang bisa tidak setuju dan tetap peduli lingkungan.",
   "h": "Apakah benar hanya ada dua kemungkinan seperti yang dikatakan kalimat itu?"
  },
  {
   "k": "mc",
   "tag": "k1",
   "q": "Kamu memilih tempat les dari tiga pilihan. Cara membandingkan yang paling baik?",
   "o": [
    {
     "t": "Memilih yang namanya paling terkenal",
     "w": "Nama terkenal belum tentu sesuai kebutuhanmu."
    },
    {
     "t": "Melempar koin",
     "w": "Cara ini tidak memakai informasi apa pun."
    },
    {
     "t": "Membuat daftar kriteria (biaya, jadwal, kualitas pengajar) lalu menilai tiap pilihan",
     "ok": true
    },
    {
     "t": "Memilih yang paling dekat rumah temanmu",
     "w": "Lokasi teman bukan kriteria untuk kebutuhanmu."
    }
   ],
   "r": "Kriteria yang jelas membuat perbandingan lebih adil dan terarah.",
   "h": "Cara yang baik memakai kriteria dan menilai tiap pilihan."
  },
  {
   "k": "tf",
   "tag": "k2",
   "q": "Benar atau salah: setelah memutuskan, kita tidak perlu lagi mengevaluasi hasilnya.",
   "o": [
    {
     "t": "Benar",
     "w": "Evaluasi membantu kita belajar dari hasilnya untuk keputusan berikutnya."
    },
    {
     "t": "Salah",
     "ok": true
    }
   ],
   "r": "Tepat. Refleksi adalah bagian dari proses mengambil keputusan.",
   "h": "Apa gunanya melihat kembali hasil sebuah keputusan?"
  }
 ]
};