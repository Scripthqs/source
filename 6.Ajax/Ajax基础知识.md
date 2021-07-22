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

URL的组成：

- 协议://主机:端口/路径?查询
- scheme://host:port/path?query#fragment

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

在实际开发过程中，服务端返回的数据基本都是JSON数据，需要将JSON数据进行处理，将JSON转换成对象。

- response.send(JSON.stringify(data))
- 手动对数据进行转化：`let data = JSON.parse(xhr.response)`
- 自动对数据装换：`xhr.responseType = "json"`

### nodemon自动重启工具

每次修改服务端得代码时，都需要重新运行node xx.js才能运行，安装nodemon自动重启工具可以自动运行服务端代码。

- npm install -g nodemon

### ajax-ie缓存问题

ie浏览器中会自动缓存ajax的数据，需要加这个时间戳解决，实际开发中，工具会自动帮我们处理。

- `xhr.open('GEt','http://127.0.0.1:8000/ie?t='+Date.now())`

### ajax请求超时和网络异常处理

在实际开发中，会出现请求超时和网络异常。

- xhr.timeout = 2000
- xhr.ontimeout = function(){alert('网络异常，请稍后再试')}
- xhr.onerror = function(){alert('你的网络似乎出现了一些问题')}

### ajax取消请求

ajax可以手动取消请求。调用xhr.abort即可取消请求。

- xhr.abort();

### ajax请求重复发送问题

设置一个标识变量

- let isSending = false;

### jQuery发送ajax请求

````js
$('button').eq(0).click(function(){
    $.get('http://127.0.0.1:8000/jquery-server'),{a:100,b:200},function(data){console.log(data)}
  },'json')
````

### jQuery通用方法发送ajax请求

````js
$('button').eq(1).click(function(){
    $.ajax({
        url: 'http://127.0.0.1:8000/jquery-server'
        data: {a:100,b:200}
        type: 'GET'
        success: function(data){
            console.log(data)
        }
        timeout:2000
        error: function(){
            console.log('出错了')
        }
        headers: {
            c:300,
            d:400
        }
    })
  })
````

## 网络模块封装

在开发中，需要发送对应的网络请求，去服务器请求数据，再进行进一步的展示，此时就需要用到网络请求，我们可以使用第三方框架，但是我们需要进行进一步的封装，我们时使用自己封装好的模块进行网络请求，而不是直接使用第三方。因为第三方有可能某天不维护，出现bug，这个时候再去切换框架是个非常麻烦的事。

### 选择什么网络模块

Vue中发送网络请求有非常多的方式，那么在开发中，如何选择？

- 传统的Ajax，开发中不会使用，配置调用方式复杂，
- 使用jQuery-Ajax，是jQuery中的一个功能
- 在Vue等三大框架中，不需要jQuery，在Vue1.x中，有Vue.resource，但是Vue2.0中，已经不再维护
- Vue作者推荐axios框架

在前端开发中，一种常见的网络请求方式是JSONP，主要原因是为了解决跨域访问的问题。

JSONP的核心在于通过`<script>`标签中的src来帮助我们请求数据。我们项目部署在domain1.com服务器上时，是不能直接访问domain2.com服务器上的资料，这时，我们利用`<script>`标签中的src帮助我们请求数据，当数据当作一个JavaScript的函数执行，并且执行的过程中传入我们需要的JSON，所以，封装JSONP的核心就在于监听window上的jsonp进行回调时的名称。

## 安装axios

- `npm install axios --save`

### axios请求方式

- get
- post

写法1:

- `axios(config)`config是一个对象，传入url和method等
- `axios({}).then(res=>{})

写法2：

- `axios.get().then(res=>{})`
- `axios.post().then(res=>{})`

axios发送并发请求：

````js
axios.all([axios({
  url:'http://localhost:8081/api/students'
}),axios({
  url:'http://localhost:8081/test/cars'
})]).then(res=>{
  console.log(res);
})
````

`.then(axios.spread((res1,res2) => {}))`这种写法可以展开数组

### 请求服务器时报错

请求服务器时报错，出现这`CORS` `Access-Control-Allow-Origin`两个关键词，说明我们跨域了。解决方法见下面跨越的章节。

### 全局配置

一些BaseRUL是一样的，可以进行全局配置

- `axios.defaults.baseURL`
- `axios.default.timeout`

### 常见的配置

- 请求地址url
- 请求类型
- 请求根路径

- get请求时，请求体参数放在params中
- post请求时，请求体参数放在data中

### axios的实例

- `const instance1 = axios.create({baseURL,timeout})`
- `instance1({url:,params:{}})

### axios拦截器

axios提供了拦截器，用于我们发送每次请求或者得到响应后，进行对应的处理。比如需要将请求进行拼接，请求时在页面增加一些效果等等

请求成功、请求失败、响应成功、响应失败

- `axios.interceptors` 拦截全局
- `instance.interceptors.request.use();`
- `instance.interceptor.response.use()`

#### 什么时候需要拦截器

1. config的一些信息不符合浏览器的要求
2. 每次发送网络请求时，都希望在界面中显示一个请求的图标
3. 某些网络请求（比如登录），必须携带一些特殊的信息，登录必须要token

## 使用fetch函数发送ajax请求

fetch是全局对象，可以直接调用，返回的是一个promise对象，接收两个参数，url和可选的其他配置。

## 跨域

### 同源策略

同源策略是浏览器的一种安全策略。同源：协议、域名、端口号、必须完全相同。违背同源就是跨越。

### 如何解决跨域

1. JSONP(JSON with padding)，是一个非官方的跨域解决方案，只支持get请求，而且需要前后端配合所以太鸡肋。  
JSONP原理：在网页中，一些标签自带跨域功能，比如，img link iframe script，jsonp就是利用script标签的跨域功能（src属性）来发送请求。

2. CORS跨域资源共享，是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持get和post请求。  
CORS原理：通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。这个才是真正的解决跨域问题。但需要后端完成

3. 配置代理服务器。
   - 可以通过nginx开启代理服务器，但是需要学习后端等很多知识。
   - 通过vue-cli的api的`module.exports = {devServer: {proxy: 'http://localhost:4000'}}`

流程：

1. 本地浏览器地址(localhost:8080)
2. 向代理服务器发送请求(localhost:8080)
3. 代理服务器向服务器发送请求(localhost:5000)

注意：浏览器和服务器之间通信时ajax，服务器和服务器之间通信是http请求，不用ajax。
