# Source Map

## 1. 生产环境遇到的问题

前端项目在投入生产环境之前，都需要对 JavaScript 源代码进行压缩混淆，从而减小文件的体积，提高文件的 加载效率。此时就不可避免的产生了另一个问题：

 **对压缩混淆之后的代码除错（debug）**是一件极其困难的事情

- 变量被替换成没有任何语义的名称

- 空行和注释被剔除

## 2.什么是 Source Map

**Source Map 就是一个信息文件，里面储存着位置信息**。也就是说，Source Map 文件中存储着压缩混淆后的 代码，所对应的转换前的位置。 

有了它，出错的时候，除错工具将**直接显示原始代码，而不是转换后的代码**，能够极大的方便后期的调试

## 3 webpack 开发环境下的 Source Map

在**开发环境下**，webpack 默认启用了 Source Map 功能。当程序运行出错时，可以直接在控制台提示错误行 的位置，并定位到具体的源代码.

 **解决默认 Source Map 的问题:**

**开发环境下**，推荐在 webpack.config.js 中添加如下的配置，即可保证运行时报错的行数与源代码的行数 保持一致

```js
module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
}

```

**在生产环境下**，如果**省略了 devtool 选项**，则最终生成的文件中不包含 Source Map。这能够**防止原始代码通 过 Source Map 的形式暴露**给别有所图之人

```
正式发布，关闭devtool，但是并不方便
```

**只定位行数不暴露源码：**

**在生产环境下**，如果**只想定位报错的具体行数**，且不想暴露源码。此时可以将 devtool 的值设置为 nosources-source-map。

```
module.exports = {
  mode: 'development',
  devtool: 'nosources-source-map',
}
```

采用此选项后：你应该将你的服务器配置为，不允许普通用户访问 source map 文件！

## 4.Source Map 总结

开发环境下：

- 建议把 devtool 的值设置为 eval-source-map

- 好处：可以精准定位到具体的错误行

生产环境下：

- 建议关闭 Source Map 或将 devtool 的值设置为 nosources-source-map

- 好处：防止源码泄露，提高网站的安全性

