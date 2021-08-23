# nodejs+express+nodemon

## 1、安装node.js

## 2、安装express（服务端框架）

1. 初始化环境

```shell
npm init --yes
```

1. 下载express包

```shell
npm install express --save
```

1. 编写js代码

```javascript
// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (request, response) => {
  //  设置响应
  response.send("Hello Express");
});

// 4. 监听端口，启动服务
app.listen(8000, () => {
  console.log("服务已经启动, 8000 端口监听中...");
 })

```

1. 运行js程序

```shell
node .\01express使用.js
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209165304650.png)

1. 打开网页显示页面
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209165339872.png)
2. 调试程序可以查看请求和响应
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020916541663.png)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209165526228.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk3MjAwOA==,size_16,color_FFFFFF,t_70)

## 3、安装nodemon自动重启工具

文件内容有修改自动重新启动服务

安装

```powershell
npm install -g nodemon
```

启动服务

```powershell
ndoemon server.js
```

