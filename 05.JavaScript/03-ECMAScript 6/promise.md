# Promise

## 1.Promise简介

promise是ES6引入的异步编程的新解决方案。(旧方案是单纯使用回调函数)

- async：异步
- sync：同步

异步编程 ①fs 文件操作 ②数据库操作 ③Ajax ④定时器

- `Promise`是一个构造函数 (自己身上有`all`、`reject`、`resolve`这几个方法，原型上有`then`、`catch`等方法)

- `promise`对象用来封装一个异步操作并可以获取其成功/失败的结果值

## 2.Promise 的状态