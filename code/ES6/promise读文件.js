const fs = require('fs')

const p = new Promise((resolve,reject) => {
  fs.readFile('./诗句.md',(err,data) => {
    if(err) reject(err)
    resolve(data)
  })
})

p.then(function(value){
  console.log(value.toString());
},function(reason){
  console.log('读取失败');
})

setTimeout(() => console.log('代码开始执行'),0)
new Promise((resolve,reject) => {
  console.log('开始for循环');
  for(let i=0;i<10000;i++){
    i == 99 && resolve()
  }
}).then(() => console.log('执行then函数'))
console.log('代码执行结束');