import React, { Component } from 'react'
import { Element, scroller } from 'react-scroll'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'
import '../styles/app.scss'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));

    scroller.scrollTo('scrollToElDesktop', {
      duration: 1500,
      delay: 500,
      smooth: "easeInOutQuint",
      offset: 1
    })

    scroller.scrollTo('scrollToElMobile', {
      duration: 1500,
      delay: 500,
      smooth: "easeInOutQuint"
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
      <div>
        <div className="above-fold">
          <Header/>
          <div className="scroll-to-desktop"><Element name="scrollToElDesktop" /></div>
          <Navbar id="navbar"/>
        </div>
        <div className="scroll-to-mobile"><Element name="scrollToElMobile" /></div>
        <Navbar id="navbar-fixed"/>
        <div className="container">{this.props.children}</div>
        <Footer/>
      </div>
    )
  }
}
