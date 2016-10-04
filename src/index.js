import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import App from './components/app'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Home from './views/Home/Home'
import Menu from './views/Menu/Menu'

require('normalize.css')
require('skeleton-css')

render(<App />, document.getElementById('main'))

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/menu' components={Menu}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/about' component={About}/>
    </Route>
  </Router>
), document.getElementById('main'))
