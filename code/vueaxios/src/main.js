import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios(config)

// 写法1：
// axios({
//   url:'https://httpbin.org/',
//   method:'get'
// }).then(res=>{})

// axios({
//   url:'http://localhost:8081/api/students',
//   params: {
//     type:'',
//     page:1
//   },
//   method:'get'
// }).then(res=>{
//   console.log(res.data);
// })
//写法2：http://localhost:5000/students

// axios.get('https://httpbin.org/').then(res=>{
//   console.log('请求成功',res.data);
// })

// axios.get('http://localhost:8081/test/cars').then(
//   res => {
//     console.log('请求成功',res.data);
//   },
//   err => {
//     console.log('请求失败',err.message);
//   }
// )

//三、axios发送并发请求

// axios.all([axios({
//   url:'http://localhost:8081/api/students'
// }),axios({
//   url:'http://localhost:8081/test/cars'
// })]).then(res=>{
//   console.log(res);
// })



//四、全局配置

// axios.defaults.baseURL = 'http://localhost:8081'
// axios.defaults.timeout = 3000
// axios.all([axios({
//   url:'/api/students'
// }),axios({
//   url:'/test/cars'
// })]).then(res=>{
//   console.log(res);
// })

//五、创建对应的实例

// const instance1 = axios.create({
//   baseURL: 'http://localhost:8081',
//   timeout: 5000
// })

// instance1({
//   url: '/api/students'
// }).then(res => {
//   console.log(res);
// })


//   axios({
//     url: "http://localhost:8081/abc/banner",
//   }).then((res) => {
//     console.log(res.data.banners[0]);
//     this.result = res.data.banners[0]
//   });

// import {request} from './network/request'


//方法1：传3个参数，config,success,failure
// request({
//   url: '/banner'
// },res=>{
//   console.log(res);
// },err=>{
//   console.log(err);
// }
// )

//方法2：只传一个参数

// request({
//   baseConfig:{
//     url: '/banner'
//   },
//   success:function(res){
//     console.log(res);
//   },
//   failure: function(err){
//     console.log(err);
//   }
// })

//方法3；使用promise

// request({
//   url:'/banner'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })


//方法4：直接return
// request({
//   url:'/banner'
// }).then(res => {
//   console.log(res);
// }
// ).catch(err => {
//   console.log(err);
// })