import '@/assets/main.css'
import themeWatcher from "@/helpers/theme.js";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

themeWatcher(localStorage.theme ? localStorage.theme : "light");