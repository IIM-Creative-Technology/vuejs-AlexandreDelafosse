import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Blog',
    component: () => import('../views/Blog')
  },  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin')
  },
  {
    path: '/newpost',
    name: 'newpost',
    component: () => import('../views/Post')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
