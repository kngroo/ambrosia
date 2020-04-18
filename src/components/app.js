import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import '../styles/app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="covid-notice">
          <p className="container">
            ⚠️ Due to the COVID-19 pandemic and shelter-in-place order, we’re
            offering limited hours for take-out orders by phone or walk-in while
            respecting social distancing guidelines. Our bakery is proud to
            continue serving our community, and we deeply appreciate our
            customers’ support to remain open at this time.
          </p>
        </div>

        <div className="app">
          <Header />
          <Navbar id="navbar" />
          <div className="container">{this.props.children}</div>
          <Footer />
        </div>
      </div>
    );
  }
}
