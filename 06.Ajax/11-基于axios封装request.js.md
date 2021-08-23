# 基于axios框架封装requers请求

1. 基于axios框架封装request.js

```javascript
import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        //baseURL: '/api',
        baseURL: '/api'，
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        // console.log(config);
        return config;
    }, err => {
        console.log(err);
    })
    instance1.interceptors.response.use(res => {
        // console.log(res.data);
        return res.data;
    },err => {
        console.log(err);
    })
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
           target: 'http://152.136.185.210:7878/api/m5',
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

   