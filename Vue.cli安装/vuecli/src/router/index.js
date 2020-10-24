import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import test2 from'../views/test2.vue'
import  yueyue from'../views/yueyue.vue'
import lujing from '../views/lujing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: '/Home',
    component: Home
  },
  {
    path:'/test2',
    name:'test2',
    component:test2
  },
  {
    path:"/yueyue",
    name:'yueyue',
    component:yueyue
  },
  {
    path:"/lujing/:id/:name",
    name:'lujing',
    component:lujing
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
