# HTTP基础

## 1、HTTP 请求

![HTTP](D:\user\Desktop\scripthqs\note\material\ajax\HTTP.png)

1. 前端应用从浏览器端向服务器发送HTTP 请求(**请求报文**)
2. 后台服务器接收到请求后, 调度服务器应用处理请求, 向浏览器端返回HTTP响应(**响应报文**)
3. 浏览器端接收到响应, 解析显示响应体/调用监视回调

## 2、HTTP 请求报文

1. **请求行**

```
method url
GET /product_detail?id=2
POST /login
```

2. **多个请求头**

```
Host: www.baidu.com
Cookie: BAIDUID=AD3B0FA706E; BIDUPSID=AD3B0FA706;`
Content-Type: application/x-www-form-urlencoded 或者application/json
```

3. **请求体**

```
username=tom&pwd=123
{"username": "tom", "pwd": 123}
```

### 2.1、请求报文

- 行：GET/URL/HTTP1.1
- 头：Host:Cookie:Content-type:User-Agent：
- 空行:
- 体:get请求为空，username=admin&password=admin

## 3、 HTTP 响应报文

1. 响应状态行:

```
status statusText
```

2. 多个响应头

```
Content-Type: text/html;charset=utf-8
Set-Cookie: BD_CK_SAM=1;path=/
```

3. 响应体

```
html 文本/json 文本/js/css/图片...
```

### 3.1、响应报文

- 行：HTTP/1.1  200（OK） 404（找不到） 403（被禁止）401（未授权）
- 头：content-type：content-length content-encoding
- 空行
- 体:HTML的内容

## 4、post 请求体参数格式

1. `Content-Type: application/x-www-form-urlencoded;charset=utf-8`
   用于键值对参数，参数的键值用=连接, 参数之间用&连接
   例如: `name=%E5%B0%8F%E6%98%8E&age=12`
2. `Content-Type: application/json;charset=utf-8`
   用于 json 字符串参数
   例如: `{"name": "%E5%B0%8F%E6%98%8E", "age": 12}`
3. `Content-Type: multipart/form-data`
   用于文件上传请求



## 5、常见的响应状态码

`200 OK` 请求成功。一般用于GET 与POST 请求
`201 Created` 已创建。成功请求并创建了新的资源
`401 Unauthorized` 未授权/请求要求用户的身份认证
`404 Not Found` 服务器无法根据客户端的请求找到资源
`500 Internal Server Error` 服务器内部错误，无法完成请求

## 6、不同类型的请求及其作用

1. `GET`: 从服务器端**读取**数据（查）
2. `POST`: 向服务器端**添加**新数据 （增）
3. `PUT`: **更新**服务器端已经数据 （改）
4. `DELETE`: **删除**服务器端数据 （删）

## 7、API 的分类

1. REST API: restful （Representational State Transfer (资源)表现层状态转化）
   (1) 发送请求进行CRUD 哪个操作由请求方式来决定
   (2) 同一个请求路径可以进行多个操作
   (3) 请求方式会用到GET/POST/PUT/DELETE
2. 非REST API: restless
   (1) 请求方式不决定请求的CRUD 操作
   (2) 一个请求路径只对应一个操作
   (3) 一般只有GET/POST

## 8、 区别 一般http请求 与 ajax请求

1. ajax请求 是一种特别的 http请求
2. 对服务器端来说, 没有任何区别, 区别在**浏览器端**
3. 浏览器端发请求: 只有`XHR` 或`fetch` 发出的才是ajax 请求, 其它所有的都是非ajax 请求
4. 浏览器端接收到响应
   (1) 一般请求: 浏览器一般会直接显示响应体数据, 也就是我们常说的刷新/跳转页面
   (2) ajax请求: 浏览器不会对界面进行任何更新操作, 只是**调用监视的回调函数**并**传入响应相关数据**

## 9、HTTP协议

URL的组成：

- 协议://主机:端口/路径?查询
- scheme://host:port/path?query#fragment

HTTP协议，超文本传输协议，详细规定了浏览器和万维网服务器之间相互通信的规则。协议就是约定，规定。

