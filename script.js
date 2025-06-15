// Data produk seblak - Edit di sini untuk menambah/mengganti gambar produk
// Cukup isi properti img dengan nama file gambar di folder assets/img/
const produk = [
    {name: "Seblak Komplit", price: "Rp 25.000", img: "SeblakOriginal.jpg", kategori: "Seblak", deskripsi: "Isian irisan Sosis Baso, Kwetiau, Ceker 1pcs, Sawi, Telur Orakarik, Cuangki Lidah.", badge: "Best Seller"},
    {name: "Seblak Ceker", price: "Rp 25.000", img: "seblak-ceker.jpg", kategori: "Seblak", deskripsi: "Ceker 4-5pcs, Kwetiau,Sawi, Telur Orakarik,  Cuanki Lidah.", badge: ""},
    {name: "Seblak Tulangan", price: "Rp 25.000", img: "seblak-tulangan.jpg", kategori: "Seblak", deskripsi: "Tulangan Ayam, Telur Orakarik, Kwetiau, Cuanki Lidah.", badge: ""},
    {name: "Seblak Sosis", price: "Rp 14.000", img: "seblak-sosis.jpg", kategori: "Seblak", deskripsi: "Irisan Sosis Ayam, Telur Orakarik,Sawi, Kwetiau, Cuanki Lidah.", badge: ""},
    {name: "Seblak Bakso", price: "Rp 15.000", img: "seblak-bakso.jpg", kategori: "Seblak", deskripsi: "Irisan Baso, Telur Orakarik,Sawi, Kwetiau, Cuanki Lidah.", badge: ""},
    {name: "Seblak Telur", price: "Rp 15.000", img: "seblak-telur.jpg", kategori: "Seblak", deskripsi: "Seblak dengan telur orak-arik.", badge: ""},
    {name: "Seblak Prasmanan", price: "Rp 16.000", img: "seblak-prasmanan.jpg", kategori: "Seblak", deskripsi: "Seblak dengan Pilihan Toping Sesukamu Sudah Include Kerupuk Basah, Kwetiau, Makroni, Sawi.", badge: ""},
    {name: "Seblak Seafood", price: "Rp 35.000", img: "seblak-seafood.jpg", kategori: "Seblak", deskripsi: "Dumpling Ayam, Dumpling Keju,Fisrol, Kembang Cumi,Crabstik,Chikuwa, Kwetiau,Sawi, Cuanki Lidah,Telor Orak-arik.", badge: "Spesial"},
    {name: "Seblak Spesial", price: "Rp 35.000", img: "seblak-spesial.jpg", kategori: "Seblak", deskripsi: "Seblak campur ceker, bakso, sosis, makaroni.", badge: "Baru"},
    {name: "Pisang Nugget Coklat", price: "Rp 22.000", img: "pisang-nugget-coklat.jpg", kategori: "Cemilan", deskripsi: "Pisang Nugget dilumuri dengan Selai Cokelat.", badge: ""},
    {name: "Pisang Nugget Keju", price: "Rp 22.000", img: "pisang-nugget-keju.jpg", kategori: "Cemilan", deskripsi: "Pisang Nugget dilumuri dengan parutan keju.", badge: ""},
    {name: "Pisang Nugget GreenTea", price: "Rp22.000", img: "pisang-nugget-greentea.jpg", kategori: "Cemilan", deskripsi: "Pisang Nugget dilumuri dengan Selai GreenTea.", badge: ""},
    {name: "Pancong Cokelat", price: "Rp 12.000", img: "pancong.jpg", kategori: "Cemilan", deskripsi: "Adonan kue pancong dengan Topping Selai Cokelat.", badge: ""},
    {name: "Indomie Telur", price: "Rp 12.000", img: "indomie-telor.jpg", kategori: "Cemilan", deskripsi: "Indomie + telur dan ditambahkan Sawi, dan Bawang goreng.", badge: ""},
    {name: "Mie Nyemek", price: "Rp 20.000", img: "mie-nyemek.jpg", kategori: "Cemilan", deskripsi: "Mie ditumis dengan resep Mitoha.", badge: "Baru"},
    {name: "Sosis Bakar", price: "Rp 10.000", img: "sosis-bakar.jpg", kategori: "Cemilan", deskripsi: "Sosis jumbo yang dibakar dan diberi saus dan mayonaise.", badge: ""},
    {name: "Es Teh Manis", price: "Rp 5.000", img: "esteh.jpg", kategori: "Minuman", deskripsi: "Teh manis yang dicampur dengan Es batu.", badge: ""},
    {name: "PopIce", price: "Rp 8.000", img: "popice.jpg", kategori: "Minuman", deskripsi: "Minuman serbuk instan dan memiliki banyak varian.", badge: ""},
    {name: "Es Jeruk", price: "Rp 10.000", img: "esjeruk.jpg", kategori: "Minuman", deskripsi: "Perasan jeruk asli yang disajikan dingin dengan tambahan es batu.", badge: ""},
    {name: "Es Buah", price: "Rp 20.000", img: "esbuah.jpg", kategori: "Minuman", deskripsi: "Minuman segar berisi campuran aneka buah segar pilihan dengan sirup manis dan es batu.", badge: "Baru"}
];
const wa = '62881012897734';

