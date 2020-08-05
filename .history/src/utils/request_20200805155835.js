/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:14:21
 * @LastEditTime: 2020-08-05 15:58:35
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
/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {    
    Message({        
        message: msg,    
        type: 'error',    
        duration: 1000
    });
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
/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
      // 403 token过期
      // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      localStorage.removeItem('token');
      store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
      // 404请求不存在
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      console.log(other);
  }
}
