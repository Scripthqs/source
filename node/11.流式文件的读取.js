var fs = require('fs')
var rs = fs.createReadStream('testaaa.txt')
var ws = fs.createWriteStream('testbbb.txt')
rs.once('open',function(){
    console.log('可读打开');
})
rs.once('close',function(){
    console.log('可读关闭');
    ws.end()
})
ws.once('open',function(){
    console.log('可写打开');
})
ws.once('close',function(){
    console.log('可写关闭');
})
rs.on('data',function(data){
    console.log(data);
    ws.write(data)
})
