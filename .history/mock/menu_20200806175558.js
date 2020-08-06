/*
 * @Author: Tmier
 * @Date: 2020-08-06 17:42:28
 * @LastEditTime: 2020-08-06 17:55:58
 * @Description: 
 */
import Mock from 'mockjs'
const menuList = [{
    index: 'menu1',
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
    url: '/menu/info',
    type: 'post',
    menuList
}]