import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Main/Home/Home.vue'
import History from '../views/Main/History/History.vue'
import Main from '../views/Main/index.vue'
import Product from '../views/Main/Product/Product.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/history',
  //   name: 'history',
  //   component: History
  // },
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'history',
        name: 'history',
        component: History
      },
      {
        path: 'product',
        name: 'product',
        component: Product
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
