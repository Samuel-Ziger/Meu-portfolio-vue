const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'));

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)$/i)
      .type('asset/resource')
      .set('generator', {
        filename: 'img/[name].[hash:8][ext]'
      });

    config.plugin('html')
      .tap(args => {
        args[0].canonical = 'https://github.com/Samuel-Ziger'
        args[0].title = 'Meu site Internet pessoal - Samuel Ziger'
        args[0].description = 'Samuel Ziger - Desenvolvedor Frontend'
        args[0].mode = process.env.NODE_ENV
        return args;
      })
  },
}
