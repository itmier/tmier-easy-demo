/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:00:55
 * @LastEditTime: 2020-08-07 14:57:46
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Dashboard from '@/views/dashboard'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'layout',
    redirect: {
      name: 'dashboard'
    },
    component: Layout,
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard

      },
      {
        path: 'page1',
        name: 'page1',
        component: page1,
        children: [{
            path: 'menu1-1',
            name: 'menu1-1',
            component: Menu11,
          },
          {
            path: 'menu1-2',
            name: 'menu1-2',
            component: Menu12,
          }
        ]
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard

      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard

      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
