# mixin和pubsub

## 1 mixin简介

mixin(混入)，功能：可以把多个组件共用的配置提取成一个混入对象

**mixin使用方式：**

第一步定义混合

```js
{
    data(){....},
    methods:{....}
    ....
}
```

第二步使用混入

1. 全局混入

```js
Vue.mixin(xxx)
```

2. 局部混入

```js
mixins:['xxx']
```

## 2 pubsub简介

pubsub（消息订阅与发布），一种组件间通信的方式，适用于任意组件间通信。

**pubsub使用方式：**

1.安装pubsub

```js
npm i pubsub-js
```

2.引入

```js
import pubsub from 'pubsub-js'
```

3.接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回**调留在A组件自身**。

```js
methods(){
  demo(data){......}
}
......
mounted() {
  this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
}
```

4.提供数据，发布消息

```js
pubsub.publish('xxx',数据)
```

5.最好在beforeDestroy钩子中，**取消订阅**

```js
PubSub.unsubscribe(pid)
```

