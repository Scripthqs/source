# Vue基础知识

## Vue概述

Vue(Vue.js)是一套用于构建用户界面的渐进式框架。

渐进式：

- 可以使用Vue对一个项目的某一个页面进行搭建，对之前使用JQuery或者原生JS的页面进行重构。
- Vue全家桶：Core + Vue-router + Vuex

Vue的核心概念：数据驱动，避免手动操作DOM元素。可以让前端开发者有更多的时间关注数据的业务逻辑，而不是关心DOM是如何渲染的。

### 框架和库

框架:

- 一套完整的解决方案。功能完善，但是对项目的侵入性较大，项目如果需要更换框架，则需要重新架构整个项目。
- Vue和React

库（插件）：

- 只是提供某个小功能。对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其他库实现需求。
- jQuery

### Vue的特点和高级功能：（开发时再慢慢体会）

特点：

- 模板渲染
- 响应式的更新机制：数据变化后，视图自动刷新
- 渐进式框架
- 组件化、模块化
- 轻量，占用内存小

高级功能：

- 解耦试图和数据
- 可复用的组件
- 前端路由技术 vue-router
- 状态管理 vuex
- 虚拟DOM

## Vue.js安装

Vue.js分为开发版本和生产版本。

1. 直接CDN引入
   - 通过script标签属性src引入文件的**绝对路径**。
   - 用户在读取网页内容的时候，就会去CND服务器中下载所需的文件，而不是在你的服务器里捞。
2. 直接在官网下载所需版本的文件
   - 将文件复制到项目文件夹
   - 通过script标签属性src引入文件的**相对路径**。
3. 通过NPM安装
   - NPM是Node默认的模块管理器，是命令行下的一个软件，用来安装和管理Node模块。
   - NPM不需要单独安装，在默认安装Node的时候，会连带一起安装NPM。
   - `$ npm install vue`安装最新稳定版

### Vue.js介绍

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

### MVVM模式

1. `Model`
   - 数据层，对应data中的数据
   - 可以是自已定义的数据，也可以来自于服务器在网络请求的数据
   - 可定义数据修改和操作的业务逻辑 对应JS对象

2. `View`
   - 用户看到的视图层，对应模板代码
   - 在前端开发中，通常就是DOM层
   - 主要作用是给用户展示各种信息

3. `view Model`
   - 视图模型层，new Vue实例
   - 是View和Model沟通的桥梁
   - 一方面实现了`Data Bindings`（数据绑定），将Model的改变实时的反应到View
   - 另一方面它实现了`DOM Listener`（DOM 监听），当DOM发生一些事件（点击、滚动、touch等）时，可以监听到，并在需要的情况下改变对应的Data。
   - 负责业务逻辑的处理（比如Ajax请求），对数据进行加工后交给视图展示 同步连接V和M的对象

总结：

1. data中所有的属性，最后都出现在vm身上
2. Vue实例身上所有的属性及Vue原型上的所有属性，在Vue模板中都可以直接使用

### 计数器中的MVVM

- `h1、button`标签就是`View`，就是DOM
- `data`这个对象的属性值就是`Model`，就是我们抽离出来的obj
- `new Vue()`就是`View Model`，我们创建的Vue实例

工作流程：

