/*
 * @Author: Tmier
 * @Date: 2020-08-06 17:42:28
 * @LastEditTime: 2020-08-07 14:45:22
 * @Description: 
 */
import Mock from 'mockjs'
const menuBarList = [
  {
    index: 'dashboard',
    icon: 'el-icon-location',
    title: '首页',
  },
  {
    index: 'page1',
    icon: 'el-icon-location',
    title: '菜单一',
    children: [{
        index: 'menu1-1',
        icon: 'el-icon-location',
        title: '子菜单一',
      },
      {
        index: 'menu1-2',
        icon: 'el-icon-location',
        title: '子菜单二',
      }
    ]
  },
  {
    index: 'menu2',
    icon: 'el-icon-location',
    title: '菜单二',
    children: [{
        index: 'menu2-1',
        icon: 'el-icon-location',
        title: '子菜单一',
      },
      {
        index: 'menu2-2',
        icon: 'el-icon-location',
        title: '子菜单二',
      }
    ]
  },
  {
    index: 'menu3',
    icon: 'el-icon-location',
    title: '菜单三',
    children: [{
        index: 'menu3-1',
        icon: 'el-icon-location',
        title: '子菜单一',
      },
      {
        index: 'menu3-2',
        icon: 'el-icon-location',
        title: '子菜单二',
      }
    ]
  },
  {
    index: 'menu4',
    icon: 'el-icon-location',
    title: '菜单四',
  },
  {
    index: 'menu5',
    icon: 'el-icon-location',
    title: '菜单五',
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