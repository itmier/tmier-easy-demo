/*
 * @Author: Tmier
 * @Date: 2020-08-06 09:04:55
 * @LastEditTime: 2020-08-06 10:50:44
 * @Description: 
 */
//  默认核心
import Vue from "vue"; //Vue引入
// UI
import ElementUI from 'element-ui';
import {Message} from 'element-ui'
// CSS
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import 'assets/css/reset.css'
// 注册使用
Vue.use(ElementUI);

// 继承使用
Vue.prototype.$message = Message