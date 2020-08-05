/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:14:21
 * @LastEditTime: 2020-08-05 15:28:48
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