import React, { Component } from 'react'
import Carousel from 'react-swipe'
import fantasia from '../../static/images/cakes/fantasia.png'
import './home.scss'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const carouselOpts = {
      className: 'carousel',
      swipeOptions: {
        auto: 3000,
        continous: true,
        speed: 1500
      }
    }

    return (
      <section className="home-container">
          <Carousel {...carouselOpts}>
            <img className="fantasia" src={fantasia} />
          </Carousel>
        <div className="description">
          <h4>About us</h4>
          <p>Ambrosia was established in 1988 to provide a bright and welcoming gathering place serving fine baked goods to our local community in the Lakeside neighborhood of San Francisco.</p>
          <p>For more than 30 years, the aroma of fresh-baked breads and pastries has delighted our neighborhood, loyal customers and passersby every day. We offer French pastries, cookies, cakes, deli sandwiches and a full-service coffee bar.</p>
          <p>We bake with the freshest ingredients and no preservatives, so you can feel confident picking up some treats for your next meeting, dinner party, holiday celebration or just because.</p>
          <p>Seating is available inside -- we invite you to come in and enjoy our unique taste and warm atmosphere.</p>
          <p>We hope to see you soon!</p>
        </div>
      </section>
    )
  }
}