function renderProduk(kat = 'Semua') {
    const list = document.getElementById('produk-list');
    let html = '';
    produk.forEach((p, i) => {
        if(kat !== 'Semua' && p.kategori !== kat) return;
        html += `<div class="product-card">
            <div class="img-wrap">
                <img src="${p.img ? 'assets/img/' + p.img : 'assets/img/placeholder.jpg'}" alt="${p.name}">
                ${p.badge ? `<span class='badge'>${p.badge}</span>` : ''}
            </div>
            <h3>${p.name}</h3>
            <p class="harga">${p.price}</p>
            <button class="btn-detail" data-index="${i}">Lihat Detail</button>
            <a href="https://wa.me/${wa}?text=Halo%2C+saya+mau+pesan+${encodeURIComponent(p.name)}" target="_blank" class="btn-order">Order via WhatsApp</a>
        </div>`;
    });
    list.innerHTML = html;
    // Re-attach modal event
    document.querySelectorAll('.btn-detail').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.getAttribute('data-index'));
            const p = produk[idx];
            document.getElementById('modal-img').src = p.img ? 'assets/img/' + p.img : 'assets/img/placeholder.jpg';
            document.getElementById('modal-title').textContent = p.name;
            document.getElementById('modal-harga').textContent = p.price;
            document.getElementById('modal-deskripsi').textContent = p.deskripsi;
            document.getElementById('modal-order').href = 'https://wa.me/' + wa + '?text=Halo%2C+saya+mau+pesan+' + encodeURIComponent(p.name);
            document.getElementById('modal-detail').style.display = 'flex';
        });
    });
}

window.filterKategori = function(kat, e) {
    if(e) {
        document.querySelectorAll('.filter-kategori a').forEach(a=>a.classList.remove('active'));
        e.target.classList.add('active');
    }
    renderProduk(kat);
}

document.addEventListener('DOMContentLoaded', function() {
    renderProduk();
    // Modal close
    document.querySelector('.modal .close').onclick = function() {
        document.getElementById('modal-detail').style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == document.getElementById('modal-detail')) {
            document.getElementById('modal-detail').style.display = 'none';
        }
    };
    // Highlight menu aktif (fallback)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
            this.classList.add('active');
        });
    });
    // Scroll to section on nav click
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({behavior:'smooth'});
            }
        });
    });
    // Responsive: close modal on esc
    document.addEventListener('keydown', function(e){
        if(e.key==='Escape') document.getElementById('modal-detail').style.display='none';
    });
});

