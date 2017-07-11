import React, { Component } from 'react'
import './cake.scss'

export default class Cake extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, ingredients } = this.props
    return (
      <div className="cake-container">
        <h3 className="cake-name">{name}</h3>
        <p>{ingredients}</p>
      </div>
    )
  }
}
