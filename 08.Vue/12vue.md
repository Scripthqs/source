#  ref 引用

ref 用来辅助开发者在**不依赖于 jQuery 的情况下**，获取 DOM 元素或组件的引用。 

每个 vue 的组件实例上，都包含一个 **$refs 对象**，里面存储着对应的 DOM 元素或组件的引用。默认情况下， **组件的 $refs 指向一个空对象**

## 1 使用 ref 引用 DOM 元素

使用 ref 引用 DOM 元素

```
<h1 ref="aaa">App根组件</h1>
<button @click="showThis">打印</button>
methods: {
    showThis () {
      console.log(this)
      console.log(this.$refs.aaa)
      this.$refs.aaa.style.color = 'red'
    }
  }
}
```

## 2 使用 ref 引用组件实例

给组件的标签上添加ref属性，父组件就可以使用子组件的方法和值，

```vue
 <left ref="comLeft"></left>
     resetLeft () {
      this.$refs.comLeft
    }
```

## 3 this.$nextTick(cb) 

通过布尔值 inputVisible 来控制组件中的文本框与按钮的按需切换

当文本框展示出来之后，如果希望它立即获得焦点，则可以为其添加 ref 引用，并调用原生 DOM 对象的 .focus() 方法

组件的 $nextTick(cb) 方法，会把 cb 回调推迟到下一个 DOM 更新周期之后执行。通俗的理解是：**等组件的 DOM 更新完成之后，再执行 cb 回调函数。从而能保证 cb 回调函数可以操作到最新的 DOM 元素**

```js
this.$nextTick(() => {
    console.log(this.$refs.inputRef)
    this.$refs.inputRef.focus()
})
```

