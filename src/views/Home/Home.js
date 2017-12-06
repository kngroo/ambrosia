import React, { Component } from 'react'
import fantasia from '../../static/images/cakes/fantasia.png'
import './home.scss'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="home-container">
        <img className="fantasia" src={fantasia} />
        <div className="description">
          <p>We are a bright and community-oriented bakery located in the Lakeside neighborhood of San Francisco.</p>
          <p>We've been serving our loyal customers since 1988. The aroma of fresh-baked bread has delighted our neighborhood and the many passers-by for almost 30 years. We invite you to step in and enjoy our unique taste.</p>
          <p>We serve French pastries, cookies, cakes for all occasions, deli sandwiches and have a wonderful coffee bar. You’ll be sure to find something to satisfy your hunger pangs or sweet tooth! Seating is available.</p>
          <p>Ambrosia Bakery creates the finest pastries and breads daily. Pick up some delicious goodies for your next office meeting, dinner party, holiday celebration or just because you deserve it!</p>
          <p>We look forward to seeing you!</p>
        </div>
      </section> 
    )
  }
}

