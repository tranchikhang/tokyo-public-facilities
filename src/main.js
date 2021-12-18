import Vue from 'vue'
import App from './App.vue'
import ResultList from './components/ResultList.vue'
import VueRouter from 'vue-router'
import '../node_modules/Bulma/CSS/bulma.css';
import './assets/main.css'

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
