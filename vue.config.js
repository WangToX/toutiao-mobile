// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // transpileDependencies: true,

  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        pathRewrite: {
          '^/api' : ''
        }
      }
    }
  }
}
