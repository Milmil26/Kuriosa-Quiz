// Konten modul Computational Thinking
var D = {
 "id": "computational-thinking",
 "title": "Introduction to Computational Thinking",
 "category": "Digital and Technology",
 "level": "Pemula",
 "minutes": 40,
 "objectives": [
  "Menjelaskan apa itu computational thinking",
  "Memecah masalah besar menjadi bagian kecil",
  "Mengenali pola dalam masalah sehari-hari",
  "Menyederhanakan masalah dengan abstraksi",
  "Menyusun algoritma yang runtut"
 ],
 "mastery": {
  "dikuasai": 80,
  "hampir": 50
 },
 "points": {
  "percobaan_1": 100,
  "percobaan_2": 60,
  "percobaan_3": 30,
  "lihat_jawaban": 0
 },
 "concepts": {
  "w1": "Arti computational thinking",
  "w2": "Empat komponen computational thinking",
  "d1": "Ide dasar decomposition",
  "d2": "Manfaat dan sub-masalah",
  "p1": "Menemukan pola",
  "p2": "Memanfaatkan pola",
  "a1": "Memilih detail penting",
  "a2": "Menyederhanakan dengan abstraksi",
  "g1": "Menyusun langkah berurutan",
  "g2": "Langkah yang jelas dan tidak ambigu"
 },
 "sections": [
  {
   "id": "apa-itu-ct",
   "no": 1,
   "title": "Apa itu Computational Thinking?",
   "minutes": 8,
   "goal": "Kamu bisa menjelaskan apa itu computational thinking dan empat komponennya.",
   "material": [
    "Computational thinking adalah cara berpikir yang sistematis untuk memecahkan masalah. Kamu tidak harus memakai komputer. Cara berpikirnya hanya meminjam kebiasaan yang dipakai programmer: teratur, bertahap, dan bisa diulang.",
    "Ada empat komponen utama: decomposition (memecah masalah), pattern recognition (mengenali pola), abstraction (memilih hal yang penting), dan algorithm (menyusun langkah). Di bagian berikutnya, kita bahas satu per satu."
   ],
   "example": "Saat kamu memasak makanan baru, kamu membaca resep (algoritma), menyiapkan bahan satu per satu (memecah), dan memakai pengalaman dari masakan serupa (pola).",
   "viz": {
    "top": "Computational thinking",
    "parts": [
     "Decomposition",
     "Pattern recognition",
     "Abstraction",
     "Algorithm"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "w1",
     "q": "Pernyataan mana yang paling tepat menggambarkan computational thinking?",
     "o": [
      {
       "t": "Belajar bahasa pemrograman",
       "w": "Pemrograman adalah salah satu cara menerapkannya. Computational thinking sendiri adalah cara berpikir, dan tidak mengharuskan kamu menulis kode."
      },
      {
       "t": "Cara berpikir sistematis untuk memecahkan masalah",
       "ok": true
      },
      {
       "t": "Menghafal rumus sebanyak mungkin",
       "w": "Menghafal tidak sama dengan memecahkan masalah. Computational thinking melatih cara menyusun penyelesaian."
      },
      {
       "t": "Memakai komputer secepat mungkin",
       "w": "Kecepatan memakai komputer bukan intinya. Yang dilatih adalah cara berpikirnya."
      }
     ],
     "r": "Tepat. Computational thinking adalah cara berpikir yang teratur dan bertahap untuk memecahkan masalah, dengan atau tanpa komputer.",
     "h": "Ingat contoh memasak tadi. Kamu memakai cara berpikir yang teratur, padahal tidak ada komputer."
    },
    {
     "k": "tf",
     "tag": "w1",
     "q": "Benar atau salah: computational thinking hanya bisa dipakai oleh programmer saat menulis kode.",
     "o": [
      {
       "t": "Benar",
       "w": "Computational thinking dipakai di banyak hal, misalnya merencanakan perjalanan atau memasak. Programmer hanyalah salah satu penggunanya."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Computational thinking adalah keterampilan umum yang bisa dipakai siapa saja, di bidang apa saja.",
     "h": "Coba ingat contoh memasak dan membaca resep. Apakah itu perlu menulis kode?"
    },
    {
     "k": "mc",
     "tag": "w2",
     "q": "Apa saja empat komponen computational thinking?",
     "o": [
      {
       "t": "Membaca, menulis, menghitung, menggambar",
       "w": "Itu keterampilan dasar yang penting, tetapi bukan komponen computational thinking."
      },
      {
       "t": "Decomposition, pattern recognition, abstraction, algorithm",
       "ok": true
      },
      {
       "t": "Hardware, software, internet, jaringan",
       "w": "Itu bagian-bagian teknologi komputer, bukan cara berpikir."
      },
      {
       "t": "Menghafal, mengulang, menyalin, menebak",
       "w": "Keempatnya kebiasaan belajar, tetapi bukan komponen computational thinking."
      }
     ],
     "r": "Tepat. Keempatnya saling melengkapi: memecah, mengenali pola, memilih yang penting, dan menyusun langkah.",
     "h": "Komponen-komponennya adalah cara berpikir, bukan alat. Cari pilihan yang berisi empat cara berpikir."
    },
    {
     "k": "dd",
     "tag": "w2",
     "q": "Tempatkan tiap kartu ke kotak yang tepat.",
     "z": {
      "a": "Komponen computational thinking",
      "b": "Bukan komponen"
     },
     "it": [
      {
       "t": "Decomposition",
       "z": "a"
      },
      {
       "t": "Algorithm",
       "z": "a"
      },
      {
       "t": "Abstraction",
       "z": "a"
      },
      {
       "t": "Menghafal jawaban",
       "z": "b"
      },
      {
       "t": "Menebak tanpa berpikir",
       "z": "b"
      }
     ],
     "r": "Betul. Decomposition, algorithm, dan abstraction adalah komponen. Menghafal dan menebak bukan cara berpikir yang sistematis.",
     "w": "Komponen computational thinking adalah cara berpikir yang teratur untuk menyelesaikan masalah. Menghafal dan menebak tidak melatih hal itu.",
     "h": "Tanyakan pada tiap kartu: apakah ini cara berpikir yang teratur dan bisa dijelaskan langkahnya?"
    }
   ]
  },
  {
   "id": "decomposition",
   "no": 2,
   "title": "Decomposition",
   "minutes": 8,
   "goal": "Kamu bisa memecah masalah besar menjadi bagian kecil yang mudah dikerjakan.",
   "material": [
    "Decomposition adalah cara memecah masalah besar menjadi bagian-bagian kecil. Setiap bagian lebih mudah dipahami, dikerjakan, dan diperiksa.",
    "Kalau satu bagian bermasalah, kamu cukup memperbaiki bagian itu saja, tidak perlu mengulang semuanya. Bagian-bagian kecil juga bisa dikerjakan oleh beberapa orang sekaligus."
   ],
   "example": "Merencanakan liburan terasa berat. Kalau dipecah menjadi tiket, penginapan, jadwal, dan anggaran, kamu cukup mengerjakan satu per satu.",
   "viz": {
    "top": "Masalah besar",
    "parts": [
     "Bagian 1",
     "Bagian 2",
     "Bagian 3",
     "Bagian 4"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "d1",
     "q": "Kamu mau mengadakan pesta ulang tahun. Langkah mana yang menerapkan decomposition?",
     "o": [
      {
       "t": "Mengerjakan semuanya sekaligus dalam satu hari",
       "w": "Mengerjakan semuanya sekaligus justru yang ingin dihindari decomposition, karena masalahnya terlalu besar untuk dipegang bersamaan."
      },
      {
       "t": "Memecahnya jadi bagian kecil: undangan, makanan, dekorasi, acara",
       "ok": true
      },
      {
       "t": "Mengulang pesta tahun lalu persis sama",
       "w": "Meniru cara lama berkaitan dengan mengenali pola, bukan memecah masalah."
      },
      {
       "t": "Fokus ke kue saja dan abaikan sisanya",
       "w": "Itu menyederhanakan dengan membuang bagian lain. Decomposition tetap menangani semua bagian, hanya satu per satu."
      }
     ],
     "r": "Memecah pesta jadi undangan, makanan, dekorasi, dan acara membuat tiap bagian lebih mudah dikerjakan. Itulah inti decomposition.",
     "h": "Ingat cara kita menyelesaikan masalah yang kompleks: apakah langsung sekaligus, atau dibagi jadi bagian-bagian kecil?"
    },
    {
     "k": "tf",
     "tag": "d1",
     "q": "Benar atau salah: decomposition berarti menyelesaikan masalah besar sekaligus tanpa membaginya.",
     "o": [
      {
       "t": "Benar",
       "w": "Pernyataan ini kebalikan dari decomposition. Coba lihat lagi arti kata \"memecah\" dalam namanya."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Decomposition justru membagi masalah besar menjadi bagian-bagian kecil yang bisa diselesaikan satu per satu.",
     "h": "Decomposition berasal dari kata \"decompose\", yaitu menguraikan. Apakah menguraikan sama dengan menyatukan?"
    },
    {
     "k": "mc",
     "tag": "d2",
     "q": "Sebuah aplikasi belanja dipecah menjadi login, katalog, keranjang, dan pembayaran. Apa manfaat utamanya?",
     "o": [
      {
       "t": "Aplikasi pasti bebas bug",
       "w": "Memecah tidak menjamin bebas bug. Manfaatnya membuat bug lebih mudah ditemukan karena tiap bagian bisa dicek sendiri."
      },
      {
       "t": "Tiap bagian bisa dikerjakan dan diuji terpisah",
       "ok": true
      },
      {
       "t": "Tidak perlu lagi merencanakan apa pun",
       "w": "Decomposition adalah bagian dari perencanaan, bukan pengganti perencanaan."
      },
      {
       "t": "Masalahnya jadi hilang dengan sendirinya",
       "w": "Masalahnya tetap ada, hanya saja dibagi menjadi potongan yang lebih mudah ditangani."
      }
     ],
     "r": "Bagian kecil bisa dikerjakan bergantian atau oleh beberapa orang, dan diuji terpisah. Itu membuat pekerjaan lebih terarah.",
     "h": "Bayangkan kamu harus memperbaiki satu error. Lebih mudah mencarinya di satu bagian kecil atau di seluruh aplikasi sekaligus?"
    },
    {
     "k": "dd",
     "tag": "d2",
     "q": "Masalah: \"Membuat nasi goreng\". Tempatkan tiap kartu ke kotak yang tepat.",
     "z": {
      "a": "Sub-masalah dari membuat nasi goreng",
      "b": "Bukan sub-masalah"
     },
     "it": [
      {
       "t": "Menyiapkan bahan",
       "z": "a"
      },
      {
       "t": "Memasak nasi",
       "z": "a"
      },
      {
       "t": "Menata di piring",
       "z": "a"
      },
      {
       "t": "Nasi goreng itu enak",
       "z": "b"
      },
      {
       "t": "Harga beras naik",
       "z": "b"
      }
     ],
     "r": "Betul. Menyiapkan bahan, memasak, dan menata adalah langkah-langkah kecil. Dua kartu lainnya hanya opini atau info yang tidak membantu menyelesaikan masalah.",
     "w": "Sub-masalah adalah bagian pekerjaan yang harus diselesaikan untuk mencapai tujuan. Opini atau berita di sekitar masalah bukan bagian pekerjaannya.",
     "h": "Tanyakan pada tiap kartu: apakah ini sesuatu yang harus dikerjakan supaya nasi gorengnya jadi?"
    }
   ]
  },
  {
   "id": "pattern-recognition",
   "no": 3,
   "title": "Pattern Recognition",
   "minutes": 8,
   "goal": "Kamu bisa menemukan kesamaan dan pola berulang untuk mempermudah penyelesaian masalah.",
   "material": [
    "Pola adalah keteraturan yang berulang: angka yang bertambah dengan selisih sama, jadwal yang selalu sama, atau kesalahan yang sering muncul. Mengenali pola berarti menyadari keteraturan itu.",
    "Dengan mengenali pola, kamu bisa memprediksi apa yang terjadi berikutnya dan memakai ulang solusi yang pernah berhasil, tanpa mulai dari nol. Tetap ingat bahwa pola bisa berubah, jadi perlu dicek lagi."
   ],
   "example": "Kamu sadar setiap Senin pagi jalan menuju sekolah macet. Dengan pola itu, kamu bisa berangkat lebih awal di hari Senin.",
   "viz": {
    "top": "Pola berulang",
    "parts": [
     "Lingkaran",
     "Persegi",
     "Lingkaran",
     "Persegi"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "p1",
     "q": "Perhatikan deret 2, 4, 6, 8, … Angka berikutnya dan polanya adalah?",
     "o": [
      {
       "t": "9, karena tiap angka bertambah 1",
       "w": "Selisih antar angka di deret ini 2, bukan 1. Cek lagi dari 2 ke 4."
      },
      {
       "t": "10, karena tiap angka bertambah 2",
       "ok": true
      },
      {
       "t": "12, karena tiap angka bertambah 4",
       "w": "Dari 6 ke 8 hanya naik 2, jadi lompatan 4 tidak sesuai deretnya."
      },
      {
       "t": "8, karena angkanya berulang",
       "w": "Angkanya tidak berulang, tetapi terus naik dengan selisih tetap."
      }
     ],
     "r": "Tepat. Selisih antar angka selalu 2, jadi setelah 8 datang 10.",
     "h": "Hitung selisih tiap pasangan angka yang bersebelahan. Apakah selalu sama?"
    },
    {
     "k": "tf",
     "tag": "p1",
     "q": "Benar atau salah: pattern recognition hanya berlaku untuk angka.",
     "o": [
      {
       "t": "Benar",
       "ok": true
      },
      {
       "t": "Salah",
       "w": "Pola ada di banyak hal selain angka, misalnya warna, bentuk, kalimat, jadwal, dan kebiasaan."
      }
     ],
     "r": "Tepat. Pola bisa ditemukan di mana saja: bentuk, warna, jadwal, kebiasaan, sampai kesalahan yang sering terjadi.",
     "h": "Pikirkan lampu lalu lintas atau jadwal bus. Apakah itu angka saja?"
    },
    {
     "k": "mc",
     "tag": "p2",
     "q": "Kamu sadar jalan macet setiap Senin pagi. Apa manfaat mengenali pola ini?",
     "o": [
      {
       "t": "Kemacetan Senin otomatis hilang",
       "w": "Mengenali pola tidak mengubah kenyataannya. Yang berubah adalah caramu bersiap."
      },
      {
       "t": "Kamu bisa memprediksi dan berangkat lebih awal di hari Senin",
       "ok": true
      },
      {
       "t": "Kamu tidak perlu merencanakan apa pun lagi",
       "w": "Pola membantu merencanakan dengan lebih baik, bukan menggantikan perencanaan."
      },
      {
       "t": "Pola itu pasti berlaku selamanya",
       "w": "Pola bisa berubah, misalnya saat libur atau ada perbaikan jalan. Tetap perlu dicek."
      }
     ],
     "r": "Tepat. Pola membuat kamu bisa memperkirakan kejadian berikutnya dan menyiapkan diri.",
     "h": "Apa yang bisa kamu lakukan kalau kamu tahu sebelumnya kapan macet terjadi?"
    },
    {
     "k": "dd",
     "tag": "p2",
     "q": "Tempatkan tiap kartu ke kotak yang tepat.",
     "z": {
      "a": "Menunjukkan pola",
      "b": "Bukan pola"
     },
     "it": [
      {
       "t": "Lampu lalu lintas: merah, kuning, hijau, lalu ulang",
       "z": "a"
      },
      {
       "t": "Toko ramai setiap akhir pekan",
       "z": "a"
      },
      {
       "t": "Alarm berbunyi setiap pukul 06.00",
       "z": "a"
      },
      {
       "t": "Sekali menemukan uang di jalan",
       "z": "b"
      },
      {
       "t": "Hujan deras mendadak yang belum pernah terjadi",
       "z": "b"
      }
     ],
     "r": "Betul. Kejadian yang berulang dan teratur adalah pola. Kejadian sekali saja belum bisa disebut pola.",
     "w": "Pola butuh pengulangan yang teratur. Kejadian satu kali tidak cukup untuk menyimpulkan pola.",
     "h": "Tanyakan pada tiap kartu: apakah ini berulang dengan cara yang bisa diperkirakan?"
    }
   ]
  },
  {
   "id": "abstraction",
   "no": 4,
   "title": "Abstraction",
   "minutes": 8,
   "goal": "Kamu bisa memilih detail yang penting dan mengabaikan yang tidak diperlukan.",
   "material": [
    "Abstraction adalah memilih informasi yang penting untuk tujuanmu, dan mengabaikan detail yang tidak membantu. Hasilnya adalah gambaran yang lebih sederhana dan mudah dipahami.",
    "Detail yang penting tergantung tujuannya. Warna sofa tidak penting di denah evakuasi, tetapi sangat penting di desain interior. Jadi tanyakan dulu: apa tujuannya?"
   ],
   "example": "Peta jalur MRT hanya menampilkan garis dan nama stasiun, tanpa gedung atau pohon. Itu cukup untuk membantumu memilih rute.",
   "viz": {
    "top": "Banyak detail",
    "parts": [
     "Penting",
     "Penting",
     "Abaikan",
     "Abaikan"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "a1",
     "q": "Kamu membuat peta jalur MRT untuk penumpang. Informasi mana yang paling penting?",
     "o": [
      {
       "t": "Warna cat gedung stasiun",
       "w": "Warna cat tidak membantu penumpang memilih rute."
      },
      {
       "t": "Nama stasiun dan urutannya",
       "ok": true
      },
      {
       "t": "Jumlah pohon di sekitar stasiun",
       "w": "Pohon tidak berpengaruh pada rute yang dipilih."
      },
      {
       "t": "Merek sepatu penumpang",
       "w": "Detail ini tidak ada hubungannya dengan tujuan peta."
      }
     ],
     "r": "Tepat. Untuk memilih rute, penumpang cukup tahu nama stasiun dan urutannya.",
     "h": "Tanyakan: informasi apa yang dibutuhkan penumpang untuk sampai ke tujuan?"
    },
    {
     "k": "tf",
     "tag": "a1",
     "q": "Benar atau salah: abstraction berarti menghapus semua detail dari masalah.",
     "o": [
      {
       "t": "Benar",
       "w": "Abstraction hanya mengabaikan detail yang tidak relevan. Detail yang penting untuk tujuan tetap dipertahankan."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Abstraction memilah: simpan yang penting, abaikan yang tidak relevan.",
     "h": "Kalau semua detail dihapus, apakah peta MRT masih bisa dipakai memilih rute?"
    },
    {
     "k": "mc",
     "tag": "a2",
     "q": "Mengapa denah evakuasi gedung tidak menampilkan warna sofa?",
     "o": [
      {
       "t": "Karena sofa itu tidak ada",
       "w": "Sofanya ada, hanya saja informasinya tidak membantu tujuan denah."
      },
      {
       "t": "Karena tidak membantu tujuan denah dan membuat denah lebih mudah dibaca",
       "ok": true
      },
      {
       "t": "Karena denah harus sesederhana mungkin, walau hal penting ikut hilang",
       "w": "Menyederhanakan tidak boleh membuang hal yang penting, misalnya pintu keluar."
      },
      {
       "t": "Karena warna selalu tidak penting",
       "w": "Penting atau tidaknya tergantung tujuan. Untuk desain interior, warna sofa justru penting."
      }
     ],
     "r": "Tepat. Detail dipilih sesuai tujuan. Untuk evakuasi, yang penting adalah jalur dan pintu keluar.",
     "h": "Apa tujuan denah evakuasi? Informasi mana yang membantu orang keluar dengan cepat?"
    },
    {
     "k": "dd",
     "tag": "a2",
     "q": "Kamu membuat aplikasi pemesanan ojek. Tempatkan tiap kartu ke kotak yang tepat.",
     "z": {
      "a": "Penting untuk aplikasi",
      "b": "Boleh diabaikan"
     },
     "it": [
      {
       "t": "Lokasi jemput",
       "z": "a"
      },
      {
       "t": "Tujuan",
       "z": "a"
      },
      {
       "t": "Tarif perjalanan",
       "z": "a"
      },
      {
       "t": "Warna helm pengemudi",
       "z": "b"
      },
      {
       "t": "Lagu favorit pengemudi",
       "z": "b"
      }
     ],
     "r": "Betul. Lokasi jemput, tujuan, dan tarif dibutuhkan untuk memesan. Warna helm dan lagu favorit tidak mempengaruhi pemesanan.",
     "w": "Detail yang penting adalah yang dibutuhkan supaya tujuan aplikasi tercapai, yaitu memesan perjalanan.",
     "h": "Tanyakan pada tiap kartu: apakah aplikasi bisa memproses pesanan tanpa informasi ini?"
    }
   ]
  },
  {
   "id": "algorithm",
   "no": 5,
   "title": "Algorithm",
   "minutes": 8,
   "goal": "Kamu bisa menyusun langkah penyelesaian yang berurutan dan jelas.",
   "material": [
    "Algoritma adalah urutan langkah yang jelas untuk mencapai suatu tujuan. Algoritma yang baik berurutan, setiap langkahnya jelas, dan berakhir ketika tujuan tercapai.",
    "Urutan penting: menyeduh teh sebelum ada air panas tidak akan berhasil. Langkah juga perlu jelas supaya siapa pun yang membacanya melakukan hal yang sama. \"Secukupnya\" bisa berarti lain bagi tiap orang."
   ],
   "example": "Resep mi instan adalah algoritma: didihkan air, masukkan mi, tunggu 3 menit, tiriskan, tambahkan bumbu.",
   "viz": {
    "top": "Tujuan",
    "parts": [
     "Langkah 1",
     "Langkah 2",
     "Langkah 3",
     "Selesai"
    ]
   },
   "questions": [
    {
     "k": "mc",
     "tag": "g1",
     "q": "Manakah urutan yang tepat untuk membuat teh manis?",
     "o": [
      {
       "t": "Tambah gula, aduk, didihkan air, seduh teh",
       "w": "Gula tidak bisa diaduk ke dalam air yang belum ada. Mulailah dari menyiapkan air."
      },
      {
       "t": "Didihkan air, seduh teh, tambah gula, aduk",
       "ok": true
      },
      {
       "t": "Aduk, seduh teh, didihkan air, tambah gula",
       "w": "Mengaduk di awal tidak ada gunanya karena belum ada apa pun di gelas."
      },
      {
       "t": "Seduh teh, didihkan air, aduk, tambah gula",
       "w": "Teh tidak bisa diseduh sebelum airnya panas."
      }
     ],
     "r": "Tepat. Urutannya harus masuk akal: air panas dulu, baru seduh, lalu gula, lalu aduk.",
     "h": "Pikirkan apa yang harus ada lebih dulu sebelum langkah berikutnya bisa dilakukan."
    },
    {
     "k": "tf",
     "tag": "g1",
     "q": "Benar atau salah: urutan langkah dalam algoritma tidak berpengaruh pada hasil.",
     "o": [
      {
       "t": "Benar",
       "w": "Urutan sangat berpengaruh. Menukar langkah bisa membuat hasil berbeda atau gagal."
      },
      {
       "t": "Salah",
       "ok": true
      }
     ],
     "r": "Tepat. Urutan langkah menentukan hasil, jadi algoritma harus disusun dengan hati-hati.",
     "h": "Bayangkan memakai sepatu sebelum memakai kaus kaki. Apakah hasilnya sama?"
    },
    {
     "k": "mc",
     "tag": "g2",
     "q": "Langkah \"Masukkan garam secukupnya\" kurang baik untuk sebuah algoritma. Mengapa?",
     "o": [
      {
       "t": "Karena terlalu pendek",
       "w": "Panjang langkah bukan masalahnya. Masalahnya ada pada kejelasan isi."
      },
      {
       "t": "Karena terlalu samar, tiap orang bisa menafsirkannya berbeda",
       "ok": true
      },
      {
       "t": "Karena garam tidak boleh dipakai",
       "w": "Garam boleh dipakai. Yang bermasalah adalah ukuran \"secukupnya\" yang tidak jelas."
      },
      {
       "t": "Karena algoritma tidak boleh menyebut bahan",
       "w": "Algoritma boleh menyebut bahan, bahkan sebaiknya jelas, misalnya \"1 sendok teh garam\"."
      }
     ],
     "r": "Tepat. Langkah yang baik tidak ambigu, misalnya \"masukkan 1 sendok teh garam\".",
     "h": "Kalau dua orang membaca langkah ini, apakah mereka pasti memasukkan jumlah yang sama?"
    },
    {
     "k": "dd",
     "tag": "g2",
     "q": "Tempatkan tiap kartu ke kotak yang tepat.",
     "z": {
      "a": "Ciri algoritma yang baik",
      "b": "Bukan ciri algoritma yang baik"
     },
     "it": [
      {
       "t": "Langkahnya berurutan",
       "z": "a"
      },
      {
       "t": "Setiap langkah jelas dan tidak ambigu",
       "z": "a"
      },
      {
       "t": "Berakhir setelah tujuan tercapai",
       "z": "a"
      },
      {
       "t": "Langkahnya boleh dilewati sesuka hati",
       "z": "b"
      },
      {
       "t": "Bisa ditafsirkan berbeda oleh tiap orang",
       "z": "b"
      }
     ],
     "r": "Betul. Algoritma yang baik berurutan, jelas, dan punya akhir. Langkah yang bisa dilewati atau ditafsirkan berbeda membuat hasilnya tidak bisa diandalkan.",
     "w": "Algoritma harus bisa diikuti siapa pun dengan hasil yang sama. Langkah yang samar atau boleh dilewati merusak hal itu.",
     "h": "Tanyakan: kalau dua orang mengikuti langkah ini, apakah hasilnya pasti sama?"
    }
   ]
  }
 ],
 "finalQuiz": [
  {
   "k": "mc",
   "tag": "w1",
   "q": "Pernyataan mana yang benar tentang computational thinking?",
   "o": [
    {
     "t": "Hanya bisa dipakai di depan komputer",
     "w": "Computational thinking adalah cara berpikir, jadi bisa dipakai tanpa komputer."
    },
    {
     "t": "Bisa dipakai dalam kehidupan sehari-hari, termasuk tanpa komputer",
     "ok": true
    },
    {
     "t": "Sama dengan menghafal bahasa pemrograman",
     "w": "Pemrograman hanya salah satu cara menerapkannya."
    },
    {
     "t": "Hanya untuk orang yang bekerja di bidang teknologi",
     "w": "Siapa saja bisa memakainya, di bidang apa pun."
    }
   ],
   "r": "Computational thinking adalah cara berpikir yang bisa dipakai siapa saja, dengan atau tanpa komputer.",
   "h": "Ingat contoh memasak: ada resep, ada bahan yang disiapkan bertahap, tetapi tidak ada komputer."
  },
  {
   "k": "mc",
   "tag": "w2",
   "q": "Komponen mana yang tugas utamanya menyusun urutan langkah penyelesaian?",
   "o": [
    {
     "t": "Pattern recognition",
     "w": "Pattern recognition mencari keteraturan, bukan menyusun langkah."
    },
    {
     "t": "Algorithm",
     "ok": true
    },
    {
     "t": "Abstraction",
     "w": "Abstraction memilih informasi yang penting, bukan menyusun langkah."
    },
    {
     "t": "Decomposition",
     "w": "Decomposition memecah masalah menjadi bagian kecil, tetapi belum menyusun urutannya."
    }
   ],
   "r": "Algorithm adalah komponen yang menyusun langkah-langkah secara berurutan dan jelas.",
   "h": "Resep makanan adalah contoh dari komponen ini."
  },
  {
   "k": "mc",
   "tag": "d1",
   "q": "Kamu mendapat tugas proyek besar dengan waktu dua minggu. Langkah pertama yang paling tepat?",
   "o": [
    {
     "t": "Langsung mengerjakan dari awal sampai akhir tanpa rencana",
     "w": "Tanpa rencana, proyek besar mudah terasa berat dan sulit dipantau."
    },
    {
     "t": "Memecahnya menjadi tugas-tugas kecil dan memberi tenggat tiap tugas",
     "ok": true
    },
    {
     "t": "Menunda sampai sehari sebelum tenggat",
     "w": "Menunda tidak membuat masalah jadi lebih kecil."
    },
    {
     "t": "Mengerjakan bagian paling mudah saja",
     "w": "Itu membuat bagian lain terabaikan. Semua bagian perlu dikerjakan."
    }
   ],
   "r": "Memecah proyek jadi tugas kecil membuatnya lebih terarah dan mudah dipantau.",
   "h": "Ingat cara kita menghadapi masalah yang kompleks: dibagi jadi bagian-bagian kecil."
  },
  {
   "k": "dd",
   "tag": "d2",
   "q": "Masalah: \"Menyelenggarakan lomba 17 Agustus\". Tempatkan tiap kartu ke kotak yang tepat.",
   "z": {
    "a": "Sub-masalah",
    "b": "Bukan sub-masalah"
   },
   "it": [
    {
     "t": "Menyusun daftar lomba",
     "z": "a"
    },
    {
     "t": "Menyiapkan hadiah",
     "z": "a"
    },
    {
     "t": "Mengundang peserta",
     "z": "a"
    },
    {
     "t": "Kemarin cuaca cerah",
     "z": "b"
    },
    {
     "t": "Lomba itu pasti seru",
     "z": "b"
    }
   ],
   "r": "Betul. Menyusun daftar lomba, menyiapkan hadiah, dan mengundang peserta adalah pekerjaan yang perlu diselesaikan.",
   "w": "Sub-masalah adalah pekerjaan yang harus diselesaikan. Cuaca kemarin atau opini tidak termasuk pekerjaan.",
   "h": "Tanyakan pada tiap kartu: apakah ini harus dikerjakan supaya lombanya terlaksana?"
  },
  {
   "k": "tf",
   "tag": "p1",
   "q": "Benar atau salah: toko yang selalu ramai setiap Sabtu selama empat minggu berturut-turut menunjukkan sebuah pola.",
   "o": [
    {
     "t": "Benar",
     "ok": true
    },
    {
     "t": "Salah",
     "w": "Kejadian yang berulang secara teratur, seperti ramai tiap Sabtu, adalah contoh pola."
    }
   ],
   "r": "Tepat. Keramaian yang berulang di hari yang sama adalah pola yang bisa dimanfaatkan.",
   "h": "Pola butuh pengulangan yang teratur. Apakah ini berulang?"
  },
  {
   "k": "mc",
   "tag": "p2",
   "q": "Kasir tahu stok mi instan selalu habis di akhir bulan. Cara terbaik memanfaatkan pola ini?",
   "o": [
    {
     "t": "Tidak melakukan apa pun",
     "w": "Padahal pola ini bisa dipakai untuk bersiap lebih awal."
    },
    {
     "t": "Menambah stok sebelum akhir bulan",
     "ok": true
    },
    {
     "t": "Menaikkan harga mi sepanjang tahun",
     "w": "Itu tidak berhubungan dengan pola kehabisan stok di akhir bulan."
    },
    {
     "t": "Berhenti menjual mi instan",
     "w": "Menyerah tidak memanfaatkan pola. Lebih baik bersiap."
    }
   ],
   "r": "Mengetahui pola membuat kamu bisa bersiap, dalam hal ini menambah stok sebelum akhir bulan.",
   "h": "Kalau kamu tahu kapan stok habis, kapan sebaiknya kamu menambahnya?"
  },
  {
   "k": "mc",
   "tag": "a1",
   "q": "Kamu membuat aplikasi jadwal pelajaran. Informasi mana yang paling perlu ditampilkan?",
   "o": [
    {
     "t": "Merek tas siswa",
     "w": "Detail ini tidak membantu siswa tahu jadwalnya."
    },
    {
     "t": "Mata pelajaran, hari, dan jam",
     "ok": true
    },
    {
     "t": "Warna seragam tiap hari",
     "w": "Warna seragam tidak diperlukan untuk membaca jadwal."
    },
    {
     "t": "Harga makanan di kantin",
     "w": "Informasi ini tidak berkaitan dengan jadwal pelajaran."
    }
   ],
   "r": "Mata pelajaran, hari, dan jam adalah inti sebuah jadwal. Detail lain bisa diabaikan.",
   "h": "Apa yang perlu diketahui siswa supaya tidak salah masuk kelas?"
  },
  {
   "k": "tf",
   "tag": "a2",
   "q": "Benar atau salah: peta yang menampilkan semua detail kota selalu lebih baik daripada peta yang disederhanakan.",
   "o": [
    {
     "t": "Benar",
     "w": "Terlalu banyak detail justru membuat peta sulit dibaca. Yang terbaik adalah detail yang sesuai tujuan."
    },
    {
     "t": "Salah",
     "ok": true
    }
   ],
   "r": "Tepat. Peta yang baik hanya menampilkan detail yang relevan dengan tujuannya.",
   "h": "Bayangkan peta MRT yang memuat setiap pohon dan bangunan. Apakah lebih mudah dibaca?"
  },
  {
   "k": "mc",
   "tag": "g1",
   "q": "Urutan mana yang tepat untuk mencuci tangan?",
   "o": [
    {
     "t": "Keringkan, gosok sabun, basahi, bilas",
     "w": "Mengeringkan di awal tidak masuk akal karena tangan belum dicuci."
    },
    {
     "t": "Basahi tangan, beri sabun, gosok, bilas, keringkan",
     "ok": true
    },
    {
     "t": "Beri sabun, keringkan, basahi, bilas",
     "w": "Sabun tidak bisa dibilas kalau sudah dikeringkan lebih dulu."
    },
    {
     "t": "Bilas, gosok, keringkan, beri sabun",
     "w": "Memberi sabun di akhir membuat langkah mencuci menjadi sia-sia."
    }
   ],
   "r": "Urutan yang tepat: basahi, beri sabun, gosok, bilas, lalu keringkan.",
   "h": "Pikirkan langkah mana yang harus ada lebih dulu sebelum langkah berikutnya."
  },
  {
   "k": "mc",
   "tag": "g2",
   "q": "Instruksi mana yang paling jelas untuk sebuah algoritma?",
   "o": [
    {
     "t": "Rebus air sebentar",
     "w": "\"Sebentar\" bisa berarti 1 menit atau 10 menit, jadi tidak jelas."
    },
    {
     "t": "Rebus air selama 5 menit",
     "ok": true
    },
    {
     "t": "Rebus air sampai menurutmu cukup",
     "w": "\"Menurutmu\" berbeda untuk tiap orang, jadi hasilnya tidak konsisten."
    },
    {
     "t": "Rebus air seperlunya",
     "w": "\"Seperlunya\" tidak memberi ukuran yang jelas."
    }
   ],
   "r": "Instruksi dengan ukuran yang jelas, seperti \"5 menit\", bisa diikuti siapa pun dengan hasil yang sama.",
   "h": "Pilih langkah yang tidak mungkin ditafsirkan berbeda oleh dua orang."
  }
 ]
};
