# 前端路由

## 1 什么是路由

路由（router）就是**对应关系**

## 2 SPA 

SPA 指的是一个 web 网站只有**唯一的一个 HTML 页面**，**所有组件的展示与切换**都在这唯一的一个页面内完成。 此时，**不同组件之间的切换**需要通过**前端路由**来实现。

结论：在 SPA 项目中，**不同功能之间的切换**，要依赖于前端路由来完成

## 3 前端路由

**Hash 地址**（即#锚链接）与组件之间的**对应关系**。

```js
location.hash = 'xxx'
```

使用路由改变url保持**页面不刷新**

前端路由的工作方式:

1. 用户**点击**了页面上的**路由链接**
2. 导致了 **URL 地址栏**中的 **Hash 值**发生了变化
3. 前端路由**监听**了到 Hash 地址的**变化**
4. 前端路由把当前 **Hash 地址对应的组件**渲染都浏览器中

## 4 实现简易的前端路由

1. 通过 `<component>`标签，结合` comName` 动态渲染组件

   ```
       <component :is='comName'></component>
   	data(){
   	  return {
   	  	comName: 'Left'
   	  }
   	}
   ```

2. 在 App.vue 组件中，为 `<a>`链接添加对应的 **hash 值**

   ```js
       <a href="#/Left">Left</a>
       <a href="#/Right">Right</a>
   ```

3. 在 created 生命周期函数中，监听浏览器地址栏中 **hash 地址的变化**，动态切换要展示的组件的名称

   ```
   created () {
       window.onhashchange = () => {
         switch (location.hash) {
           case '#/Left':
             this.comName = 'Left'
             break
           case '#/Right':
             this.comName = 'Right'
             break
         }
       }
     }
   ```

   



