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

Webpack要正常运行，必须依赖node环境，node环境为了可以正常执行很多代码，必须包含各种依赖的包，npm（node packages manager）工具就是专门管理各种包的工具

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

## webpack全局安装

在通过vs code 运行webpack进行打包时，报错webpack : 无法加载文件 D:\nodejs\node_global\webpack.ps1，因为在此系统上禁止运行脚本。解决方案：

- 以管理员身份运行vscode
- 执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的
- 执行：set-ExecutionPolicy RemoteSigned
- 这时再执行get-ExecutionPolicy，就显示RemoteSigned

- 全局安装`npm install webpack@<version> -g`

### 准备工作

创建文件和文件夹：

- dist文件夹：用于存放之后打包的文件
- src文件夹：用于存放写的源文件
  - main.js：项目的入口文件
  - Moudle.js；定义模块工具函数，可以在其他地方引用
  - index.html：浏览器打开展示的首页html
  - package.json：通过npm init生成的，npm包管理文件，**取名时千万不能叫webpack**
- `webpack ./src/main.js ./dist/bundle.js`可以将`main.js`打包成`bundle.js`
- 打包后dist文件夹下会生成一个bundle.js文件，只需要将这个js文件在index.html引入即可

### Webpack配置

- 新建文件`webpack.config.js`文件
- 配置Entry和Output
- output中的路径需要动态获取
- `const path = require('path')`导出node中的path包，path是一个函数
- `npm init`**注意：package.json中的name属性不能为“webpack”**
- `npm install`
- `path.resolve(__dirname,'dist')`或者`join`
- 此时，在终端里面直接使用`webpack`就可以打包js文件到`bundle.js`

但是实际开发中，一般不会直接使用webpack打包js文件，而是使用`npm run bulid`

- 为了让`webpack`和`npm run`映射起来
- 找到`package.json`文件下的`scripts`
- 在该对象中添加属性：`"build": "webpack"`
- 即可使用`npm run build`来打包js文件
- 此时，会优先在本地中找webpack，实际开发中，一般都会使用本地的webpack

### webpack本地安装（局部安装）

- 开发时依赖和运行时依赖
- 在项目运行时，并不需要webpack，只在打包和开发阶段需要
- `npm install --save-dev webpack@<version>`
- `npm install webpack@<version> -D`
- **注意：package.json中的name属性不能为“webpack”，否则这里会报错**

如何使用局部的webpack来打包？

- 一个项目往往依赖特定的webpack版本，全局的版本很可能和这个项目的webpack版本不一样，导致打包出现问题
- 通常一个项目都有自己的局部webpack版本

项目中先局部安装webpack，此时在终端直接使用webpack还是全局的版本，需要使用脚本`npm run`

## Loader的安装

当我们需要处理加载css，图片，高级的ES6，TS，less，.vue等等文件时，就需要使用loader

1. 在main.js中导入对应的文件，如css，图片。。。。。
2. 通过npm安装需要使用的loader，不同的文件需要不同的loader
3. 在webpack.config.js中的modules关键字下进行配置
4. 实际配置中，直接复制过来就可以了

- style-loader 将模块导出的内容作为样式并添加到 DOM 中
- css-loader 加载 CSS 文件并解析 import 的 CSS 文件，最终返回 CSS 代码
- less-loader 加载并编译 LESS 文件
- 注意style-loader需要放在css-loader前面，因为webpack读取loader时是从右向左的顺序读取的。

安装时要注意版本问题，报错很可能是版本的原因。

### 图片文件的处理

`url-loader`安装该loader处理图片文件，配置config时，注意options中的limit值，当加载的图片小于该值时，编译成base64，大于该值时，使用file-loader模块进行加载。

该limit默认值时8Kb，8*1024=8192

使用file-loader模块加载时，图片会一起打包到dist文件夹，**此时，图片的路径会发生变化，需要在webpack.config中配置公共的路径**

webpack会自动帮助我们生成一个32位hash值，目的防止名字重复，但是实际开发中，我们可能对图片的名字有一定的要求，比如将所有的图片放在一个文件夹中，跟上图片原来的名称，同时也要防止重复。所以，我们可以在loader下的options中，添加配置：

- `img`：文件要打包的文件夹
- `name`：获取图片原来的名字，放在该位置
- `hash:8`：防止图片名称冲突，依然使用hash，但是只保留8位
- `ext`：使用图片原来的拓展名
- 完整写法：`name:'img/[name].[hash:8].[ext]'`

最后，还需要在output出口中配置路径：`publicPath: 'dist/'`

### ES6语法处理loader

如果需要将ES6语法转化成ES5，那么需要使用babel。在webpack中，我们直接使用babel对应的loader就可以了

## webpack配置Vue

实际项目中需要使用Vuejs进行开发，必须对Vue进行依赖，需要安装，使用--save不需要--dev（只在开发时依赖）

- `npm install vue --save`

安装后依赖Vue

- `import Vue from 'vue'`

直接创建new Vue实例，此时，使用Vue很可能会报错，Vue会构建2类版本，runtime-only和runtime-compiler，前者不允许存在template，后者有compiler可以用于编译tempplate。

解决方案：添加配置

````js
 resolve:{
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
````

.vue文件loader的安装

- `npm install vue-loader vue-template-compiler --save-dev`

安装后再配置loader

## plugin插件

plugin是插件的意思，通常是用于对于某个现有架构进行拓展，webpack中的插件对现有功能的各种拓展，比如打包优化，文件压缩等。

loader是用于转换某些类型的模块，是一个转换器，plugin是webpack本身的拓展，是一个拓展器。

### plugin的安装

- 通过npm安装需要使用的plugins，某些webpack内置插件不需要安装
- 在webpack.config.js中的plugins中配置插件

### 添加版权的plugin

BannerPlugin为打包的文件添加版权声明，属于webpack自带的插件，修改配置`plugins:[new webpack.BannerPlugin('最终版权')]`，重新打包

### 打包html的plugin

在真实发布项目时，发布的是dist文件及中的内容，但是dist文件夹中如果没有index.html文件，那么打包的js文件就没有意义，所有可以使用HtmlWebpackPlugin插件打包index.html文件。

HtmlWebpackPlugin插件可以自动生成index.html文件，将打包的js文件，自动通过script标签插入到body中

安装HtmlWebpackPlugin插件：`npm install html-webpack-plugin --save--dev`

配置：template表示根据什么模板生成index.html，另外，我们需要删除之前在output中添加的publicPath属性，否则插入的script标签中的src可能有问题。

### js压缩的plugin

在项目发布前，需要对js文件进行压缩处理，需要使用第三方插件uglifyjs-webpack-plugin，并且版本号是1.1.1，和cli2保持一致

- `npm install uglifyjs-webpack-plugin@1.1.1 --save-dev`

### 搭建本地服务器

webpack提供了一个可选的本地开发服务器，这个服务器基于node.js搭建，内部使用express框架，可以实现浏览器自动刷新显示修改后的结果

- `npm install --save-dev webpack-dev-server@2.9.1`

devServer也是作为webpack中的一个选项，选项本身可以设置如下属性：

- contentBase：为哪个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
- port：端口号
- inline：页面实时刷新
- historyApiFallback：在SPA页面中，依赖HTML5的history模式

还可以再配置一个scripts：

- `"dev":"webpack-dev-server --open"` 直接打开浏览器

ctrl+c终止预处理命令

## webpack将开发和发布进行分离
