const ponsel = [
    {
        "nama":"Xiaomi Redmi 5A",
        "harga":"1.4000.000",
        "ram":"2GB",
        "storage":"16GB"
    },
    {
        "nama":"Vivo V5s",
        "harga":"4.000.000",
        "ram":"4GB",
        "storage":"64GB",
    },
    {
        "nama":"Vivo V9",
        "harga":"4.000.000",
        "ram":"4GB",
        "storage":"64GB",
    },
    {
        "nama":"Vivo V7",
        "harga":"4.6000.000",
        "ram":"4GB",
        "storage":"64Gb",
    },
];

let x;

for(x in ponsel){
    let namaPonsel = ponsel[x].nama
    let hargaPonsel = ponsel[x].harga
    let ramPonsel = ponsel[x].ram
    let storagePonsel = ponsel[x].storage
    let divider ="<div><span class='nama-ponsel'>"+namaPonsel+"</span><span class='harga-ponsel'>"+hargaPonsel+"</span><span class='ram-ponsel'>"+ramPonsel+"</span><span class='storage-ponsel'>"+storagePonsel+"</span></div>";
    document.getElementById('hape').innerHTML += divider
}