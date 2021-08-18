# js简介

## 1、JavaScript简介

JavaScript：从交互的角度，描述**行为**（实现业务逻辑和页面控制）

JavaScript基础分为三个部分：

- **ECMAScript**：JavaScript 的**语法标准**。包括变量、表达式、运算符、函数、if语句、for语句等。
- **DOM**：Document Object Model（文档对象模型），操作**页面上的元素**的API。比如让盒子移动、变色、改变大小、轮播图等等。
- **BOM**：Browser Object Model（浏览器对象模型），操作**浏览器部分功能**的API。通过BOM可以操作浏览器窗口，比如弹框、控制浏览器跳转、获取浏览器分辨率等等。

通俗理解就是：ECMAScript 是 JS 的语法；DOM 和 BOM 浏览器运行环境为 JS提供的API。

## 2、JavaScript特点

1. JavaScript 是解释型（脚本）语言，不需要事先被翻译为机器码；而是边翻译边执行（翻译一行，执行一行）

2. 单线程，从上到下逐行执行

3. 遵循ECMAScript标准

## 3、JavaScript引入方式

HTML中推荐双引号，js中推荐单引号。js严格区分大小写。以分号结尾但是可以省略。
有3种方式引入js代码：

- 行内式：直接写HTML标签的事件中
- 内嵌式：直接编写到`<script>`标签中。
- 引入外部JS文件`<script src="tool.js"></script>`

## 4、JavaScript输入输出

- 弹出警告框 `alert()`
- 控制台输出 `console.log()`
- 向body中输入内容 `document.write()`
- 弹出输入框 `prompt()`，用户不管输入什么内容，都是字符串。我们可以用一个变量，来接收用户输入的内容。

```js
alert('弹窗') 
console.log('控制台打印') 
document.write('<h1>标题1</h1>')
var a = prompt("请随便输入点什么东西吧");
console.log(a);
```

**JavaScript注释语句**：

```js
	//单行注释
	/*
		多行注释
	*/
```

## 5、JavaScript作用

- 表单动态校验（密码强度检测）**js最初的目的**

- 网页特效
- 服务端开发（node.js）
- 桌面应用程序（Electron)
- App（Cordova）
- 控制硬件-物联网（Ruff）
- 游戏开发（cocos2d-js）

## 6、浏览器执行js过程

浏览器分为渲染引擎和js引擎

- 渲染引擎：用来解析HTML和css，俗称内核，chrome的内核就是webkit
- js引擎：也称js解释器。用来读取网页中JavaScript代码，对其处理后运行，chrome浏览器的js引擎是v8



