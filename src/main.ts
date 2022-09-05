import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import piniaPersist from 'pinia-plugin-persist'
import ElementUI from './element'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//使用pinia
const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App).use(pinia).use(router).use(ElementUI).mount('#app')
