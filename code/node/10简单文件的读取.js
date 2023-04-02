var fs = require('fs')
// fs.readFile('testaaa.txt',function(err,data){
//     if(!err){
//         console.log(data.toString());
//     }
// })

fs.readFile('./2020.txt','utf8',(err,data) => {
    if(!err){
        console.log(data);
    }
})

console.log(fs.existsSync('./2020.txt'));
fs.stat('./2020.txt',(err,stats) => {
    console.log(stats);
})
fs.unlink('./2020.txt',err => {
    console.log(err);
})