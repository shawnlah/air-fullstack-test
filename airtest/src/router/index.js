import Vue from 'vue'
import VueRouter from 'vue-router'
import Appointment from '../views/Appointment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/appointments',
    name: 'Appointment',
    component: Appointment
  },
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
