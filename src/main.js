import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import 'flowbite'
import { initGlobalComponents } from './plugins/components'

const app = createApp(App)
initGlobalComponents(app)

app.use(router).mount('#app')
