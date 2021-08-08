const { name } = require('./package.json')

module.exports = {
  publicPath: './',
  transpileDependencies: ['common'],
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
    config.module
      .rule('fonts')
      .test(/.(ttf|otf|eot|woff|woff2)$/)
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        options = {
          // limit: 10000,
          name: '/static/fonts/[name].[ext]',
        }
        return options
      })
      .end()
  },
  css: {
    extract: false,
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },

  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        // target: 'http://47.106.237.64/api/',
        target: 'http://localhost:3001/api/',

        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
