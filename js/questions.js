// 101 Pertanyaan — Yuk, Ngobrol!
// Gaya bahasa: santai, hangat, pake "kamu"

const finalQuestions = [

    // =========================================================
    // 1. KULIAH, KERJA & BERTAHAN HIDUP — 15
    // =========================================================
    {
        id: 1,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Kalau tugas dan kerjaan datang bersamaan, biasanya yang pertama kamu selametin apa?"
    },
    {
        id: 2,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Menurut kamu, lebih capek mana: kerja, kuliah, atau pura-pura masih punya energi buat bersosialisasi?"
    },
    {
        id: 3,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Pernah nggak sih ngerasa pengen bilang 'udah lah, aku pensiun jadi manusia produktif'? Ceritain dong wkwk."
    },
    {
        id: 4,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Kalau tiba-tiba dikasih satu hari bebas total tanpa kerja dan kuliah, kamu paling pengen ngapain?"
    },
    {
        id: 5,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Hal paling absurd atau lucu yang pernah kamu alamin pas lagi kerja?"
    },
    {
        id: 6,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Strategi paling ampuh versi kamu buat bertahan hidup pas tugas dan kerjaan lagi numpuk apa?"
    },
    {
        id: 7,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Kalau kamu bisa hapus satu jenis tugas dari dunia kampus selamanya, tugas apa yang kamu hapus?"
    },
    {
        id: 8,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Hal kecil apa yang bikin kamu ngerasa 'oke, hari ini lumayan berhasil bertahan'?"
    },
    {
        id: 9,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Kamu tipe yang langsung ngerjain tugas atau tim menatap deadline sambil berharap keajaiban?"
    },
    {
        id: 10,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Kalau kehidupan kuliah sambil kerja punya slogan resmi, menurut kamu slogannya apa?"
    },
    {
        id: 11,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Momen apa yang paling bikin kamu sadar kalau ternyata jadi dewasa itu capek juga ya?"
    },
    {
        id: 12,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Kalau tiba-tiba uang dan waktu bukan masalah, skill atau bidang apa yang pengen kamu pelajarin?"
    },
    {
        id: 13,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Seberapa sering kamu ngerasa hidup sekarang isinya cuma kerja, kuliah, tidur, ulang lagi?"
    },
    {
        id: 14,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Apa bentuk healing paling realistis buat orang yang lagi sibuk nyari rupiah?"
    },
    {
        id: 15,
        category: "Kuliah, Kerja & Bertahan Hidup",
        text: "Kalau kamu bisa kasih satu nasihat ke versi dirimu yang baru mulai kuliah sambil kerja, kamu mau bilang apa?"
    },

    // =========================================================
    // 2. MAGER, TIDUR & KEHIDUPAN SETELAH ENERGI HABIS — 12
    // =========================================================
    {
        id: 16,
        category: "Mager, Tidur & Energi Habis",
        text: "Skala 1–10, seberapa kuat rasa magernya kamu kalau hari Minggu pagi?"
    },
    {
        id: 17,
        category: "Mager, Tidur & Energi Habis",
        text: "Kalau weekend ideal versi kamu, lebih banyak keluar rumah atau rebahan tanpa rasa bersalah?"
    },
    {
        id: 18,
        category: "Mager, Tidur & Energi Habis",
        text: "Hal apa yang cukup kuat buat bikin kamu rela melawan rasa mager?"
    },
    {
        id: 19,
        category: "Mager, Tidur & Energi Habis",
        text: "Kalau kamu lagi capek banget, ritual paling sederhana buat ngembaliin energi apa?"
    },
    {
        id: 20,
        category: "Mager, Tidur & Energi Habis",
        text: "Kamu lebih susah bangun dari kasur atau lebih susah berhenti main HP sebelum tidur?"
    },
    {
        id: 21,
        category: "Mager, Tidur & Energi Habis",
        text: "Kalau satu hari kamu boleh rebahan tanpa kewajiban apa pun, kira-kira kamu bakal produktif berapa persen? Jujur aja wkwk."
    },
    {
        id: 22,
        category: "Mager, Tidur & Energi Habis",
        text: "Tidur siang itu kebutuhan manusia atau jebakan yang bikin bangun-bangun tambah pusing?"
    },
    {
        id: 23,
        category: "Mager, Tidur & Energi Habis",
        text: "Hal paling random yang pernah kamu lakuin cuma karena lagi mager ngapa-ngapain?"
    },
    {
        id: 24,
        category: "Mager, Tidur & Energi Habis",
        text: "Kalau harus milih: punya energi banyak tapi sibuk terus, atau banyak waktu tapi bawaan mager?"
    },
    {
        id: 25,
        category: "Mager, Tidur & Energi Habis",
        text: "Seberapa susah sih membujuk diri sendiri buat keluar rumah kalau sebenernya kamu udah nyaman di kasur?"
    },
    {
        id: 26,
        category: "Mager, Tidur & Energi Habis",
        text: "Kalau rasa mager punya bentuk fisik, menurut kamu dia bakal kelihatan kayak apa?"
    },
    {
        id: 27,
        category: "Mager, Tidur & Energi Habis",
        text: "Lebih bahagia mana: tiba-tiba ada acara seru atau tiba-tiba semua rencana dibatalkan dan kamu bisa tidur?"
    },

    // =========================================================
    // 3. TEMPAT ASAL, PERJALANAN & KEPRI — 12
    // =========================================================
    {
        id: 28,
        category: "Tempat Asal & Perjalanan",
        text: "Dari semua tempat yang pernah kamu tinggali atau kunjungi, mana yang paling terasa kayak rumah?"
    },
    {
        id: 29,
        category: "Tempat Asal & Perjalanan",
        text: "Kalau kamu jadi tour guide sehari, kamu paling pengen ngajak orang ke tempat mana dan kenapa?"
    },
    {
        id: 30,
        category: "Tempat Asal & Perjalanan",
        text: "Ada tempat yang kalau kamu datangi lagi langsung bikin nostalgia? Tempat apa?"
    },
    {
        id: 31,
        category: "Tempat Asal & Perjalanan",
        text: "Kalau disuruh pilih liburan santai: pantai Bintan, keliling kota, atau pulang ke tempat yang penuh kenangan?"
    },
    {
        id: 32,
        category: "Tempat Asal & Perjalanan",
        text: "Pengalaman perjalanan paling lucu atau paling apes yang pernah kamu alami?"
    },
    {
        id: 33,
        category: "Tempat Asal & Perjalanan",
        text: "Menurut kamu, tempat yang underrated tapi sebenarnya layak dikunjungi itu di mana?"
    },
    {
        id: 34,
        category: "Tempat Asal & Perjalanan",
        text: "Kalau tiba-tiba ada tiket gratis ke mana aja di Indonesia, kamu mau pergi ke mana dulu?"
    },
    {
        id: 35,
        category: "Tempat Asal & Perjalanan",
        text: "Kamu lebih menikmati perjalanan karena tempat tujuannya atau karena orang yang pergi bareng?"
    },
    {
        id: 36,
        category: "Tempat Asal & Perjalanan",
        text: "Kalau harus tinggal setahun di kota selain tempat kamu sekarang, kota mana yang menarik buat dicoba?"
    },
    {
        id: 37,
        category: "Tempat Asal & Perjalanan",
        text: "Ada makanan atau kebiasaan dari daerah asal yang paling kamu rindukan?"
    },
    {
        id: 38,
        category: "Tempat Asal & Perjalanan",
        text: "Kalau seseorang pertama kali dateng ke daerah yang punya cerita buat kamu, satu hal apa yang wajib dia tahu?"
    },
    {
        id: 39,
        category: "Tempat Asal & Perjalanan",
        text: "Menurut kamu, lahir di satu tempat tapi besar di tempat lain itu bikin identitas kamu lebih unik atau malah bikin bingung? Wkwk."
    },

    // =========================================================
    // 4. KOOR, GEREJA & KOMUNITAS — 15
    // =========================================================
    {
        id: 40,
        category: "Koor, Gereja & Komunitas",
        text: "Waktu pertama kali ikut koor, first impression kamu gimana?"
    },
    {
        id: 41,
        category: "Koor, Gereja & Komunitas",
        text: "Pernah ada momen lucu atau absurd pas latihan koor? Cerita dong wkwk."
    },
    {
        id: 42,
        category: "Koor, Gereja & Komunitas",
        text: "Pernah salah masuk nada terus pura-pura kayak nggak ada yang terjadi? Wkwk."
    },
    {
        id: 43,
        category: "Koor, Gereja & Komunitas",
        text: "Kalau ada satu lagu misa atau rohani yang gampang banget nyangkut di kepala, lagu apa?"
    },
    {
        id: 44,
        category: "Koor, Gereja & Komunitas",
        text: "Menurut kamu, bagian paling susah dari ikut koor itu teknis nyanyinya atau konsisten datang latihan?"
    },
    {
        id: 45,
        category: "Koor, Gereja & Komunitas",
        text: "Hal apa yang bikin kamu akhirnya betah di suatu komunitas?"
    },
    {
        id: 46,
        category: "Koor, Gereja & Komunitas",
        text: "Kalau tiba-tiba disuruh solo tanpa persiapan, kamu bakal pede, panik, atau pura-pura hilang?"
    },
    {
        id: 47,
        category: "Koor, Gereja & Komunitas",
        text: "Momen pelayanan atau kegiatan gereja yang paling kamu inget sampai sekarang?"
    },
    {
        id: 48,
        category: "Koor, Gereja & Komunitas",
        text: "Kalau komunitas koor ini punya award tahunan, kategori award apa yang paling lucu buat dibuat?"
    },
    {
        id: 49,
        category: "Koor, Gereja & Komunitas",
        text: "Lebih deg-degan mana: nyanyi di depan banyak orang atau disuruh ngomong dadakan di depan banyak orang?"
    },
    {
        id: 50,
        category: "Koor, Gereja & Komunitas",
        text: "Kalau kamu bisa milih satu kegiatan tambahan buat komunitas koor selain latihan dan pelayanan, kamu pengen kegiatan apa?"
    },
    {
        id: 51,
        category: "Koor, Gereja & Komunitas",
        text: "Ada tipe orang di komunitas yang menurut kamu selalu bikin suasana jadi lebih hidup?"
    },
    {
        id: 52,
        category: "Koor, Gereja & Komunitas",
        text: "Orang lain pertama kali liat kamu di koor biasanya ngira kamu orang yang kayak gimana?"
    },
    {
        id: 53,
        category: "Koor, Gereja & Komunitas",
        text: "Hal paling memalukan yang bisa terjadi pas lagi tugas koor menurut kamu apa?"
    },
    {
        id: 54,
        category: "Koor, Gereja & Komunitas",
        text: "Kalau suatu hari komunitas koor bikin jalan-jalan atau retreat, kamu lebih semangat karena acaranya atau karena bisa kumpul bareng?"
    },

    // =========================================================
    // 5. MASA SEKOLAH, GAP YEAR & VERSI DIRI DULU — 10
    // =========================================================
    {
        id: 55,
        category: "Masa Sekolah & Gap Year",
        text: "Waktu SMA, kamu tipe murid yang kayak gimana?"
    },
    {
        id: 56,
        category: "Masa Sekolah & Gap Year",
        text: "Kalau teman SMA liat kamu sekarang, kira-kira perubahan paling besar yang mereka sadari apa?"
    },
    {
        id: 57,
        category: "Masa Sekolah & Gap Year",
        text: "Ada kebiasaan atau fase memalukan waktu sekolah yang sekarang kalau diingat bikin 'ya ampun ngapain dulu aku begitu'? Wkwk."
    },
    {
        id: 58,
        category: "Masa Sekolah & Gap Year",
        text: "Apa hal yang paling kamu pelajari selama masa gap year?"
    },
    {
        id: 59,
        category: "Masa Sekolah & Gap Year",
        text: "Kalau kamu bisa kirim pesan ke dirimu sendiri pas baru lulus SMA, kamu mau bilang apa?"
    },
    {
        id: 60,
        category: "Masa Sekolah & Gap Year",
        text: "Mata pelajaran yang dulu paling kamu suka dan yang paling bikin kamu pengen nyerah?"
    },
    {
        id: 61,
        category: "Masa Sekolah & Gap Year",
        text: "Kamu dulu lebih sering duduk di depan, tengah, belakang, atau tergantung situasi?"
    },
    {
        id: 62,
        category: "Masa Sekolah & Gap Year",
        text: "Ada guru yang sampai sekarang masih kamu inget? Karena baik, lucu, killer, atau alasan lain?"
    },
    {
        id: 63,
        category: "Masa Sekolah & Gap Year",
        text: "Kalau kamu bisa balik ke satu hari di masa sekolah cuma buat ngalami lagi, hari apa yang kamu pilih?"
    },
    {
        id: 64,
        category: "Masa Sekolah & Gap Year",
        text: "Menurut kamu, versi dirimu yang umur 17 tahun bakal bangga atau bingung liat hidup kamu sekarang?"
    },

    // =========================================================
    // 6. HOBI, HIBURAN & KEHIDUPAN SEHARI-HARI — 15
    // =========================================================
    {
        id: 65,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Kalau disuruh rekomendasiin satu film atau series ke orang lain, apa yang paling kamu rekomendasiin?"
    },
    {
        id: 66,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Kamu nonton drakor nggak? Kalau iya, drakor apa yang paling kamu suka?"
    },
    {
        id: 67,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Kalau lagi bad mood, makanan atau minuman apa yang paling mungkin nyelamatin hari kamu?"
    },
    {
        id: 68,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Aplikasi apa aja sih yang sering kamu buka selain WA sama IG?"
    },
    {
        id: 69,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Dari semua drakor yang pernah kamu tonton, mana yang paling berkesan buat kamu?"
    },
    {
        id: 70,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Musik atau lagu apa yang akhir-akhir ini sering kamu putar?"
    },
    {
        id: 71,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Hal kecil apa yang hampir selalu kamu lakuin sebelum tidur?"
    },
    {
        id: 72,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Kalau kamu boleh hapus satu aktivitas kecil yang selalu nyita waktu kamu, aktivitas apa?"
    },
    {
        id: 73,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Makanan apa yang kalau kamu liat di menu biasanya susah banget ditolak?"
    },
    {
        id: 74,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Kamu lebih menikmati malam yang tenang sendiri atau kumpul santai sama beberapa orang?"
    },
    {
        id: 75,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Kalau hari ini hidup kamu dijadikan film, genre-nya kira-kira apa?"
    },
    {
        id: 76,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Apa barang kecil yang hampir selalu harus ada di deket kamu?"
    },
    {
        id: 77,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Kalau disuruh milih satu makanan buat dimakan sambil ngobrol panjang, kamu pilih apa?"
    },
    {
        id: 78,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Kebiasaan kecil apa yang menurut kamu aneh tapi ternyata kamu lakuin hampir setiap hari?"
    },
    {
        id: 79,
        category: "Hobi & Kehidupan Sehari-hari",
        text: "Kalau kamu tiba-tiba punya satu minggu libur penuh, kamu lebih mungkin produktif atau malah berubah jadi spesies kasur?"
    },

    // =========================================================
    // 7. KARAKTER, KEBIASAAN & CARA BERSOSIALISASI — 13 (BANYAK FIRST IMPRESSION)
    // =========================================================
    {
        id: 80,
        category: "Karakter & Cara Bersosialisasi",
        text: "Kamu lebih enakan cerita lewat chat atau langsung?"
    },
    {
        id: 81,
        category: "Karakter & Cara Bersosialisasi",
        text: "Waktu pertama kali kita chat, kamu kira aku orang yang kayak gimana? Jujur aja wkwk."
    },
    {
        id: 82,
        category: "Karakter & Cara Bersosialisasi",
        text: "Apa hal pertama yang biasanya kamu perhatiin dari orang yang baru kamu kenal?"
    },
    {
        id: 83,
        category: "Karakter & Cara Bersosialisasi",
        text: "Pernah nggak sih kamu salah menilai seseorang di awal, ternyata setelah kenal lebih jauh dia beda banget?"
    },
    {
        id: 84,
        category: "Karakter & Cara Bersosialisasi",
        text: "Kalau orang pertama kali lihat kamu, biasanya mereka salah paham soal apa tentang kamu?"
    },
    {
        id: 85,
        category: "Karakter & Cara Bersosialisasi",
        text: "Dari semua kesan pertama yang pernah orang kasih ke kamu, mana yang paling bikin kamu kaget?"
    },
    {
        id: 86,
        category: "Karakter & Cara Bersosialisasi",
        text: "Menurut kamu, apa sih yang bikin obrolan sama seseorang terasa nyaman dari pertama kali?"
    },
    {
        id: 87,
        category: "Karakter & Cara Bersosialisasi",
        text: "Kalau ada orang yang bilang 'aku suka sama kamu' di pertemuan pertama, kamu bakal senang atau malah kabur? Wkwk."
    },
    {
        id: 88,
        category: "Karakter & Cara Bersosialisasi",
        text: "Pernah nggak sih kamu langsung ngerasa 'klik' sama seseorang di pertemuan pertama? Ceritain dong."
    },
    {
        id: 89,
        category: "Karakter & Cara Bersosialisasi",
        text: "Menurut kamu, kesan pertama yang paling berkesan itu biasanya dari penampilan, cara bicara, atau vibe orangnya?"
    },
    {
        id: 90,
        category: "Karakter & Cara Bersosialisasi",
        text: "Kalau orang yang baru dikenal tiba-tiba ngajak kamu ngobrol serius di awal, kamu bakal nyaman atau canggung?"
    },
    {
        id: 91,
        category: "Karakter & Cara Bersosialisasi",
        text: "Waktu pertama kali kamu lihat aku di koor, kamu mikir apa?"
    },
    {
        id: 92,
        category: "Karakter & Cara Bersosialisasi",
        text: "Kalau ketemu orang yang pendiem, biasanya kamu langsung ngebentuk opini atau kamu kasih waktu dulu?"
    },

    // =========================================================
    // 8. DEBAT RECEH & THIS OR THAT — 9
    // =========================================================
    {
        id: 93,
        category: "Debat Receh & This or That",
        text: "Bubur diaduk atau nggak? Dan kenapa pendapat kamu jelas paling bener? Wkwk."
    },
    {
        id: 94,
        category: "Debat Receh & This or That",
        text: "Sambal dipisah atau langsung dicampur? Bela pilihan kamu!"
    },
    {
        id: 95,
        category: "Debat Receh & This or That",
        text: "Mie goreng atau mie kuah?"
    },
    {
        id: 96,
        category: "Debat Receh & This or That",
        text: "Lebih baik dateng 20 menit kepagian atau telat 10 menit?"
    },
    {
        id: 97,
        category: "Debat Receh & This or That",
        text: "Lauk terenak dimakan duluan atau disimpan buat suapan terakhir?"
    },
    {
        id: 98,
        category: "Debat Receh & This or That",
        text: "Pantai atau gunung?"
    },
    {
        id: 99,
        category: "Debat Receh & This or That",
        text: "Kalau punya satu kekuatan super, kamu pilih teleportasi atau baca pikiran?"
    },
    {
        id: 100,
        category: "Debat Receh & This or That",
        text: "Kalau harus milih: bisa tidur kapan aja atau nggak pernah ngerasa ngantuk?"
    },
    {
        id: 101,
        category: "Debat Receh & This or That",
        text: "Pertanyaan pamungkas: kalau ada yang nawarin jodoh bule tapi kamu harus pindah negara besok, gas atau pikir-pikir dulu? Wkwk."
    }
];
