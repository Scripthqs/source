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

## 全局变量

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

npm仓库地址：`https://www.npmjs.com/`

除了npm以外还有yarn，功能和npm一样，也可以作为包管理工具，windows系统一般使用npm就可以了，npx可以简写。

### NPM源切换

源：源站，镜像源，镜像。通过 NRM 切换镜像源（推荐），让下载更快。

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

### NPM相关命令

- npm search：搜索模块包 切换淘宝源后就不可以使用search
- npm init：初始化
- npm install(简写i)：安装
- npm uninstall：卸载
- npm remove(简写r)：删除
- npm install 包名 --save：安装包并添加到依赖中，重要，主要使用这一条
- npm install：自动下载依赖所需的包
- npm install 包名 -g：全局安装包，一般都是一些工具
- npm root -g：查看全局node安装路径

安装参数；

1. --save -S：默认，记录为生产环境的模块
2. --save-dev -D：记录开发环境所需的模块
3. -g：全局安装

- 生产环境：代码已经上线了的运行环境
- 生产环境：开发人员在开发时的环境

通过npm安装的包都放在node_modules文件夹中，直接通过包名引入即可

### 语义化版本

版本格式：主版本号，次版本号，修订号，先行版本号

- 主版本号：当做了不兼容的api修改时
- 次版本号：当作了向下兼容的功能性新增
- 修订号：日常bug修改
- 先行版本号：作为延伸

1. `~`：表示版本号只能改变最末尾那一段
2. `^`：表示除了大版本号以外，小版本号和补丁版本号都可以改变

0开头的版本号有特殊情况。

软件版本发行的四个阶段：

1. alpha：内测版本
2. beta：公测版本
3. rekease candidate：RC，候选版本，功能已经确定，主要时排bug
4. release：正式发行版本

下载软件不要只看版本号，还要看阶段。

### 自定义npm命令

目的：npm允许我们执行npm调用三方模块，由于通过npm调用三方模块的指令写起来不方便，但是有需要频繁使用，因此我们可以自定义命令进行简化（别名）。在package.json文件中的script下，使用`npm run 自定义命令`，在webpack和vue中会经常使用。

### 自动重启应用

每次修改服务端得代码时，都需要重新运行node xx.js才能运行，安装nodemon自动重启工具可以自动运行服务端代码。

- 安装：npm i -g nodemon
- 使用：nodemon xx.js

应用非常广泛，框架也是这样的应用。

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

模块分为三大类：

- 核心模块：由node引擎提供，核心模块的标识就是模块的名字
- 文件模块：由用户自己创建的模块，文件模块的标识就是文件的路径，相对路径必须以.或..开头
- 自定义模块：开发着自己编写
  
### exports和module.exports的区别

- 通过exports只能使用.的方式来向外暴露内部变量
- module.exports既可以使用.的形式，也可以直接赋值

## os模块

os(operation system)模块，提供了与操作系统相关的实用方法和属性。

- `os.EOL` End of Line换行符 ELF，F是file
- `os.cups()`查看cpu
- `os.totalmem()`查看总内存，单位字节
- `os.freemem()`空余内存大小，单位字节
- `os.hostname()`主机名
- `os.type()`系统类型

## path模块

- path.basename() 获取文件名称
- path.dirname() 获取目录名
- path.extname() 获取文件拓展名（后缀）
- path.join() 给指定路径连在一起
- path.resolve() 模拟cd（切换目录）操作的同时拼接路径

'/'表示当前磁盘的根目录，window系统下，目录分割符可以是'/'或'\'，linux系统下，系统的分割符是'/'，不能使用'\'。

## url模块

url模块是专门用来解析处理url模块的，完整的url包含了：协议（https:），//，用户名和密码，域名（@sub.example.com），端口（8080），路径，查询，哈希。

- url.parse() 将一个地址转化成对象模式 （已经废弃）
- url.resolve() 将多个路径拼接成一个完整的url（已经废弃）

之前使用里面的parse方法来获取到前端发送到后端的数据，现在改方法已被弃用，现在需要使用URL类

- `const data = new URL(`${req.url}`,'https://example.org/')`// new一个URL实例

另一种方法是使用querstring()

## querystring模块

用于解析和格式化URL查询字符串，URL地址的get形式传参的使用工具。

- querystring.parse() 将字符串转化成对象
- querystring.decode()是parse()的别名
- querystring.stringify() 对象转换成字符串
- querystring.encode()是stringify()的别名

## Buffer(缓冲区)

