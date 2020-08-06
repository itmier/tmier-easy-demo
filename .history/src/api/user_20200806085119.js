/*
 * @Author: Tmier
 * @Date: 2020-08-05 16:20:24
 * @LastEditTime: 2020-08-06 08:51:19
 * @Description: 
 */
import request from  '@/utils/request'

export function login(data) {
    return request({
        url: '/tmier-easy-demo/user/login',
        method: 'post',
        data
    })
}
