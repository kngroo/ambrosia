import React, { Component } from 'react'

require('./home.scss')

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="home-container">
        <img className="fantasia" src="/public/fantasia.png"></img>
        {/*<img className="tiramisu" src="/public/tiramisu.png"></img>
        <img className="tiramisu" src="/public/croissant.png"></img>*/}
        <div className="description">
          <p>
          We are a local bakery located in the Lakeside neighborhood of San Francisco. We've been serving our loyal customers since 1988. The aroma of fresh-baked bread has delighted our neighborhood and the many passers-by for almost 30 years. We invite you to step in and enjoy our unique taste. We serve French pastries, cakes for all occasions, deli sandwiches and have a wonderful coffee bar. Seating is available. We look forward to seeing you!
          </p>
          <p>
          Ambrosia Bakery creates the finest pastries and breads daily. Pick up some delicious goodies for your next office meeting, dinner party, holiday celebration or just because you deserve it! 
          </p>
        </div>
      </section> 
    )
  }
}

