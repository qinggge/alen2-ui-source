import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Qing from './components/Qing.vue'
import Qing2 from './components/Qing2.vue'

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Qing},
    {path: '/xxx', component: Qing2},
  ]
});


const app = createApp(App)
app.use(router)
app.mount('#app')
