const hamburger = document.querySelector(".respon");
const garis = document.querySelectorAll(".respon-garis");
const container2 = document.querySelector(".container2");
const container = document.querySelector(".container");
const nav = document.querySelector(".navbar");
const linkArtikel = document.querySelector(".artikel");
const main1 = document.querySelector(".main1");
const navbar = document.querySelector(".navbar");
const home = document.querySelector(".home");
const bungkusNav = document.querySelector(".bungkus-nav");
const linkNavbar = document.querySelectorAll(".link-navbar");
const container11 = document.querySelector(".container11");
const main2 = document.querySelector(".main2");
const main3 = document.querySelector(".main3");
const inputSearch = document.querySelector(".container8-bung-input");
const buttonSearch = document.querySelector(".container8-button");
const container25 = document.querySelector(".container25");
const subLinks = document.querySelectorAll(".sub-links-a");
const container9MainKonten = document.querySelector(".container9-main-konten");
const container9MainKonten2 = document.querySelector(".container9-main-konten2");
const silang = document.querySelector(".silang");
const alert = document.querySelector(".alert");
const corkembali = document.querySelector(".kembali");
const cornext = document.querySelector(".lanjut");
const container33 = document.querySelector(".container33");
const svgKembali = document.querySelector(".kembali-svg");
const svgLanjut = document.querySelector(".lanjut-svg");
const container31 = document.querySelector(".container31");
const contact = document.querySelector(".contact");
const main20 = document.querySelector(".main20");
const container221 = document.querySelector(".container221");
const main51 = document.querySelector(".main51");
const doctor = document.querySelector(".doctor");
const main50 = document.querySelector(".main50");
const obat = document.querySelector(".obat");
const butcontainer6 = document.querySelector(".container6-text-button");
const butcontainer7 = document.querySelector(".container7-text-button");
const butcontainer8 = document.querySelector(".container8-text-button");
const foot = document.querySelector(".footer2");
let width = screen.width;

// console.log(window.innerHeight);

function namaPembuat() {
  let namaPembuat = Math.random();

  if (namaPembuat <= 0.1) {
    namaPembuat = "Pak Sumarno";
  } else if (namaPembuat >= 0.11 && namaPembuat <= 0.2) {
    namaPembuat = "Bu Ririn";
  } else if (namaPembuat >= 0.21 && namaPembuat <= 0.3) {
    namaPembuat = "Pak Dodo";
  } else if (namaPembuat >= 0.31 && namaPembuat <= 0.4) {
    namaPembuat = "Bu Rani";
  } else if (namaPembuat >= 0.41 && namaPembuat <= 0.5) {
    namaPembuat = "Pak Didi";
  } else if (namaPembuat >= 0.51 && namaPembuat <= 0.6) {
    namaPembuat = "Mas Suyo";
  } else if (namaPembuat >= 0.61 && namaPembuat <= 0.7) {
    namaPembuat = "Pak Yato";
  } else if (namaPembuat >= 0.71 && namaPembuat <= 0.8) {
    namaPembuat = "Bu Tini";
  } else if (namaPembuat >= 0.81 && namaPembuat <= 0.9) {
    namaPembuat = "Pak Suman";
  } else {
    namaPembuat = "Bu Putri";
  }

  return namaPembuat;
}

let judul = [
  [
    "Kesehatan Mental",
    `Dampak Kesehatan Mental dan Diri Selama Pandemi`,
    `Apa Itu Psikopat? Apakah Anda Seorang Psikopat?`,
    `Mengapa Kita Mengingat-Ingat Masa Lalu? Apa Manfaatnya?`,
    `Peran Penting Guru BK Dalam Mendeteksi Depresi Pada Remaja`
  ],
  [
    `Berbagai Penelitian Tunjukkan Musik Berdampak Baik Bagi Psikologis Manusia Selama Pandemi`,
    `Cara Deteksi Stress Di tengah Pandemi Covid-19`,
    `Laki-Laki Jauh Lebih Berisiko Terkena Depresi Ketimbang Perempuan Di Daerah Miskin`,
    `Banyak Anak Muda Yang Mengklaim Dirinya Mengidap Gangguan Mental Setelah Menonton Joker: Inilah Bahaya 'Self Diagnosis'`
  ],
];

let judulSingkat = [
  [
    "Kesehatan Mental",
    `Dampak Kesehatan Mental dan Diri Selama Pandemi`,
    `Apa Itu Psikopat? Apakah Anda Seorang Psikopat?`,
    `Mengapa Kita Mengingat-Ingat Masa Lalu?...`,
    `Peran Penting Guru BK Dalam Mendeteksi...`,
  ],
  [
    `Berbagai Penelitian Tunjukkan Musik Berdampak.....`,
    `Cara Deteksi Stress Di tengah Pandemi.....`,
    `Laki-Laki Jauh Lebih Berisiko Terkena.....`,
    `Banyak Anak Muda Yang Mengklaim Dirinya.....`,
  ],
];

let slug = [
  [
    `Mental adalah hal-hal yang berkaitan dengan batin dan watak manusia...`,
    `Di masa pandemi tidak hanya penting menjaga kesehatan diri...`,
    `Tapi mungkin pertanyaan yang lebih besar adalah seberapa banyak...`,
    `Banyak dari kita yang senang menulis buku harian, membaca otobiografi...`,
    `Sekitar 140 dari 1.000 remaja di bawah usia 15 tahun dan 104...`,
  ],
  [
    `Kabar baik dari dunia musik, penelitian di berbagai belahan dunia.....`,
    `Dalam situasi yang tidak menentu dan pemberitaan mengenai pandemi.....`,
    `Depresi adalah penyebab disabilitas utama di seluruh dunia, dan jika tidak.....`,
    `Belakangan ini banyak film-film mengangkat bahasan.....`,
  ],
];

