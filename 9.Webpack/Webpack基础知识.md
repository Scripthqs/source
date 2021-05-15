# Webpack基础知识

## Webpack简介

官方解答：Webpack是一个现代的JavaScript应用的静态**模块打包**工具

ES6之前必须借助其他工具让我们进行模块化开发。

Webpack核心就是帮助我们解决模块化开发，并且会帮助我们处理模块间的依赖关系。不仅仅是JS文件，CSS，图片，json文件等等在webpack中都可以被当作模块来使用。

grunt/gulp也是前端的构建工具，核心是Task，即流程自动化

- 配置一系列task，并且定义task要处理的事务（例如ES6，ts转化，图片压缩，scss转换成css）
- 让grunt/gulp来依次执行这些task，而且让整个流程自动化
- 所以grunt/gulp也称为前端自动化任务管理工具

什么时候使用grunt/gulp？

- 工程模块依赖非常简单，甚至没有用到模块化的概念
- 只需要进行简单的合并，压缩
- 整个项目使用了模块化管理，而且依赖性非常强，就可以使用webpack

Webpack要正常运行，必须依赖node环境，node环境为了可以正常执行很多代码，必须包含各种依赖的包，npm（mode packages manager）工具就是专门管理各种包的工具

打包流程：

- 入口main.js(index.js)
- 模块->chunk
- 打包->bundle

webpack将所有得资源文件（js/json/css/img/less...）都会作为模块处理，它会根据模块的依赖关系进行静态分析，打包生成对应的静态资源（bundle）

### webpack的5个核心概念

- Entry 入口：指示webpack以哪个文件作为入口起点开始打包，分析构建内部依赖图
- Output 输出：指示webpack打包后的资源bundles输入到哪里区，以及如何命名
- Loader 翻译：让webpack能够处理那些非JavaScript文件，webpack本身只能理解JavaScript
- Plugins 插件：可以用于执行范围更广的任务，插件的范围包括打包优化，压缩，重新定义环境中的变量等等
- Mode 模式：指示webpack使用相应模式的配置，开发模式（development）和生产模式（production）。开发模式在本地能运行，生产模式能让代码优化上线运行


