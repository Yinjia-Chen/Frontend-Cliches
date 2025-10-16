import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import loading from '@/components/loading'


createApp(App).use(store).use(router).use(  loading  ).mount('#app')
