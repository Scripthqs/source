# 使用 axios

## 对 axios 进行二次封装

### 拦截器

```js
// 6.axios的拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
  config => {
    // 想做的一些操作
    // 1.给请求添加token
    // 2.isLoading动画
    console.log('请求成功的拦截');
    return config;
  },
  err => {
    console.log('请求发送错误');
    return err;
  }
);
// fn1: 数据响应成功(服务器正常的返回了数据 20x)
axios.interceptors.response.use(
  res => {
    console.log('响应成功的拦截');
    return res;
  },
  err => {
    console.log('服务器响应失败');
    return err;
  }
);
```

## 项目中二次封装的 axios

```js
/*****
 * 使用方法：全局引入request  用 request.axiosInstance({url:,methods:,data:,{showLoading:bool,}})
 * showLoading:是否显示加载状态，如果传入false就会不显示loading
 *
 *  *****/

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'ant-design-vue';
import store from '@/store';
import storage from '@/utils/storage'
import router from "../router";

// 继承axios自己的接口，添加loading属性，用来判断是否显示加载模态框
interface Loading extends AxiosRequestConfig {
  showLoading?: boolean | undefined;
}

export class Request {
  public static axiosInstance: AxiosInstance;

  public static init(): any {
    // 创建axios实例
    this.axiosInstance = axios.create({
      baseURL: process.env.VUE_APP_BASE_API,
      timeout: 0,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });

    // 初始化拦截器
    this.initInterceptors();
    return axios;
  }

  // 初始化拦截器
  public static initInterceptors(): void {
    /**
     * 请求拦截器
     *
     */
    this.axiosInstance.interceptors.request.use(
      (config: Loading) => {
        // 如果请求那边传了loading状态，判断是否显示加载状态
        const loading = config.showLoading == undefined ? true : config.showLoading;
        if (loading) {
          store.commit('loading/changLoading', 1);
        }

        // 每次请求前，如果存在token则在请求头中携带token
        // const token = localStorage.getItem('ACCESS_TOKEN');
        // if (token) {
        let token=storage.get('token')
        if(token){
        config.headers!['admin-x-auth-token'] = token;
        }
        // }
        return config;
      },
      (error: any) => {
        store.commit('loading/changLoading', 0);
        console.log(error);
      }
    );

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      // 请求成功
      (response: AxiosResponse) => {
        // 判断是否有loading状态
        const configs: Loading = response.config;
        const loading = configs.showLoading == undefined ? true : configs.showLoading;

        if (loading) {
          store.commit('loading/changLoading', -1);
        }

        if (response.status === 200) {
          // return Promise.resolve(response.data);
          //下载文件流
          if (response.config.responseType === 'blob') {
            return response;
          }
          // 如果请求错误，统一处理
          if (response.data.success) {
            return response;
          } else {
            message.warn(response.data.errMessage);
          }
        } else {
          Request.errorHandle(response);
          // return Promise.reject(response.data);
          return response;
        }
      },
      // 请求失败
      (error: any) => {
        store.commit('loading/changLoading', 0);
        const { response } = error;
        if (response) {
          // 请求已发出，但是不在2xx的范围
          Request.errorHandle(response);
          return Promise.reject(response.data);
        } else {
          message.warn('网络连接异常,请稍后再试!');
        }
      }
    );
  }

  /**
   * http握手错误
   * @param res 响应回调,根据不同响应进行不同操作
   */
  private static errorHandle(res: any) {
    // 状态码判断
    store.commit('loading/changLoading', 0);
    switch (res.status) {
      case 401:
        message.warn('登录已过期，请重新登录');
        setTimeout(function(){
        router.push('/login?redirect='+router.currentRoute.value.fullPath)
        },1000)
        break;
      case 403:
        break;
      case 404:
        message.warn('请求的资源不存在');
        break;
      default:
        console.log(res, 'error');
        message.warn('接口错误');
    }
  }
}
```

## 关于 axios 传参

之前对于 axios 的 4 种请求方式，传参的区别没有很清楚

```js
`axios.get/post(url, data, config)`;
```

都在 config 中配置参数

```js
axios.get('/url', { params: { name: 'aaa', age: 18 }, timeout: 5000, headers: {} }).then(res => {
  console.log(res.data);
});
```

### get

需要使用`params：{参数名:参数值,key:value,...}`的方式

```js
const getRateTable = function(id: string | number) {
  $axios.get($api.H_rateAttr, { params: { prdCategoryId: id }, showLoading: false }).then((res: any) => {
    rateData.value = res.data.data;
  });
};
```

### post

- 需要使用`post：{参数名:参数值,key:value,...}`的方式
- 直接使用`{参数名:参数值,key:value,...}`传递一个对象的方式

```js
const getTableDate = function(type: number, id: string | number) {
  $axios.post($api.H_queryByPage, { data: { type: type, categoryId: id } }).then((res: any) => {
    specData.value = res.data.data;
  });
};

const getTableDate = function(type: number, id: string | number) {
  $axios.post($api.H_queryByPage, { type: type, categoryId: id }).then((res: any) => {
    specData.value = res.data.data;
  });
};
```

### put

和 post 一样，直接传一个`{参数名:参数值,key:value,...}`对象的方式

```js
(setDom.value as any).validate().then(() => {
  $axios.put($api.H_editSkuAttr + '/' + params['skuAttrId'], params).then((res: any) => {
    if (res.status === 200) {
      setModalVisible.value = false;
      $message.success('编辑商品属性成功');
    }
    getTableDate({});
  });
});
```

### delete

和 get 一样，需要使用`params：{参数名:参数值,key:value,...}`的方式

```js
const delData = function(data: any) {
  $axios.delete($api.deleteData, params: { id: params['categoryId'] } ).then((res: any) => {
    if (res.data.success) {
      $message.success('删除成功');
      getTableData(categoryId.value);
    } else {
      $message.warn(res.errMessage);
    }
  });
};
```

### params/data

把参数存放在 url 或 data 中

- 使用 params 传参类似于 get 请求，是将参数拼接在 url 上
- 使用 data 传参类似于 post 请求，是将参数放在 body 上。

```js
//params参传
axios
  .delete(url, {
    params: {
      userId: '007'
    }
  })
  .then(res => {
    console.log(res);
  });
//data传参
axios
  .delete(url, {
    data: {
      userId: '007'
    }
  })
  .then(res => {
    console.log(res);
  });
```
