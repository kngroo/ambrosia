import React from 'react';
import Link from 'next/link';

const Navbar = (props) => (
  <div id="navbar">
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/">
            <a className="navbar-link">Home</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/cakes">
            <a className="navbar-link">Cakes</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/menu">
            <a className="navbar-link">Menu</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/gallery">
            <a className="navbar-link">Gallery</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact">
            <a className="navbar-link">Contact</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/about">
            <a className="navbar-link">Our Story</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      #navbar {
        position: sticky;
        top: 0;
        z-index: 1;
      }

      .navbar {
        display: block;
        position: relative;
        background: #fff;
        width: 100%;
      }

      .navbar .logo img {
        width: 20px;
      }

      .navbar-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        margin: auto 2rem;
      }

      .navbar-item {
        position: relative;
        float: left;
        margin-bottom: 0;
        user-select: none;
      }

      .navbar-item .active {
        color: pink;
      }

      .navbar-item .active::after {
        content: '';
        background-image: url('/images/Cake.png');
      }

      .navbar-link {
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.2rem;
        margin-right: 1.3rem;
        text-decoration: none;
        line-height: 6.5rem;
        color: #222;
      }

      .navbar-link:hover {
        color: pink;
      }

      .has-docked-nav #navbar-fixed {
        visibility: visible;
        bottom: 0;
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        border-top: 1px solid #eee;
      }

      @media (min-width: 550px) {
        #navbar-fixed {
          bottom: unset;
          top: -130px;
          transition-duration: unset;
          transition-timing-function: unset;
        }

        .has-docked-nav #navbar-fixed {
          top: 0;
          bottom: unset;
          border-bottom: 1px solid #eee;
          border-top: unset;
          transition-duration: unset;
          transition-timing-function: unset;
        }
      }
    `}</style>
  </div>
);

export default Navbar;
