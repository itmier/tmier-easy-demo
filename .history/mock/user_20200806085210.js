/*
 * @Author: Tmier
 * @Date: 2020-08-05 17:20:39
 * @LastEditTime: 2020-08-06 08:52:10
 * @Description: 
 */
export default [{
  url: '/tmier-easy-demo/user/login',
  type: 'post',
  response: config => {
    console.log(config.body)
    return {
      code: 20000,
      data: {
          msg: '成功'
      }
    }
  }
}]