let body = [
  [
   
    `
    <div class="container-img-artikel">
      <img class="container-img-artikel-img" src="img/1.jpg" alt="" class="container16-img">
    </div>
    <h2 class="subJudul">Apa itu Kesehatan mental?</h2>
      <p class="paragraf">Mental adalah hal-hal yang berkaitan dengan batin dan watak manusia. Kesehatan mental yang baik adalah kondisi ketika batin kita berada dalam keadaan tentram dan tenang, sehingga memungkinkan kita untuk menikmati kehidupan sehari-hari dan menghargai orang lain di sekitar.</p>
      <p class="paragraf">Sebaliknya, orang yang kesehatan mentalnya terganggu akan mengalami gangguan suasana hati, kemampuan berpikir, serta kendali emosi yang pada akhirnya bisa mengarah pada perilaku buruk.</p>
      
      <h2 class="subJudul">Mengapa Kesehatan mental itu penting?</h2>
      <p class="paragraf">Menurut CDC, kesehatan mental mencakup kesejahteraan emosional, psikologis, dan sosial.Hal ini akan memengaruhi cara seseorang berpikir, merasa, dan bertindak. Kesehatan mental juga membantu menentukan bagaimana seseorang tersebut menangani stres, berhubungan dengan orang lain, dan membuat pilihan yang sehat.</p>
      <h2 class="subJudul">Apa saja yang mempengaruhi Kesehatan mental?</h2>
      <p class="paragraf">Kesehatan mental seseorang dapat berubah seiring dengan berjalannya waktu. Hal ini tergantung pada banyak faktor yang Anda temui atau alami selama menjalani kehidupan.</p>
      <p class="paragraf">Tak hanya itu ada beberapa hal lain yang mempengaruhi Kesehatan mental. Berikut adalah beberapa kondisi yang mungkin memengaruhi kesehatan mental seseorang:</p>
      <ul class="ul-artikel">
        <li class="li-artikel">Faktor biologis, seperti genetik atau ketidakseimbangan kimiawi di otak.</li>
        <li class="li-artikel">Pengalaman hidup yang pahit, seperti trauma, kekerasan, atau pelecehan.</li>
        <li class="li-artikel">Riwayat keluarga dengan masalah gangguan mental.</li>
        <li class="li-artikel">Gaya hidup, seperti pola makan yang buruk, aktivitas fisik yang kurang, mengonsumsi alkohol berlebihan, atau menggunakan narkoba.</li>
      </ul>
      
      <h2 class="subJudul">Bagaimana cara menjaga Kesehatan mental?</h2>
      <p class="paragraf">langkah-langkah atau cara-cara menjaga kesehatan mental di bawah ini:</p>
      <ul class="ul-artikel">
        <li class="li-artikel">Curhat atau berbicara tentang perasaan Anda kepada orang yang dipercaya, dapat membantu Anda merasa didukung dan tidak sendirian.</li>
        <li class="li-artikel">Tetap aktif, seperti olahraga. Pasalnya, olahraga dapat meningkatkan suasana hati Anda.</li>
        <li class="li-artikel">Terapkan pola makan sehat guna menjaga fungsi otak dan organ lainnya di tubuh yang baik untuk mental Anda.</li>
        <li class="li-artikel">Hindari alkohol, merokok, dan narkoba yang dapat memengaruhi mental dan merusak organ tubuh Anda. Cek kadar alkohol dalam darah Anda melalui kalkulator kesehatan ini.</li>
        <li class="li-artikel">Tidur yang cukup dapat mengelola suasana hati dan emosi serta mencegah depresi dan gangguan kecemasan.</li>
        <li class="li-artikel">Bersosialisasi serta menjaga hubungan baik dan tetap terhubung dengan keluarga atau kerabat.</li>
      </ul>`,
 
       `
        <p class="paragraf">Di masa pandemi tidak hanya penting menjaga kesehatan diri, melainkan juga kesehatan mental. Di Hari Kesehatan Nasional, kita kembali diajak dan diingatkan betapa pentingnya kesehatan jiwa dan raga secara menyeluruh, terutama di masa pandemi.</p>
        
        <p class="paragraf">Mengawali Hari Kesehatan Nasional, Meta dalam Halaman Facebook Meta Indonesia menampilkan Sepri Andi yang merupakan pendiri dan inisiator dari komunitas Social Connect. Komunitas ini ia bangun berawal dari pengalaman bullying yang ia rasakan.</p>
        
        <p class="paragraf">Tidak hanya itu, komunitas Sahabat Kanker Anak dan Wellbeing Shelter juga akan menceritakan kisah perjuangan mereka dalam memberikan konseling dan pendampingan bagi anak-anak penderita kanker.</p>
        
        <p class="paragraf">Dari masing-masing konten yang dihadirkan, Meta mengidentifikasi dampak yang signifikan dari adanya pandemi terhadap kesehatan mental dan interaksi sosial. Apa saja?</p>
        <ol class="ol-artikel">
        <li classs="li-artikel">Perasaan negatif akibat kebijakan pemerintah</li>
        
        <p class="paragraf">Menjaga jarak, melakukan karantina, dan menghindari kerumunan jadi salah satu faktor utama yang menimbulkan perasaan sedih, takut, frustasi, dan kesepian. Sebagai makhluk sosial, kita membutuhkan interaksi dengan orang lain untuk bisa terus bertahan dan berkembang. Meski dalam pembatasan seperti ini, penting untuk tidak abai menyapa dan menanyakan kabar orang-orang terdekat kita dengan memanfaatkan teknologi, seperti telepon, video call, atau sekadar bertukar pesan melalui aplikasi perpesanan.</p>
        
        <li class="li-arikel">Kebutuhan interaksi sosial yang tidak terpenuhi</li>
        <p class="paragraf">Pembatasan jarak membuat kebutuhan manusia untuk saling terhubung menjadi tidak terpenuhi. Tetapi di tengah situasi seperti ini, kami telah melihat banyak orang memanfaatkan platform kami lebih dari sekadar untuk saling terhubung atau berkumpul secara virtual, mereka juga memberikan dukungan bagi anggota di komunitas mereka yang rentan dan terabaikan.</p>
        
        <li class="li-artikel">Terbukanya percakapan kesehatan mental di seluruh dunia</li>
        <p class="paragraf">Situasi pandemi membuka percakapan tentang kesehatan mental di seluruh dunia. Hal ini menjadi awalan yang baik untuk meredam stigma negatif yang melekat pada topik seputar kesehatan mental, serta memberikan kesempatan bagi komunitas yang rentan dan terabaikan untuk mendapatkan dukungan yang dibutuhkan.</p>
        
        <li class="li-artikel">Akses informasi dan edukasi yang meluas</li>
        <p class="paragraf">Memperluas akses informasi dan edukasi dasar seputar kesehatan mental kepada semua kalangan, terutama bagi komunitas yang sulit mendapatkan informasi seputar masalah kesehatan mental, menjadi salah satu kunci penting untuk meningkatkan ketahanan emosional komunitas. Meta terus berupaya memberikan orang-orang sumber daya tersebut. Berkolaborasi dengan mitra global untuk kesehatan mental seperti WHO dan UNICEF.</p>`,
    
       `<p class ="paragraf">Tapi mungkin pertanyaan yang lebih besar adalah seberapa banyak penonton film ini yang memiliki perilaku serupa? Mungkinkah Anda seorang psikopat?
        Patrik Bateman, tokoh anti-hero yang bersimbah darah dalam novel terkenal American Psycho karya Brett Easton Ellis pada 1991, jelas seorang psikopat - tapi tidak semua psikopat adalah Patrick Bateman.</p>
        
        <p class ="paragraf">Namun demikian, orang psikopat cukup umum ditemui - bagaimana kita dapat mengetahui orang psikopat? Karena seorang psikopat biasanya tidak menerima atau mengumumkan bahwa dirinya psikopat.
        Tentu, rasa percaya diri atau keyakinan pada diri yang sangat kuat ini bisa menjelaskan kenapa psikopat menikmati berada di dunia bisnis yang keras.</p>
          
        <p class ="paragraf">Salah satu karakteristik yang jelas dan umum adalah buruknya kendali perilaku, yang mungkin menyebabkan psikopat lebih mungkin memiliki catatan kenakalan remaja.
         Berdasarkan penjelasan di atas, menurut saya Joker - atau paling tidak Arthur Fleck, lelaki di balik rias wajah itu - hanya sedikit saja psikopat dan memiliki beberapa masalah kesehatan mental yang perlu diperiksa terlebih dahulu.
         Yang jelas, dalam kehidupan nyata, ada psikopat yang mendapat nilai tinggi dalam tes Hare.</p>`,
    

        `<p class ="paragraf">Banyak dari kita yang senang menulis buku harian, membaca otobiografi, atau bersama-sama bernostalgia tentang masa lalu.
         Mengapa mengingat masa lalu itu penting? Apa ada kerugiannya? Dan bila memikirkan masa lalu malah mengganggu kita, apa yang bisa kita lakukan?</p>
        
        <p class ="paragraf">Selama beberapa dekade, para peneliti telah menemukan bahwa mengingat masa lalu merupakan dasar penting bagi perkembangan manusia.
        Ingatan memberikan detail penting tentang siapa kita dan kita ingin menjadi seperti apa.</p>
        
        <p class ="paragraf">Ingatan kita menawarkan solusi-solusi potensial untuk masalah yang sedang kita hadapi dan membimbing kita dalam memecahkannya.
         Kenangan akan masa lalu dapat menjadi sumber rujukan ketika bertemu orang baru, serta dapat membangun hubungan dan menjaga hubungan yang sudah terjalin.</p>
        
        <p class ="paragraf">Mengenang masa lalu tidak hanya membantu kita sebagai individu.
        Ini juga memungkinkan kita untuk hidup dalam konteks sosial-budaya; masyarakat dan budaya mempengaruhi cara kita mengingat masa lalu.</p>
        
        <p class ="paragraf">Mengingat masa lalu berperan sangat penting dalam bagaimana kita hidup sebagai manusia, maka tidak mengherankan jika gangguan dalam cara kita mengingat sesuatu muncul dalam beberapa gangguan psikologis.
        Ini merupakan kondisi ketika ingatan-ingatan pribadi yang tidak diinginkan dan mengganggu terkait trauma masa lalu secara tiba-tiba muncul ke dalam pikiran.</p>
        
        <p class ="paragraf">Seseorang dengan gangguan kecemasan juga cenderung memiliki bias ketika mengingat masa lalu mereka.
        Jika mengingat masa lalu adalah masalah yang mengganggu Anda, cara-cara ini ini bisa membantu.</p>
        
        <p class ="paragraf">Ini dapat memungkinkan Anda untuk merasakan pengalaman berbeda dalam ingatan Anda, sehingga mendapat perspektif baru dari masa lalu Anda.
        Saat memikirkan masa lalu usahakan proaktif dan menciptakan ide-ide untuk memecahkan masalah daripada hanya bersikap pasif.
        Temui dokter atau praktisi kesehatan jika Anda merasa mengalami gangguan dalam memikirkan masa lalu.</p>`,
    


       `<p class ="paragraf">Sekitar 140 dari 1.000 remaja di bawah usia 15 tahun dan 104 dari 1.000 anak-anak berusia antara 5 dan 14 tahun juga memiliki masalah kesehatan mental.
        Tapi tidak hanya itu, guru bimbingan konseling di sekolah , dokter umum, dan perawat harus dilengkapi dengan alat untuk mendeteksi gejala masalah kesehatan mental.</p>
        
        <p class ="paragraf">Antara Januari dan Juli tahun ini, kami, sekelompok peneliti dari Australia dan Indonesia, meneliti untuk menerjemahkan ke dalam bahasa Indonesia instrumen untuk mendeteksi gejala depresi.
        Namun, guru bimbingan di sekolah dasar di Indonesia tidak memiliki alat untuk membantu mereka mendeteksi masalah kesehatan mental.</p>
        
        <p class ="paragraf">Mendeteksi depresi dan kecemasan pada remaja tidak mudah dan sering terlambat.
        Misalnya, MINI Kid, sebuah pedoman wawancara semi terstruktur untuk mendiagnosis gangguan mental pada anak-anak dan remaja, termasuk psikosis, depresi, dan kecemasan.</p>
        
        <p class ="paragraf">Untuk pemeriksaan klinis, pemeriksaan psikiatri dan wawancara jauh lebih diterapkan untuk mendiagnosis gangguan mental termasuk depresi.
        Itu sebabnya kami menerjemahkan instrumen yang dapat digunakan oleh dokter umum, perawat dan guru bimbingan untuk membantu mereka mendeteksi depresi dan kecemasan di kalangan remaja yang lebih tua atau remaja sekitar 16-18 tahun.
        Meskipun instrumen tidak spesifik untuk populasi remaja tetapi di banyak negara lain instrumen ini berguna untuk mendeteksi gejala awal depresi dan kecemasan pada remaja.</p>
        
        <p class ="paragraf">Untuk pekerjaan klinis, pemeriksaan psikiatri dan wawancara jauh lebih diterapkan untuk mendiagnosis gangguan mental termasuk depresi.
        Melalui analisis statistik yang mengukur atau membandingkan CESD-R dan K-10, kami menemukan bahwa semua skala memiliki validitas yang baik untuk mendeteksi depresi dan kecemasan.</p>
        
        <p class ="paragraf">CESD-R 75% sensitif, yang berarti dapat mendeteksi 75% orang dengan depresi dan hampir 80% spesifik untuk mendeteksi gejala depresi seperti gangguan suasana hati, masalah tidur, nafsu makan yang buruk atau masalah dalam interaksi sosial; sedangkan instrumen K-10 85,7% sensitif dan 74,7% spesifik untuk mendeteksi kecemasan.
        Guru bimbingan, perawat atau dokter dapat dilatih untuk menggunakan instrumen-instrumen ini untuk mendeteksi gejala depresi.</p>
        
        <p class ="paragraf">Penting untuk meningkatkan kesadaran publik tentang masalah kesehatan mental terutama pada anak dan remaja oleh karena mereka merupakan generasi penerus bangsa.
        Seluruh komunitas harus mendukung anak dan remaja yang berjuang dengan kecemasan, gangguan suasana hati, dan depresi.</p>`,
  ],
  [
    
        
       `<p class ="paragraf">Kabar baik dari dunia musik, penelitian di berbagai belahan dunia berbeda menunjukkan bahwa musik memiliki dampak baik terhadap psikologis manusia selama pandemi.
        
        Musik ternyata tidak hanya terbukti bisa membantu mencegah penyebaran virus corona tapi musik bisa memberikan manfaat baik bagi keadaan jiwa manusia selama pandemi.</p>
        
        
        <p class ="paragraf">Namun, penelitian di Australia menemukan adanya hubungan positif antara mendengarkan musik selama lockdown dan kepuasan hidup.
        
        Para peneliti tersebut menemukan bahwa secara kualitatif, beberapa responden menyatakan bahwa musik dapat meningkatkan semangat, meningkatkan emosi positif, menurunkan emosi negatif, dan sarana untuk bernostalgia selama pandemi.</p>
        
        
        <p class ="paragraf">Penelitian di 11 negara Barat dan Timur menunjukkan musik dapat membantu orang menjaga emosi mereka tetap baik dalam kehidupan sehari-hari.
        
        Penelitian masih terus berkembang untuk mengetahui hubungan antara musik dan kesejahteraan psikologis.
        
        Mereka berkolaborasi lintas disiplin untuk memahami peran penggunaan musik selama pandemi COVID-19 dan bagaimana musisi serta penyelenggara konser musik beradaptasi dengan keadaan pandemi.</p>`,
    
       `<p class ="paragraf">Dalam situasi yang tidak menentu dan pemberitaan mengenai pandemi COVID-19 yang tidak kunjung mereda, setiap menit masyarakat selalu dihujani oleh berita dan informasi mengenai COVID-19 baik di televisi, media sosial dan internet.
        
        Sebuah survei terbaru berskala nasional pertama di Cina mengenai stres negatif psikologis akibat COVID-19, yang melibatkan 52.730 responden dari 36 provinsi, menunjukkan perempuan lebih stres dibanding laki-laki.</p>
        
        <p class ="paragraf">Riset di Cina itu menunjukkan beberapa faktor yang mempengaruhi terjadinya stres psikologis seperti gangguan panik, cemas dan depresi.
        
        Selain dua temuan di atas, orang yang berpendidikan yang lebih tinggi juga lebih rentan mengalami stres yang dikaitkan dengan tingginya kesadaran pada kesehatan diri sendiri.</p>
        
        <p class ="paragraf">Masyarakat juga dapat melakukan skrining atau deteksi dini apabila mengkhawatirkan dirinya mengalami stres negatif psikologis atau gangguan mental emosional dengan kuesioner yang yang dikembangkan oleh WHO. Self Reporting Questionnaire-20 adalah kuesioner deteksi dini yang dapat mengungkapkan status emosional individu sesaat.
        
        Namun hasil kuesioner ini bukan merupakan suatu diagnosis, karena diagnosis hanya boleh ditetapkan oleh tenaga medis profesional yang ditentukan berdasarkan gejala/keluhan, riwayat kesehatan serta faktor lain yang dialami.
        
        Jika ditemukan adanya gangguan, perlu segera mencari pertolongan terutama jika terdapat pikiran/ perilaku bunuh diri, perilaku kekerasan yang membahayakan, perilaku atau emosi yang tidak terkontrol untuk mendapatkan pendampingan psikososial bagi siapa pun yang terdampak dari COVID-19.</p>`,
    
       `<p class ="paragraf">Depresi adalah penyebab disabilitas utama di seluruh dunia, dan jika tidak ditangani, dapat menyebabkan penyalahgunaan narkotika, kecemasan dan bunuh diri.
        
        Gangguan depresi mayor adalah bentuk tertentu dari depresi yang mempengaruhi banyak orang, berpotensi menyebabkan hilangnya rasa senang dalam aktivitas yang sebelumnya menyenangkan.</p>
        
        <p class ="paragraf">Ini adalah kondisi yang kami uji dalam penelitian baru kami, yang menunjukkan bahwa tinggal di daerah tertinggal dapat menyebabkan depresi, terutama pada laki-laki, tidak pada perempuan.
        
        Ada beberapa faktor tertentu yang dapat menempatkan Anda pada risiko depresi berat yang lebih tinggi.</p>
        
        <p class ="paragraf">Dan sebagian besar penelitian tentang depresi memang berfokus pada faktor-faktor pribadi seperti itu.
        
        Penelitian sebelumnya telah menunjukkan bahwa tinggal dalam komunitas tertinggal dapat menjadikan penduduk di daerah tersebut menilai kesehatan mereka sebagai kurang optimal dan mengalami kematian dini.</p>
        
        <p class ="paragraf">Melalui penelitian ini, kami ingin mengetahui apakah tinggal di daerah tertinggal juga dapat mempengaruhi kesehatan mental laki-laki dan perempuan - bahkan setelah memperhitungkan keadaan pribadi.
        
        Studi ini berdasarkan kuesioner rinci tentang kesehatan mental dan riwayat medis yang disebar ke lebih dari 20.000 orang.</p>
        
        <p class ="paragraf">Dengan teknik statistik, hubungan antara daerah tertinggal dan depresi ditinjau sambil memperhitungkan sejarah medis, pendidikan, kelas sosial, dan faktor penting lainnya.
        
        Faktanya, kami menemukan bahwa laki-laki yang tinggal di daerah termiskin memiliki kemungkinan 51% lebih besar mengalami depresi daripada mereka yang tinggal di daerah yang lebih maju.</p>
        
        <p class ="paragraf">Studi kami tidak membahas mengapa ini terjadi - dan kini diperlukan penelitian lebih lanjut untuk hal itu.
        
        Meski demikian, ada kemungkinan bahwa banyak laki-laki di Inggris dan bagian dunia lainnya masih merasa memiliki tanggung jawab utama untuk menyediakan dan mendukung keluarga mereka.</p>
        
        <p class ="paragraf">Sebuah penelitian baru-baru ini yang menyelidiki risiko depresi untuk laki-laki dan perempuan menunjukkan bahwa laki-laki lebih dipengaruhi oleh "Kegagalan pada tugas instrumental utama, seperti prestasi kerja yang diharapkan dan kegagalan untuk menyediakan kebutuhan keluarga yang memadai".
        
        Penelitian menunjukkan bahwa laki-laki tampaknya lebih sensitif terhadap penyebab stres tertentu di lingkungan mereka dibanding perempuan, seperti hal-hal terkait pekerjaan dan keuangan.</p>
        
        <p class ="paragraf">Tingkat depresi perempuan, di sisi lain, lebih dipengaruhi oleh penyebab stres yang berasal dari hubungan dan jejaring sosial tempat mereka bergabung.
        
        Faktor-faktor seperti kehangatan orang tua dan kepuasan pernikahan yang rendah, misalnya, benar-benar dapat mempengaruhi kesehatan mental perempuan.</p>
        
       <p class ="paragraf"> Banyak faktor yang mungkin ada di balik ini, tapi di Inggris, laki-laki tiga kali lebih mungkin mati karena bunuh diri ketimbang perempuan dan akar penyebabnya harus diselidiki.
        
        Sementara perempuan berisiko lebih rendah mengalami depresi daripada laki-laki di daerah tertinggal, penelitian lain menunjukkan bahwa perempuan lebih cenderung mengalami kecemasan.</p>
        
        <p class ="paragraf">Banyak orang di seluruh dunia hidup dalam kekurangan dan depresi adalah penyebab utama disabilitas pada skala global.
        
        Mengetahui bagaimana laki-laki dan perempuan dipengaruhi oleh kesulitan hidup dapat membantu memfokuskan perawatan kesehatan mental, dan ini merupakan langkah yang berharga.</p>`,
    
       `<p class ="paragraf">Belakangan ini banyak film-film mengangkat bahasan persoalan gangguan mental seperti film Joker dan Midsommar.
        
        Berkat film-film ini, banyak orang mulai peduli pada persoalan kesehatan mental dan mulai peduli pada orang yang mengidapnya.</p>
        
        <p class ="paragraf">Namun ada satu reaksi lain yang timbul: ada anak-anak muda yang mengglorifikasi gangguan mental sebagai sesuatu yang keren.
        
        Banyak anak muda tanpa bantuan profesional kesehatan mental tak ragu menyatakan di media sosial bahwa mereka mengalami gangguan mental.</p>
        
        <p class ="paragraf">Kini, ketika seseorang merasakan perasaan tidak nyaman dan kebingungan mengenai kondisi mental mereka, ia mungkin mencoba mencari penjelasan mengenai kesehatan mental di internet dan kemudian melakukan self-diagnosis gangguan mental.
        
        Beberapa pasien saya yang melakukan self diagnosis gangguan mental itu berujung menjadi pengguna narkotika dalam upaya mengobati diri.</p>
        
        <p class ="paragraf">Mendiagnosa masalah gangguan mental tidak mudah karena diperlukan keahlian khusus dan pengetahuan mengenai diagnosis masalah, gangguan, atau sindrom mental.
        
        Saya sendiri tidak berani melakukan self diagnosis jika merasa ada masalah kesehatan mental.</p>
        
        <p class ="paragraf">Di balik tren self diagnosis: glorifikasi gangguan mental.
        
        Selain itu, munculnya persepsi bahwa gangguan mental itu "Keren" dan adanya informasi di internet, memperparah tren self-diagnosis ini.
        
        Saya menyayangkan beberapa orang yang beranggapan gangguan mental itu "Keren" dan mendorong mereka melakukan self diagnosis.</p>`,
  ],
];

