//Menambahkan Value ke array
let bulan = ['januari','februari','maret','juni'];
bulan.splice(3, 0, 'april');
console.log(bulan);

//Replace Value array berdasarkan index yang dipilih
bulan.splice(4, 1, 'mei')
console.log(bulan)

//Delete Value array berdasarkan index yg dipilih
bulan.splice(4, 1)
console.log(bulan)

//Delete semua elemen stelah index ke1 
bulan.splice(1)
console.log(bulan)

//replace 3 elemen dari index ke 0 dengan value baru
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
let removed = myFish.splice(0, 3, 'parrot', 'anemone', 'blue');
console.log(myFish);