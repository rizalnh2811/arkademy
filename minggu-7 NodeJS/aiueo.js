const data = 'Rizal Nurul Huda'
const vocal = 'aiueo'
let count = 0

for(let i = 0;i < data.length ;i++){
    if (vocal.includes(data[i].toLowerCase())) 
    {
        count++    
    }
}

console.log(count)