- `View Model`通过`Data Bindings`让obj的数据实时在DOM中显示。
- View Model`通过`DOM Listener`来监听`methods`中的操作，来改变obj中的数据。

好处：

- Vue可以帮助我们完成Vue Model层任务，避免手动操作DOM元素，让前端开发者有更多的时间去关注数据的业务逻辑处理。

### 创建Vue实例传入的options

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

### Vue生命周期

Vue实例有一个完整的生命周期，从开始创建，初始化数据，编译模板，挂载DOM，渲染-更新-渲染，卸载等一系列过程。

1. beforeCreate 创建前，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。
2. created 创建后，vue实例的数据data有了，el还没有
3. beforeMount 挂载前，
4. mounted 挂载后
5. beforeUpdate 数据更新前
6. updated 数据更新后
7. beforeDestroy 销毁前
8. destroyed 销毁后

- `new Vue`
- `hook`钩子，生命周期函数又称为钩子函数。

方法和函数的区别：

- 方法（method）：对象中的函数是方法。
- 函数（function）：函数是一个具体特定功能的对象。

### 代码规范

- `=`两边各一个空格
- 缩进2个空格可能比缩进4个空格更合理

## 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。

### 插值表达式`{{}}`

- Mustache语法（也就是双大括号）
- 数据绑定最常见的形式就是使用双大括号的文本插值
- 插值处的内容都会自动更新
- `{{}}`之间可以使用表达式，比如复杂的3元表达式

### v-once

- 当加上这个指令时，不会随着数据改变自动更新

### v-html

- `v-html="msg"`可以将msg解析成html元素
- 使用v-html渲染数据可能会非常危险，因为它很容易导致XSS（跨站脚本）攻击
- 使用的时候请谨慎，能够使用{{}}或者v-text实现的不要使用v-html

### v-text

- `v-text="msg"`可以将一个变量的值渲染到指定的元素中
- `v-text`会覆盖元素中原本的内容
- `v-text`没有闪烁的问题，因为它是放在属性里的

### v-pre

- 将插值表达式原封不动的显示

### v-cloak

- `v-cloak`保持和元素实例的关联，直到结束编译自动消失
- 和CSS 规则一起用的时候，能够解决差值表达式闪烁的问题
- 即可以隐藏未编译的标签直到实例准备完毕）

````js
<style>
    [v-cloak]{
        display:none;
    }
</style>
````

## 自定义指令

在Vue中，我们可以自定义指令。

定义语法：

1. 局部指令：
   - `new Vue({directives:{指令名:配置对象}})`
   - `new Vue({directives{指令名:回调函数}})`
2. 全局指令：
   - `Vue.directive(指令名,配置对象)`
   - `Vue.directive(指令名,回调函数)`

配置对象中常用的3个回调函数：

1. `.bind`：指令与元素成功绑定时调用
2. `.inserted`：指令所在元素被插入页面时调用
3. `.update`：指令所在模板结构被重新解析时调用

注意：

1. 指令定义时不加v-，但使用时要加v-
2. 指令如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名

## v-bind属性绑定机制

### v-bind绑定基本属性

基本属性：`src`和`href`属性

- `v-bind`：动态绑定用于绑定属性
- `<img v-bind:src="img动态地址">`
- v-bind的属性值里，可以写合法的 js 表达式
- Vue语法糖：可以省略`v-bind`，只写`:`

### v-bind动态绑定`class`属性

动态绑定class的属性的三种方式：

1. 字符串写法
   - 适用于样式的类名不确定，需要动态指定
2. 对象语法：
   - 对象的语法含义是：class后面跟一个对象
   - `:class="{类名1：boolean,类名2：boolean}"`
   - 该布尔值可以动态写成`data`的属性
   - 该class属性可以写成`methods`方法，注意属性值要写`this`
   - 调用methods方法时，需要加上`()`
   - 适用于绑定多个样式，个数和名字都不确定
3. 数组语法：
   - 数组语法的含义是：在class后面跟一个数组
   - `:class="['参数1',参数2]"`，参数有引号是字符串，无引号是变量，可以在data中定义
   - 适用绑定多个样式，个数和名字都确定，但是不确定用不用

对象语法和数组语法，都能够和普通的class类共存。

### v-bind动态绑定`style`属性

- 为什么要动态绑定样式？
  - 学习组件化开发时，组件封装好后是可以复用的。
- `:style="{key(属性名):value(属性值)}"
  - 属性名使用驼峰命名法或者下划线
  - 属性值不加引号表示变量
  - value值可以来自data中的属性
- 也分为对象语法和数组语法

例子：

