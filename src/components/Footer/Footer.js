import React, { Component } from 'react'

require('./footer.scss')

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="mailto:ambrosiabakerysf@gmail.com">Ambrosia Bakery</a>
        <address>
          2605 Ocean Avenue<br />
          San Francisco, CA<br />
          94132
        </address>
      </footer>    
    )
  }
}
