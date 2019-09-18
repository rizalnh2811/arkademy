const hewan = ['singa', 'ular', 'harimau'], tambahan = ['buaya', 'beruang', { obj: 'rusa'}]
const arrayPushHewan = async () =>{
    await tambahan.pop();
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();

/*Array Pop adalah fungsi array utk menghapus index/element terakhir dari sebuah array
*/