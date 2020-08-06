/*
 * @Author: Tmier
 * @Date: 2020-08-05 17:20:39
 * @LastEditTime: 2020-08-06 10:47:48
 * @Description: 
 */
export default [{
  url: '/tmier-easy-demo/user/login',
  type: 'post',
  response: config => {
    const {
      username,
      password
    } = config.body
    if (username === 'admin' && password === 'admin') {
      return {
        code: 10000,
        data: {
          msg: '登录成功'
        }
      }
    } else {
      return {
        code: 50008,
        message: '用户名或者密码错误'
      }
    }

  }
}]
