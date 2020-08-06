/*
 * @Author: Tmier
 * @Date: 2020-08-06 17:58:00
 * @LastEditTime: 2020-08-06 17:58:41
 * @Description: 
 */
import request from  '@/utils/request'

export function getMenuInfo(data) {
    return request({
        url: '/tmier-easy-demo/menu/info',
        method: 'post',
        data
    })
}