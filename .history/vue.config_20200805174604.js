/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:00:55
 * @LastEditTime: 2020-08-05 17:46:04
 * @Description: 
 */
module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    before: require('./mock/mock-server.js')
  }
}
