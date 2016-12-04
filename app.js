const Server = require('./server.js')
const port = (process.env.PORT || 5000)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    index: 'index.html'
  }))

  const path = require('path')
  
  const indexPath = path.join(__dirname, 'public', 'index.html')

  app.get('*', function (_, res) { res.sendFile(indexPath) })

}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
