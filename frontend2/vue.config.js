const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    'home': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'SpaceY · Főoldal',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about': {
      entry: './src/pages/About/main.js',
      template: 'public/index.html',
      title: 'SpaceY · Rólunk',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}