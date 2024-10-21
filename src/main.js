import ToastPlugin from 'vue-toast-notification';
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './index.css'

createApp(App).use(ToastPlugin).use(router).mount('#app')
