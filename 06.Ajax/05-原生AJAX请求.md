# 原生AJAX请求

## 1、GET 请求

### 1.1 GET请求方法

创建两个文件，浏览器端使用的**html文件**和服务器端使用的**js文件**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209165720344.png)
服务器端 server.js

```javascript
// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
app.get('/server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置响应体
  response.send("Hello Ajax");
});

// 4. 监听服务
app.listen(8000, () => {
  console.log("服务已经启动, 8000 端口监听中...");
 })
123456789101112131415161718
```

启动服务

```powershell
node server.js
```

前端页面 html

```html
        // 1. 创建对象 
        const xhr = new XMLHttpRequest();
        // 2. 初始化 设置请求方法和url
        xhr.open('GET', 'http://127.0.0.1:8000/server')
        // 3. 发送
        xhr.send();
        // 4. 事件绑定 处理服务端返回的结果
        xhr.onreadystatechange = function(){
        // readyState 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
        //判断 (服务端返回了所有的结果)
        if(xhr.readyState === 4){	
        //判断响应状态码 200  404  403 401 500
            if(xhr.status >= 200 && xhr.status < 300){
             // 处理结果 行 头 空行 体
             // 响应
                console.log('状态码', xhr.status); // 状态码
                console.log('状态字符串', xhr.statusText); // 状态字符串
                console.log('所有响应头', xhr.getAllResponseHeaders()); // 所有响应头
                console.log('响应体', xhr.response); // 响应体
                //设置 result 的文本
                 result.innerHTML=xhr.response;
                }else{
                }
             }
		} 
```

### 1.2 GET 请求设置请求参数

设置url参数

```javascript
xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300');
```

## 2、POST请求

### 2.1 POST请求方法

​	server.js添加post

```js
app.post('/server', (request, response) => {
  // 设置响应头, 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置响应体
  response.send("Hello Ajax POST");
});
```

html

```js
 	// 1. 创建对象
      const xhr = new XMLHttpRequest();
      // 2. 初始化 设置类型（请求方式）与url
      xhr.open('POST', 'http://127.0.0.1:8000/server');
      // 3. 发送   设置请求参数（请求体）
      xhr.send('a=100&b=200&c=300');
      // 4. 事件绑定
      xhr.onreadystatechange = function(){
        // 判断
        if(xhr.readyState === 4){
          if(xhr.status >=200 && xhr.status < 300){
            // 处理服务端返回的结果
            result.innerHTML = xhr.response;
          }
        }
      }
```

### 2.2 设置请求头信息

```javascript
// 设置请求体内容的类型
xhr.setRequesHeader('Content-Type','application/x-www-from-urlencoded');
// 自定义头信息
xhr.setRequesHeader('name', 'ykyk');
```

server.js中设置响应头允许自定义请求头 post改成all

```javascript
response.setHeader('Access-Control-Allow-Header','*');
```

### 2.3 JSON数据请求

​	server.js添加

```javascript
app.all('/json-server', (request, response) => {
  // 设置响应头, 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置响应头, 设置允许自定义头信息
  response.setHeader('Access-Control-Allow-Headers', '*');
  // 响应一个数据
  const data = {
    name: 'atguigu'
  };
  // 对 对象 进行 字符串 转换
  let str = JSON.stringify(data)
  // 设置响应体 
  response.send(str);
});
```

html

```js
		// 发送请求
      const xhr = new XMLHttpRequest();
      // *2*.(自动转换) 设置响应体数据的类型(自动转换)
      xhr.responseType = 'json';
      // 初始化
      xhr.open('GET', 'http://127.0.0.1:8000/json-server');
      // 发送
      xhr.send();
      // 事件绑定
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
          if(xhr.status >= 200 && xhr.status < 300){
            console.log(xhr.response);
            // 1. 手动对数据转化 (字符串再转换成json)
            // let data = JSON.parse(xhr.response); //转换成json
            // result.innerHTML = data.name;
            // *2*. (自动转换)自动转换(自动转换)
            result.innerHTML = xhr.response.name; //已经自动变成json
          }
        }
      }
```

### 2.4  请求超时与网络异常

```js
// 超时设置 （2秒）
xhr.timeout = 2000;
// 超时回调
xhr.ontimeout = function(){
	alert('网络超时，请稍后重试')
}
// 网络异常回调
xhr.onerror = function(){
	alert('网络异常，请稍后重试')
}
```

### 2.5 取消请求

```js
// 手动取消
xhr.abort()
```

### 2.6 解决 IE 缓存问题

**问题**：在一些浏览器中(IE),由于缓存机制的存在，ajax 只会发送的第一次请求，剩余多次请求不会在发送给浏览器而是直接加载缓存中的数据。
**解决方式**：浏览器的缓存是根据url 地址来记录的，所以我们只需要修改url 地址即可避免缓存问题

```javascript
xhr.open("get","/testAJAX?t="+Date.now());
```

### 2.7 AJAX 请求状态

`xhr.readyState` 可以用来查看请求当前的状态

- 0: 表示XMLHttpRequest 实例已经生成，但是open()方法还没有被调用
- 1: 表示send()方法还没有被调用，仍然可以使用setRequestHeader()，设定HTTP请求的头信息
- 2: 表示send()方法已经执行，并且头信息和状态码已经收到
- 3: 表示正在接收服务器传来的body 部分的数据
- 4: 表示服务器数据已经完全接收，或者本次接收已经失败了

### 2.8 API总结

- `XMLHttpRequest()`：创建 XHR 对象的构造函数
- `status`：响应状态码值，如 200、404
- `statusText`：响应状态文本，如 ’ok‘、‘not found’
- `readyState`：标识请求状态的只读属性 0-1-2-3-4
- `onreadystatechange`：绑定 readyState 改变的监听
- `responseType`：指定响应数据类型，如果是 ‘json’，得到响应后自动解析响应
- `response`：响应体数据，类型取决于 responseType 的指定
- `timeout`：指定请求超时时间，默认为 0 代表没有限制
- `ontimeout`：绑定超时的监听
- `onerror`：绑定请求网络错误的监听
- `open()`：初始化一个请求，参数为：`(method, url[, async])`
- `send(data)`：发送请求
- `abort()`：中断请求 （发出到返回之间）
- `getResponseHeader(name)`：获取指定名称的响应头值
- `getAllResponseHeaders()`：获取所有响应头组成的字符串
- `setRequestHeader(name, value)`：设置请求头