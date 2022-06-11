
let foto_dokter =[
    `Kasandra Karim.png`,
    `fuad santoso.png`,
    `Darmanto Supardi.png`,
    `Amelia Permatasari.png`,
    `Sarah Adiyanti.png`,
    `Andri Adiyanto.png`,
    `Indra Kushadiyanto.png`,
    `Citra Widianti.png`
]

let nama_dokter =[
    `Dr. Kasandra Karim, Sp.Kj`,
    `Dr. Fuad Santoso, Sp.Kj`,
    `Darmanto Supardi, S.Psi.`,
    `Dr. Amelia Permatasari, Sp.Kj`,
    `Sarah Adiyanti, M.Psi`,
    `Andri Adiyanto, M.Psi`,
    `Indra Kushadiyanto, S.Psi`,
    `Citra Widianti, S.Psi`,
]

let deskripsi_dokter =[
    `<p class="deskripsi-docter">Dr. Sandra karim, Sp.KJ adalah seorang Dokter Spesialis Kedokteran Jiwa atau Psikiatri yang aktif melayani pasien di RS Bhayangkara Surabaya H S Samsoeri Mertojoso, RS Mitra Keluarga Waru. dr. Sandra Karim mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Airlangga.</p>`,
    `<p class="deskripsi-docter">Dr. Fuad Santoso, Sp.KJ adalah seorang Dokter Spesialis Kedokteran Jiwa atau Psikiatri yang aktif melayani pasien di RS Stella Maris Makassar. Dr. Fuad Santoso mendapatkan gelar kedokteran setelah menamatkan pendidikan di Universitas Hasanuddin, Makassar.
    </p>`,
    `<p class="deskripsi-docter">Darmanto Supardi, S.Psi adalah seorang Psikolog Klinis yang aktif melayani pasien di Rs St. Carolus Summarecon Serpong, Omni Hospital Alam Sutera. Darmanto Supardi mendapatkan gelar Magister Psikologi setelah menamatkan pendidikan di Universitas Tarumanegara dan mendapakan gelar Sarjana Psikologi di Universitas Persada Indonesia Y.A.I.
    </p>`,
    `<p class="deskripsi-docter">Dr. Amelia Permatasari, Sp.KJ adalah seorang Dokter Spesialis Kedokteran Jiwa atau Psikiatri yang aktif melayani pasien di RSUD Pasar Minggu. Dr. Amelia Permatasari mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2006.
    </p>`,
    `<p class="deskripsi-docter">
        Sarah Adiyanti, M.Psi adalah seorang Psikolog Klinis yang aktif melayani pasien di RS Mitra Keluarga Kemayoran, RS Satya Negara. Sarah Adiyanti mendapatkan gelar Psikologi setelah menamatkan pendidikan di Universitas Tarumanagara.
    </p>`,
    `<p class="deskripsi-docter">
        Andri Adiyanto, S.Psi adalah seorang Dokter Spesialis Kedokteran Jiwa atau Psikiatri yang aktif melayani pasien di Klinik Anak Mitra.
    </p>`,
    `<p class="deskripsi-docter">
        Indra Kushadiyanto, S.Psi  adalah seorang Psikolog Klinis, Psikolog Karir, Motivasi & Minat Bakat yang aktif melayani pasien di Yppi Cabang Surabaya. Indra Kushadiyanto mendapatkan gelar Psikologi di Univesitas Airlangga.
    </p>`,
    `<p class="deskripsi-docter">
        Citra Widianti, S.Psi adalah seorang Konseling Dewasa (Motivasi, Stress) yang aktif melayani pasien di And Learning & Coaching. Citra Widianti, mendapatkan gelar Psikologi setelah menamatkan pendidikan di Universitas Kristen Maranatha.
    </p>`
]

let univ = [
    `Universitas Airlangga`,
    `Universitas Hasanuddin`,
    `Universitas Tarumanagara`,
    `Universitas Indonesia`,
    `Universitas Tarumanagara`,
    `Universitas Indonesia`,
    `Universitas Airlangga`,
    `Universitas Kristen Maranatha`
]


// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
// for (var i = 0; i < btn.length; i++) {
//  btn[i].onclick = function(e) {
//     e.preventDefault();
//     modal = document.querySelector(e.target.getAttribute("href"));
//     modal.style.display = "block";
//  }
// }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}


const containerCardDoctor = document.querySelector(".container-center");

containerCardDoctor.innerHTML = "";
foto_dokter.forEach((ftdocter, ftke) => {
    containerCardDoctor.innerHTML += `
        <div class="col keydoc2" data-doc=${ftke}>
            <div class="card">
                <img src="img/${ftdocter}" alt="${ftdocter}">
                <p>${nama_dokter[ftke]}</p>
                <button class="modal-button docter-button">See More</button>
            </div>
        </div>
    `;
})

const buttondoc = document.querySelectorAll(".docter-button");
const modal = document.querySelector("#myModal1");
const modalContent = document.querySelector(".modal-content");
const keyDoc = document.querySelector(".keydoc2");
buttondoc.forEach((btndocke, inke) => {
    btndocke.addEventListener("click", function(){
        modal.style.display = "flex";
        iddoc = keyDoc.getAttribute("data-doc");
        modalContent.innerHTML = "";
        modalContent.innerHTML += `
            <div class="modal-header">
            <h2 class="modal-header-h2">${nama_dokter[inke]}</h2>
            <img src="img/${foto_dokter[inke]}" alt="" class="modal-header-img">
        </div>
        <div class="modal-body">
            <h3 class="modal-body-h3">Lulusan</h3>
            <p class="modal-body-p">${univ[inke]}</p>
            <hr>
            <h3 class="modal-body-h3">Deskripsi</h3>
            ${deskripsi_dokter[inke]}
        </div>
        `;
    })
})

const exi = document.querySelector(".containerclose");
exi.addEventListener("click", function(){
    modal.style.display = "none";
})