1. `:style="{fontSize:xxx}"其中xxx是动态值
2. `:style="[a,b]"` 其中a、b是样式对象，样式对象是存在的css属性

## computed计算属性

定义一个函数，return函数的返回值。

- 字符串拼接
- 返回函数的计算结果，计算属性的函数写在computed中
- 使用计算属性时是属性名，而不是调用函数的形式

计算属性：要用的属性不存在，要通过已有的属性计算得来，原理是底层借助了Object.defineProperty的setter和getter来的

### 计算属性的setter和getter

`computed`计算属性中，一般是一个对象，里面有两个方法：getter和seter，但是计算属性默认只用 getter，所以一般都是简写的，所有调用都不加括号

### 计算属性的缓存

计算属性虽然和定义方法得到的最终结果是一样的，但是计算属性是基于它们的响应式依赖进行缓存的。所以多使用计算属性少使用方法。

## 监视属性watch

1. 当监视属性被调用时，回调函数自动调用，进行相关操作
2. 监视属性必须存在，才能进行监视
3. 监视的两种写法：
   - `new Vue`时传入watch配置
   - 通过vm.$watch监视

### 监视属性的handler和immediate

- handler在监视的属性发生改变时调用
- immediate在初始化时让handler调用一下，true或false
- 监视多级结构中的某个属性可以用字符串的形式

### 深度监视

1. Vue中的watch默认不监测对象内部值的改变（一层）
2. 配置deep:true可以监测对象内部值的改变（多层）
3. Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可见
4. 使用watch时根据数据的具体结构，决定是否采用深度监视

### watch和计算属性

1. computed能完成的功能，watch都可以完成
2. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作

两个重要的小原则：

1. 所有被Vue管理的函数，最好写成普通函数，这样的this的指向才是vm或组件的实例对象
2. 所有不被Vue所管理的函数（定时器的回调函数，ajax的回调函数），最好写成箭头函数，这样的this才是vm或组件的实例对象

## v-on属性事件监听处理

可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码

### v-on事件绑定机制

- `v-on:click`绑定单击响应函数
- `v-on:`可以简写为`@`
- 可以绑定click keydown keyup mousedown mouseover ...等事件
- 事件的回调需要配置在methods中，最终会出现在vm上
- methods中配置的函数，不要用箭头函数，否则this就不是vm
- methods中配置的函数，都是Vue所管理的函数，this的指向都是vm或组件的实例对象

### v-on参数问题

- 如果该方法不需要额外的参数，那么该方法后的`()`可以省略
- 在事件定义时，写方法省略了小括号，但是方法本身是需要一个参数的，这个时候Vue会默认将浏览器生成的event事件对象作为参数传入到方法。`fun($event)`
- 方法定义时，除了event对象，同时又需要其他参数，使用`$event`获取浏览器的event事件，`fun($event,参数1，参数n)`

### v-on修饰符

- `.stop`阻止冒泡
- `.prevent`阻止默认事件（默认行为）
- `@keyup.enter`检测回车键按下时
- `.once`事件只触发一次
- 一个事件，允许同时使用多个事件修饰符

## Vue监测数据原理

### 数据代理

数据代理：通过一个对象代理对另一对象中属性的操作（读/写）

Vue中的数据代理：通过vm对象来代理data对象中属性的操作，这样就可以更方便的操作data中的数据。

原理：

通过Object.defineProprety将data对象中的所有属性添加到Vue实例对象中，再为每个属性指定一个getter/setter，在getter/setter内部操作data对应的属性。data中的数据在Vue实例对象中的`_data`属性中，不过为了页面的响应式，该属性所以做了一个数据劫持。

- `get()`：当有人读取age属性时，get函数（getter）会被调用，且返回值就是age的值
- `set(value)`：当有人修改了age属性时，set函数（setter）会被调用，且会收到修改的具体值

数据劫持：将一个对象的属性都遍历一遍，变成getter或setter形式，属性一旦被修改或读取，就会重新代理，都是依赖这个属性Object.defineProperty

### Vue中data和_data

vue中data到底层_data经历了2个步骤：

1. 加工data
2. vm._data = data

要向数据实现响应式需要使用`Vue.set(要修改的对象，索引值/键名，修改后的值)`解决，或`vm.$set()`

### 总结Vue监视数据

1. Vue会监视data中所有层次的数据
2. 对于对象数据的监测：通过setter实现监视，且要在new Vue是就传入要监测的数据
   - 对象中后追加的属性，Vue默认不做响应处理
   - 需使用，`Vue.set(target,propertyName.index,value)`或`vm.$set()`才能实现响应式处理
3. 对于数组数据的监测，先调用原生对应的方法对数组进行更新，重新解析模板，进而更新页面
4. 通过索引修改数组中的元素不是响应式的，需使用，`Vue.set(target,propertyName.index,value)`或`vm.$set()`

注意：`Vue.set()`或`vm.$set()`不能给vm或vm根数据对象添加属性

## v-if条件判断

- `v-if` `v-else``v-else-if`条件判断
- Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染
- Vue 提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key attribute 即可

### v-if和v-show

- `v-if`当条件为false时，包含v-if指令的元素，根本不会存在在dom中
- `v-show`当条件为false时，只是在元素中添加一个行内样式`display:none`
  
如何选择？

- 当需要在显示和隐藏之间切换很频繁时，使用v-show
- 当只有一次切换时，使用v-if
- 实际开发中使用v-if更多，很多情况下需要根据服务器传的数据决定要不要渲染

## v-for列表渲染

- `v-for`可以遍历对象和数组
- 在遍历数组时，第一个值是属性值value，第二个是索引值index
- 在遍历对象时，如果只获取一个值，是value值，第二个值是key值，第三个值是index值
- 官方建议尽可能在使用 v-for 时提供 key attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。
- 插入数组时，没有key会很笨，有key在复用时，会对比key值，key需要保证一个唯一item.id
- key的作用主要是为了高效的更新虚拟DOM

### 数组更新检测

数组中的元素发生变化时，界面会自动刷新，因为数据是响应式的。

- `.push()`在数组最后面添加元素
- `pop()`删除数组最后一个元素
- `shift()`删除数组第一个元素
- `unshift()`在数组最前面添加元素
- `splice(开始元素的索引，需要删除几个元素，"添加的元素")`删除/插入/替换，删除0个时即可替换和插入
- `sort()`排序
- `reverse()`反转

以上的方法式响应式的，**通过索引修改数组中的元素不是响应式的，因为_data中数组的索引没有setter和getter**

- 可以通过`Vue.set(要修改的对象，索引值，修改后的值)`解决，或`vm.$set()`
- 或者`splice()`方法解决

### 过滤器

对显示的数据进行特定格式化后的显示（适用于一些简单逻辑的处理）可以使用过滤器。

1. 注册过滤器：`Vue.filter(name,callback)`或`new Vue({filters:{}})`
2. 使用过滤器，filter过滤器，可以用在两个地方：双花括号插值和 v-bind 表达式。例如：{{xxx | 过滤器}}
3. 过滤去也可以接收额外参数，多个过滤器可以串联
4. 并没有改变原数据，是产生新的对应的数据

## v-model表单输入绑定

### 高阶函数

- `filter` 过滤 filter中的回调函数有一个要求，必须返回boolean值
  - true 函数内部会自动将这次回调的n加到新的数组
  - false 函数内部会过滤掉这次的n
- `map` 映射
- `reduce` 对数组中所有元素进行汇总

### v-model指令

v-model指令配合表单使用，实现双向绑定

- `v-model`结合单选框`radio`使用
- `v-model`结合多选框使用`checkbox`使用
- `v-model`结合select使用，分单选和多选，需要绑定在select标签上，不能绑定在options上
- `v-model`值绑定 就是v-bind动态绑定
  - 实际开发中，有些input值是从网络中获取或定义在data中的
  - 所以可以通过v-bind:value动态的value绑定值
- `v-model`修饰符
  - `.lazy`默认情况下，data中的数据会和input中的数据同步变化，`.lazy`修饰符可以在数据失去焦点或者回车时才更新
  - `.number`输入框中输入元素的值总会返回字符串类型，`.number`修饰符可以将用户的输入值转为数值类型
  - `.trim`自动过滤用户输入的首尾空白字符

总结：

1. 若`<input type='text' />`，则v-model收集的是value值，用户输入就就是value值
2. 若`<input type='radio' />`，则v-model收集的是value值，且要给标签配置value值
3. 若`<input type='checkbox' />`，则v-model收集的是value值，用户输入就就是value值
   - 若没有配置value值，那么收集的就是checked（勾选或未选，是布尔值）
   - 配置value值，v-model的初始值是非数组，和上面一样
   - 配置value值，v-model的初始值是数组，收集的就是value组成的数组

## components组件化开发

### 什么是组件化？

将复杂问题拆分成多个可以处理的小问题，再将其放在整体中。

在开发中，将一个页面拆分成一个个小的、可复用的组件，每个组件完成属于自己这部分的独立功能，从而方便整个页面的管理和维护。

Vue中，所有的组件都继承自Vue类的原型。

### 注册组件如何使用

1. 创建组件构造器 调用`Vue.extend()`方法
2. 注册组件 调用`Vue.component()`方法
3. 使用组件 在Vue实例的作用范围内使用组件

### 全局组件和局部组件

- 全局组件在script标签下注册，可以在多个Vue的实例下面使用
- 局部组件在Vue实例中注册，开发时一般是局部组件

### 父组件和子组件

- 在一个组件的components下面注册另一个组件，另一个组件就是子组件
- 最开始的Vue实例可以看成root组件

组件语法糖注册：可以省略创建组件构造器`Vue.extend()`步骤，直接注册，使用`Vue.component('cpn',{template:})`，使用一个对象来代替。

### 模板的分离写法

- 写在的`<script>`中，需要一个id
- 写在的`<template>`中，需要一个id

注意：组件中`<template>`标签中必须要包括一个根，要写个`div`或者块级元素，不然会报错

### 组件中的变量放在什么位置？

- 组件的变量不能放在Vue实例中的data中
- 组件是一个单独功能的模块封装
- 组件不可以访问Vue实例中的数据
- Vue组件应该有自己保存数据的地方

组件的数据存放的位置：

- 组件对象也有一个data属性，可以是methods属性
- 这个data属性必须是一个函数`data(){}`
- 这个函数返回一个对象，对象内部保存数据`data(){return {}}`

为什么data必须是一个函数？

如果组件中的data中的是一个对象，到时候创建的组件实例都会指向一个相同的对象。而组件不应该相互影响。

### 父子组件的通信

子组件不能引用父组件和Vue实例的数据。但在实际开发中，往往一些数据需要从上层传递到下层。

- 在一个页面中，我们从服务器请求到很多数据
- 其中一部分数据，并非是整个页面的大组件来展示的，而是需要下面的子组件进行展示
- 这时，不需要让子组件再次发送一个网络请求，而是直接让大组件（父组件）将数据传递给小组件（子组件）

如何进行父子组件的通信

- 父传子：通过props像子组件传递数据properties
- 子传父：通过事件向父组件发送消息`$emit()`

props基本使用

1. 字符串数组，数组中的字符串就是传递时的名称
   - `props:['name']`
2. 对象，对象可以设置传递时的类型，可以设置默认值，也可以设置
   - type 类型
   - default 默认值 默认值时对象时，fefault必须是函数
   - required 必需的，true或者false

子组件向父组件通信：

1. 子组件发送自定义事件
   - `this.$emit('itemclick',item)`
2. 父组件监听自定义事件
   - `@itemclick='cpnclick(参数)'`//参数省略，默认传item，类似event事件
3. 父组件在定义methods中的方法
   - `cpnclick(item){console.log(item)}`

注意：v-model双向绑定数据时，避免直接改变 props，因为每当父组件重新渲染时，值都会被覆盖。正确方法是在data或计算属性中修改。

### 父子组件的访问方式

当需要父组件直接访问子组件，或者子组件直接访问父组件，或者子组件访问根组件

- 父组件访问子组件：使用`$children`或者`$refs`
- 子组件访问父组件；使用`$parent`

- `$children`是一个数组类型，它包含所有的子组件对象
- `$refs`是一个对象类型，默认是一个空的对象，必须在组件上加一个`ref='aaa'`的属性才能读取

子组件访问父组件使用`$parent`，使用`$root`可以直接访问根组件

ref属性

1. 用来给元素或子组件组成引用信息（id的替代者）
2. 被应用在html标签上获取的是真实的dom元素，应用在组件标签上是组件的实例对象
3. this.$refs.xxx获取

## 插槽

`slot`插槽

- 在组件中定义一个`<slot></slot>`标签即可，
- 还可以设置默认值`<slot><h2>标题</h2></slot>`
- 使用组件时，多个标签会全部作为替换元素

一个插槽，不是只能替换一个标签。

### 具名插槽

1. 插槽命名`<slot name='left'>/slot>`
2. 使用插槽`<h2 slot="left">标题</h2>`
3. 新语法：使用`v-solt:left`来替代上一种写法，但是注意要在template标签中

### 作用域插槽

编译作用域：父模板的所有东西都会在父级作用域内编译，子组件模板的所有东西都会在子级作用域内编译。

作用域插槽：父组件替换插槽的标签，但是内容由子组件来提供

### 插槽新语法

1. 将以前的简化了一些，替换了slot、slot-scope，2.6.0+ 就废弃了这两个指令
2. 具名插槽：`v-slot:子组件插槽的name`
3. 作用域插槽：`v-slot:子组件的插槽name="自定义名"` 配合子组件的插槽上的属性:自定义="变量"

注意：

1. 插槽里面的`<template></template>`标签必须必须得有，且要搭配v-slot使用，其他标签搭配v-slot是不行的。
2. 在插槽里，只能是template标签的内部包含其它标签，不能用div包裹template。
3. 它还有个语法糖简写形式，v-slot:name等价于#name

## 模块化开发

### 为什么使用模块化

- 解决全局变量命名冲突问题
- 解决js文件必须按照一定顺序引入的问题

### 如何使用模块化

- 使用匿名函数，还需要使用一个模块作为出口，暴露函数里面的变量
- 在匿名函数中定义一个对象
- 给对象添加各种需要暴露的属性和方法
- 最后将这个对象返回，并且在外面使用一个MoudleA接收

### 常见的模块化规范

模块化已经有很多既有的规范和对应的实现方案，常见的模块化规范：

- CommonJS
- AMD
- CMD
- ES6的Modules

模块化两个核心：导出和导入

CommonJS模块化的导出和导入

- 导出：`module.exports = { flag,sum }`
- 导入：`let {flag,sum} = require('./aaa.js')`

ES6模块化实现：

`<script type="module"></script>`使用type可以让模块中的变量在单独的空间，此时，可以通过import命令加载这个对应的模块

方式1：

- `export`使用`export{需要导出的变量}`
- `import`使用`import {需要导入的变量} from "./aaa.js"`

方式2：

- `export let/const 变量 = 变量值`
- 导入方式一样

方式3：导出函数/类

- `export function fn1(){}`
- `export class Person{}`
- 导入方式一样

方式4：

- `export default`
- 导入时，可以根据需要自主命名
- `export default`在同一模块中，不允许同时存在多个

方式4：统一全部导入

如果需要导入的变量很多时，使用：

- `import * as 自定义名字 from "./aaa.js"`
- 自定义名字.变量就可以拿到内容

### 使用webpack模块打包工具

在js文件中使用模块化开发，可以直接引入使用吗？

- 不能直接引入，因为浏览器并不识别其中的模块化代码
- 在真实项目中，有许多的js文件时，我们一个个引用也非常麻烦

所以我们要使用webpack工具，对多个js文件进行打包

- webpack就是个模块化的打包工具，支持我们在代码中写模块化，可以对模块化的代码进行处理
- 如果处理完所有模块之间的关系，将多个js打包在一个js文件中，引入时就非常方便

如何打包？

- `webpack ./src/main.js ./dist/bundle.js`可以将`main.js`打包成`bundle.js`

### el和template区别

WPA单页面复应用，只有一个index.html，一般这个文件是不会变的，此时就可以将index.html与#app进行绑定，让Vue实例管理其中的内容。

## Vue CLI脚手架

在开发大型项目，必然会使用Vue CLI工具

- 在Vue.js开发大型应用时，需要考虑代码目录结构，项目结构和部署、热加载，代码单元测试等事情
- 使用脚手架工具可以帮助我们完成这些事情

CLI全称Command-Line Interface，翻译为命令行界面，但是俗称脚手架，Vue CLI是官方发布vue.js项目脚手架，可以快速搭建Vue开发环境和对应的webpack配置。

脚手架依赖node和webpack。

### 安装Vue CLI脚手架

新版本中：Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。

全局安装

- `npm install -g @vue/cli`
- `npm install -g @vue/cli-init`拉取 2.x 模板 (旧版本)

- Vue CLI2旧版本初始化项目：`vue init webpack my-project`
- Vue CLI3新版本初始化项目：`vue create my-project`
- `vue ui`以图形化界面创建和管理项目，导入项目即可使用

- ESlint：检测代码规范
- unit test：单元测试
- e2e test：e2e测试，end to end，安装Nightwatch，进行自动化测试的工具

### vuecli2目录解析

vuecli2目录中可以看到很多webpack配置。

- package.json：包描述文件
- package-lock.json：版本^和~，^1.1.1和~1.1.1，^代表后两位可变，~代表只能最后一位变
- build文件夹：webpack相关的配置
- config文件夹：webpack相关的配置
- node_modules文件夹：node相关的配置
- src文件夹：写代码的地方
- static文件夹：静态资源，里面的资源会原封不动的复制到dist文件夹里面
- .babelrc：ES代码相关转化配置
- .editorconfig：项目文本相关配置
- .eslintignore：代码规范你忽略文件配置
- .gitignore：git仓库忽略文件配置
- .postcssrc.js：CSS相关转化配置

### runtime-compiler和runtime-only的区别

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

### vuecli3和vuecli2的区别

- vuecli3是基于webpack4打造的，vuecli还是webpack3
- vuecli3的设计原则是0配置，移除的配置文件根目录下的build和config等目录
- vuecli3提供vue ui命令，提供了可视化配置，更加人性化
- 移除了static文件夹，新增了public文件夹，并且将index.html移动到public中

### vuecli3目录解析

vuecli3目录结构会简洁很多

- public文件夹：相当于cli2对static目录
- .browserslistrc：浏览器相关支持情况

### vuecli3修改配置

Vue脚手架隐藏了所有webpack相关的配置，若想查看具体的配置可以执行

- `vue inspect > output.js` 只能查看，不能修改

修改配置的方法：

1. vuecli3的很多相关配置被隐藏，使用vue ui即可使用图形化管理配置

2. 在node_modules文件夹下的@vue文件夹中可以找到隐藏的配置

3. 自己创建vue.config.js文件，mudule.exports = {}自定义配置文件

4. 另外，在用户下找到.vuerc可删除修改一些保存的配置

## Vue-Router

### 什么是路由

路由是网络工程里面的术语，路由（routing）就是通过互联的网络将信息从源地址传输到目的地址的活动。

路由提供两种机制，路由和转送

- 路由是决定数据包从来源到目的地的路径
- 转送将输入端的数据转移到合适的输入端
  
路由有一个重要的概念叫路由表，路由表本质就是映射表，决定了数据包的指向。映射表将内网IP和电脑的mac地址一一对应。

### 前端渲染和后端渲染

后端渲染阶段：早期时，网页多使用jsp/php等语言开发，浏览器将url发送到服务器，服务器进行判断然后再后台通过jsp技术将网页写好，这个网页包含html，css，java，java代码的作用是数据库中读取数据，并将它动态的放在页面中。直接将最终的网页渲染出来给浏览器。后期处理url和页面之间的映射关系

前后端分离阶段：后端只负责提供数据，不负责提供任何界面的内容。服务器连接数据库，服务器有静态服务器和提供API接口的服务器，有些两种合并在一起。输入url，从静态服务器中拿到html，css，js代码，浏览器执行js代码时，js代码会有对应的API请求，再从API服务器中将对应的大量数据返回，大量数据中有大量的js代码，将js相关的内容渲染到网页。静态资源服务器中有很多套html+css+js

- ajax的出现就有了前后端分离
- 后端只提供API来返回数据，前端通过Ajax获取数据，并且通过js将数据渲染到页面
- 优势：前后端分工清晰

前端渲染：浏览器中显示的大部分内容，都是由前端写的js代码在浏览器中执行，最终渲染出来的网页。

SPA阶段：SPA单页面应用在前后端分离的基础上加了一层前端路由。SPA整个网页只有一个html页面。静态资源服务器中只有一个index.html+css+js。减少了url向服务器请求的次数，一个url对应一个网页组件，url和页面的映射由前端路由管理，前端路由的核心是改变url，但是页面不进行整体刷新。

### 改变url保持页面不刷新

使用url的hash，url的hash就是锚点（#），本质就是改变window.location的href属性，直接复制location.hash来改变href，但是页面不会刷新。

- `location.hash = 'xxx'`

html5的方法：

- `history.pushState({},'','home')`
- `history.replaceState({},'','home')`该方法不能回退
- `history.go(-1)`
- `history.back()`
- `history.forward()`
- 上面的接口等同于浏览器界面的前进后退

### 安装vue-router

vue-router是vue.js官方插件，由vue.js深度集成，适合用于构建单页面应用，vue-router是基于路由和组件的，路由用于设定访问路径，将路径和组件映射起来，在vue-router单页面应用中，页面的路径的改变就是组件的切换。

直接通过npm进行安装

- `npm install vue-router --save`
- 在模块化工程中使用，因为是一个插件，所以可以通过Vue.use()来安装路由功能

1. 导入路由对象`import VueRouter from 'vue-router'`
2. 调用Vue.use(VueRouter)
3. 创建路由实例，并且传入路由映射配置
4. 在Vue实例中挂载创建的路由实例

### 使用Vue-router

- 创建路由组件
- 配置路由映射，组件和路径映射关系
- 使用路由：通过`<router-link>和<router-view>`
- `<router-link>`是vue-router中内置的组件，被渲染成一个`<a>`标签
- `<router-view>`会根据当前路径，动态渲染出不同的组件
- 网页的其他内容，比如标题，导航栏，等等和`<router-view>`处于同一等级
- 在路由切换时，切换的是`<router-view>`挂载的组件，其他内容不会改变
- `{path: '/',redirct:'/home'}`默认路由，设置首页

### `<router-link>`属性

- to：用于跳转的路径
- tag：指定渲染成什么组件，默认是超链接a，也可以是按钮，div等等，新版本已经移除
- replace：不会留下历史记录，指定replace后，后退键不能返回到上一个页面中
- active-class：当`<router-link>`对应的路由匹配成功时，会自动给当前元素设置一个router-link-active的class，设置active-class可以修改默认的名称
  - 在进行高亮显示的导航菜单或底部tabbar时，会使用到该类
  - 通常不会修改类的属性，会直接使用默认的router-link-active即可

当使用事件监听响应函数时，跳转的路径写法：

- `this.$router.push('/home')`
- `this.$router.replace('/home')`
- `this.$router.push({path:'/profile',query:{age:20}})`

### 动态路由

在某些情况下，一个页面的path路径是不确定的，需要使用`v-bind`。

1. 配置路由`{ path: '/users/:id', component: User }`
2. 当一个路由被匹配时，它的 params 的值将在每个组件中以 `this.$route.params` 的形式暴露出来，`$route.params.id`即可拿到id值

### 路由的懒加载

打包构建应用时，JavaScript包会变得非常大，影响页面加载，能把不同路由对应的组件分割成不同的代码块，然后当路由被访问时才加载对应组件。

懒加载的写法：

- `const Home =  () => import('../views/About.vue')`

### 路由嵌套

比如在home页面中，希望通过/home/news和/home/message访问一些内容。一个路径映射一个组件，访问这两个路径也会会分别渲染两个组件。

实现路由嵌套的两个步骤：

1. 创建对应的子组件，并且在路由映射中配置对应的子路由
2. 在组件内部使用`<router-view>`标签

当某个路由有子级路由时，父级路由需要一个默认的路由，因此父级路由不能定义name属性，去掉父级路由的name属性即可

### 参数传递

当我们从一个页面跳转到另一个页面时，可能希望从前一个页面中获取一些参数。传递参数主要有两种类型：params和query。

params的类型：

1. 配置成动态路由格式：`/router/:id`
2. 传递的方式：在path后面跟上对应的值
   - `:to="'/router'+ id"
