import React from 'react';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="/images/Cake.png" alt="logo" />
      <h1 className="title">Ambrosia Bakery</h1>
    </div>
    <div className="text">
      <span className="phone" itemProp="telephone">
        <a href="tel:+14153345305">415-334-5305</a>
      </span>
      <address className="address">
        2605 Ocean Avenue
        <br />
        San Francisco, CA
        <br />
        94132
      </address>
    </div>
    <span className="fb-like-button">
      <div
        className="fb-like"
        data-href="https://www.facebook.com/ambrosiabakerysf"
        data-layout="button"
        data-action="like"
        data-size="large"
        data-show-faces="true"
        data-share="false"
      ></div>
    </span>
    <style jsx>{`
      .header {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: center;
        margin: 2rem auto;
        position: relative;
        text-align: center;
        width: 100%;
      }
      .logo {
        margin: 1rem;
      }

      .logo > img {
        user-select: none;
        width: 50%;
        max-width: 150px;
      }

      .title {
        margin: 0;
      }

      .text > * {
        text-align: center;
      }

      .phone,
      .address {
        text-decoration: none;
        font-style: normal;
      }

      .phone {
        display: block;
        margin-bottom: 1rem;
      }

      .phone > * {
        text-decoration: none;
      }

      .address {
        font-size: 1.2rem;
      }

      .fb-like-button {
        display: block;
        margin: 1rem;
      }
    `}</style>
  </header>
);

export default Header;
