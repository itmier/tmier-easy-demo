/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:14:21
 * @LastEditTime: 2020-08-05 15:37:13
 * @Description: 封装axios请求
 */
import axios from 'axios'
import QS from 'qs'
import {
  Loading,
  Message
} from "element-ui";
import store from '@/store/index'

// 环境切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = process.env.VUE_APP_BASEURL
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = process.env.VUE_APP_BASEURL
}
//  设置请求超时
axios.defaults.timeout = 10000;
// post请求头设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截
axios.interceptors.request.use(config => {
  const token = 'mockToken'
  // token && (config.headers.Authorization = token) //即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
  return config
}, error => {
  return Promise.error(error)
})
