var fs = require('fs')
// console.log(fs);
var fd = fs.openSync("hello.txt","w")
// console.log(fd);
fs.writeSync(fd,"今天天气真不错")
fs.closeSync(fd)

fs.open('hello2.txt','w',function(err,fd){
    console.log(arguments);
    if(!err){
        console.log(fd);
        fs.write(fd,'这是异步',function(err){
            console.log('写入成功');
        })
    }else{
        console.log(err);
    }
})
console.log('先执行');

fs.close(fd,callback)