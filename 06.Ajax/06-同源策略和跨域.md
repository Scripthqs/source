# 同源策略和跨域

## 1、同源策略

- 同源策略(Same-Origin Policy)是浏览器的一种安全策略
- 同源： 协议、域名、端口号必须完全相同
- 跨域： 违背同源策略就是**跨域**

## 2、URL的组成

- 协议://主机:端口/路径?查询
- scheme://host:port/path?query#fragment

HTTP协议，超文本传输协议，详细规定了浏览器和万维网服务器之间相互通信的规则。协议就是约定，规定。

## 3、如何解决跨域

### 3.1 JSONP

JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get 请求。

#### 3.1.1 JSONP 原理

在网页有一些标签天生具有跨域能力，比如：img link iframe script。
JSONP 就是利用script 标签的跨域能力来发送请求的。

#### 3.1.2 JSONP 的使用

**1.动态的创建一个script 标签**

```js
var script = document.createElement("script");
```

**2.设置script 的src，设置回调函数**

```javascript
script.src = "http://localhost:3000/testAJAX?callback=abc";
function abc(data) {
	alert(data.name);
};
```

**3.将script 添加到body 中**

```javascript
document.body.appendChild(script);
```

**4.服务器中路由的处理**

```javascript
router.get("/testAJAX" , function (req , res) {
	console.log("收到请求");
	var callback = req.query.callback;
	var obj = {
		name:"孙悟空",
		age:18
	}
	res.send(callback+"("+JSON.stringify(obj)+")");
});
```

### 3.2、CORS

CORS（Cross-Origin Resource Sharing），跨域资源共享。

CORS 是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持get 和post 请求。

跨域资源共享标准新增了一组HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源

#### 3.2.1 CORS原理

CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。这个才是真正的解决跨域问题。但需要后端完成

#### 3.3.2 CORS 的使用

主要是服务器端的设置：

```javascript
router.get("/testAJAX" , function (req , res) {
	//通过res 来设置响应头，来允许跨域请求
	//res.set("Access-Control-Allow-Origin","http://127.0.0.1:3000");
	res.set("Access-Control-Allow-Origin","*");
	res.send("testAJAX 返回的响应");
});
```

### 3.3 配置代理服务器

- 可以通过nginx开启代理服务器，但是需要学习后端等很多知识。
- 通过vue-cli的api的`module.exports = {devServer: {proxy: 'http://localhost:4000'}}`

#### 3.3.1 代理服务器原理

流程：

1. 本地浏览器地址(localhost:8080)
2. 向代理服务器发送请求(localhost:8080)
3. 代理服务器向服务器发送请求(localhost:5000)

注意：浏览器和服务器之间通信时ajax，服务器和服务器之间通信是http请求，不用ajax。

#### 3.3.2 vuecli中配置代理服务器

使用vuecli创建的项目中，配置vue.config.js文件

```js
module.exports = {
    //方式1.开启代理服务器，写真正访问服务器的端口
    // devServer: {
    //   proxy: 'http://localhost:5000'
    // }
    //这种方法只能保证本身服务器没有了走代理，不够灵活，而且只能配置一个服务器

    //方式2.不能同时用
    devServer: {
        proxy: {
          '/api': {//想走代理，就在请求前面加/api
            target: 'http://localhost:5000',
            pathRewrite:{'^/api':''},//保证代理服务器转发到真正服务器的地址不带/api
            // ws: true,//用于支持websocket
            // changeOrigin: true//用于控制请求头中的host值
          },
          '/test': {//想走代理，就在请求前面加/test
            target: 'http://localhost:5001',
            pathRewrite:{'^/test':''},//保证代理服务器转发到真正服务器的地址不带/test
            // ws: true,//用于支持websocket
            // changeOrigin: true//用于控制请求头中的host值
          },
          '/abc': {//想走代理，就在请求前面加/abc
            target: 'https://autumnfish.cn/',
            pathRewrite:{'^/abc':''},//保证代理服务器转发到真正服务器的地址不带/api
            // ws: true,//用于支持websocket
            // changeOrigin: true//用于控制请求头中的host值
          },
        }
      }
  }
```

