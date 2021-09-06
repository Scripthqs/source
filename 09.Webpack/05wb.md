# Loader

## 1.loader概述

在实际开发过程中，webpack 默认只能打包处理以 .js 后缀名结尾的模块。其他**非 .js 后缀名结尾的模块**， webpack 默认处理不了，**需要调用 loader 加载器才可以正常打包**，否则会报错！

例如，当我们需要处理加载css，图片，高级的ES6，TS，less，.vue等等文件时，就需要使用loader

loader 加载器的作用：**协助 webpack 打包处理特定的文件模块**

- css-loader 可以打包处理 .css 相关的文件
-  less-loader 可以打包处理 .less 相关的文件
- babel-loader 可以打包处理 webpack 无法处理的高级 JS 语

注意：在webpack，一切都是模块，需要在index.js中通过import来引入各种文件，**不需要在index.html中引入**

```
//index.js
import './css/index.css'
```

ES6标准发布后，module成为标准，标准使用是以export指令导出接口，以import引入模块。但是在我们一贯的node模块中，我们依然采用的是CommonJS规范，使用require引入模块，使用module.exports导出接口。

## 2.打包处理 css 文件

1.**运行命令**，安装处理 css 文件的 loader

```bash
npm i css-loader style-loader -D//安装最新版
npm i style-loader@3.0.0 css-loader@5.2.6 -D 
```

> **注意**：可以直接安装最新版，但是不同的版本可能会报各种莫名其妙的错误，做好准备。-D（--save-dev)表示本地需要

2.在 webpack.config.js 的 module -> rules 数组中，**添加 loader 规则**如下

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```

其中，test 表示匹配的文件类型， use 表示对应要调用的 loader

注意：

- use 数组中指定的 loader 顺序是固定的
- 多个 loader 的调用顺序是：从后往前调用

## 3.打包处理 less 文件

1.运行 命令，安装处理 less文件的 loader

```bash
npm i less-loader less -D//安装最新版本
npm i less-loader@10.0.1 less@4.1.1 -D //安装指定版本
```

注意：**不同版本匹配很可能报错**

2.在 webpack.config.js 的 module -> rules 数组中，**添加 loader 规则**如下

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}
```

## 4.打包处理图片资源

**base图片适用于小图标，不用发送ajax网络请求，大图用url。**转换成后base64后，占用内存变大。	

图片资源属于与 url 路径相关的文件。

1.运行 命令，安装处理 url文件的 loader

```BASH
npm i --save-dev url-loader file-loader
npm i url-loader@4.1.1 file-loader@6.2.0 -D
```

2.在 webpack.config.js 的 module -> rules 数组中，**添加 loader 规则**如下

```
module.exports = {
  module: {
    rules: [
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=8192' },
  }
}
```

其中 **?**之后的使loader 的参数项

- **如果需要调用的loader只有一个，则可以只传递一个字符串**

- limit 用来指定图片的大小，单位是字节（byte）

- 只有 ≤ limit 大小的图片，才会被转为 base64 格式的图片

## 5.打包处理 js 文件中的高级语法

webpack 只能打包处理**一部分**高级的 JavaScript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借 助于 **babel-loader** 进行打包处理。例如 webpack 无法处理下面的 JavaScript 代码

1**.运行 命令**，安装 babel-loader

> webpack 3.x | babel-loader 8.x | babel 7.x

```bash
npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack
npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
```

2.**添加 loader 规则**

```
module: {
  rules: [{ test: /\.js$/, use: 'babel-loader',exclude: /node_modules/}]
}
```

3.配置 babel-loader，在项目根目录下，具体情况要看使用了哪些babel-loader插件，创建名为 **babel.config.js **配置文件，比如使用组件库element-ui时，就需要配置 如下：

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
		["@babel/preset-env", { "modules": false }],
  ],
	plugins:[
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

