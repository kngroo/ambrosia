import React from 'react';

const Footer = () => (
  <footer className="footer">
    <a href="mailto:ambrosia2605@gmail.com">Ambrosia Bakery</a>
    <address>
      2605 Ocean Avenue
      <br />
      San Francisco, CA
      <br />
      94132
    </address>
    <div itemProp="telephone">
      <a className="phone" href="tel:+14153345305">
        415-334-5305
      </a>
    </div>
    <style jsx>{`
      .footer {
        visibility: hidden;
        position: relative;
        width: 100%;
        margin-top: 5rem;
        margin-bottom: 5rem;
        bottom: 0;
        text-align: center;
      }

      address {
        font-style: normal;
        font-size: 1.2rem;
      }

      a {
        text-decoration: none;
        font-size: 1.2rem;
      }

      @media (min-width: 550px) {
        .footer {
          visibility: visible;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
