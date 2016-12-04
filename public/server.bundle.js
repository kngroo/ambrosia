/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var path = __webpack_require__(1);
	var express = __webpack_require__(2);

	module.exports = {
			app: function app() {
					var app = express();

					if (process.env.NODE_ENV !== 'production') {
							var webpack = __webpack_require__(3);
							var webpackDevMiddleware = __webpack_require__(4);
							var webpackHotMiddleware = __webpack_require__(5);
							var config = __webpack_require__(6);
							var compiler = webpack(config);

							app.use(webpackDevMiddleware(compiler, {
									noInfo: true,
									publicPath: config.output.publicPath
							}));

							app.use(webpackHotMiddleware(compiler));
					}

					var indexPath = path.join(__dirname, 'public', 'index.html');
					var publicPath = express.static(path.join(__dirname, 'public'));

					app.use('/public', publicPath);
					app.get('*', function (_, res) {
							res.sendFile(indexPath);
					});

					return app;
			}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var path = __webpack_require__(1);
	var webpack = __webpack_require__(3);

	module.exports = {
	  devtool: 'eval',

	  entry: ['webpack-hot-middleware/client', './src/index'],

	  output: {
	    path: path.join(__dirname, 'public'),
	    filename: 'bundle.js',
	    publicPath: '/public/'
	  },

	  plugins: [new webpack.optimize.OccurenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()],

	  module: {
	    loaders: [{ test: /\.js?$/,
	      loader: 'babel',
	      include: path.join(__dirname, 'src')
	    }, { test: /\.scss?$/,
	      loader: 'style!css!sass' },
	    // include: path.join(__dirname, 'src', 'styles') },
	    { test: /\.css?$/,
	      loader: 'style!css' }, { test: /\.png$/,
	      loader: 'file' }, { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
	      loader: 'file' }]
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }
/******/ ]);