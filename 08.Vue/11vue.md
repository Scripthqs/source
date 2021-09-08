# 组件的通信

## 1 组件之间的关系

在项目开发中，组件之间的最常见的关系分为如下两种：

1. 父子关系
2. 兄弟关系

## 2 组件的数据共享

父子组件之间的数据共享分为：

- 父组件向子组件传递数据
- 子组件向父组件传递数据

## 3 父子组件数据传递

父组件向子组件共享数据使用**自定义属性**。

```
  //父组件
  <Son :msg="message"></Son>
	data(){
	  return {
	    message: 'hello vue'
	  }
	}
  //子组件
  props: ['msg']
```

注意：不用`v-bind`传递时，相当于直接传递字符串'message'，

用**`:`**才能把'hello vue'传递给子组件

子组件向父组件共享数据使用**自定义事件**

```js
  //子组件
  data(){
    return {
      num: 0
    }
  },
  methods: {
    add () {
      this.num++
      this.$emit('numChange', this.num)
    }
  }

  //父组件
  <Son @numChange='getNewNum' />
  data(){
    return {
      newNum: 0
    }
  },
  methods:{
    getNewNum(val){
      this.newNum = val
    }
  }
```

## 4 兄弟组件数据传递

在 vue2.x 中，兄弟组件之间数据共享的方案是 EventBus。

EventBus 的使用步骤：

1. 创建 **eventBus.js** 模块，并向外共享一个 **Vue 的实例对象**
2. 在数据**发送方**，调用 **bus.$emit('事件名称', 要发送的数据)** 方法触发自定义事件
3. 在数据接收方，调用 **bus.$on('事件名称', 事件处理函数)** 方法注册一个自定义事件

```
//eventBus.js
import Vue from 'vue'
export default new Vue()

//Left.vue,发送方
methods: {
    send () {
      bus.$emit('share', this.str)
    }
  }
  
//Right.vue，接受方
created () {
    bus.$on('share', (val) => {
      this.msg = val
    })
 }
```

或者将事件总线添加到Vue的原型。

 用于全局事件监听（可以跨很多组件）

  1.在Vue的原型上添加一个$bus的属性让其等于一个新的Vue实例  Vue.prototype.$bus = new Vue()

  2.发射全局监听事件，例如 this.$bus.$emit("itemImageLoad") 和常规$emit一样这个也可以传递参数

  3.监听全局事件，例如 this.$bus.$on("itemImageLoad", () => {})

```
// 这里的$bus是事件总线，用于设置全局的发送事件与监听，也可以用Vuex来处理
Vue.prototype.$bus = new Vue()
```

