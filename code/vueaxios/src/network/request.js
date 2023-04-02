import axios from 'axios'
//方法1：传3个参数，config,success,failure
// export  function request(config,success,failure){
// //     //1创建axios实例
//     const instance1 = axios.create({
//         // baseURL: "http://localhost:8081/abc",
//         baseURL: "/abc",
//         timeout: 5000
//     })
//     //发送真正的网络请求
//     instance1(config)
//     .then(res=>{
//         // console.log(res);
//         success(res)
//     })
//     .catch(err=>{
//         // console.log(err);
//         failure(err)
//     })
// }

//方法2：只传一个参数
// export  function request(config){
//    //1创建axios实例
//     const instance1 = axios.create({
//         // baseURL: "http://localhost:8081/abc",
//         baseURL: "/abc",
//         timeout: 5000
//     })
//     //发送真正的网络请求
//     instance1(config.baseConfig)
//     .then(res=>{
//         // console.log(res);
//         config.success(res)
//     })
//     .catch(err=>{
//         // console.log(err);
//         config.failure(err)
//     })
// }


//方法3；使用promise
// export  function request(config){
//    //1创建axios实例
//    return new Promise((resolve,reject) => {
//        const instance1 = axios.create({
//            // baseURL: "http://localhost:8081/abc",
//            baseURL: "/abc",
//            timeout: 5000
//        })
//        //发送真正的网络请求
//        instance1(config)
//        .then(res=>{
//         resolve(res)
//        })
//        .catch(err=>{
//         reject(err)
//        })
//    })
// }

//方法4：直接return，因为函数本身就返回promise
// export  function request(config){
//    //1创建axios实例

//        const instance1 = axios.create({
//            // baseURL: "http://localhost:8081/abc",
//            baseURL: "/abc",
//            timeout: 5000
//        })
//        //发送真正的网络请求
//        return instance1(config)

// }

//五、拦截器的使用

export function request (config) {
    //1创建axios实例
    const instance1 = axios.create({
        baseURL: "https://autumnfish.cn",
        // baseURL: "/abc",
        timeout: 5000
    })
    //2axios拦截器

    //请求拦截
    instance1.interceptors.request.use(config => {
        console.log(config)

        //1比如config中的一些信息不符合服务器的要求
        //1比如希望每次发送请求时，在界面中显示一个请求的图标
        //1某些网络请求，比如登录token，必须携带一些特殊的信息，跳转到某个地方登录
        //2拦截后必须返回
        return config
    }, err => {
        console.log(err)
    })

    //响应拦截
    instance1.interceptors.response.use(res => {
        console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })

    //3.发送真正的网络请求
    return instance1(config)
}