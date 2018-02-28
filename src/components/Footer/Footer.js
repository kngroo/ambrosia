import React, { Component } from 'react'

require('./footer.scss')

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="mailto:ambrosia2605@gmail.com">Ambrosia Bakery</a>
        <address>
          2605 Ocean Avenue<br />
          San Francisco, CA<br />
          94132
        </address>
        <div itemProp="telephone">
          <a className="phone" href="tel:+14153345305">415-334-5305</a>
        </div>
      </footer>    
    )
  }
}
