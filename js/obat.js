const container67 = document.querySelector(".container67");
const container70 = document.querySelector(".container70");
const container80 = document.querySelector(".container80");
const container64 = document.querySelector(".container64");
const container69 = document.querySelector(".container69");
const container308 = document.querySelector(".container308");
const container71 = document.querySelector(".continer71");
const container305 = document.querySelector(".container305");

let img1 = [
  "Obat 6.jpg",
  "Obat 7.jpg",
  "Obat 8.jpg",
  "Obat 9.jpg",
  "Obat 10.jpg",
  "Obat 11.jpg",
  "Obat 12.jpg",
  "Obat 13.jpg",
];

let namaObat = [
  "Methisoprinol",
  "Kalxetin",
  "Alprazolam",
  "Risperidone",
  "Metronidazole",
  "Invega",
  "Hemaviton Neuro",
  "Clozapin",
];

let harga = [
  `
Rp37.900 - Rp82.500 <small class="containercard7-p-small">Per Strip</small>`,
  `Rp55.000 - Rp153.721 <small class="containercard7-p-small">Per Strip</small>`,
  `Rp189.000 - Rp250.000 <small class="containercard7-p-small">Per Box</small>`,
  `Rp340.000 <small class="containercard7-p-small">Per Box</small>`,
  `Rp3.000 - Rp15.000 <small class="containercard7-p-small">Per Strip</small>`,
  `Rp.250.000 <small class="containercard7-p-small">Per Strip</small>`,
  `Rp24.000 - Rp32.500 <small class="containercard7-p-small">Per Strip</small>`,
  `Rp.125.000 <small class="containercard7-p-small">Per Strip</small
`,
];

let efekSamping = [
  `              
<p class="efek-samping">Efek Samping Peningkatan sementara asam urat dalam urin dan serum. Ruam kulit atau gatal, rasa lelah atau lesu dan diare</p>`,
  `
<p class="efek-samping">Efek Samping Pemakaian obat umumnya memiliki efek samping tertentu dan sesuai dengan masing-masing individu. Jika terjadi efek samping yang berlebih dan berbahaya, harap konsultasikan kepada tenaga medis. Efek samping yang mungkin terjadi dalam penggunaan obat adalah: mual, gugup, insomnia.</p>`,
  `
<p class="efek-samping">Efek Samping pemakaian obat ialah kantuk, sakit kepala, mulut kering, lemas, dan lain sebagainya</p>`,
  `
<p class="efek-samping">Efek Samping Pemakaian obat umumnya memiliki efek samping tertentu dan sesuai dengan masing-masing individu. Jika terjadi efek samping yang berlebih dan berbahaya, harap konsultasikan kepada tenaga medis. Efek samping yang mungkin terjadi dalam penggunaan obat adalah: insomnia, cemas, sakit kepala, lelah, pusing, konstipasi, dispepsia</p>`,
  `
<p class="efek-samping">Efek Samping Mual, sakit kepala, mulut kering, anoreksia, diare, nyeri epigastrum dan konstipasi, dapat menyebabkan kantuk.</p>`,
  `
<p class="efek-samping">Efek Samping Pemakaian obat umumnya memiliki efek samping tertentu dan sesuai dengan masing-masing individu. Jika terjadi efek samping yang berlebih dan berbahaya, harap konsultasikan kepada tenaga medis. Efek samping yang mungkin terjadi dalam penggunaan obat adalah: Sakit kepala, pusing, mengantuk, somnolen, akatisia, tremor, sindrom ekstrapiramidal, takikardi, sinus takikardi, somnolen, pusing, sedasi, hipertonia, hipotensi ortostatik, mulut kering.</p>`,
  `
<p class="efek-samping">Efek Samping Pemakaian obat umumnya memiliki efek samping tertentu dan sesuai dengan masing-masing individu. Jika terjadi efek samping yang berlebih dan berbahaya, harap konsultasikan kepada tenaga medis. Efek samping yang mungkin terjadi dalam penggunaan obat adalah: Ruam kulit.</p>`,
  `
<p class="efek-samping">Efek Sampin Pemakaian obat umumnya memiliki efek samping tertentu dan sesuai dengan masing-masing individu. Jika terjadi efek samping yang berlebih dan berbahaya, harap konsultasikan kepada tenaga medis. Efek samping yang mungkin terjadi dalam penggunaan obat adalah: merasa mengantuk, berat badan naik, pusing, mual, konstipasi.</p>
`,
];

