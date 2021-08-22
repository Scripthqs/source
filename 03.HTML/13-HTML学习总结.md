# html问题

## 1、Doctype 的作用

Doctype是一种文档声明，目的是说明当前代码用的HTML的哪一种规范。`<!DOCTYPE>`声明必须是HTML文档的第一行，位于html标签之前。HTML5 只需要写 `<!DOCTYPE HTML>`

## 2、行内元素和块级元素

行内元素不独占一行，块级元素独占一行

行内元素：`span`、`a`、`input`、`img`

块级元素：`div` 、`ul`、 `ol` 、`li`、 `h1~h6` 、`p` 、`table` 等

## 3、HTML语义化的理解

**HTML的职责是描述一块内容是什么（或其意义），而不是它长什么样子；它的外观应该由CSS来决定。**

- 能够便于开发者阅读和写出更优雅的代码。
- 同时让浏览器或是网络爬虫可以很好地解析，从而更好分析其中的内容。
- 更好地搜索引擎优化（SEO)。

## 4、浏览器内核

浏览器分成两部分：**渲染引擎（内核）和JS引擎**。

渲染引擎主要负责取得网页的内容、整理讯息、计算网页的显示方式等，JS引擎则是解析 `Javascript` 语言，执行 `javascript` 语言来实现网页的动态效果。

## 5、html5有哪些新特性

- 语义化标签: `header``footer``nav``section``article``aside` 等
- 增强型表单：`date`(从一个日期选择器选择一个日期) `email`(包含 e-mail 地址的输入域) `number`(数值的输入域) `range`(一定范围内数字值的输入域) `search`(用于搜索域) `tel`(定义输入电话号码字段) 等
- 视频和音频：`audio``video`
- `Canvas`绘图 `SVG`绘图
- 地理定位：`Geolocation`
- 拖放API：`drag`
- `web worker`：是运行在后台的 `JavaScript`，独立于其他脚本，不会影响页面的性能
- `web storage`: `localStorage``sessionStorage`
- `WebSocket`: `HTML5` 开始提供的一种在单个 `TCP` 连接上进行全双工通讯的协议

## 6、Web存储

 在网页中，会经常性在本地存储大量的数据，传统方式我们以`document.cookie`来进行存储，但是存储大小只有4kb左右，解析也非常复杂。

1. Cookie 是浏览器访问服务器后，服务器传给浏览器的一段数据。

2. 浏览器需要保存这段数据，不得轻易删除。

3. 此后每次浏览器访问该服务器，都必须带上这段数据。

Cookie 一般有两个作用:

1. 识别用户身份
2. 记录历史

**H5有两种存储方式：**

1. `window.sessionStorage`：会话存储
   - 保存在内存中
   - 生命周期为关闭浏览器窗口，窗口关闭时浏览器销毁
   - 在同一个窗口下数据可以共享

2. `window.localStorage`：本地存储
   - 有可能保存在浏览器内存里，也可能在硬盘中
   - 永久生效除非手动删除
   - 可以多串口共享

Web存储的特性：

1. 设置、读取方便
2. 容量较大，`sessionStorage`约5M，`localStorage`约20M
3. 只能存储字符串，可以将对象JSON.stringfy()编码后存储

## 7、浏览器内多个标签页之间的通信

- 使用 `localStorage`: `localStorage.setItem(key,value)`、`localStorage.getItem(key)`
- `websocket`协议
- `webworker`

## 8、src与href的区别

`src` 用于替代这个元素，而 `href` 用于建立这个标签与外部资源之间的关系

```
<link href="style.css" rel="stylesheet" />
<a href=""></a>

```

浏览器加载到这里的时候，`html` 的渲染和解析不会暂停，`css` 文件的加载是同时进行的

```js
<script src="script.js"></script>
<img src="" alt="">
```

当浏览器解析到这句代码时，页面的加载和解析都会暂停直到浏览器拿到并执行完这个js文件

## 9、表单提交中Get和Post方式的区别

- `Get` 一般用于从服务器上获取数据，`Post` 向服务器传送数据
- `Get` 传输的数据是拼接在Url之后的，对用户是可见的；`Post` 的传输数据对用户是不可见的
- `Get` 传送的数据量较小，不能大于 `2KB`。`Post` 传送的数据量较大，一般被默认为不受限制
- `Get` 安全性非常低，`Post` 安全性较高
- 在 `FORM` 提交的时候，如果不指定 `Method`，则默认为 `Get` 请求

## 10、script标签中defer和async的区别

**defer** 延时、**async**异步

defer 和 async属性都是去**异步加载外部的JS**脚本文件，它们都不会阻塞页面的解析，区别：

- 多个带async属性的标签，不能保证加载的顺序；多个带defer属性的标签，按照加载顺序执行；

