import Vue from 'vue'
import VueRouter from 'vue-router'

import Head from '../views/home/Head.vue'
import index from '../views/home/index.vue'
import detail from '../views/detail/index.vue'
import Category from '../views/home/Category.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:index
  },
  {
    path:'/detail',
    component:detail
  },
  {
    path:'/Category',
    component:Category
  }
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
