import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';
import App from './components/app';
import About from './views/About/About';
import Cakes from './views/Cakes/Cakes';
import Contact from './views/Contact/Contact';
import Gallery from './views/Gallery';
import Home from './views/Home/Home';
import Menu from './views/Menu/Menu';

require('normalize.css');
require('skeleton-css-webpack');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/menu" components={Menu} />
      <Route path="/cakes" components={Cakes} />
      <Route path="/gallery" components={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/our-story" component={About} />
    </Route>
  </Router>,
  document.getElementById('main')
);