3. 传递后形成的路径：`/router/123,/router/abc`
   - 通过`$route.params.id`获取id参数

query的类型：

- 普通配置路由格式：`/router`
- 传递方式：对象中使用query的key作为传递方式
- 传递后形成的路径：`/router?id=123,/router?id=abc`

### $route和$router的区别

`$route是谁处于活跃状态，拿到的就是哪个对象，$router是new VueRouter的实例对象`。

- `$router`为VueRouter的实例，想要导航到不同的URL，则使用`$Router.push`方法
- `$route`为当前router跳转对象里面可以获取name，path，query，params等

### 导航守卫

主要用来通过跳转或取消的方式守卫导航。

1. 使用`beforeEach()`前置守卫（hook）可更改页面的title
   - `router.beforeEach((to,from,next) => {document.title = to.name next()})`
2. `afterEach()`后置钩子不会接受 next 函数也不会改变导航本身

以上写的两个守卫，被成为全局守卫。

除了全局守卫还有路由独享守卫`beforeEnter()`和组件内的守卫。

### keep-alive和vue-router

1. keep-alive是Vue内置的一个组件，可以是被包含的组件保留状态，或避免重新渲染
2. router-view是VueRouter中的一个组件，如果直接被包在keep-alive里面，所有的路径匹配到的视图组件都会被缓存

