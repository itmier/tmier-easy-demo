/*
 * @Author: Tmier
 * @Date: 2020-08-06 17:42:28
 * @LastEditTime: 2020-08-07 15:56:44
 * @Description: 
 */
import Mock from 'mockjs'
const menuBarList = [{
    index: 'dashboard',
    name: 'dashboard',
    meta: {
      title: '首页',
      icon: 'el-icon-location',
    },
    routerName: 'dashboard'
  },
  {
    index: 'page1',
    name: 'page1',
    meta: {
      icon: 'el-icon-location',
      title: '菜单一'
    },
    children: [{
        index: 'menu1-1',
        name: 'menu1-1',
        meta: {
          icon: 'el-icon-location',
          title: '子菜单一',
        },
        routerName: 'menu1-1'
      },
      {
        index: 'menu1-2',
        name: 'menu1-2',
        meta: {
          icon: 'el-icon-location',
          title: '子菜单二',
        },
        routerName: 'menu1-2'
      }
    ]
  },
  {
    index: 'menu2',
    name: 'menu2',
    meta: {
      icon: 'el-icon-location',
      title: '菜单二',
    },
    children: [{
        index: 'menu2-1',
        name: 'menu2-1',
        meta: {
          icon: 'el-icon-location',
          title: '子菜单一'
        },
        routerName: 'menu2-1'
      },
      {
        index: 'menu2-2',
        name: 'menu2-2',
        meta: {
          icon: 'el-icon-location',
          title: '子菜单二',
        },
        routerName: 'menu2-2'
      }
    ]
  },
  {
    index: 'menu3',
    name: 'menu3',
    meta: {
      icon: 'el-icon-location',
      title: '菜单三'
    },
    children: [{
        index: 'menu3-1',
        name: 'menu3-1',
        meta: {
          icon: 'el-icon-location',
          title: '子菜单一',
        },
        routerName: 'menu3-1'
      },
      {
        index: 'menu3-2',
        name: 'menu3-2',
        meta: {
          icon: 'el-icon-location',
          title: '子菜单二',
        },
        routerName: 'menu3-2'
      }
    ]
  },
  {
    index: 'menu4',
    icon: 'el-icon-location',
    title: '菜单四',
    routerName: 'menu4'
  },
  {
    index: 'menu5',
    icon: 'el-icon-location',
    title: '菜单五',
    routerName: 'menu5'
  }
]
const count = 20
export default [{
  url: '/tmier-easy-demo/menu/info',
  type: 'post',
  response: config => {
    return {
      code: 10000,
      msg: '获取菜单成功',
      menuBarList
    }
  }
}]
