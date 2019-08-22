let todo = [
    {
        title:"Rendang",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali.",
    },
    {
        title:"McDonald's",
        description:"McDonald's Corporation NYSE: MCD adalah waralaba rumah makan siap saji terbesar di dunia. Hidangan utama di restoran-restoran McDonald's adalah hamburger, tetapi mereka juga menyajikan minuman ringan, kentang goreng dan hidangan-hidangan lokal yang disesuaikan dengan tempat restoran itu berada.",
    },
    {
        title:"Pecel",
        description:"Pecel atau pecal merupakan makanan yang dikombinasikan dengan bumbu sambal kacang sebagai bahan utamanya dan dicampur dengan aneka jenis sayuran. Makanan ini populer terutama di wilayah DI Yogyakarta, Jawa Tengah, dan Jawa Timur. Asal nama dan asal daerah dari pecel belum diketahui secara pasti.",
    },
    {
        title:"Indomie Mi Goreng",
        description:"Indomie Mi Goreng merupakan salah satu tipe mi instan yang dibuat dengan merek Indomie oleh perusahaan Indofood, penghasil mi instan terbesar di dunia yang terletak di Indonesia.",
    },
    {
        title:"Mie Samyang",
        description:"Mie Korea yang memiliki rasa sangat pedas atau yang lebih dikenal dengan Samyang merupakan mie instan yang diproduksi dari Negara Korea Selatan ini memiliki rasa yang begitu terkenal pedasnya dan banyak yang ingin mencoba mie samyang ini.",
    }
]

class TodoList{
    item = document.getElementById('todo-list')
    content = document.getElementById('todo-description')
    listItem = ()=>{
        for(let x in todo){
            this.item.innerHTML +='<div class="list-item">'+todo[x].title+'</div>'
        }
    }
    setDisplay = (n=0)=>{
        this.content.innerHTML = '<div class="title">'+todo[n].title+'</div>\
        <div class="container">'+todo[n].description+'</div>'
    }
}

const todoList = new TodoList()