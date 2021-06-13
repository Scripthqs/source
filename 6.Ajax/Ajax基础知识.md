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

### 请求报文的格式和参数

- 行：GET/URL/HTTP1.1
- 头：Host:Cookie:Content-type:User-Agent：
- 空行:
- 体:get请求为空，username=admin&password=admin

### 响应报文