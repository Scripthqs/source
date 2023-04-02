# 区分环境

## 常见的环境

在开发中，有时需要根据不同的环境设置不同的环境变量，常见的三种环境：

- 开发环境：development；
- 生产环境：production；
- 测试环境：test

## 配置环境

常见有三种方式区分环境变量：

- 方式一：手动修改不同的变量；
- 方式二：根据process.env.NODE_ENV的值进行区分；（使用较多）
- 方式三：编写不同的环境变量配置文件，新建`.env.development`,`.env.production`,`.env.test`三个文件

在网络请求的api文件夹下的 config.js 文件中

```js
// 1.区分环境变量方式一:
// export const API_BASE_URL = 'https://example/org/dev'
// export const API_BASE_URL = 'https://example/org/prod'

// 2.区分环境变量方式二:
// let baseURL = ''
// if (process.env.NODE_ENV === 'production') {
//   baseURL = 'https://example/org/prod'
// } else if (process.env.NODE_ENV === 'development') {
//   baseURL = 'https://example/org/dev'
// } else {
//   baseURL = 'https://example/org/test'
// }

// 3.区分环境变量方式三: 加载.env文件
export const API_BASE_URL = process.env.VUE_APP_BASE_URL
export const TIME_OUT = 10000
```

```js
//.env.development
VUE_APP_BASE_URL=/api //配合跨域
//.env.production
VUE_APP_BASE_URL=http://152.136.185.210:4000/
//.env.test
VUE_APP_BASE_URL=https://example/org/test
```
