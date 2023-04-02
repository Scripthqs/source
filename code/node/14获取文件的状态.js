var fs = require('fs')
fs.stat('hello.txt',function(err,data){
    console.log(arguments);
    console.log(err);
    console.log(data);
})