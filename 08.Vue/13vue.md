# 动态组件

动态组件指的是**动态切换组件的显示与隐藏**

## 1  `<component>`内置组件

vue 提供了一个内置的` <component>`组件，**专门用来实现动态组件的渲染**。

```
    <component :is="componentId"></component>
```

1. component 标签时 vue 内置的，作用：组件的占位符
2. is的属性值，表示要渲染的组件的名字，需要使用v-bind

## 2 `keep-alive`保持状态

默认情况下，切换动态组件时**无法保持组件的状态**。此时可以使用 vue 内置的`<keep-alive>`组件保持动态组件的状态。

```
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
```

## 3 `keep-alive` 的生命周期函数

keep-alive可以把内部的组件进行缓存，而不是销毁组件

当组件**被缓存**时，会自动触发组件的 **deactivated** 生命周期函数。 

当组件**被激活**时，会自动触发组件的 **activated** 生命周期函数

```js
  created () {
    console.log('left被创建')
  },
  destroyed () {
    console.log('left被销毁了')
  },
  deactivated () {
    console.log('Left组件被缓存')
  },
  activated () {
    console.log('Left组件被激活')
  },
```

## 4  `keep-alive` 的 include 属性

include 属性用来指定：只有**名称匹配的组件**会被缓存。多个组件名之间使用英文的**逗号分隔**

```
    <keep-alive include="Left">
      <component :is="componentId"></component>
    </keep-alive>
```

## 5 `keep-alive` 的 exclude 属性

include 属性用来指定：名称匹配的组件**不会被缓存**。多个组件名之间使用英文的**逗号分隔**

```
    <keep-alive exclude="Left">
      <component :is="componentId"></component>
    </keep-alive>
```

**注意：二选一，不要同时使用**

