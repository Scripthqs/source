# 第三方库集成

vueCli4 依赖于 Webpack，但是 CLI 将 webpack 的配置隐藏起来了。需要使用 vue.config.js 更改 webpack 配置。

## 1 vue.config.js 配置

vue.config.js 有三种配置方式：

* 方式一：直接通过CLI提供给我们的选项来配置：
  * 比如publicPath：配置应用程序部署的子目录（默认是 `/`，相当于部署在 `https://www.my-app.com/`）；
  * 比如outputDir：修改输出的文件夹；
* 方式二：通过configureWebpack修改webpack的配置：
  * 可以是一个对象，直接会被合并；
  * 可以是一个函数，会接收一个config，可以通过config来修改配置；
* 方式三：通过chainWebpack修改webpack的配置：
  * 是一个函数，会接收一个基于  [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) 的config对象，可以对配置进行修改；

```js
const path = require('path')

module.exports = {
  //配置方式1：CLI 提供的属性
  outputDir: './build',
  //配置方式2：和 Webpack 的配置完全一致，最后会进行合并。configureWebpack可以是一个对象，也可以是函数
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    }
  },
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      views: '@/views'
    }
  },
   //配置方式3；是一个函数，支持链式编程
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', '@/views')
  }
}
```

## 2 vue-router 集成

安装vue-router的最新版本：

```shell
npm install vue-router@next
```

创建router对象：

```ts
import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('../views/main/main.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
```

安装router：

```ts
import router from './router'

createApp(App).use(router).mount('#app')
```

在App.vue中配置跳转：

```html
<template>
  <div id="app">
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
  </div>
</template>
```

## 3 vuex 集成

安装vuex：

```shell
npm install vuex@next
```

创建store对象：

```ts
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      name: 'script'
    }
  }
})

export default store
```

安装store：

```ts
createApp(App).use(router).use(store).mount('#app')
```

在App.vue中使用：

```html
<h2>{{ $store.state.name }}</h2>
```

## 4 element-plus 集成

Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库：

* 在Vue2中可以使用element-ui，而element-plus正是element-ui针对于vue3开发的一个UI组件库；
* 它的使用方式和很多其他的组件库是一样的，所以学会element-plus，其他类似于ant-design-vue、NaiveUI、VantUI都是差不多的；

安装element-plus

```shell
npm install element-plus
```

### 4.1. 全局引入

一种引入element-plus的方式是全局引入，代表的含义是所有的组件和插件都会被自动注册：

```js
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import store from './store'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
```

### 4.2. 局部引入

也就是在开发中用到某个组件对某个组件进行引入：

```vue
<template>
  <div id="app">
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>

    <h2>{{ $store.state.name }}</h2>

    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'App',
  components: {
    ElButton
  }
})
</script>

<style lang="less">
</style>
```

但是我们会发现是没有对应的样式的，引入样式有两种方式：

* 全局引用样式（像之前做的那样）；
* 局部引用样式（通过babel的插件）；

1.安装babel的插件：

```shell
npm install babel-plugin-import -D
```

2.配置babel.config.js

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
```

但是这里依然有个弊端：

* 这些组件我们在多个页面或者组件中使用的时候，都需要导入并且在components中进行注册；
* 所以我们可以将它们在全局注册一次；

```ts
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
} from 'element-plus'

const app = createApp(App)

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
]

for (const cpn of components) {
  app.component(cpn.name, cpn)
}
```

## 5 axios 集成

安装axios：

```shell
npm install axios
```

封装axios：

```ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Result } from './types'
import { useUserStore } from '/@/store/modules/user'

class MyRequest {
  private instance: AxiosInstance

  private readonly options: AxiosRequestConfig

  constructor(options: AxiosRequestConfig) {
    this.options = options
    this.instance = axios.create(options)

    this.instance.interceptors.request.use(
      (config) => {
        const token = useUserStore().getToken
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 拦截响应的数据
        if (res.data.code === 0) {
          return res.data.data
        }
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, AxiosResponse<Result<T>>>(config)
        .then((res) => {
          resolve((res as unknown) as Promise<T>)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  patch<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default MyRequest
```