`activated()`和`deactivated()`这两个函数只有在keep-alive情况下才能使用。

keep-alive有两个非常重要的属性：

1. include 字符串或正则表达式，只有匹配的组件会被缓存
2. exclude 字符串或正则表达式，任何匹配的组件都不会被缓存
   - `exclude='Profile,User'`这里两个属性之间`,`左右不能加空格

## Vuex

Vuex是一个专门为了Vue.js应用程序开发的状态管理模式。

### 状态管理

将多个组件共享的变量全部存储在一个对象里面。然后，将这个对象放在顶层的Vue实例中，让其他组件可以使用。理论上，我们可以自己封装一个对象，将这个对象添加到Vue的原型上，但是不能轻易的做到里面的属性是响应式的，Vuex就提供了一个在多个组件间共享状态的插件。

### 什么状态需要在多个组件间共享

比如用户的登录状态，用户名称、头像、地理位置，商品的收藏、购物车中的物品等等。这些状态信息，我们可以放在统一的地方，对它进行保存和管理，而且还是响应式的。

### 如何使用Vuex

1. 提取出一个公共的store对象，用于保存在多个组件中共享的状态
2. 将store对象放置在new Vue对象中，这样可以保证在所以的组件中都可以使用到
3. 在其他组件中使用store对象中保存的状态即可
   - 通过this.$store.state.属性的方式来访问状态
   - 通过this.$store.commit('mutation中方法')来修改状态

