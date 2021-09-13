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

## 5 四个map方法的使用

```js
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
```

### 5.1 mapState方法

用于帮助我们映射`state`中的数据为计算属性

```js
computed: {
    //借助mapState生成计算属性：sum、school、subject（对象写法）
     ...mapState({sum:'sum',school:'school',subject:'subject'}),
         
    //借助mapState生成计算属性：sum、school、subject（数组写法）
    ...mapState(['sum','school','subject']),
},
```

### 5.2 mapGetters方法

用于帮助我们映射`getters`中的数据为计算属性

```js
computed: {
    //借助mapGetters生成计算属性：bigSum（对象写法）
    ...mapGetters({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(['bigSum'])
},
```

### 5.3 mapActions方法

用于帮助我们生成与`actions`对话的方法，即：包含`$store.dispatch(xxx)`的函数

```js
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])
}
```

### 5.4 mapMutations方法

用于帮助我们生成与`mutations`对话的方法，即：包含`$store.commit(xxx)`的函数

```js
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    
    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```

> 备注：**mapActions与mapMutations**使用时，若需要传递参数需要：**在模板中绑定事件时传递好参数**，否则参数是事件对象。

## 6 模块化+命名空间

1. 目的：让代码更好维护，让多种数据分类更加明确。

2. 修改`store.js`

```js
const countAbout = {
  namespaced:true,//开启命名空间
  state:{x:1},
  mutations: { ... },
  actions: { ... },
  getters: {
    bigSum(state){
       return state.sum * 10
    }
  }
}

const personAbout = {
  namespaced:true,//开启命名空间
  state:{ ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})
```

3. 开启命名空间后，组件中读取state数据

```js
//方式一：自己直接读取
this.$store.state.personAbout.list
//方式二：借助mapState读取：
...mapState('countAbout',['sum','school','subject']),
```

4. 开启命名空间后，组件中读取getters数据

```js
//方式一：自己直接读取
this.$store.getters['personAbout/firstPersonName']
//方式二：借助mapGetters读取：
...mapGetters('countAbout',['bigSum'])
```

5. 开启命名空间后，组件中调用dispatch

```js
//方式一：自己直接dispatch
this.$store.dispatch('personAbout/addPersonWang',person)
//方式二：借助mapActions：
...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
```

6. 开启命名空间后，组件中调用commit

```js
//方式一：自己直接commit
this.$store.commit('personAbout/ADD_PERSON',person)
//方式二：借助mapMutations：
...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
```

