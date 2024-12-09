const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/post': {
        target: 'https://safebooru.org',
        pathRewrite: { '^/post': 'index.php?page=dapi&s=post&q=index' },
        changeOrigin: true,
        logLevel: 'debug', // For detailed logs
      },
    },
  },
})
