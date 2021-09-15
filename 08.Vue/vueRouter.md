# vue-router

## 1 vue-router简介

vue-router 是vue.js官方**插件**，是 vue.js 官方给出的**路由解决方案**。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目 中组件的切换。

vue-router 的官方文档地址：https://router.vuejs.org/zh

## 2 vue-router 安装和配置

### 2.1 安装 vue-router 包

```bash
npm install vue-router -S
```

### 2.2 创建路由模块

在 **src 源代码目录**下，新建 **router/index.js** 路由模块

```js
//1 导入vue和VueRouter包
import Vue from 'Vue'
import VueRouter from 'vue-router'

//2 调用Vue.usr()函数，把VueRouter安装为Vue的插件
Vue.use(VueRouter)

//3 创建路由实例对象
const router = new VueRouter()

//4 向外共享路由的实例对象
export default router
```

### 2.3 导入并挂载路由模块

在 **src/main.js** 入口文件中，导入并挂载路由模块

```js
import router from '@/router/index.js'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
```

### 2.4 声明**路由链接**和**占位符**

在 **src/App.vue 组件**中，使用 vue-router 提供的**` <router-link>`**和  **`<router-view>`**声明路由链接和占位符

```vue
<router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link>
<router-view/>
```

### 2.5 声明路由的**匹配规则**

在 src/router/index.js 路由模块中，通过 **routes 数组**声明路由的匹配规则。

```js
import Home from '../views/Home.vue'
import About from '../views/About.vue'
const router = new VueRouter({
  routes: [
    { path: '/', name: 'Home',component: Home},
  	{ path: '/about', name: 'About',component: About}
  ]
})
```

### 2.6 路由的懒加载

打包构建应用时，JavaScript包会变得非常大，影响页面加载，能把不同路由对应的组件分割成不同的代码块，然后当路由被访问时才加载对应组件。

懒加载的写法：

```js
const Home =  () => import('../views/About.vue')
```

## 3 路由重定向

路由重定向指的是：用户在访问**地址 A** 的时候，**强制用户跳转到**地址 C ，从而展示特定的组件页面。 通过路由规则的 **redirect** 属性，指定一个新的路由地址，可以很方便地设置路由的重定向

```js
const router = new VueRouter({
  routes: [
  	{ path: '/'.redirect: '/home'}
    { path: '/home', name: 'Home',component: Home},
  	{ path: '/about', name: 'About',component: About}
  ]
})
```

## 4  嵌套路由

通过路由实现**组件的嵌套展示**，叫做嵌套路由

1. 点击**父级路由链接**显示模板内容

2. 模板内容中又有**子级路由链接**
3. 点击**子级路由链接**显示**子级模板内容**

声明子路由链接和子路由占位符。

在 **About.vue 组件**中，声明 tab1 和 tab2 的**子路由链接**以及子**路由占位符**

```vue
<router-link to='/about/tab1'>tab1</router-link> |
<router-link to='/about/tab2'>tab2</router-link>
<hr />
<router-view></router-view>
```

通过 **children** 属性声明**子路由规则**

```js
{
    path: '/about',
    name: 'About',
    component: About,
    children: [
      { path: 'tab1', component: Tab1 },
      { path: 'tab2', component: Tab2 }
    ]
  }
```

默认子路由：如果**children数组**中，某个路由规则的**path值为空字符串**，则这条路由规则，叫做**默认子路由**

```js
{
    path: '/about',
    name: 'About',
    component: About,
    redirect: '/about/tab1',
    children: [
      { path: 'tab1', component: Tab1 },
      { path: 'tab2', component: Tab2 }
    ]
  }
```

- **使用redirect可以重定向路由实现默认子路由的功能**
- **子路由规则，路径不能加斜线**

```js
<router-link to='/about'>tab1</router-link> |
<router-link to='/about/tab2'>tab2</router-link>
<hr />
<router-view></router-view>
{
    path: '/about',
    name: 'About',
    component: About,
    children: [
      { path: '', component: Tab1 },
      { path: 'tab2', component: Tab2 }
    ]
  }
```

## 5 动态路由匹配