let deskripsi = [
  `
<p class="deskripsi-obat">METHISOPRINOL TABLET merupakan obat dengan kandungan Methisoprinol. Obat ini digunakan sebagai imunomodulator untuk infeksi virus dan kondisi imunodefisiensi. Methisoprinol atau dengan nama lain Inosine Pranobex adalah analog hormon timus. Methisoprinol menginduksi diferensisasi sel T dan respon limfoproliferatif yang dapat menangkal sel yang terinfeksi virus. Dalam penggunaan obat ini harus SESUAI DENGAN PETUNJUK DOKTER.</p>
`,
  `<p class="deskripsi-obat"> KALXETIN merupakan obat antidepresan yang mengandung fluoxetine. KALXETIN digunakan untuk depresi, Obsessive-Compulsive Disorder (OCD), Bulimia Nervosa, gangguan disforik pramenstruasi (PMDD). Obat ini termasuk golongan Selective Serotonin Reuptake Inhibitors (SSRI). Fluoxetine bekerja dengan menghambat re-uptake serotonin (5-hydroxytryptamine; 5-HT) pada celah sinap pada sistem saraf pusat. Dalam penggunaan obat ini harus SESUAI DENGAN PETUNJUK DOKTER.</p>
`,
  `<p class="deskripsi-obat"> ALPRAZOLAM merupakan obat golongan anti ansietas dan anti insomnia. Obat ini digunakan untuk gangguan ansietas atau pengobatan jangka pendek gejala-gejala ansietas. Obat ini dapat digunakan SESUAI DENGAN PETUNJUK DOKTER.<p
`,
  `<p class="deskripsi-obat">RISPERIDONE termasuk antipsikotik turunan benzisoxazole. Obat ini digunakan dalam terapi pada skizofrenia akut dan kronik serta pada kondisi psikosis yang lain, dengan gejala-gejala tambahan (seperti; halusinasi, delusi, gangguan pola pikir, kecurigaan dan rasa permusuhan) dan atau dengan gejala-gejala negatif yang terlihat nyata (seperti; blunted affect, menarik diri dari lingkungan sosial dan emosional, sulit berbicara).</p>
`,
  `<p class="deskripsi-obat"> METRONIDAZOLE 500 MG TABLET adalah obat generik antimikroba dengan aktivitas yang sangat baik terhadap bakteri anaerob dan protozoa.</p>
`,
  `<p class="deskripsi-obat"> Invega merupakan obat dengan kandungan Paliperidone untuk mengatasi gejala skizofrenia. Obat ini juga dapat digunakan untuk mengatasi gejala gangguan skizoafektif, yaitu kombinasi dari skizofrenia dan gangguan mood, seperti depresi atau gangguan bipolar. Paliperidone bekerja dengan cara mengembalikan keseimbangan zat kimia alami di dalam otak. Dengan begitu, gejala psikosis, seperti halusinasi dan agitasi.</p>
`,
  `<p class="deskripsi-obat"> Hemaviton Neuro Forte merupakan suplemen kesehatan yang mengandung vitamin neurotropik (B1, B6, B12). Vitamin neurotropik bermanfaat untuk kesehatan sistem saraf dengan memperbaiki kerusakan sel saraf penyebab kesemutan dan kebas. Vitamin B1 penting untuk metabolisme karbohidrat dan memelihara serabut saraf. Vitamin B6 penting dalam metabolisme protein dan asam amino serta pembentukan neurotransmiter sistem saraf.</p>
`,
  `<p class="deskripsi-obat"> CLOZAPIN termasuk antispsikotik turunan Benzisoxazole. Clozapin digunakan untuk terapi pada gangguan mental seperti skizofrenia dan Psikosis pada penyakit Parkinson pada pasien yang tidak respon atau intoleran dengan obat antipsikotik konvensional. Obat ini bekerja dengan memblokir reseptor zat kimia alami di otak, yaitu diantaranya adalah reseptor dopamin, histamin, dan serotonin. Dengan pemblokiran tersebut, makan akan menyeimbangkan kadar neurotransmiter.</p>
`,
];

container67.innerHTML = "";
img1.forEach((obat, ke) => {
  container67.innerHTML += ` <div class="container67-card" data-obat="${ke}">
        <div class="container-card">
        <img class="container-card-img" src="img/${obat}" alt="Alps">
        </div>
        <div class="container-text">
            <div class="head">
            <h2 class="head-h2">${namaObat[ke]}</h2>  
            </div>
            <div class="body"> 
            <p class="body-p">${harga[ke]}</div>
            <button class="container7-button">See More</button>
        </div>
    </div>`;
});

const buttonObat = document.querySelectorAll(".container7-button");
const card10 = document.querySelectorAll(".container67-card");
buttonObat.forEach((but, ke) => {
  but.addEventListener("click", function(){
      container69.style.display = "flex";
      container70.style.width = "60%";
      container80.style.display = "flex";
      container80.style.justifyContent = "center";
      container64.style.backgroundPositionY = "-62vw";
      container64.style.backgroundSize = "auto";
      container71.style.display = "flex";
      let key10 = card10[ke].getAttribute("data-obat");

      container305.innerHTML = "";
      container305.innerHTML = `
          <div class="container301">
          <img src="img/${img1[key10]}" alt="" class="container301-img">
        </div>
        <h1 class="container300-h1">${namaObat[key10]}</h1>
        <h2 class="container300-h2">Deskripsi</h2>
        ${deskripsi[key10]}
        <h2 class="container300-h2">Efek Samping</h2>
        ${efekSamping[key10]}
      `;
  })
});

container308.addEventListener("click", function(){
  container71.style.display = "none";
  container69.style.display = "block";
  container70.style.width = "100%";
  container64.style.backgroundPositionY = "-32vw";
})
