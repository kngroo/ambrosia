import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import App from './components/app'
import Home from './views/Home/Home'
import About from './views/About/About'

require('normalize.css')
require('skeleton-css')

render(<App />, document.getElementById('main'))

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/about' component={About}/>
    </Route>
  </Router>
), document.getElementById('main'))
