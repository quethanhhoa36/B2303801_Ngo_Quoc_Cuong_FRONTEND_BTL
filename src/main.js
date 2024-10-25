import ToastPlugin from 'vue-toast-notification';
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './index.css'
import { createPinia } from 'pinia';

const pinia= createPinia()

createApp(App).use(ToastPlugin).use(router).use(pinia).mount('#app')
