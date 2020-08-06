/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:00:55
 * @LastEditTime: 2020-08-06 14:13:53
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Dashboard from '@/views/dashboard'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'layout',
  redirect: {
    name: 'login'
  },
  component: Layout,
  children: [{
    path: 'dashboard',
    name: 'dashboard',
    component: Dashboard

  }]
}, {
  path: '/e',
  name: 'login',
  component: Login,
}, ]

const router = new VueRouter({
  routes
})

export default router