let img = [
  ["2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
  ["7.jpg", "8.jpg", "9.jpg", "10.jpg"],
];

function hapusActive() {
  for (let i5 = 0; i5 < subLinks.length; i5++) {
    if (subLinks[i5].className.includes("aktip")) {
      subLinks[i5].classList.remove("aktip");
    }
  }
}

function cetak(arr) {
  container9MainKonten2.innerHTML = "";
  judulSingkat[arr].forEach((jud, index4) => {
    container9MainKonten2.innerHTML += `
        <div class="container12" data-arr="${arr}" data-in="${index4}">
            <div class="container13">
                <img class="container13-img" src="img/${
                  img[arr][index4]
                }" alt="">
            </div>
            <div class="container14">
                <h2 data-key-ar1="${arr}" data-key="${[
      index4,
    ]}" class="container14-h2">${jud}</h2>
                <p class="container14-p">${slug[arr][index4]}</p>
            </div>
        </div>    
    `;
  });
}

subLinks[0].addEventListener("click", function () {
  hapusActive();
  subLinks[0].classList.add("aktip");
  buttonSearch.setAttribute("data-arr", "");
  inputSearch.value = "";
  alert.classList.remove("tidakDitemukan");
  container9MainKonten.style.display = "flex";
  container9MainKonten.style.flexWrap = "wrap";
  container9MainKonten2.style.display = "none";
  beritaSam();
  card(); 
});
subLinks[1].addEventListener("click", function () {
  hapusActive();
  subLinks[1].classList.add("aktip");
  inputSearch.value = "";
  alert.classList.remove("tidakDitemukan");
  buttonSearch.setAttribute("data-arr", "0");
  container9MainKonten.style.display = "none";
  container9MainKonten2.style.display = "flex";
  container9MainKonten2.style.flexWrap = "wrap";
  cetak(0);
});
subLinks[2].addEventListener("click", function () {
  hapusActive();
  subLinks[2].classList.add("aktip");
  inputSearch.value = "";
  alert.classList.remove("tidakDitemukan");
  buttonSearch.setAttribute("data-arr", "1");
  container9MainKonten.style.display = "none";
  container9MainKonten2.style.display = "flex";
  container9MainKonten2.style.flexWrap = "wrap";
  cetak(1);
});

// search

let hasilSearch = [];

buttonSearch.addEventListener("click", function () {
  if(inputSearch.value === ""){
    alert("anda tidak mengimputkan apa apa");
  }else{
    let dataarr = buttonSearch.getAttribute("data-arr");
   if(dataarr === ""){
     hasilSearch = [];
     pencarian();
     container9MainKonten.style.display = "none";
     container9MainKonten2.style.display = "flex";
     container9MainKonten2.style.flexWrap = "wrap";
     hasilCari();
   }else{
     hasilSearch = [];
     pencarian2(dataarr);
     container9MainKonten.style.display = "none";
     container9MainKonten2.style.display = "flex";
     container9MainKonten2.style.flexWrap = "wrap";
     hasilCari();
   }
  }
});

function pencarian(){
  judul.forEach((judul1, judulke) => {
    judul1.forEach((judul2, judulke2) => {
      judul2 = judul2.toLocaleLowerCase();
      let cari = inputSearch.value;
      cari = cari.toLocaleLowerCase();
      if(judul2.includes(cari)){
        hasilSearch.push([judulke, judulke2]);
      }else{
        "";
      }
    })
  })
}

function pencarian2(arr){
  judulSingkat[arr].forEach((judul3, index3) => {
    judul3 = judul3.toLocaleLowerCase();
    let cari = inputSearch.value;
    cari = cari.toLocaleLowerCase();
    if(judul3.includes(cari)){
      hasilSearch.push([arr, index3]);
    }else{
      "";
    }
  })
}

function hasilCari(){
  container9MainKonten2.innerHTML = "";
  if(hasilSearch.length === 0){
    alert.classList.add("tidakDitemukan");
    setTimeout(() => alert.classList.remove("tidakDitemukan"), 4000)
    
    let dataarr = buttonSearch.getAttribute("data-arr");
    if(dataarr === ""){
      container9MainKonten.style.display = "flex";
      container9MainKonten.style.flexWrap = "wrap";
      container9MainKonten2.style.display = "none";
    }else{
      container9MainKonten.style.display = "none";
      container9MainKonten2.style.display = "flex";
      container9MainKonten2.style.flexWrap = "wrap";
      cetak(dataarr);
    }


  }else{
    hasilSearch.forEach((elemCari, indexCari) => {
        container9MainKonten2.innerHTML += `
          <div class="container12">
              <div class="container13">
                  <img class="container13-img" src="img/${
                    img[elemCari[0]][elemCari[1]]
                  }" alt="">
              </div>
              <div class="container14">
                  <h2 data-key-ar1="${elemCari[0]}" data-key="${elemCari[1]}" class="container14-h2">${judulSingkat[elemCari[0]][elemCari[1]]}</h2>
                  <p class="container14-p">${slug[elemCari[0]][elemCari[1]]}</p>
              </div>
          </div>    
      `;
    })
  }
}

// akhir search

// alert
    silang.addEventListener("click", function(){
      alert.classList.remove("tidakDitemukan");
    })

// akhir alert

// container25
function beritaSam() {
  container25.innerHTML = "";
  judul[0].forEach((elm, key) => {
    if (key === 0) {
      ("");
    } else {
      container25.innerHTML += `<div class="container26" data-arr="0" data-in="${key}">
                                    <div class="container26-img">
                                        <img src="img/${img[0][key]}" alt="" class=" container26-img-img">
                                    </div>
                                        <div class="container26-text">
                                        <h1 class="container26-text-h1">${elm}</h1>
                                    </div>
                                </div>
                                `;
    }
  });


}

beritaSam();
// akhir container25

// main2

function card() {
  container11.innerHTML = "";
  judulSingkat[1].forEach((el, index) => {
    container11.innerHTML += `
            <div class="container12" data-arr="1" data-in="${index}">
                <div class="container13">
                    <img class="container13-img" src="img/${
                      img[1][index]
                    }" alt="">
                </div>
                <div class="container14">
                    <h2 data-key-ar1="${1}" data-key="${[
      index,
    ]}" class="container14-h2">${el}</h2>
                    <p class="container14-p">${slug[1][index]}</p>
                </div>
            </div>    
        `;
  });
}
card();
// akhir main2

// link
const h2 = document.querySelectorAll(".container14-h2");
h2.forEach((but, ke) => {
  but.addEventListener("click", function () {
    let arr = but.getAttribute("data-key-ar1");
    let ind = but.getAttribute("data-key");
    main2.classList.add("hilang2");
  });
});

linkArtikel.addEventListener("click", function () {
  main1.classList.add("hilang");
  main2.classList.remove("hilang2");
  main3.classList.add("hilang3");
  main20.classList.add("hilang4");
  main50.classList.add("hilang5");
  main51.classList.add("hilang6");
  navbar.classList.remove("active");
  foot.classList.add("hilang7");
  garis.forEach((gar) => gar.classList.remove("active"));
  bungkusNav.style.marginTop = "-3px";
});

home.addEventListener("click", function () {
  main1.classList.remove("hilang");
  main2.classList.add("hilang2");
  main3.classList.add("hilang3");
  main20.classList.add("hilang4");
  main50.classList.add("hilang5");
  main51.classList.add("hilang6");
  foot.classList.remove("hilang7");
  navbar.classList.remove("active");
  garis.forEach((gar) => gar.classList.remove("active"));
  linkNavbar.forEach((e) => (e.style.color = "#000"));
});

contact.addEventListener("click", function(){
   main1.classList.add("hilang");
    main2.classList.add("hilang2");
    main3.classList.add("hilang3");
    main50.classList.add("hilang5");
    main51.classList.add("hilang6");
   navbar.classList.add("navHilang");
   foot.classList.add("hilang7");
   main20.classList.remove("hilang4");
})

container221.addEventListener("click", function(){
  main1.classList.remove("hilang");
  main2.classList.add("hilang2");
  main3.classList.add("hilang3");
  main20.classList.add("hilang4");
  main50.classList.add("hilang5");
  main51.classList.add("hilang6");
  foot.classList.add("hilang7");
  navbar.classList.remove("navHilang");
})

obat.addEventListener("click", function () {
  main1.classList.add("hilang");
  main2.classList.add("hilang2");
  main3.classList.add("hilang3");
  main20.classList.add("hilang4");
  main50.classList.remove("hilang5");
  main51.classList.add("hilang6");
  foot.classList.add("hilang7");
  navbar.classList.remove("navHilang");
});

doctor.addEventListener("click", function(){
  main1.classList.add("hilang");
  main2.classList.add("hilang2");
  main3.classList.add("hilang3");
  main20.classList.add("hilang4");
  main50.classList.add("hilang5");
  main51.classList.remove("hilang6");
  foot.classList.add("hilang7");
  navbar.classList.remove("navHilang");
})

butcontainer6.addEventListener("click", function(){
  main1.classList.add("hilang");
  main2.classList.add("hilang2");
  main3.classList.add("hilang3");
  main20.classList.add("hilang4");
  main50.classList.add("hilang5");
  main51.classList.remove("hilang6");
  foot.classList.add("hilang7");
  navbar.classList.remove("navHilang");
})

butcontainer7.addEventListener("click", function(){
  main1.classList.add("hilang");
  main2.classList.add("hilang2");
  main3.classList.add("hilang3");
  main20.classList.add("hilang4");
  main50.classList.add("hilang5");
  main51.classList.remove("hilang6");
  foot.classList.add("hilang7");
  navbar.classList.remove("navHilang");
})

butcontainer8.addEventListener("click", function(){
  main1.classList.add("hilang");
  main2.classList.add("hilang2");
  main3.classList.add("hilang3");
  main20.classList.add("hilang4");
  main50.classList.add("hilang5");
  main51.classList.remove("hilang6");
  foot.classList.add("hilang7");
  navbar.classList.remove("navHilang");
})

// akhir link

// responsive
hamburger.addEventListener("click", function () {
  garis.forEach((e) => {
    e.classList.toggle("active");
  });
  nav.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let windowposition = window.scrollY > 0;
  navbar.classList.toggle("scroll", windowposition);
});

function cekwidth() {
  if (width <= 480) {
    container.style.dbisplay = "grid";
  } else {
    container.style.display = "flex";
  }
}

window.addEventListener("resize", function () {
  width = screen.width;
  if (container2.style.display === "block") {
    cekwidth();
  }
});

// responsive


// corusel

cornext.addEventListener("click", function(){
    container33.scrollLeft += 150;
})

cornext.addEventListener("mouseover", function(){
    svgLanjut.setAttribute("stroke", "#000");
})

cornext.addEventListener("mouseout", function(){
    svgLanjut.setAttribute("stroke", "#979e98");
})

corkembali.addEventListener("click", function(){
  container33.scrollLeft -= 150;
})

corkembali.addEventListener("mouseover", function(){
  svgKembali.setAttribute("stroke", "#000");
})

corkembali.addEventListener("mouseout", function(){
  svgKembali.setAttribute("stroke", "#979e98");
})


// artikel home

container31.innerHTML = "";
judulSingkat.forEach((artikel, arke) => {
    artikel.forEach((artikel2, arke2) => {
        if(arke2 === 0 || arke2 ===1){
          "";
        }else{
          container31.innerHTML += `
          <div class="container32" data-arr="${arke}" data-in="${arke2}">
            <div class="container32-img">
              <img src="img/${img[arke][arke2]}" alt="" class="container32-img-img">
            </div>
            <div class="container32-text">
              <h2 class="container32-text-h2">${artikel2}</h2>
            </div>
          </div>`;
        }
    })
})

// akhir artikel home


// buka artikel
const container32 = document.querySelectorAll(".container32");
const container15 = document.querySelector(".container15");
container15.innerHTML = "";
container32.forEach((con321, conke) => {
  con321.addEventListener("click", function(){
    main1.classList.add("hilang");
    main3.classList.remove("hilang3");
    main2.classList.add("hilang2");
    main20.classList.add("hilang4");
    let arr = con321.getAttribute("data-arr");
    let arrke = con321.getAttribute("data-in");

    bukaArtikel(arr,arrke);
    

  })
})

function bukaArtikel(arr, arrke){
    container15.innerHTML = `
    <article class="subartikel-artikel">
    <h1 class="judul-artikel">${judul[arr][arrke]}</h1>
    <span class="pencipta">By: ${namaPembuat()}</span>
    <div class="container-img-artikel">
      <img src="img/${img[arr][arrke]}" alt="" class="container-img-artikel-img">
    </div>
      ${body[arr][arrke]}
    </article>
    `;
}

// tutup buka artike


const buttonMain3 = document.querySelector(".main3-button");
buttonMain3.addEventListener("click", function () {
  console.log("oke");
  main3.classList.add("hilang3");
  main2.classList.remove("hilang2");
  main20.classList.add("hilang4");
  main1.classList.add("hilang");
});

const container26 = document.querySelectorAll(".container26");
container26.forEach((arke, inarke) => {
  arke.addEventListener("click", function(){
    main1.classList.add("hilang");
    main3.classList.remove("hilang3");
    main2.classList.add("hilang2");
    main20.classList.add("hilang4");
    let arr = arke.getAttribute("data-arr");
    let arrke = arke.getAttribute("data-in");

    bukaArtikel(arr,arrke);
  } )
})

const container12 = document.querySelectorAll(".container12");
container12.forEach((arke2, inarke2) => {
  arke2.addEventListener("click", function(){
    main1.classList.add("hilang");
    main3.classList.remove("hilang3");
    main2.classList.add("hilang2");
    main20.classList.add("hilang4");
    let arr = arke2.getAttribute("data-arr");
    let arrke = arke2.getAttribute("data-in");

    bukaArtikel(arr,arrke);
  } )
})