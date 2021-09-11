# Vue CLI脚手架

## 1 单页面应用程序

单页面应用程序（英文名：Single Page Application）简称 SPA，顾名 思义，指的是一个 Web 网站中只有唯一的一个 HTML 页面，所有的功能 与交互都在这唯一的一个页面内完成.

## 2 Vue CLI简介

在开发大型项目，必然会使用Vue CLI工具

- 在Vue.js开发大型应用时，需要考虑代码目录结构，项目结构和部署、热加载，代码单元测试等事情
- 使用脚手架工具可以帮助我们完成这些事情

CLI全称Command-Line Interface，翻译为命令行界面，但是俗称脚手架。

Vue CLI是官方发布vue.js项目脚手架，可以**快速搭建Vue开发环境和对应的webpack配置**。脚手架依赖node和webpack。

## 3  安装和使用

vue-cli 是 npm 上的一个全局包，使用 npm install 命令，安装cli

```bash
npm install -g @vue/cli
```

基于 vue-cli 快速生成工程化的 Vue 项目：

```bash
vue create 项目的名称
```

- `vue ui`以图形化界面创建和管理项目，导入项目即可使用

- ESlint：检测代码规范
- unit test：单元测试
- e2e test：e2e测试，end to end，安装Nightwatch，进行自动化测试的工具

## 4 vuecli目录解析

- public文件夹：相当于cli2对static目录,index.html
- .browserslistrc：浏览器相关支持情况

- assets 文件夹：存放项目中用到的静态资源文件，例如：css 样式表、图片资源
- components 文件夹：程序员封装的、可复用的组件，都要放到 components 目录下
- main.js 是项目的入口文件。整个项目的运行，要先执行 main.js
- App.vue 是项目的根组件。
- .editorconfig：项目文本相关配置
- .eslintignore：代码规范忽略文件配置
- .gitignore：git仓库忽略文件配置
- .postcssrc.js：CSS相关转化配置
- .babel.config.js：ES代码相关转化配置

## 5 vuecli修改配置

Vue3.x脚手架隐藏了所有webpack相关的配置，若想查看具体的配置可以执行

- `vue inspect > output.js` 只能查看，不能修改

修改配置的方法：

1. vuecli3.x的很多相关配置被隐藏，使用vue ui即可使用图形化管理配置

2. 在node_modules文件夹下的@vue文件夹中可以找到隐藏的配置

3. 自己创建vue.config.js文件，mudule.exports = {}自定义配置文件

4. 另外，在用户下找到.vuerc可删除修改一些保存的配置

## 6 runtime-compiler和runtime-only

Vue程序的运行流程；

1. 写出template（模板）
2. parse（解析）成ast（抽象语法树）abstract syntax tree
3. compile（编译）成render函数
4. vdom（虚拟dom）
5. ui（真实dom）

- runtime-compiler解析步骤：template->ast->render->vdom->ui
- runtime-only解析步骤：render->vdom->ui(性能更好，代码更少)

render函数中的h是createElement函数，createElement('标签','{标签属性}',['标签中的内容'])

render函数可以直接传入组件，`render:createElement => createElement(App)`

使用runtime-only版本时，.vue文件的template由vue-template-compiler直接编译成render函数

```vue
new Vue({
  render: h => h(App),
}).$mount('#app')
//相当于
new Vue({
  el: '#app',
  render: h => h(App),
})
```

**浏览器无法解析.vue文件，通过vue-template-compiler将vue文件转换成js文件**

## 7 vue 项目的运行流程

通过**main.js把App.vue渲染到index.html**的指定区域中。

- **App.vue** 用来编写待渲染的**模板结构**
- **index.html** 中需要预留一个 **el 区域**
- main.js 把 **App.vue** 渲染到了 **index.html** 所预留的区域中

## 8 components和views文件夹

- 两个文件夹都是用来方组件的，

- 如果每个组件是通**过路由来切换的**，就放在**views里面**
- **不使用路由**切换，**可复用**的组件，放在**components里面**

