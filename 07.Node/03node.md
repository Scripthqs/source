# Node相关知识

## 1.API概念

JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供，所以 JavaScript 只适合嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。

### 1.1JavaScript宿主环境

- 浏览器：最常见的环境
- 服务器环境: Node项目就是服务器环境

各种宿主环境提供额外的 API（即只能在该环境使用的接口），以便 JavaScript 调用。

### 1.2什么是API

应用程序接口（Application Programming Interface），简称API，是基于编程语言构建的结构，使开发人员更容易地创建复杂的功能。

API抽象了复杂的代码，并提供一些简单的接口规则可以直接使用。

在 Web 开发中，API 通常是开发者能用在应用（app）中的一系列代码特性（如 方法、属性 、事件和URL），这些特性被用于与用户的 web 浏览器中的组件、用户电脑上的其他软硬件或者第三方软件与服务交互。

- `getUserMedia API` 能被用于从用户的摄像头采集音视频
- `Geolocation API` 能被用于从用户的可用的任意定位设备（如 GPS）获取位置信息
- `Web Animations API` 能被用于制作一个网页中的动画，例如让网页中的图片移动或旋转

浏览器环境提供的额外API可以分成三大类：

- 浏览器控制类：操作浏览器
- DOM 类 API：操作网页的各种元素
- Web 类：实现互联网的各种功能

服务器环境主要提供操作系统的API，包括

- 文件操作 API
- 网络通信 API

**浏览器API**内置于Web浏览器中，能从浏览器环境中提取数据，并用来做有用的复杂的事情。

**第三方API**一般情况下不会内置于浏览器中，通常在第三方程序中。

### 1.3API作用

- 用来操控网站所基于的浏览器与操作系统的不同方面，或是操控由其他网站或服务端传来的数据
- 操作文档
  - 在制作Web页面和APP时，我们就是使用DOM提供的API来控制的HTML和样式信息，
- 从服务器获取数据 允许网页直接处理对服务器上可用的特定资源的 HTTP 请求，并在显示之前根据需要对结果数据进行格式化。称为`Ajax`技术。
- 绘制图形
- 视频和音频API
- 客户端存储

## 2.Node全局变量

在node中有一个全局对象global，它的作用和网页中的window类似

- 在全局中创建的变量会作为global的属性保存
- 在全局中创建的函数会作为global的方法保存

当node在执行模块中的代码时，他会首先在代码的最顶部，添加如下代码

```js
    function (exports,require,module,__filename,__dirname){

    }
```

实际中模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递了5个实参

- exports：该对象将变量和函数暴露在外面
- require：函数，用来引入外部的模块
- module：module代表是当前模块的本身，exports就是module的属性，既可以使用exports导出，也可以使用module.exports
- __filename：当前文件的完整路径
- __firname：当前文件夹的完整路径

```js
console.log(global);
console.log(__filename);
console.log(__dirname);
```

## 3.package包

CommonJS的包规范将一组相关的模块组合在一起，形成一组完整的工具，CommonJS的包规范又包结构和包描述文件两部分组成。

- 包结构：用于组织包中的各种文件
- 包描述文件：描述包的相关信息，以供外部读取分析

包实际就是一个压缩文件，解压以后还原为目录。符合规范的目录，应该包含以下文件：

- package.json：描述文件（必须的）
- bin：可执行二进制文件
- lib：js代码
- doc：文档
- test：单元测试

.json文件不能写注释，package.json文件可以自定义脚本