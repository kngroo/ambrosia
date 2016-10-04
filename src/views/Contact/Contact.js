import React, { Component } from 'react'

require('./contact.scss')

export default class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="contact-container">
        <div className="map-container">
          <iframe className="map" width="100%" height="500px" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyASUj0jxU59Q3jOFVRk5-X_KGCrYqGC2TI&q=Ambrosia+Bakery,San+Francisco,CA" allowfullscreen></iframe>
        </div>
        <div className="row">
          <h4 className="columns twelve">Hours</h4>
          <p>Monday - Friday 6am to 6pm</p>
          <p>Saturday - 7am to 6pm</p>
          <p>Sunday - 8am to 2pm</p>
        </div>
      </section>
    )
  }
}
