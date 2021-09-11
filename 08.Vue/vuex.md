# Vuex

Vuex是一个专门为了Vue.js应用程序开发的状态管理模式。

![vuex](https://next.vuex.vuejs.org/vuex.png)

## 1 状态管理

将多个组件**共享的变量**全部存储在一个对象里面。然后，将这个对象放在顶层的**Vue实例**中，让其他组件可以使用。

理论上，我们可以自己封装一个对象，将这个对象添加到Vue的原型上，但是不能轻易的做到里面的属性是**响应式的**，Vuex就提供了一个在多个组件间共享状态的插件。

## 2 使用场景

多个组件需要**共享数据**时。比如**用户的登录状态**，用户名称、头像、地理位置，商品的**收藏**、**购物车中的物品**等等。这些状态信息，我们可以放在统一的地方，对它进行保存和管理，而且还是响应式的。

## 3 Vuex的安装和配置

1. 安装Vuex

   ```bash
   npm install vuex --save
   ```

2. 在 **src 源代码目录**下，新建 **store/index.js** 路由模块

   ```js
   //1 导入vue和Vuex包
   import Vue from 'vue'
   import Vuex from 'vuex'
   
   //2 调用Vue.use()函数，把Vuex安装为Vue的插件
   Vue.use(Vuex)
   
   // 准备state，用于存储数据
   const state = {}
   
   // 准备actions，用于响应组件中的动作
   const actions = {}
   
   // 准备 mutations，用于操作数据(state)
   const mutations = {}
   
   //3 向外共享路由的实例对象
   export default new Vuex.Store({
     state,
     actions,
     mutations
   })
   ```

   向外导出的是 **new Vuex.Store**，不是new  Vuex

3. 在 **src/main.js** 入口文件中，导入并挂载Vuex模块

   ```js
   import store from './store'
   
   new Vue({
     router,
     store,
     render: h => h(App)
   }).$mount('#app')
   ```

   注意：**在js中引入import时，都会先执行import语句，再执行其他的代码**，所以，导入VueRouter和Vuex时，都在Vue

## 4 Vuex的核心概念

Vuex有5个核心概念，State、Getters、Mutations、Actions、Modules

### 4.1 state

State 提供**唯一**的**公共**数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储

```js
 const store = new Vuex.Store({
 state: { sum
         、: 0 }
 })
```

组件访问 State 中数据的方式：

```js
this.$store.state.全局数据名称
```

### 4.2 actions

1. 值为一个对象，包含多个响应用户动作的回调函数

2. 通过 commit( )来触发 mutation中函数的调用, 间接更新 state

3. 如何触发 actions 中的回调？

   在组件中使用dispatch触发

```js
this.$store.dispatch('对应的 action 回调名',传给actions的参数) 
```

4. 可以包含异步代码（定时器, ajax 等等）

```js
const actions = {
  add (context, value) {
    console.log('add被调用', context, value)
    context.commit('ADD', value)
  }
}
```

### 4.3 mutations

1. 值是一个对象，包含多个直接更新 state 的方法
2. 谁能调用 mutations 中的方法？如何调用？
   - 在 **action 中使用：commit('对应的 mutations 方法名') 触发**
   - 若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写`dispatch`，直接编写`commit`，即可以**直接在组件中使用commit触发**
3. mutations 中方法的特点：不能写异步代码、只能单纯的操作 state

```js
const mutations = {
  ADD (state, value) {
    console.log('ADD被调用', state, value)
    state.sum += value
  }
}
```

### 4.4 getters

当state中的数据需要经过加工后再使用时，可以使用getters加工。

值为一个对象，包含多个用于返回数据的函数

```js
this.$store.getters.xxx
```

在`store.js`中追加`getters`配置

```js
const getters = {
	bigSum(state){
		return state.sum * 10
	}
}

//创建并暴露store
export default new Vuex.Store({
	......
	getters
})
```

组件中读取数据：

```js
$store.getters.bigSum
```

