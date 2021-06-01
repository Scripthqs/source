# Node.js基础知识

## API相关介绍

JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供，所以 JavaScript 只适合嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。

### JavaScript宿主环境

- 浏览器：最常见的环境
- 服务器环境: Node项目就是服务器环境

各种宿主环境提供额外的 API（即只能在该环境使用的接口），以便 JavaScript 调用。

### 什么是API

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

### API作用

- 用来操控网站所基于的浏览器与操作系统的不同方面，或是操控由其他网站或服务端传来的数据
- 操作文档
  - 在制作Web页面和APP时，我们就是使用DOM提供的API来控制的HTML和样式信息，
- 从服务器获取数据 允许网页直接处理对服务器上可用的特定资源的 HTTP 请求，并在显示之前根据需要对结果数据进行格式化。称为`Ajax`技术。
- 绘制图形
- 视频和音频API
- 客户端存储

## Node.js概述

- Node.js不是一门语言，也不是JavaScript的框架。
- Node.js是JavaScript在服务器端的运行环境（平台）。
- Node.js没有BOM和DOM相关的API，但是新增了一些 Node.js相关的API。
- Node环境提供了一些附加API，包括文件、网络等相关的 API。

Node.js 扩展了 JS 在后端的能力（比如 I/O 操作、文件读写、数据库操作等）。使得 JS 既可以在前端进行 DOM 操作（浏览器前端），又可以在后端调用操作系统资源。

JavaScript是目前最简单的全栈式语言。

### Node.js运行环境的核心

Node.js 运行环境的核心是V8引擎和libuv库。

- V8引擎：编译和执行JS代码、管理内存、垃圾回收。V8 给JS提供了运行环境，可以说是 JS 的虚拟机。
- libuv：是一个专注于异步 I/O 的跨平台类库，目前主要在 Node.js 上使用。

V8 的内存限制：在一般的后端开发语言中，在基本的内存使用上没有什么限制，然而在 Node 中通过 JavaScript 使用内存时就会发现只能使用部分内存（64 位系统下约为 1.4GB，32 位系统下约为 0.7GB）。在这样的限制下，将会导致 Node 无法直接操作大内存对象。

### Node.js的应用

1. BFF中间层
   - 服务于前端的后端（Backend For Frontend）
   - 让前端有能力自由组装后台数据
   - 前端开发者能够自主决定与后台的通讯方式
   - 安全性更高（不会把主服务器暴露在外面）、降低主服务器的复杂度
2. 服务端渲染
   - SSR / Server Side Render
   - 服务器返回的不是接口数据，而是一整个页面（或整个楼层）的HTML字符串，浏览器直接显示即可
   - 在服务器端直接就渲染好了，然后一次性打包返回给前端。
   - 优点是有利于 SEO、首屏渲染很快

3. 做小型服务、小型网站的后端（基于 Express、Koa 框架）
   - 很多公司的后台管理系统，都是用 Node.js 来开发接口
   - 后台管理系统对性能和并发的要求不是太高
4. 做项目构建工具
   - 前端正在广泛使用的构建工具 gulp、Webpack，就是基于 Node.js 来实现的
5. 做 PC 端的软件（基于 Electron 框架）
   - Electron是Node.js在PC客户端的技术。
   - 代码编辑器VSCode软件，就是用JS语言实现的。

### 其他

客户端渲染：

- CSR / Client side render
- 前端通过一大堆接口请求数据，然后通过JS动态处理和生成页面结构和展示
- 优点是前后端分离、减小服务器压力、局部刷新
- 缺点是不利于 SEO（如果你的页面然后通过 Ajax 异步获取内容，抓取工具并不会等待异步完成后再行抓取页面内容）
- 首屏渲染慢

服务端渲染

- 搜索引擎优化
- 首屏速度优化

前端会Node.js不能代表就是一名全栈工程师，

- Node.js的出现，让JS语言实现了前后端语法的统一，让 JS 语言的技术栈更佳全面。
- 语言只是一种工具。
- 涉及到后台开发相关的技术还有很多需要学习。

## Node.js安装

通过Node.js安装包（不推荐）

- 注意一定要选择偶数版本，因为奇数版不稳定。
- 如果需要选择其他的版本，重新下载新的安装包，覆盖安装。
- 覆盖旧版本后，以前版本安装的全局工具包，要重新安装。
- 无法在多个版本之间切换

通过NVM安装（推荐）

- NVM：node.js version manager，用来管理node的版本。
- 先在github上安装NVM，然后通过NVM安装Node.js。
  - nvm-noinstall.zip：绿色免安装版，但使用时需进行配置。
  - nvm-setup.zip：安装版，推荐使用
