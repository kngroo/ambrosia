import React, { Component } from 'react';
import Cake from 'src/components/cake.js';

const cakes = [
  {
    name: 'Birthday Cake',
    ingredients:
      'White cake, peach & whipped cream filling, whipped cream frosting, topped with fruits',
    type: 'white',
  },
  {
    name: 'Cappuccino Cake',
    ingredients:
      'White cake, chocolate custard filling, cappuccino whipped cream frosting',
    type: 'white',
  },
  {
    name: 'Carrot Cake',
    ingredients:
      'Carrot cake with raisins & walnuts, cream cheese filling & frosting',
    type: 'carrot',
  },
  {
    name: 'Diplomat',
    ingredients:
      'White cake, custard with almond flavor filling & frosting, topped with fruits',
    type: 'white',
  },
  {
    name: 'Fantasia',
    ingredients:
      'White cake, fresh strawberry, raspberry, blueberry, whipped cream filling, topped with white chocolate and mascarpone cheese',
    type: 'white',
  },
  {
    name: 'Princess Cake',
    ingredients:
      'White cake, custard filling, a layer of raspberry jam, a layer of raspberry jam, topped with whipped cream and covered with marzipan',
    type: 'white',
  },
  {
    name: 'Strawberry Shortcake',
    ingredients:
      'White cake, fresh strawberries & whipped cream filling, whipped cream frosting',
    type: 'white',
  },
  {
    name: 'Ambrosia Chocolate',
    ingredients: 'Dark chocolate cake, chocolate fudge filling & frosting',
    type: 'chocolate',
  },
  {
    name: 'Black Forest',
    ingredients:
      'Chocolate cake, cherry & whipped cream filling, whipped cream frosting',
    type: 'chocolate',
  },
  {
    name: 'Dream Cake',
    ingredients:
      'Semi-sweet chocolate cake, whipped cream filling and frosting, topped with bittersweet chocolate sprinkles',
    type: 'chocolate',
  },
  {
    name: 'Garnish Cake',
    ingredients:
      'Chocolate cake, garnish cream filling, chocolate ganache frosting',
    type: 'chocolate',
  },
  {
    name: 'Mocha Custard',
    ingredients:
      'Chocolate cake, mocha custard filling, whipped cream frosting',
    type: 'chocolate',
  },
  {
    name: 'Coconut Fusion',
    ingredients:
      'White cake coconut milk and coconut mousse with tapioca, topped with coconut flakes',
    type: 'mousse',
  },
  {
    name: 'Mango Mousse',
    ingredients:
      'Mango mousse on top of a thin layer of white cake, topped with fresh fruit decor',
    type: 'mousse',
  },
  {
    name: 'Tiramisu',
    ingredients:
      'Mascarpone cheese on top of espresso-filled lady fingers, wrapped in dark chocolate',
    type: 'mousse',
  },
  {
    name: 'Tricolor Mousse',
    ingredients:
      'Layers of dark, milk and white chocolate mousse on top of a thin layer of dark chocolate cake',
    type: 'mousse',
  },
  {
    name: 'Fruit Tart',
    ingredients:
      'Pie crust filled with custard, topped with an abundance of fruits',
    type: 'mousse',
  },
];

export default class Cakes extends Component {
  render() {
    // const cakesByType = cakes.reduce((prev, cake, index) => {
    //   prev[cake.type] =
    //     typeof prev[cake.type] === 'undefined'
    //       ? [cake]
    //       : prev[cake.type].concat([cake]);
    //   return prev;
    // }, {});
    const content = cakes.map((cake, index) => <Cake key={index} {...cake} />);
    return (
      <section className="cakes-container">
        <h2>Cakes</h2>
        <p>
          Our cakes can be baked in a variety of sizes. Round cakes come in 8,
          9, and 10 inch diameters. Rectangular cakes come in qurter, half, and
          full sizes.
        </p>
        <div>{content}</div>
        <style jsx>{`
          .cakes-container {
            margin-top: 2rem;
          }
        `}</style>
      </section>
    );
  }
}
