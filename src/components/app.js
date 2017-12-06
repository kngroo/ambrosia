import React, { Component } from 'react'
import { Element, scroller } from 'react-scroll'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'

require('../styles/app.scss')

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));

    scroller.scrollTo('scrollToEl', {
      duration: 1000,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: "scroll-container"
    })
  }

  handleScroll() {
    this.navOffsetTop = document.getElementById('navbar').getBoundingClientRect().top
    this.hasDockedNav = document.body.classList.contains('has-docked-nav')
    if (this.navOffsetTop < 0 && !this.hasDockedNav) {
      document.body.classList.add('has-docked-nav')
    }
    if (this.navOffsetTop >= 0 && this.hasDockedNav) {
      document.body.classList.remove('has-docked-nav')
    }
  }

  render () {
    return (
      <div id="scroll-container">
        <div className="above-fold">
          <Header/>
          <Navbar id="navbar"/>
        </div>
        <Element name="scrollToEl"><Navbar id="navbar-fixed"/></Element>
        <div className="container">{this.props.children}</div>
        <Footer/>
      </div>
    )
  }
}