注意：通过提交mutation的方式，而非直接改变store.state.count，因为Vuex可以更明确的追踪状态的变化，所以不要直接修改store.state.count的值

### Vuex的核心概念

Vuex有5个核心概念，State、Getters、Mutations、Actions、Modules

#### State

Vuex提出使用单一状态树（单一数据源）。一个人的户口、档案、文凭、财产等等信息分别保存到不同的机构或单位，如果要打印一个人的全部信息，需要到不同的单位验证信息，比较低效，并且不方便管理。

如果我们的状态信息式保存到多个store对象中的，那么之后的管理和维护等等都会变得特别困难，所以Vuex使用了单一状态树来管理应用层级的全部片段。单一状态树能够让我们使用最直接的方式找到某个状态片段，并且在维护和调试的过程中，也可以非常方便的管理和维护。

#### Getters

有时候，我们需要从store中获取一些state变异后的状态，例如，需要对列表进行过滤。我们就可以使用getter，getter可以认为是store的计算属性。

对象里面定义函数时，为了代码的可读性，最好使用对象的增强写法，不要写箭头函数

#### Mutations

更改Vuex的store中的状态的唯一方法是提交mutation。

mutation主要包括两个部分：字符串的事件类型type；一个回调函数handler，该回调函数的第一个参数就是state。

