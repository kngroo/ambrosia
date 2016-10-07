import React, { Component } from 'react'

require('./header.scss')

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="cake" src="/public/Cake.png"></img>
        <h1 className="title">Ambrosia Bakery</h1>
        <span itemProp="telephone">
          <a className="phone" href="tel:+14153345305">415-334-5305</a>
        </span>
      </header>    
    )
  }
}
