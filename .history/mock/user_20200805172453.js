/*
 * @Author: Tmier
 * @Date: 2020-08-05 17:20:39
 * @LastEditTime: 2020-08-05 17:24:52
 * @Description: 
 */
export default [{
  url: '/user/login',
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
