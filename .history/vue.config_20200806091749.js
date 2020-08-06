/*
 * @Author: Tmier
 * @Date: 2020-08-05 15:00:55
 * @LastEditTime: 2020-08-06 09:17:49
 * @Description: 
 */
const path = require('path') // 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    before: require('./mock/mock-server.js')
  },
  chainWebpack: config => { // set第一个参数：设置的别名，第二个参数：设置的路径
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', './src/views')
      .set('assets', resolve('./src/assets'))
  }
}
