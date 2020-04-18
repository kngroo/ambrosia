import React, { Component } from 'react'

require('./about.scss')

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="about-container">
        <div className="description">
          <p>
          Years ago, Keith arrived in California with only the clothes on his back and a determination to achieve something beautiful. Having survived his journey in a packed boat across black ocean waters only to live on a remote island as a refugee, he knew he needed to provide for himself and his siblings. To this end, he worked multiple jobs while keeping a distant dream in mind, learning essential skills from experienced bakers and saving every paycheck he earned.
          </p>
          <p>
          In 1988, everything came together with the birth of Ambrosia Bakery, and Keith worked tirelessly to ensure his customers saw and enjoyed the best tasting experiences he could offer. Since then, he’s attended advanced culinary courses in cities such as Napa and San Francisco, traveled to Paris to learn the best and latest in the industry and experimented in his kitchen to create unique confectionary offerings.
          </p>
          <p>Over 30 years later, he can still be found in the bustling kitchen at Ambrosia and looks proudly on the bakery and family-like staff he’s built. But more importantly, he feels honored to have met the myriad wonderful customers who have brought him light or wisdom along the way, particularly those whom he can now call friends.
          </p>
        </div>
      </section>
    )
  }
}
