var fs = require('fs')
// fs.writeFile('test3.txt','这是writefile传入的函数',function(err){
//     if(!err){
//         console.log('写入成功');
//     }
// })
// fs.writeFile('','这是writefile传入的函数',function(err){
//     if(!err){
//         console.log('写入成功');
//     }
// })
fs.writeFile('./2021.txt','hello 2021',err => {
    console.log(err);
    fs.writeFile('./2021.txt','hello 2020',err => {
        console.log(err);
    })
})

