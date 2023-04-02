//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (req, res) => {
    //设置响应
    res.send('hello express框架学习');
});
app.get('/html5', (req, res) => {
    //设置响应
    res.send('2020');
});

//4. 监听端口启动服务
app.listen(9999, () => {
    console.log("server is running at http://127.0.0.1:9999");
});