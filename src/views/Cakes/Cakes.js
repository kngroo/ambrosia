import React, { Component } from 'react'
import Cake from '../../components/Cake/Cake.js'
import assets from './assets.js'
import './cakes.scss'

export default class Cakes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cakes } = assets
    const cakesByType = cakes.reduce((prev, cake, index) => {
      prev[cake.type] = typeof prev[cake.type] === 'undefined' ? 
        [cake] : prev[cake.type].concat([cake])
      return prev
    }, {})
    const content = cakes.map((cake, index) => (<Cake key={index} {...cake} />))
    return (
      <section className="cakes-container">
        <h2>Cakes</h2>
        <p>
          Our cakes can be baked in a variety of sizes.
          Round cakes come in 8, 9, and 10 inch diameters.
          Rectangular cakes come in qurter, half, and full sizes.
        </p>
        <div>
          {content}
        </div>
      </section>
    )
  }
}
