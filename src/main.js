import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init({duration: 800, once: true, offset: 80})

createApp(App).use(router).mount('#app')
