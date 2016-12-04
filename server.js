const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()

  	if (process.env.NODE_ENV !== 'production') {
	  const webpack = require('webpack')
	  const webpackDevMiddleware = require('webpack-dev-middleware')
	  const webpackHotMiddleware = require('webpack-hot-middleware')
	  const config = require('./webpack.dev.config.js')
	  const compiler = webpack(config)

	  app.use(webpackDevMiddleware(compiler, {
	    noInfo: true,
	    publicPath: config.output.publicPath
	  }))
	  
	  app.use(webpackHotMiddleware(compiler))
	}

    const indexPath = path.join(__dirname, 'public', 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))

    app.use('/public', publicPath)
    app.get('*', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
