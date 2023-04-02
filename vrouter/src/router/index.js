import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tab1 from '@/components/Tab1.vue'
import Tab2 from '@/components/Tab2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    redirect: '/about/tab1',
    children: [
      { path: 'tab1', component: Tab1 },
      { path: 'tab2', component: Tab2 }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
