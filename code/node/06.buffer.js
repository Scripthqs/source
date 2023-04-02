var str = 'hello 哈哈'
var buf = Buffer.from(str)
console.log(buf);
console.log(buf.length);
console.log(str.length);
// var buf2 = new Buffer(10)
// console.log(buf2.length);
var buf3 = Buffer.alloc(10);
buf3[0]= 0xaa
buf3[9]= 15
console.log(buf3);
console.log(buf3[0]);
console.log(buf3[0].toString(16));