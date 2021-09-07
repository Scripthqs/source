# 组件通信

## 1 组件的关系

组件在被封装好之后，彼此之间是**相互独立的**，在使用组件的时候，根据彼此的**嵌套关系**，形成了父子关系、兄弟关系。

## 2 使用组件

使用组件的三个步骤：

1. 使用 import 语法导入需要的组件
2. 使用 components 节点注册组件
3. 以标签形式使用刚才注册的组件

```vue
<HelloWorld msg="Welcome to Your Vue.js App"/>//3.以标签形式使用刚才注册的组件

import HelloWorld from './components/HelloWorld.vue'//1.使用 import 语法导入需要的组件

export default {
  name: 'App',
  components: {
    HelloWorld//2.使用 components 节点注册组件
  }
}
```

## 3 父子组件

通过 components 注册的是私有子组件。

在**组件 A 的** components 节点下，注册了**组件 F**。 

则组件 **F** 只能用在组件 **A** 中；不能被用在**组件 C** 中

**组件A是组件F的父组件**

## 4 注册全局组件

在 vue 项目的 main.js 入口文件中，通过 Vue.component() 方法，可以注册全局组件

```vue

import Test from './Test.vue'
Vue.component('myTest', Test)
```

Vue.component中：

参数1：字符串格式，表示注册的名称

参数2：需要被全局注册的组件

## 5 组件的 props

props 是组件的**自定义属性**，在**封装通用组件**的时候，合理地使用 props 可以极大的**提高组件的复用性**

```vue
export default {
  name: '',
  props: ['init']
  data(){
    return{}
  }
 }
```

其他组件以标签形式使用刚才注册的组件，就可以使用init属性传值。

即：**父组件可以通过props向子组件传递数据**

**注意：**

```vue
<my-test init='9' />//这种方法，传递的是字符串
<my-test :init='9' />//v-bind的方法，传递的是数字
```

**props 是只读的**：

vue 规定：组件中封装的自定义属性是只读的，我们不能直接修改 props 的值。否则会直接报错。

要想修改 props 的值，可以把 **props 的值转存到 data** 中，因为 data 中的数据都是可读可写的！

 **props 的 default 默认值**：

在声明自定义属性时，可以通过 default 来定义属性的默认值

```vue
export default {
  name: '',
  props: {
	init: {
      default:0
	}
  },
  data(){
    return{}
  }
 }
```

