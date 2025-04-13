module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '',
  chainWebpack: config => {
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
