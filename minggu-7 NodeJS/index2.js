//panggilan library axios
const axios = require('axios');

//url api
const url = 'https://rickandmortyapi.com/api/character';

//auction get method
axios.get(url).then(res => {
    //jika sukses akan tampil disini
    console.log(res);
}).catch(err => {
    //Jika error akan tampil disini
    console.log(err);
})