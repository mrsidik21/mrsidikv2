import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: {
      render(c) {
        return c('router-view')
      }
    },
    meta: {
      guest: true
    },
    redirect: '/',
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
