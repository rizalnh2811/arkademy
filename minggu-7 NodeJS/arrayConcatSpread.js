const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const obj1 = {name: 'Zale', age: 16};
const obj2 = {address: 'JKT', gender: 'Men'}

//penggabungan objek menggunkan spread operator
const merge = {...obj1, ...obj2}

/*Console log array contact, untuk menampilkan pengguunaan arr1&arr2*/
console.log(arr1.concat(arr2));
console.log(merge);