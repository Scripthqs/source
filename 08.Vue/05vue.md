# watch 侦听器

## 1 watch 侦听器

**watch 侦听器**允许开发者监视数据的变化，从而**针对数据的变化做特定的操作.**

```vue
 watch: {
        message(newVal, oldVal) {
          console.log(newVal)
          console.log(oldVal)
        }
 }
```

侦听器本质是一个函数，要监视哪个数据的变化，就把数据名作为方法即可。

监视属性可以：

1. `new Vue`时传入watch配置
2. 通过vm.$watch监视

## 2 使用 watch 

使用 watch 检测用户名是否可用

监听 username 值的变化，并使用 axios 发起 Ajax 请求，检测当前输入的用户名是否可用：

```js
 <input type="text" v-model="username">

watch: {
 async username(newVal) {
          if (newVal === '') return
          // 使用 axios 发起请求，判断用户名是否可用
          const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
          console.log(res)
        },
 }
```

## 3 immediate 选项

默认情况下，组件在初次加载完毕后不会调用 watch 侦听器。如果想让 watch 侦听器**立即被调用**，则需要使 用 immediate 选项。

```js
watch: {       
    username: {
        handler(newVal, oldVal) {
            console.log(newVal, oldVal);
        },
            immediate: true
        },
}

watch: {
    username: {
    // handler 是固定写法，表示当 username 的值变化时，自动调用 handler 处理函数
        handler: async function (newVal) {
            if (newVal === '') return
            const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
            console.log(res)
        },
    // 表示页面初次渲染好之后，就立即触发当前的 watch 侦听器
    	immediate: true
    }
}

```

## 4  deep 选项

如果 watch 侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到。此时需要使用 deep 选项，**深度监视**

```js
watch: {
    name: {
        handler(newVal) {
       		console.log(newVal)
        },
    	deep: true
    }
}
```

## 5 监听对象属性

如果只想监听对象中单个属性的变化

```js
watch: {
    'name.username': {//单y
        handler(newVal) {
        	console.log(newVal)
        },
        deep: true
    }
}
```

## 6 侦听器的格式

1. 方法格式的侦听器
   + 缺点1：无法在刚进入页面的时候，自动触发
   + 缺点2：如果侦听的是一个对象，如果对象中的属性发生了变化，不会触发侦听器
2. 对象格式的侦听器
   + 好处1：可以通过 **immediate** 选项，让侦听器自动触发
   + 好处2：可以通过 **deep** 选项，让侦听器深度监听对象中每个属性的变化

## 7 watch和计算属性

1. computed能完成的功能，watch都可以完成
2. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作
