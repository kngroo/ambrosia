import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
// import cake from '../../static/images/Cake.png'
import './navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <nav className="navbar">
          {/* <span className="logo"><img src={cake} /></span> */}
          <ul className="navbar-list">
            <li className="navbar-item">
              <IndexLink className="navbar-link" to="/" activeClassName="active">Home</IndexLink>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/cakes" activeClassName="active">Cakes</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/menu" activeClassName="active">Menu</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/gallery" activeClassName="active">Gallery</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/contact" activeClassName="active">Contact</Link>
            </li>
            {/* <li className="navbar-item">
              <Link className="navbar-link" to="/about" activeClassName="active">About</Link>
            </li> */}
          </ul>
        </nav>
      </div>    
    )
  }
}
