# Express

## 1.介绍

网址：https://www.expressjs.com.cn/

Express 是基于 Node.js 平台，`快速、开放、极简`的 Web 开发框架。**搭建web服务器**

Express 的本质：就是一个 npm 上的第三方包，提供了快速创建 Web 服务器的便捷方法。

使用Express开发框架可以非常方便、快速的创建Web网站的服务器或API接口的服务器

## 2.安装Express

在项目目录中，打开cmd命令窗口，执行如下命令：

```bash
npm init -y		# 如果没有项目则先初始化
npm i -S express
```

## 3.创建web服务

基本遵循之前的四个步骤：

1. 导入express模块
2. 创建web实例
3. 定义允许访问的地址（创建路由规则）
   - 原先的输出res.end()
   - 现在的输出res.send()
4. 监听端口启动服务

```js
const express = require('express')
// 创建web服务
const app = express()

// 监听 get请求
// req 请求对象
// res 响应对象
app.get('请求URI',(req,res)=>{
	// 向客户端响应数据
	res.send({id:1,name:'张三'})
})
// ....

// 监听POST请求
app.post('请求URI',(req,res)=>{})
// 其他app.形式的api方法，put/delete/use 等

app.put()
app.delete()
// ....

// 启动服务
app.listen(8080,()=>{})
```

> 扩展：查看当前监听的端口`8080`是否启动

- windows平台
- “|”，管道，变量修饰符，过滤器 

~~~shell
netstat -ano | findStr 8080
~~~

- Unix系平台（macOS、Linux）

~~~shell
netstat -tnpl | grep 8080
~~~

**实践**

**手写一个服务器软件，启动后要求用户访问根“/”输出`hello world`，用户访问`/html5`输出`2004`，用于通过post方式访问/post则输出`	post`。**

```js
// 1. 导入模块
const express = require("express");

// 2. 创建web实例
const app = express();

// 3. 监听请求
// 用户访问根“/”输出hello world
app.get("/", (req, res) => {
    // res.end('xxx')
    res.send("hello world");
});
// 用户访问/html5输出2003
app.get("/html5", (req, res) => {
    res.send("2003");
});
// 用于通过post方式访问/post则输出post。
app.post("/post", (req, res) => {
    res.send("post方式");
});

// 4. 启动服务
app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});
```

> 地址在匹配的时候是自上而下，必须同时匹配`方法`与`路径`。

