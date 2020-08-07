/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:00:55
 * @LastEditTime: 2020-08-07 16:06:13
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
        component: Dashboard,
        meta: {
          title: 'Dashboard'
        }

      },
      {
        path: 'page1',
        name: 'page1',
        component: Page1,
        children: [{
            path: 'menu1-1',
            name: 'menu1-1',
            component: Menu11,
            meta: {
              title: 'Menu11'
            }
          },
          {
            path: 'menu1-2',
            name: 'menu1-2',
            component: Menu12,
            meta: {
              title: 'Menu12'
            }
          }
        ]
      },
      {
        path: 'page2',
        name: 'page2',
        component: Page2,
        children: [{
            path: 'menu2-1',
            name: 'menu2-1',
            component: Menu21,
            meta: {
              title: 'Menu21'
            }
          },
          {
            path: 'menu2-2',
            name: 'menu2-2',
            component: Menu22,
            meta: {
              title: 'Menu22'
            }
          }
        ]
      },
      {
        path: 'page3',
        name: 'page3',
        component: Page3,
        children: [{
            path: 'menu3-1',
            name: 'menu3-1',
            component: Menu31,
            meta: {
              title: 'Menu31'
            }
          },
          {
            path: 'menu3-2',
            name: 'menu3-2',
            component: Menu32,
            meta: {
              title: 'Menu32'
            }
          }
        ]
      },
      {
        path: 'menu4',
        name: 'menu4',
        component: Menu4,
        meta: {
          title: 'Menu4'
        }

      },
      {
        path: 'menu5',
        name: 'menu5',
        component: Menu5,
        meta: {
          title: 'Menu5'
        }

      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
