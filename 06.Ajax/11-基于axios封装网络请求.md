# 在项目中使用axios

## 1 直接在项目中使用axios

```js
import axios from "axios"

created () {
    axios({
      url: "https://autumnfish.cn/banner",
      method: 'get'
    }).then((res) => {
      console.log(res)
    })
  },
```

## 2 将axios挂载到Vue原型上

1. 全局配置axios的请求根路径

```
axios.defaults.baseURL = 'https://autumnfish.cn/'
```

2. 把axios挂载到Vue.prototype上，供每一个.vue组件的实例直接使用

```
Vue.prototype.$http = axios
```

3. 今后在每一个.vue组件中发起请求，直接调用this.$http.xxx即可

```js
created () {
    this.getMenuList()
  },
  methods: {
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      this.menuList = res.data
      // console.log(res)
    }
  }
```

注意：**把axios挂载到原型上，有一个缺点，不利于API接口的复用**

## 3 常用方法封装

```
import axios from "axios"

const instance = axios.create({
  baseURL: 'https://autumnfish.cn',
  timeout: 5000
})

export function get (url, params) {
  return instance.get(url, {
    params
  })
}
export function post (url, data) {
  return instance.post(url, data)
}

export function del (url) {
  return instance.delete(url)
}
export function put (url, data) {
  return instance.put(url, data)
}
```

## 4 基于axios框架封装网络请求（推荐）

1. 新建一个network文件夹，基于axios框架封装request.js

```javascript
import axios from 'axios'
export function request(config) {
    //1 创建axios实例
    const instance = axios.create({
        //baseURL: 'https://autumnfish.cn/',
        baseURL: '/api'，//这样配置，再结合vue.config.js可以解决跨域问题
        timeout: 5000
    })
    
    //2 axios拦截器
    // 请求拦截，可以对结果进行处理
    instance.interceptors.request.use(config => {
        // console.log(config);
        //比如config中的一些信息不符合服务器的要求
        //比如希望每次发送请求时，在界面中显示一个请求的图标
        //某些网络请求，比如登录token，必须携带一些特殊的信息，跳转到某个地方登录
        config.header.token='123456'
        //拦截后必须返回
        return config;
    }, err => {
        console.log(err);
    })
    
    // 响应拦截,可以对结果进行处理
    instance.interceptors.response.use(res => {
        //可以根据服务器的返回状态码做x
        // console.log(res.data);
        return res.data;
    },err => {
        console.log(err);
    })
    
    //3.发送真正的网络请求
    return instance(config);
}
```

2. 引入request.js，配置各页面的具体url，例如首页的home.js

   ```javascript
   import {request} from "./request";
   
   export function getHomeMultidata() {
     return request({
       url: '/home/swiperdata',
     })
   }
   
   export function getHomeGoods(type,page) {
     return request({
       //url: 'api/getHomeMock',
       params: {
         type,
         page
       }
     })
   }
   ```

   3.有的接口可能会出现跨域问题，需要在vue.config.js中追加如下配置

   ```javascript
   devServer: {
       proxy: {
         '/api': {
           target: 'https://autumnfish.cn/',
   		pathRewrite:{'^/api':''},
           ws: true, //用于支持websocket
           changeOrigin: true //用于控制请求头中的host值
         },
         '/demo': {
           target: 'http://localhost:5001',
   		pathRewrite:{'^/demo':''},
         }
       }
   }
   ```

   4.在组件中使用
   
   ```js
   created () {
       this.getHmMultidata()
     },
     methods: {
       async getHmMultidata () {
         const { data: res } = await getHmMultidata()
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
       }
     }
   ```
   
   