import React, { Component } from 'react'
import cake from '../../static/images/Cake.png'

require('./header.scss')

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="cake" src={cake}></img>
        <h1 className="title">Ambrosia Bakery</h1>
        <span itemProp="telephone">
          <a className="phone" href="tel:+14153345305">415-334-5305</a>
        </span>
        <span className="fb-like-button">
          <div className="fb-like" data-href="https://www.facebook.com/ambrosiabakerysf" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="false"></div>
        </span>
      </header>    
    )
  }
}
