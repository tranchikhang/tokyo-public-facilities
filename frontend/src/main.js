import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Loader from './components/Loader.vue'
import ResultList from './components/ResultList.vue'

import '../node_modules/bulma/css/bulma.css';
import './assets/main.css'

Vue.component('loader', Loader)
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: App
}, {
    path: '/result',
    component: ResultList
}];

const router = new VueRouter({
    routes: routes
});

new Vue({
    el: '#app',
    router,
    data: {
        currentRoute: window.location.pathname
    },
});
