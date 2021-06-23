# Express框架

Express是基于Node.js平台，更加方便强大的web开发框架。Express的本质就是npm上的第三方包，快速的创建web网站的服务器或API接口的服务器。

## 安装Express

- npm i express

## 创建web服务

1. 导入express模块
2. 创建web实例
3. 定义允许访问的地址（创建路由规则）
   - 原先的输出res.end()
   - 现在的输出res.send()
4. 监听端口启动服务

## 访问调式

在测试请求的时候，get类型的请求我们我们可以直接通过地址栏访问URL来进行，对于post/put/delete等特殊类型的请求，我们往往无法通过访问地址来实现，这个时候需要使用第三方测试工具。常用的测试工具有：postman apipost apizza。以上3个任选一个，第三个为在线版本。

在前后端分离式开发中，常见的增删改查不再是纯粹的get+post两种方式请求，而是分的更加细化：

1. GET：查询请求类型
2. POST：新增请求类型
3. PUT：修改请求类型
4. DELETE；删除请求类型



