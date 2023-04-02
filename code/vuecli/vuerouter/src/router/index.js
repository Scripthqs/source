import Vue from 'vue'
//1.导入vue-router插件
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const HomeNews =  () => import('../components/HomeNews.vue')
const HomeMessage =  () => import('../components/HomeMessage.vue')
const Profile =  () => import('../views/Profile.vue')
//2.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)
//3.创建VueRouter对象，单独的抽离出来
const routes = [
  {
    path:'',
    //redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path:'',
        redirect: 'news'
      },
      {
        path: 'news',
        // name:'home',
        component: HomeNews
      },
      {
        path: 'message',
        // name:'homeMessage',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { 
    path: '/user/:id', 
    name: 'User',
    component: () => import('../views/User.vue') 
  },
  { 
    path: '/profile', 
    name: 'Profile',
    component: Profile 
  }
]

const router = new VueRouter({
  //配置路由和组件之间的应用关系routes:[]
  routes,
  //默认路由是hash值模式，通过mode更改
  mode:'history'
})

router.beforeEach((to,from,next) => {
  // console.log(to);
  // console.log('bbbbbbbbbbbbbbbbbbbbbbb');
  document.title = to.name
  next()
})

router.afterEach((to,from) => {
  // console.log('aaaaaaaaaaaaaaaaaaaaaa');
})
//4.将router对象传入Vue实例，在main.js中导入并使用router
export default router
