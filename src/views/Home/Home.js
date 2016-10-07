import React, { Component } from 'react'

require('./home.scss')

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="home-container">
        <img className="fantasia" src="/public/fantasia.jpg"></img>
        {/*<img className="tiramisu" src="/public/tiramisu.jpg"></img>
        <img className="tiramisu" src="/public/croissant.jpg"></img>*/}
        <div className="row">
          <p>
          We are a local bakery located in the Lakeside neighborhood of San Francisco. We've been serving our loyal customers since 1988. The aroma of fresh-baked bread has delighted our neighborhood and the many passers-by for almost 25 years. We invite you to step in and enjoy our unique taste. We serve French pastries, cakes for all occasions, deli sandwiches and have a wonderful coffee bar. Seating is available. We look forward to seeing you!
          </p>
        </div>
        <p>
        Ambrosia Bakery creates the finest pastries and breads daily. Pick up some delicious goodies for your next office meeting, dinner party, holiday celebration or just because you deserve it! 
        </p>
        <p>
        Ambrosia Bakery excels at creating unique and delicious desserts. Whether you are looking for a cake, tart or specialty dessert you're sure to be delighted with our selection. The style and presentation of these beautiful and flavorful products will vary throughout the year to complement the seasons and the best possible ingredients.
        </p>
      </section> 
    )
  }
}

