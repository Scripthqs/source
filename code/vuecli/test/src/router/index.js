//1 导入vue和VueRouter包
import Vue from 'Vue'
import VueRouter from 'vue-router'

//2 调用Vue.usr()函数，把VueRouter安装为Vue的插件
Vue.use(VueRouter)

//3 创建路由实例对象
const router = new VueRouter()

//4 向外共享路由的实例对象
export default router