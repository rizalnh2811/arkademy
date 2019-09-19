const a = 'c';
const promiseku = new Promise((resolve, reject) => {
    if (a === 'c' ) {
        resolve("Berhasil");
    }else{
        reject("Gagal");
    }
});

promiseku.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});