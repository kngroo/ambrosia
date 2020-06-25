import React from 'react';

const Cake = ({ name, ingredients }) => (
  <div className="cake-container">
    <h3 className="cake-name">{name}</h3>
    <p>{ingredients}</p>
    <style jsx>{`
      .cake-container {
        width: 100%;
      }
      .cake-name {
        font-size: 1.8rem;
      }
    `}</style>
  </div>
);

export default Cake;
