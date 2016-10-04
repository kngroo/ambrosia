import React, { Component } from 'react'

require('./about.scss')

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="about-container">
        <div className="row">
          <p>
          We are a local bakery located in the Lakeside neighborhood of San Francisco. We've been serving our loyal customers since 1988. The aroma of fresh-baked bread has delighted our neighborhood and the many passers-by for almost 25 years. We invite you to step in and enjoy our unique taste. We serve French pastries, cakes for all occasions, deli sandwiches and have a wonderful coffee bar. Seating is available. We look forward to seeing you!
          </p>
        </div>
      </section>
    )
  }
}