在通过mutation更新数据时，有可能希望携带一些额外的参数，参数被称为是mutation的载荷(payload)，如果参数不只一个时，通常会以对象的形式传递，也就是payload可以是一个对象。

mutation还有另一种提交风格，它是一个包含type属性的对象。

Vuex的store中的state是响应式的，当state中的数据发生改变时，Vue组件会自动更新。

Mutation的响应式必须要遵守Vuex对应的规则，提前在store中初始化好所需的属性，当给state中的对象添加新属性时，使用下面的方式：

- 使用Vue.set(obj,'newProp',123)
- 用新对象给旧对象重新赋值

只有提前定义的属性才能做到响应式

使用常量替代Mutation事件类型，新建mutations-types.js文件，重新定义常量

Mutation中的方法必须是同步方法，主要原因是为了当我们使用devtools能很好的捕捉mutation的快照

#### Actions

当我们希望在Vuex中进行一些异步操作时，比如网络请求，必须使用Action，类似Mutation

actions中的方法，有一个默认的参数，context上下文，一般代表store对象，在module中时，

- 使用Actions中的方法时，应当使用`this.$store.dispatch()`
- 使用mutations中的方法时，才使用`this.$store.commit()`

actions中可以返回一个promise，然后在dispatch中拿到promise，然后在使用.then()

#### Modules

由于Vuex使用单一状态树，当应用变得非常复杂时，store对象就可能变得相当臃肿，为了解决这个问题，Vuex允许我们将store分割成模块Module，而每个模块拥有自己的state，mutations，actions，getters等

## 网络请求封装（axios）
