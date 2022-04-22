import {
    createRouter,
    createWebHistory
} from 'vue-router'
import App from '../App.vue'
import Loader from '../components/Loader.vue'
import ResultList from '../components/ResultList.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        component: App
    }, {
        path: '/result',
        component: ResultList
    }]
})

export default router