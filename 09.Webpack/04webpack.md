## 修改webpack默认配置

## 1.webpak.config.js

`webpack.config.js` 是 webpack 的配置文件。webpack 在真正开始打包构建之前，**会先读取这个配置文件**， 从而基于给定的配置，对项目进行打包。 

注意：由于 webpack 是**基于 node.js 开发出来的打包工具**，因此在它的配置文件中，**支持使用 node.js 相关 的语法和模块**进行 webpack 的个性化配置

## 2.webpack的默认配置

在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：

 ① 默认的打包入口文件为 src -> index.js 

② 默认的输出文件路径为 dist -> main.js 

注意：**可以在 webpack.config.js 中修改打包的默认约定**，如果没有按照规定取名，打包也会出错

## 3.自定义打包的入口与出口

在`webpack.config.js`中配置

```js
const path = require('path');// node 内置核心模块，用来处理路径问题

module.exports = {
  entry: path.join(_dirname,'./src/index.js'),// 入口文件
  output: {// 输出配置
    filename: 'bundle.js',// 输出文件名
    path: path.join(__dirname, './dist')// 输出文件路径配置
  },
   mode: 'development' //开发环境
};
```