Buffer的结构和数组很像，操作的方法和数组类似。数组不能存储二进制文件，而buffer就是专门存储二进制数据的。

- 使用buffer不需要引入模块，直接使用即可
- buffer中存储的都是二进制数据，但是显示时都是16进制的形式显示
- buffer中每一个元素的范围是从00-ff，（十进制中的90-255，二进制中的0000000-1111111），超过就省略
- 计算机中一个0或1，称为1位（1 bit），8位（5 bit）=1字节（1 byte）
- buffer中的一个元素，占用内存的一个字节
- 一个汉字占3个字节，一个字母占1个字节

### Buffer方法

- `Buffer.from(str)`方法将一个字符串转换buffer
- 使用`Buffer.alloc(size)`方法创建指定大小的Buffer
- 使用`Buffer.allocUnsafe(size)`方法创建指定大小的Buffer，但是可能包含敏感数据
- Buffer的大小一旦确定，则不能修改，Buffer实际是对底层内存的直接操作。
- 只要数字在控制台或页面中输出一定是10进制
- `b`uf.toString()`将缓冲区中的数据转换成字符串

## fs模块

文件系统就是通过node来操作系统中的文件，简称fs，在node中与文件的交互是非常重要的。

- 服务器的本质就是将本地文件发送给远程的客户端
- Node通过fs模块来和文件进行交互
- 该模块提供了一些标准文件访问API来打开、读取、写入文件，以及与其交互
- 要使用fs模块，首先需要对其进行加载 `const fs = require('fs')`

### 同步和异步调用

fs模块中所有的操作都有两种形式可供选择，同步sync和异步async。

- 同步文件系统会阻塞程序的执行，除非操作完毕，否则不会向下执行代码
- 异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回

异步方法才有回调函数，同步方法带Sync

### 文件的写入

文件写入分为3个步骤：打开文件-向文件写入内容-保存并关闭文件

#### 同步文件写入

打开文件同步调用：`fs.openSync(path[, flags, mode])`

- 参数：路径，打开文件的操作，设置文件的权限，一般不传，r只读，w可写，a追加
- 该方法会返回一个文件的描述作为结果，可以通过该描述对文件进行各种操作

添加内容同步调用：`fs.writeSync(fd, string[, position[, encoding]])`

- 参数：文件的描述符，要写入的内容，写入的起始位置

关闭文件：`fs.closeSync(fd)`

#### 异步文件写入

打开文件：`fs.open(path[, flags[, mode]], callback)`

- 异步调用的方法都是通过回调函数返回的
- 回调函数的两个参数：
  - err：错误对象，如果没有错误返回null，错误优先
  - fd：文件描述符

写入文件：`fs.write(fd, string[, position[, encoding]], callback)`

关闭文件：`fs.close(fd,callback)`

异步文件的回调函数会后执行

#### 简单文件写入

- fs.writeFile(文件路径，待写入的数据， err => {})  会覆盖之前的文件，追写使用fs.appendFile()

#### 流式文件写入

同步，异步，简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出

创建可写流：

- `fs.createWriteStream(path[, options])`
- `ws.write(data)`

可以通过监听流的open和close事件来监听流的打开和关闭

- `ws.once('open',function())`
- `ws.once('close',function())`

on可以为事件绑定一个事件，once会在触发一次以后自动失效

调用`ws.close()或者ws.end()`

### 文件的读取

文件的读取也分为：同步文件的读取，异步文件的读取，简单文件的读取和流式文件的读取。

#### 简单文件读取

- `fs.readFile(path[,option],callback)`
- `fs.readFileSync(path[,option],callback)`
- 参数：读取的路径，读取的选项，回调函数（返回值err,data会返回一个Buffer）
- 为什么返回buffer，因为读取的文件有可能是图片，音频

#### 流式文件读取

创建可读流

- `fs.createReadStream()`

必须为可读流绑定一个data事件，data事件绑定完毕，它会自动读取数据

````js
rs.on('data',function(data){
    console.log(data);
})
````

简单的方法：

- 创建可读流
- 创建可写流
- 导入数据`rs.pipe(ws)`

### 文件的其他操作

验证路径是否存在：

- `fs.exists(path,callback)`异步该方法已废弃
- `fs.existsSync(path)`

获取文件的信息：

- `fs.stat(path,callback)`
- `fs.statSync(path)`

删除文件：

- `fs.unlink(path,callback)`
- `fs.unlinkSync(path)`

列出文件：

- `fs.readdir()`
- `fs.readdirSync()`

截断文件：

- `fs.truncate()`
- `fs.truncateSync()`

建立目录；

- `fs.mkdir()`
- `fs.mkdirSync()`

删除目录：

- `fs.rmdir()`
- `fs.rmdirSync()`

重命名文件和目录：

- `rs.rename(oldpath,newpath,callcack)`
- `rs.renameSync(oldpath,newpath)`

监视文件更改写入：

- `rs.watchFile(filename,[option],listener)`
- 在回调函数中2个参数curr和prev

## http模块

http模块是用来创建web服务器，给用户提供的服务的机器就是服务器，在服务器上需要安装服务器软件，目前最主流的3个web服务器软件是Apache,Nginx,IIS。

用户从浏览器打开页面最终呈现在屏幕上，经历了哪些事？

- 首先用户需要联网
- 用户根据url请求，DNS将url中的域名解析成ip地址
- 根据地址等请求信息找对应的服务器
- 后端可能会用到数据库，服务器会从数据库拿到数据，再从服务器通过网络呈现到浏览器上。

### 开发模式

现在一般主要有前后端分离和前后端耦合开发2种模式。

1. 前后端分离：提出需求-设计接口约定数据（接口文档）-前后端并行开发-前后端集成-前端调整页面-集成成功-交互
2. 前后端耦合开发：提出需求-前端开发页面-后端编译成模板-前后端对接（需要相互看彼此的代码）-集成遇到问题-前端返工-后端返工-二次集成-集成成功-交互

现在主要是使用前后端分离开发，不过要是懂后端语言耦合开发也不错。

### 服务器相关的概念

1. ip地址：ip地址有v4和v6之分，ip地址是互联网上每台计算机/电子设备的唯一地址，因此ip地址具有唯一性。在开发期间，自己的电脑即是服务器也是客户端，可以在本机浏览器中输入127.0.0.1进行访问。
2. 域名：尽管ip地址能够唯一的标记网络上的计算机，但是ip地址是一长串的数字，不直观也不便于记忆，于是人们发明了另一套字符型的地址方案，叫域名地址，ip地址和域名是一一对应的关系，这份关系存放在一种叫做域名服务器（DNS）的电脑中，在开发测试期间，127.0.0.1对应的域名是localhost。
3. 网络协议：网络上的计算机交换信息，就像生活中的语言一样，在网络上的各台计算机之间也有一种语言，这就是网络协议，不同的计算机之间必须使用相同的网络协议才能进行通信，如，TCP，UDP,HTTP,FTP等等。
4. 端口号：服务器中的端口号就像是生活中的门牌号一样，通过门牌号准确的将邮件送到手里，一台电脑，可以运行N个web服务，每个web服务都对应一个唯一的端口号，客户端发来的网络请求，通过端口号，可以准确的交给对应的web服务进行处理。服务器的端口号是不可以重复的，必须是独一无二的，http服务默认端口号是80，https默认端口是443，端口号的的范围是0-65535。

### 创建web服务器

通过nodejs中http模块来创建web服务器的模块。

1. 导入http模块
2. 创建web服务对象实例
3. 绑定监听客户端请求事件request
4. 监听端口，启动服务

### 静态资源服务器

静态资源指图片、音频、视频、css，html，js文件等等，不需要与后端的数据库进行交互，只要我们不改源文件是固定的，这些资源就是静态资源。专门保存上述静态资源的服务器，称之为静态资源服务器。

为什么要将静态资源和动态资源分开放，静态资源一般需要高带宽，而后端资源一般不需要较大的资源，主要是为了提升静态资源的访问速度。

### get数据获取

当请求方式是get时，浏览器会使用查询字符串的方式进行传递数据，即：query string Parameters。查询字符串的规则：请求参数使用 URL地址和“问号传参“ 的方式进行传递----用问号把url和请求参数分开。

- 请求参数的格式：以键值对的方式体现，多个键值对之间用&隔开。

### post数据获取

当请求方式不是get（大部分情况是post或put）时，那么请求的数据不是在url上，而是在请求体里。chrome浏览器针对不同的content-type有做了区分，分别是formData和request payload。

表单数据多数为post进行提交到服务器端。需要监听req对象的data事件来获取客户端发送到服务器的数据。如果数据量比较大，无法一次性发送完毕，则客户端会把数据分割后分批次发送给服务器，所以data事件可能会被触发多次，每次触发data事件时，收到的数据只是全部数据的一部分，因此需要做数据的拼接才能得到完整的数据。
