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
          <iframe className="map" width="100%" height="500px" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyASUj0jxU59Q3jOFVRk5-X_KGCrYqGC2TI&q=Ambrosia+Bakery,San+Francisco,CA" allowFullScreen></iframe>
        </div>
        <div>
          <h4>Hours</h4>
          <div className="row">
            <p className="columns four">M-F 6am - 6pm</p>
            <p className="columns four">Sat 7am - 6pm</p>
            <p className="columns four">Sun 8am - 2pm</p>
          </div>
        </div>
        <div>
          <h4>Closed</h4>
          <div className="row">
            <div className="columns four">
              <p>Day after Thanksgiving</p>
              <p>Christmas Day</p>
            </div>
            <div className="columns four">
              <p>New Years Day</p>
              <p>Memorial Day</p>
            </div>
            <div className="columns four">
              <p>Independence Day</p>
              <p>Labor Day</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
