/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:00:55
 * @LastEditTime: 2020-08-07 15:02:40
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
        path: 'page2',
        name: 'page2',
        component: page2,
        children: [{
            path: 'menu2-1',
            name: 'menu2-1',
            component: Menu21,
          },
          {
            path: 'menu2-2',
            name: 'menu2-2',
            component: Menu22,
          }
        ]
      },
      {
        path: 'page3',
        name: 'page3',
        component: page3,
        children: [{
            path: 'menu3-1',
            name: 'menu3-1',
            component: Menu31,
          },
          {
            path: 'menu3-2',
            name: 'menu3-2',
            component: Menu32,
          }
        ]
      },
      {
        path: 'menu4',
        name: 'menu4',
        component: Menu4

      },
      {
        path: 'menu5',
        name: 'menu5',
        component: Menu5

      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
