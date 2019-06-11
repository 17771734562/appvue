import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Personal from './views/Personal'

Vue.use(Router)

export default new Router({
    linkActiveClass:'mui-active',
  routes: [
    {path: '/home',name:'home', component: Home},
    {path: '/about', name:'about',component: About},
    {path: '/personal',name:'personal', component: Personal},
  ]
})
