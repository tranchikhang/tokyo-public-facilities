import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Loader from './components/Loader.vue'


import '../node_modules/bulma/css/bulma.css';
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.component('Loader', Loader)

app.mount('#app')
