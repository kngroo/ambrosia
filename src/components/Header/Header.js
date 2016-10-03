import React, { Component } from 'react'

require('./header.scss')

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src="/public/Cake.png"></img>
        <h1 className="title">Ambrosia Bakery</h1>
      </header>    
    )
  }
}
