import request from  '@/utils/request'

export function getMenuInfo(data) {
    return request({
        url: '/tmier-easy-demo/menu/info',
        method: 'post',
        data
    })
}