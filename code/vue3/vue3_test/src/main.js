//引入的不再是Vue构造函数，引入的是名为createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象
// createApp(App).mount('#app')
const app = createApp(App)
// console.log(app)
app.mount("#app")