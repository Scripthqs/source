# NodeJS简介

相关网址：

- https://nodejs.org/zh-cn/

- http://nodejs.cn/

Node.js 是一个开源与跨平台的`JavaScript `运行时环境。它是在浏览器外运行，它是一个事件驱动异步I/O单进程的**服务端**JS环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。它使用新的 ECMAScript标准，不必等待所有用户更新其浏览器，可以通过更改其版本来决定要使用新的标准特性。

注意：

- 浏览器是JS的前端运行环境。
- Node.js是JS的后端运行环境，在后端中运行无法调用 `DOM 和 BOM 等浏览器内置 API`。
- nodejs调用服务查看服务器相关api gulp基础node环境

## 1.Node.js运行环境的核心

Node.js 运行环境的核心是V8引擎和libuv库。

- V8引擎：编译和执行JS代码、管理内存、垃圾回收。V8 给JS提供了运行环境，可以说是 JS 的虚拟机。
- libuv：是一个专注于异步 I/O 的跨平台类库，目前主要在 Node.js 上使用。

V8 的内存限制：在一般的后端开发语言中，在基本的内存使用上没有什么限制，然而在 Node 中通过 JavaScript 使用内存时就会发现只能使用部分内存（64 位系统下约为 1.4GB，32 位系统下约为 0.7GB）。在这样的限制下，将会导致 Node 无法直接操作大内存对象。

## 2.NodeJS应用场景

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

简单概括：

- 创建应用服务
- web开发（后端）
- 接口开发（小程序）
- 客户端应用工具gulp、webpack、vue脚手架、react脚手架、小程序

## 3.模块化

NodeJs基于Commonjs模块化开发的规范，**它定义一个JS文件就称之为一个模块**

node的模块类型：

- 核心（内置）模块 - 安装nodejs自带的模块

- 第三方模块 - 需要手动通过(npm/yarn)来进行安装

- 自定义模块 - 开发者自己编写开发

~~~javascript
// 导出
module.exports / exports
// 导入
require("module_name")
~~~

ES6标准发布后，module成为标准，标准使用是以export指令导出接口，以import引入模块。但是在我们一贯的**node模块中**，我们依然采用的是CommonJS规范，**使用require引入模块**，使用module.exports导出接口。

## 4.NodeJS安装

nodejs环境安装非常便捷，直接可通过官网地址，下载对应的安装软件包即可安装使用。

![nodejs](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201122214316624.png)

> 注：`尽量下载长期支持版本(LTS，有些软件是Release)`，如果在工作中有多个node环境的切换，可以安装ndoe环境管理工具NVM：https://github.com/coreybutler/nvm-windows/releases
>
> nvm可以让你的电脑中有N多个node版本。
>
> node8 A项目  B项目 node9  C项目 node10

### 4.1通过Node.js安装包（不推荐）

- 注意一定要选择偶数版本，因为奇数版不稳定。
- 如果需要选择其他的版本，重新下载新的安装包，覆盖安装。
- 覆盖旧版本后，以前版本安装的全局工具包，要重新安装。
- 无法在多个版本之间切换

### 4.2通过NVM安装（推荐）

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

