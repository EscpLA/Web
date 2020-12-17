import Vue from 'vue'
import Router from 'vue-router'

// const  switch1 = () => import('./components/switch/switch1.vue')
const personalHomePage =() => import ('./views/personalHomePage')
const search = () => import('./views/search.vue')
const play =() => import('./views/play.vue')
const Homepage =() => import('./views/Homepage.vue')
const Sign =() => import('./views/Sign.vue')

Vue.use(Router)
const routes = [
    {
        path : '/',
        redirect : '/Homepage',
    },
    {
        path :'/personalHomePage',
        name : 'personalHomePage',
        component:personalHomePage,
    },
    {
        path :'/search',
        name : 'search',
        component:search,
    },
    {
        path :'/play',
        name : 'play',
        component:play,
    },
    {
        path :'/Homepage',
        name : 'Homepage',
        component:Homepage,
    },
    {
        path :'/Sign',
        name : 'Sign',
        component:Sign,
    },
]

export default new Router({
    routes
})