/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:14:21
 * @LastEditTime: 2020-08-05 15:31:59
 * @Description: 封装axios请求
 */
import axios from 'axios'
import QS from 'qs'
import { Loading, Message } from "element-ui";

// 环境切换
if(process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = process.env.VUE_APP_BASEURL
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = process.env.VUE_APP_BASEURL
}
//  设置请求超时
axios.defaults.timeout = 10000;
// post请求头设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截
