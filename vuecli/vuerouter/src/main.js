import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// Vue.prototype.test = function(){
//   console.log('我是原型上添加的test方法');
// }


new Vue({
  //router: router简写
  router,
  render: h => h(App)
}).$mount('#app')

console.log(router);
