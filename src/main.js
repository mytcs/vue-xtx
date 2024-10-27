
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

//引入自定义的图片懒加载插件
import { lazyPlugin } from "@/directives/index.js"

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(lazyPlugin)

app.mount('#app')

//


