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
