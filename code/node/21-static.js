// 创建静态服务器
const http = require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer()
server.on('request', (request,response) => {
    //获取当前用户访问的资源路径
    let uri = request.url
   
    //由于/没有实体的资源，需要将/做处理，如果访问/则让其访问/index.html
    if(uri === '/'){
        uri = '/index.html'
    }
    console.log(uri);

    //默认情况下，浏览器在第一次请求网站的时候会访问'/favicon.ico'图标文件，如果没有也会出现404，如果需要解决
    //方式1：找一个ico文件，存放在静态资源的public目录，命名为favicon.ico
    //方式2：去处理的时候忽略'/favicon.ico'文件，加一判断，if(uri != '/favicon.ico')
    //方式3：不影响页面的显示，不处理也没问题

    //读取文件fs模块，将内容返回给用户res.end
    let filename = path.join('public',uri)
    console.log(filename);
    //判断文件是否存在
    if(fs.existsSync(filename)){
        console.log('存在'+filename);
        fs.readFile(filename,(err,data) => {
            if(!err){
                response.end(data)
            }else{
                response.setHeader("Content-type","text/html;charset=utf-8");
                response.statusCode = 500
                response.end('请求资源错误')
            }
        })
    }else{
        response.setHeader("Content-type","text/html;charset=utf-8");
        response.statusCode = 404
        response.end('你找的资源不存在')
    }
})
server.listen('9999',() => {
    console.log('server is running at http://127.0.0.1:9999');
})