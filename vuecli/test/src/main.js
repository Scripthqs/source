
import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'
import router from '@/router/index.js'
Vue.component('myTest', Test)

Vue.directive('aa', function (el, binding) {
  el.style.color = binding.value
}
)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
// new Vue({
//   el: '#app',
//   render: h => h(App),
// })
// new Vue({
//   render: h => h(Test),
// }).$mount('#app')