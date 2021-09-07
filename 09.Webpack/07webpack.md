# 打包发布

## 1. 为什么要打包发布

**项目开发完成之后**，需要使用 webpack **对项目进行打包发布**，主要原因有以下两点：

1. 开发环境下，打包生成的文件存放于内存中，无法获取到最终打包生成的文件
2. 开发环境下，打包生成的文件不会进行代码压缩和性能优化

为了让项目能够在生产环境中高性能的运行，因此需要对项目进行打包发布。

## 2.配置 webpack 的打包发布

在 package.json 文件的 scripts 节点下，新增 build 命令如下：

```js
  "scripts": {
    "dev": "webpack serve",
    "build":"webpack --mode production"
  },
```

**--model** 是一个参数项，用来指定 webpack 的**运行模式**。production 代表生产环境，会对打包生成的文件 进行代码压缩和性能优化。

注意：通过 --model 指定的参数项，会覆盖 webpack.config.js 中的 model 选项

## 3.把js文件统一生成到 js 目录中

在 webpack.config.js 配置文件的 output 节点中，进行如下的配置

```
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
```

## 4.把图片文件统一生成到 image 目录中

修改 webpack.config.js 中的 url-loader 配置项，新增 outputPath 选项即可指定图片文件的输出路径

```js
  module: {
    rules: [
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=8192&outputPath=img' },
    ]
  }
```

**注意：url-loader中，多个参数可以用&拼接。**

## 5.自动清理 dist 目录下的旧文件

为了在每次打包发布时自动清理掉 dist 目录中的旧文件，可以安装并配置 clean-webpack-plugin 插件

1.安装 clean-webpack-plugin 插件

```bash
npm install --save-dev clean-webpack-plugin
```

2.配置 webpack.config.js

```js
plugins: [
        new CleanWebpackPlugin(),
    ],
```

