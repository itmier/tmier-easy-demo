/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:00:55
 * @LastEditTime: 2020-08-05 15:53:49
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Dashboard from '@/views/dashboard'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'login',
  component: Login,
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard,
}]

const router = new VueRouter({
  routes
})

export default router
