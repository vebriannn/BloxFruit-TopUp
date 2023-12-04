const pilihItems = document.querySelectorAll(".card-items");
const btnCheck = document.querySelectorAll(".btn-click");
const pembayaran = document.querySelectorAll(".wallet");
const btnByr = document.querySelectorAll('.bayar-lurd');

// menyimpan boolean 
var kondisi = false
var nama = false

// hapus data setiap click tab pane
document.querySelectorAll('.presentation').forEach(reset => {
    reset.addEventListener('click', function() {
        pembayaran.forEach(check => {
            check.classList.remove('actived-wallet');
        })
        document.querySelectorAll(".namauser").forEach(item => {
            item.value = ''
            nama = false
        })
    })
})


// check form username
btnCheck.forEach(checkBtn => {
    checkBtn.addEventListener("click", () => {
        // jika value input tidak ada dan ada maka akan memunculkan alert
        document.querySelectorAll(".namauser").forEach(item => {
            if (item.value != "") {
                alert("Username Terdaftar");
                nama = true;
            }
        })
    });
})

// click items
pilihItems.forEach(item => {
    item.addEventListener('click', function() {
        // hapus classlist actived-card
        pilihItems.forEach(del => {
            del.classList.remove('actived-card')
        })
        // menambahkan classList actived-card
        item.classList.add('actived-card')
    })
})

// click e wallet
pembayaran.forEach(item => {
    item.addEventListener('click', function(){
        // hapus classlist actived-wallet
        pembayaran.forEach(del => {
            del.classList.remove('actived-wallet')
        })
        // menambahkan classList actived-wallet
        item.classList.add('actived-wallet')
        kondisi = true
        // menampilkan btn bayar
        // btnByr.classList.remove('d-none')
    })
})

// click btnByr
btnByr.forEach(btnn => {
    btnn.addEventListener('click', (e) => {
        btnn.style.transform = 'scale(0.9)';
        setTimeout(()=>{
            btnn.style.transform = 'scale(1)';
        }, 100)
        if (nama === true) {
            if(kondisi === true) {
                alert("Pembayaran Berhasil!")
            }
            else {
                alert("Tidak Dapat Melakukan Pembayaran! Pastikan Anda Memilih Metode Pembayaran")
            }
        }
        else {
            alert("Tidak Dapat Melakukan Pembayaran! Pastikan Anda Sudah Mengisi Username");
        }
    })
})
