/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:00:55
 * @LastEditTime: 2020-08-14 15:20:25
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Dashboard from '@/views/dashboard'
import Layout from '@/layout'

import Page1 from '@/views/page1'
import Menu11 from '@/views/page1/menu11'
import Menu12 from '@/views/page1/menu12'

import Page2 from '@/views/page2'
import Menu21 from '@/views/page2/menu21'
import Menu22 from '@/views/page2/menu22'
import Page3 from '@/views/page3'
import Menu31 from '@/views/page3/menu31'
import Menu32 from '@/views/page3/menu32'

import Menu4 from '@/views/menu4'
import Menu5 from '@/views/menu5'




Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },

]

const router = new VueRouter({
  routes
})

export default router
