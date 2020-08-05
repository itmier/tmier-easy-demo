/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:14:21
 * @LastEditTime: 2020-08-05 15:54:58
 * @Description: 封装axios请求
 */
import axios from 'axios'
import store from '@/store/index'
import router from '@/router'
import QS from 'qs'
import {
  Loading,
  Message
} from "element-ui";


// 环境切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = process.env.VUE_APP_BASEURL
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = process.env.VUE_APP_BASEURL
}

// 跳转登录页面
//  携带当前页面路由,以期在登录页面完成登录后返回当前页面

const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}
