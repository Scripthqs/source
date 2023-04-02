//创建web服务器，要求访问/出现，hello world，访问html5出现2020

//1.导入http模块
const http = require('http')
//2.创建web实例
const server = http.createServer()
//3.监听requset事件
server.on('request',(request,response) => {
   if(request.url === '/'){
       response.end('hello world')
   }
   if(request.url === '/html5'){
       response.end('2020')
   }
})
//4.监听端口，启动服务
server.listen(9999,() => {
    console.log('server is running at http://127.0.0.1:9999');
})