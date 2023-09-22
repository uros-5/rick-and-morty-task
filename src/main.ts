import { createApp, markRaw } from 'vue'
import router from "@/router/router";
import {createPinia} from "pinia";
import './style.css'
import App from './App.vue'

const pinia = createPinia();
pinia.use(({store}) => {
 store.$router = markRaw(router); 
})

createApp(App).use(router).use(pinia).mount('#app')
