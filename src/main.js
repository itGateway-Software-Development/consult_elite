import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import 'flowbite'
import { initGlobalComponents } from './plugins/components'
import { createPinia } from 'pinia'
import "swiper/css";
import "lucide-vue-next"

const app = createApp(App)
const pinia = createPinia()

initGlobalComponents(app)

app.use(pinia).use(router).mount('#app')
