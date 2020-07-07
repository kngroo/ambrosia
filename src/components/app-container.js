import React from 'react';
import Footer from './footer';
import Header from './header';
import Navbar from './navbar';

const AppContainer = ({ children }) => (
  <div>
    <Header />
    <Navbar />
    <div className="container">{children}</div>
    <Footer />
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default AppContainer;
