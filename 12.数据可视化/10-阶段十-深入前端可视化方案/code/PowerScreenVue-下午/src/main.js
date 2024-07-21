import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 重置样式( 统一样式的风格 )
import 'normalize.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
