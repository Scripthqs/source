# Vue.js介绍

## 1.编程模式

- 以前使用的编程范式，是命令式编程
- 使用Vue的编程范式，是声明式编程。

使用构造函数的方式，传一个对象`{}`作为参数。

- `{}`包含`el`属性：该属性决定这个Vue对象挂载到哪个元素
- `{}`包含了`data`属性，该属性通常会存储一些数据
  - 这些数据可以自定义
  - 也可以是从服务器加载的
- `{}`包含了`methods`属性，该属性用于在Vue中定义新的方法

- `v-for`循环
- `v-on`监听事件
  - `v-on:click`可以写成`@click`
- Vue的实例中，如果想要获取data里的属性、methods里面的方法，可以通过this来访问。
- this指向的是Vue的实例对象。

## 2.Vue 的两个特性

1. **数据驱动视图**：

   + 数据的变化**会驱动视图**自动更新
   + 好处：程序员只管把数据维护好，那么页面结构会被 vue 自动渲染出来！

2. **双向数据绑定**：

   > 在网页中，form 表单负责**采集数据**，Ajax 负责**提交数据**。

   + js 数据的变化，会被自动渲染到页面上
   + 页面上表单采集的数据发生变化的时候，会被 vue 自动获取到，并更新到 js 数据中

> 注意：数据驱动视图和双向数据绑定的底层原理是 **MVVM**（Mode 数据源、View 视图、ViewModel 就是 vue 的实例）

## 3.MVVM模式

MVVM 指的是 Model、View 和 ViewModel。**ViewModel** 作为 MVVM 的核心，是它把当前页面的数据源（Model）和页面的结构（View）连接在了一起。

1. `Model`
   - 数据层，**对应data中的数据**
   - 可以是自已定义的数据，也可以来自于服务器在网络请求的数据
   - 可定义数据修改和操作的业务逻辑 对应JS对象

2. `View`
   - 用户看到的视图层，**对应el中的模板代码**
   - 在前端开发中，通常就是DOM层
   - 主要作用是给用户展示各种信息

3. `view Model`
   - 视图模型层，**new Vue实例**
   - 是View和Model沟通的桥梁
   - 一方面实现了`Data Bindings`（数据绑定），将Model的改变实时的反应到View
   - 另一方面它实现了`DOM Listener`（DOM 监听），当DOM发生一些事件（点击、滚动、touch等）时，可以监听到，并在需要的情况下改变对应的Data。
   - 负责业务逻辑的处理（比如Ajax请求），对数据进行加工后交给视图展示 同步连接V和M的对象

总结：

1. data中所有的属性，最后都出现在vm身上
2. Vue实例身上所有的属性及Vue原型上的所有属性，在Vue模板中都可以直接使用

- 当**Model数据源**发生变化时，会被 ViewModel 监听到，VM 会根据最新的数据源自动更新页面的结构 

- 当表单元素的值**View**发生变化时，也会被 VM 监听到，VM 会把变化过后最新的值自动同步到 Model 数据源中

## 3.计数器中的MVVM

- `h1、button`标签就是`View`，就是DOM
- `data`这个对象的属性值就是`Model`，就是我们抽离出来的obj
- `new Vue()`就是`View Model`，我们创建的Vue实例

工作流程：

- `View Model`通过`Data Bindings`让obj的数据实时在DOM中显示。
- View Model`通过`DOM Listener`来监听`methods`中的操作，来改变obj中的数据。

好处：

- Vue可以帮助我们完成Vue Model层任务，避免手动操作DOM元素，让前端开发者有更多的时间去关注数据的业务逻辑处理。

## 4.创建Vue实例传入的options

最基础的options

- el
  - 类型：string | HTMLElement
  - 决定之后的Vue实例会管理哪个DOM
- data
  - 类型：Object | Function（组件当中时，data必须是函数）
  - Vue实例对应的数据类型
- methods
  - 类型：{[key:string]:Function}
  - 定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中调用
- Vue的生命周期函数(钩子)