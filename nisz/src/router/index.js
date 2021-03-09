import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'

import Login from "../views/Login.vue"
import Signup from "../views/Signup.vue"
import Templates from "../views/Templates.vue"

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/templates',
    name: 'Templates',
    component: Templates
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
