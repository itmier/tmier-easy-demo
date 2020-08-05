/*
 * @Author: Tmier
 * @Date: 2020-08-05 17:20:39
 * @LastEditTime: 2020-08-05 17:43:54
 * @Description: 
 */
export default [{
  url: '/vue-element-admin/user/login',
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data: {
          msg: '成功'
      }
    }
  }
}]
