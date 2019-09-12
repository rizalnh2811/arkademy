//Unlink FS=Hapus data/file

//Panggil library fs
const fs = require('fs');

/*Baca file terserah.txt apakah ada filenya?
menggunakan fs.readFile */
fs.readFile('terserah.txt', async (err, data) => {
    //Jika data tidak ditemukan
    if(err) console.log("Data tidak ditemukan!");

    //Jalankan console.log dulu menggunakan await
    await console.log("Data ditemukan!")

    //Data ditemukan kita langsung eksekusi dlete
    fs.unlink('terserah.txt', (err)=>{
        //Jika gagal delete
        if (err) console.log("Gagal hapus data!");
            
        //Jika berhasil delete
        console.log("Hapus data berhasil!");
    })
})