- 安装时，选择NVM和Node.js快捷方式的安装路径
- 打开CMD命令行，输入`nvm`可以看到里面列出了各种命令
- `nvm -v`，查看已安装的nvm版本。
- `nvm ls`查看本地安装的node所有版本
- `node -v`，查看正在使用的 node 版本。

安装Node.js

- `nvm install 14.16.1`安装，命令中的版本号可自定义
- `nvm use 14.16.1`使用特定版本
- `nvm uninstall 14.16.1`卸载指定版本

如果 Node 安装失败，可以在安装路径中找到的settings.txt文件中，新增如下两行，修改镜像源：

````text
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
````

## 模块化

### 模块的定义

- 在node中，一个js文件就是一个模块。

### 如何使用模块

- 通过require()函数引入外部的模块，传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
- 如果使用相对路径，必须以.或..开头
- 使用require()引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块
- 在node中，每一个文件中的js代码独立运行在一个函数中，一个模块中给的变量，其他模块不能直接访问
- 需要通过exports向外部暴露变量和方法，需要将暴露的变量和方法设置为exports的属性

### 模块的分类

模块分为两大类：

- 核心模块：由node引擎提供，核心模块的标识就是模块的名字
- 文件模块：由用户自己创建的模块，文件模块的标识就是文件的路径，相对路径必须以.或..开头

### global

在node中有一个全局对象global，它的作用和网页中的window类似

- 在全局中创建的变量会作为global的属性保存
- 在全局中创建的函数会作为global的方法保存

当node在执行模块中的代码时，他会首先在代码的最顶部，添加如下代码

- `function (exports,require,module,__filename,__dirname){}`

实际中模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递了5个实参

- exports：该对象将变量和函数暴露在外面
- require：函数，用来引入外部的模块
- module：module代表是当前模块的本身，exports就是module的属性，既可以使用exports导出，也可以使用module.exports
- __filename：当前文件的完整路径
- __firname：当前文件夹的完整路径

### exports和module.exports的区别

- 通过exports只能使用.的方式来向外暴露内部变量
- module.exports既可以使用.的形式，也可以直接赋值

## package包

CommonJS的包规范将一组相关的模块组合在一起，形成一组完整的工具，CommonJS的包规范又包结构和包描述文件两部分组成。

- 包结构：用于组织包中的各种文件
- 包描述文件：描述包的相关信息，以供外部读取分析

包实际就是一个压缩文件，解压以后还原为目录。符合规范的目录，应该包含以下文件：

- package.json：描述文件（必须的）
- bin：可执行二进制文件
- lib：js代码
- doc：文档
- test：单元测试

.json文件不能写注释

## NPM使用介绍

NPM（Node Package Manager）是随同Node.js一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种；

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

- `npm -v` 查看npm的版本，npm相当于手机的app应用商店。

由于 npm 默认的下载地址在国外（npmjs.com），有时候会被墙，导致无法下载或者下载很慢。因此，我们可以尝试切换成，从其他的镜像源下载 npm 包。

通过 NRM 切换镜像源（推荐），让下载更快

- NRM：Node Registry Manager。作用是：切换和管理 npm 包的镜像源。
- `npm i -g nrm`安装 NRM
- `nrm ls`显示全部的镜像
- `nrm use taobao` 使用淘宝的镜像

`nrm ls`显示全部的镜像报错`code: ERR_INVALID_ARG_TYPE`

解决方法:

- 打开`cli.js`第17行修改成

````text
//const NRMRC = path.join(process.env.HOME, '.nrmrc'); (删除)
const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');
````

重启CMD生效。

- npm search：搜索模块包 切换淘宝源后就不可以使用search
- npm init：初始化
- npm installl(简写i)：安装
- npm remove(简写r)：删除
- npm install 包名 --save：安装包并添加到依赖中，重要，主要使用这一条
- npm install：自动下载依赖所需的包
- npm install 包名 -g：全局安装包，一般都是一些工具

通过npm安装的包都放在node_modules文件夹中，直接通过包名引入即可

## Buffer(缓冲区)

Buffer的结构和数组很像，操作的方法和数组类似。数组不能存储二进制文件，而buffer就是专门存储二进制数据的。

- 使用buffer不需要引入模块，直接使用即可
- buffer中存储的都是二进制数据，但是显示时都是16进制的形式显示
- buffer中每一个元素的范围是从00-ff，（十进制中的90-255，二进制中的0000000-1111111）
- 计算机中一个0或1，称为1位（1 bit），8位（5 bit）=1字节（1 byte）
- buffer中的一个元素，占用内存的一个字节
- 一个汉字占3个字节，一个字母占1个字节

### Buffer创建

- 使用`Buffer.alloc()`方法创建指定大小的Buffer
- Buffer的大小一旦确定，则不能修改，Buffer实际是对底层内存的直接操作。