假如有 3 个路由链接，定义了3个路由规则，但是3个规则指向同一个组件。此时，**路由规则的复用性差**

动态路由指的是：把 Hash 地址中**可变的部分**定义为**参数项**，从而**提高路由规则的复用性**。 在 vue-router 中使用**英文的冒号（:）**来定义路由的参数项。

```vue
{ path: '/movie/:id',component:Movie }
```

在Movie组件中，希望根据id的值拿到对于的电影的详细信息

##  6 $route.params 参数对象

在**动态路由**渲染出来的组件中，可以使用 **this.$route.params** 对象访问到**动态匹配的参数值**。

```js
 this.$route.params.id
```

**this在行内的时候必须省略**

```js
$route.params.id
```

- $route时路由的**参数对象**
- $router时路由的**导航对象**

## 7  使用 props 接收路由参数

**为了简化路由参数的获取形式**，vue-router 允许在**路由规则**中开启 **props 传参**。

1. 在定义路由规则时，声明props:true选项
2. 在Movie.vue组件中使用props 接收匹配到规则
3. 直接在Movie.vue组件中使用props参数

```js
{ path: '/movie/:id',component:Movie, props:true}
//Movie.vue

{{id}}

props: ['id']
```

## 8 路径参数和查询参数

```js
<router-link to='/movie/1'>电影1</router-link>
```

- 在hash地址中，/ 后面的参数项，叫**路径参数**
- 在路由的参数对象($route)中，需要使用**this.$route.params**来访问路径参数

```js
<router-link to='/movie/1?id=1&age=24'>电影1</router-link> |
```

- 在hash地址，? 后面的参数项，叫**查询参数**
- 在路由参数对象($route)中，需要使用**this.$route.query**来访问 查询参数对象

在this.$route中，path是部分路径，**fullpath才是完整的路径**

## 9 vue-router导航

导航分为声明式导航和编程式导航。

- 在浏览器中，点击链接实现导航的方式，叫做声明式导航。
  - 点击a链接，`<router-link>`
- 在浏览器中，调用 API 方法实现导航的方式，叫做编程式导航。
  - 调用 location.href 跳转到新页面

**vue-router 中的编程式导航 API：**

`this.$router.push('hash 地址')`

- 跳转到指定 hash 地址，并**增加**一条历史记录

`this.$router.replace('hash 地址')`

- 跳转到指定的 hash 地址，并**替换掉当前**的历史记录

`this.$router.go(数值 n)`

- 实现导航历史前进、后退

在实际开发中，一般只会前进和后退一层页面。因此，经常使用 `$router.go` 的简化用法

- `$router.back()`在历史记录中，后退到上一个页面
- $router.forward()在历史记录中，前进到下一个页面

**在行内使用编程式导航跳转时，this必须要省略，否则会报错**

## 10 导航守卫

导航守卫可以**控制路由的访问权限**。

未登录的情况下，访问后台主页时，**强制跳转到登录页**。

## 11 全局前置守卫

每次发生路由的**导航跳转**时，都会触发全局前置守卫。因此，在全局前置守卫中，程序员可以对每个路由进行 **访问权限**的控制

```
const router = new VueRouter({
  routes
})

router.beforeEach(fn)
router.beforeEach((to,from,next) =>{
	
})
```

全局前置守卫的回调函数中接收 **3 个形参**:

- to 是将要访问的路由信息对象
- from是将要离开的路由的信息对象
- next是一个函数，调用next()表示放行，允许这次路由导航

```js
router.beforeEach((to, from, next) => {
  // to 将访问哪一个路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数,表示放行
  //   next() 放行 next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})
```

next 函数的 **3 种调用方式**:

- 当前用户**拥有**后台主页的访问权限，直接放行
- next() 当前用户**没有**后台主页的访问权限，**强制其跳转到登录页面**：`next('/login')` 
- 当前用户**没有**后台主页的访问权限，**不允许跳转到后台主页**：`next(false`)

控制后台主页的访问权限:

```
router.beforeEach((to, from, next) => {
	if(to.path==='/main'){
		const token = localStorage.getItem('token')
		if(token){
			next();
		}else{
			next('/login')		
		}
	}else{
		next()
	}

})
```

