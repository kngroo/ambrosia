import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import './navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <nav className="navbar">
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
            <li className="navbar-item">
              <Link className="navbar-link" to="/our-story" activeClassName="active">Our Story</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
