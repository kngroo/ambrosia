import React, { Component } from 'react'
import cake from '../../static/images/Cake.png'

require('./header.scss')

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src={cake} />
          <h1 className="title">Ambrosia Bakery</h1>
        </div>
        <div className="text">
          <span itemProp="telephone">
            <a className="phone" href="tel:+14153345305">415-334-5305</a>
          </span>
          <address className="address">
            2605 Ocean Avenue<br />
            San Francisco, CA<br />
            94132
          </address>
        </div>
        <span className="fb-like-button">
          <div className="fb-like" data-href="https://www.facebook.com/ambrosiabakerysf" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="false"></div>
        </span>
      </header>    
    )
  }
}
