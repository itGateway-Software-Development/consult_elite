import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import 'flowbite'
import { initGlobalComponents } from './plugins/components'
import { createPinia } from 'pinia'
import "swiper/css";
import "lucide-vue-next"
import { createI18n } from 'vue-i18n'
import EN from './locale/EN.json'
import MM from './locale/MM.json'
import { useLocaleStore } from './store/useLocaleStore'


const i18n = createI18n({
    locale: 'EN',
    messages: {
        EN,
        MM
    }
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

const localeStore = useLocaleStore();

watch(() => localeStore.locale, (newValue) => {
    i18n.global.locale = newValue
})

initGlobalComponents(app)

app.use(i18n).use(router).mount('#app')
