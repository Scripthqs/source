# 自定义指令

## 1 自定义指令简介

vue 官方提供了 v-text、v-for、v-model、v-if 等常用的指令。除此之外 vue 还允许开发者自定义指令

## 2 自定义指令的分类

vue 中的自定义指令分为两类，分别是：

- **私有**自定义指令
- **全局**自定义指令

## 3 私有自定义指令

### 3.1 directives

在每个 vue 组件中，可以在 **directives** 节点下声明私有自定义指令。

```js
directives: {
    color: {
      bind (el) {
         //el是绑定了此指令的原生的DOM对象
        el.style.color = 'red'
      }
    }
  }
```

- bind()函数的的参数el是绑定了此指令的原生的DOM对象。
- bind()函数只会在第一次绑定元素时触发。

### 3.2 `v-` 前缀

在使用自定义指令时，需要加上 **v-** 前缀

```vue
<h1 v-color>标题</h1>
```

### 3.3 `binding`

为自定义指令**动态绑定参数值**:

在 template 结构中**使用自定义指令**时，可以通过等号**（=）**的方式，为当前指令**动态绑定参数值**

```
<h1 v-color='color'>标题</h1>
<h1 v-color="'red'">标题</h1>

directives: {
    color: {
      bind (el, binding) {
        console.log(binding)
        el.style.color = binding.value
      }
    }
  }
```

### 3.4 update 函数

bind 函数**只调用 1 次**：当指令第一次绑定到元素时调用，当 **DOM 更新时 bind 函数不会被触发**。 update 函 数会在每次 DOM 更新时被调用。

```js
directives: {
    color: {
      bind (el, binding) {
        console.log(binding)
        el.style.color = binding.value
      }
    },
    updated (el, binding) {
      el.style.color = binding.value
    },
  }
```

### 3.5 函数简写

如果 **bind** 和**update** 函数中的**逻辑完全相同**，则**对象格式**的自定义指令可以简写成**函数格式**

```js
directives: {
    color (el, binding) {
      el.style.color = binding.value
    }
  }
```

## 4 .全局自定义指令

全局共享的自定义指令需要通过**“Vue.directive()”**进行声明

```vue
Vue.directive('color', {
  color (el, binding) {
    el.style.color = binding.value
  }
})
```

