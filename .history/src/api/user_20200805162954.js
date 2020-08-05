/*
 * @Author: Tmier
 * @Date: 2020-08-05 16:20:24
 * @LastEditTime: 2020-08-05 16:24:41
 * @Description: 
 */
import request from  '@/utils/request'

export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}
