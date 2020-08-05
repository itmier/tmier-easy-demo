module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    before: require('./mock/mock-server.js')
  }
}
