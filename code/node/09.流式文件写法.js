var fs = require('fs')
var ws = fs.createWriteStream('testaaa.txt')
ws.once('open',function(){
    console.log('流打开了');
})
ws.once('close',function(){
    console.log('流关闭了');
})
ws.write('ahahah')
ws.write('bbfdbfh')
ws.write('bbo;io;;')
ws.write('今天天气真不错')
ws.end()