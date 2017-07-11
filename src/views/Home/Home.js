import React, { Component } from 'react'
import fantasia from '../../static/images/cakes/fantasia.png'

require('./home.scss')

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="home-container">
        <img className="fantasia" src={fantasia} />
        <div className="description">
          <p>
            We’re a bright and community-oriented bakery serving cakes, pastries, cookies and sandwiches.  You’ll be sure to find something to satisfy your hunger pangs or sweet tooth!
          </p>
          <p>
          Ambrosia Bakery creates the finest pastries and breads daily. Pick up some delicious goodies for your next office meeting, dinner party, holiday celebration or just because you deserve it! 
          </p>
        </div>
      </section> 
    )
  }
}

