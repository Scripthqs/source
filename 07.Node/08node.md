# 接口设计

## 接口安全

前后端分离式开发需要进行数据交互，传输的数据被偷窥、被抓包、被伪造时有发生，那么如何设计一套比较安全的API接口方案呢？

> 并不是所有的接口都需要考虑安全的，有些接口是公开的，任何人只要知道地址都可以调用，对于一些项目中需要用户登录才能访问的接口才需要考虑安全问题。

一般解决的方案有以下几类：

- token令牌认证（jwt）
- AK（app key）&SK（secret key）【用户名&密码】
- 时间戳超时验证+签名算法字符串
- URL签名（算法，非对称算法）
- 数据脱敏（防范数据库数据泄露） 
- HTTPS
  - 数字证书（防运营商）
- IP黑/白名单（服务器层面的限制，apache、nginx）
- oAuth2.0

> 关于`JWT`：

Json web token（JWT），是基于token的鉴权机制，类似于http协议也是无状态的，它不需要在服务端去保留用户的认证信息或者会话信息，为应用的扩展提供了便利。JWT具备以下几个优点：

- 因json的通用性，所以JWT是可以进行跨语言

- JWT可以在自身存储一些其他业务逻辑所必要的**非敏感**信息

- 便于传输，jwt的构成非常简单，字节占用很小，所以它是非常便于传输的

- 它不需要在服务端保存会话信息，所以它非常适合应用在前后端分离的项目上

使用JWT进行鉴权的工作流程如下（重点）：

- 用户使用用户名密码来请求服务器
- 服务器进行验证用户的信息（查数据库）
- 服务器通过验证发送给用户一个token（令牌）
- 客户端存储token（Vuex+localStorage），并在每次请求时附送上这个token值
- 服务端验证token值，并返回数据

![JWT](D:\user\Desktop\scripthqs\assets\node\JWT.png)

JWT是由三段信息构成的（头部、载荷、签名），将这三部分使用`.`连接在一起就组成了JWT字符串，形如：

~~~jwt
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjNmMmc1N2E5MmFhIn0.eyJpYXQiOjE1NTk1Mjk1MjksImlzcyI6Imh0dHA6XC9cL3d3dy5weWcuY29tIiwiYXVkIjoiaHR0cDpcL1wvd3d3LnB5Zy5jb20iLCJuYmYiOjE1NTk1Mjk1MjgsImV4cCI6MTU1OTUzMzEyOSwianRpIjoiM2YyZzU3YTkyYWEiLCJ1c2VyX2lkIjoxfQ.4BaThL6_TbIMBGLIWZgpnoDQ-JlAjzbiK3y3BcvNiGI
~~~

其中：

- 头部（header），包含了两（可以更多）部分信息，分别是类型的声明和所使用的加密算法。

一个完整的头部就像下面的JSON：

~~~json
{
  'typ': 'JWT',
  'alg': 'HS256'
}
~~~

然后将头部进行base64加密/编码（该加密是可以对称解密的)，这就得到了jwt的第一部分。

- 载荷（payload）（body），载荷就是存放有效信息的地方。这些有效信息包含三个部分
  - 标准中约定声明（建议但不强制）
    - 签发人
    - 使用者
    - 签发时间
    - 有效期
    - ....
  - 公共的声明
  - 私有的声明

定义一个payload：

~~~json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
~~~

依旧进行base64加密，这就得到了jwt的第二部分。

- 签名（signature），这个签证信息由三部分组成：
  - 经过base64编码后的
    - header
    - payload
  - **secret（就是一个字符串，自己定义，值是什么无所谓）**

例如：

~~~javascript
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
var signature = HMACSHA256(encodedString, 'secret');
~~~

这样就得到了jwt的第三部分。

~~~javascript
var jwt = encodedString + '.' + base64UrlEncode(signature);
~~~

最终将三部分信息通过`.`进行连接就得到了最终的jwt字符串。后续不需要自己去写jwt怎么生成的。因此，此流程理解即可。

> **需要注意的是**
>
> - secret是保存在服务器端的
> - jwt的签发生成也是在服务器端的
> - secret是用来进行jwt的**签发**和jwt的**验证**
>
> 所以，secret它就是服务端的私钥，在任何场景都不应该泄露出去。一旦其他人（包括客户端的用户）得知这个secret，那就意味着他们可以自我签发jwt，接口就没有安全性可言了。

