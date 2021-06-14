# Ajax

## Ajax简介

在浏览器中，我们可以在不刷新网页的情况下，通过Ajax获取一些新的内容。

Ajax全称Asynchronous Javascript And XML(异步的JavaScript和XML)，Ajax的核心是js对象：XMLHttpRequest。

### XML简介

XML可拓展标记语言，XML被设计用来传输和存储数据，XML和HTML类似，不同的是HTML都是预定义标签，而XML中没有预定义标签，都是自定义标签。现在已经被JSON代替。

### Ajax的特点

优点：

- 可以无需刷新网页而与服务器进行通信
- 可以根据用户事件来更新部分部分页面内容

缺点：

- 没有浏览历史，不能回退
- 存在跨越问题，同源
- SEO不友好

## HTTP协议

HTTP协议，超文本传输协议，详细规定了浏览器和万维网服务器之间相互通信的规则。协议就是约定，规定。

### 请求报文

- 行：GET/URL/HTTP1.1
- 头：Host:Cookie:Content-type:User-Agent：
- 空行:
- 体:get请求为空，username=admin&password=admin

### 响应报文

- 行：HTTP/1.1  200（OK） 404（找不到） 403（被禁止）401（未授权）
- 头：content-type：content-length content-encoding
- 空行
- 体:HTML的内容

### Express框架

- 安装express：npm i express
- 引入express：const express = require('express')
- 创建应用对象：const app = express()
- 创建路由规则get或者post：app.get('/',(request,response) => {})
- 监听端口启动服务：app.listen(8000,()=>{})

### Ajax请求步骤

- const xhr = new XMLHttpRequest()
- xhr.open('POST','http://127.0.0.1:8000/server')//get请求直接在server后设置参数
- xhr.send()//post请求在send后的括号设置参数
- xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status >=200 && xhr.status < 300){
        console.log(xhr.status);//状态码
        console.log(xhr.statusText);//状态字符串
        console.log(xhr.getAllResponseHeaders());//所有响应头
        console.log(xhr.response);//响应体
        }
    }
}

### Ajax设置请求头信息

- `xhr.setRequestHeader('Content-Type','application/x-www-from-urlencoded')`//设置请求体类型
- 可以自定义，但是会报错，需要设置响应头并将get或post请求改成app.all()
- response.setHeader('Access-Control-Allow-Headers','*')

### 服务端响应JSON数据

在实际开发过程中，服务端返回的数据基本都是JSON数据