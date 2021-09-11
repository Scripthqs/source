# axios基础

## 1、axios简介

1. 前端最流行的 ajax请求库
2. react/vue 官方都推荐使用 axios 发ajax 请求
3. [文档: https://github.com/axios/axios](https://github.com/axios/axios)

调用axios方法，**返回的是一个promise对象**

## 2、axios 特点

1. 基于 xhr + promise 的异步 ajax请求库
2. 浏览器端/node 端都可以使用
3. 支持请求／响应拦截器
4. 支持请求取消
5. 请求/响应数据转换
6. 批量发送多个请求

## 3、axios 常用语法

`axios(config)`: 通用/最本质的发任意类型请求的方式
`axios(url[, config])`: 可以只指定url 发get 请求
`axios.request(config)`: 等同于axios(config)
`axios.get(url[, config])`: 发get 请求
`axios.delete(url[, config])`: 发delete 请求
`axios.post(url[, data, config])`: 发post 请求
`axios.put(url[, data, config])`: 发put 请求

`axios.defaults.xxx`: 请求的默认全局配置（method\baseURL\params\timeout…）
`axios.interceptors.request.use()`: 添加请求拦截器
`axios.interceptors.response.use()`: 添加响应拦截器

`axios.create([config])`: 创建一个新的axios(它没有下面的功能)

`axios.Cancel()`: 用于创建取消请求的错误对象
`axios.CancelToken()`: 用于创建取消请求的 token 对象
`axios.isCancel()`: 是否是一个取消请求的错误
`axios.all(promises)`: 用于批量执行多个异步请求
`axios.spread()`: 用来指定接收所有成功数据的回调函数的方法

<img src="D:\user\Desktop\scripthqs\note\material\ajax\axios图解.png" alt="axios图解" style="zoom: 67%;" />

## 4、axios 的基本使用

### 4.1 axios发送get请求

发起 GET 请求：**通过params传参**

1.通过`axios({})`通用方式发送

```js
    axios({
      // 请求方式
      method: 'GET',
      // 请求的地址
      url: 'https://autumnfish.cn/top/playlist',
      // URL 中的查询参数
      params: {
        limit: 10,
        order: 'new'
      }
    }).then(function (result) {
      console.log(result)
    })
```

2.通过`axios('url',{})`发送

```
axios("https://autumnfish.cn/top/playlist", {
      // 请求方式
      method: 'GET',
      params: {
        limit: 10,
        order: 'new'
      }
    }).then(function (result) {
      console.log(result)
    })
```

3.通过`axios.get('url',{})`发送

get请求传递2个参数：

1. 请求的地址

2. 表示配置信息，

   - params 表示传递到服务器的数据，以url参数的形式拼接

   ```
   https://autumnfish.cn/top/playlist?limit=10&order=new
   ```

```js
    axios.get('https://autumnfish.cn/top/playlist', {
      // URL 中的查询参数
      params: {
        limit: 10,
        order: 'new'
      }
    }).then(function (result) {
      console.log(result)
    })
```

### 4.2 axios发送post请求

发起 POST 请求：**通过data传参**，**上面的前两种方法，get和post都可以使用。**

通过`axios.post("",{},{})`发送

```
axios.post("",{},{})
```

post请求传递3个参数，

1. 请求地址
2. 传递的数据，在请求体中传递，默认是json格式
3. 配置的信息，header等

```js
    axios.post("https://autumnfish.cn/login/cellphone", {
      phone: '15588889999',
      password: '123456789'
    }, {}).then(res => {
      console.log(res)
    })
  },
```

可以使用async和await简化promise

```js
  // 如果调用某个方法的返回值是 Promise 实例，则前面可以添加 await！
	async created () {
  // await 只能用在被 async “修饰”的方法中  
    const { data: res } = await axios.post("https://autumnfish.cn/login/cellphone", {
      phone: '15588889999',
      password: '123456789'
    })
    console.log(res)
  },
```

1. 调用axios之后，使用async/await进行简化
2. 使用结构赋值，从axios封装的大对象中，把data属性解构出来
3. 把解构出来的data属性，使用冒号`:`进行重命名{data: res}



