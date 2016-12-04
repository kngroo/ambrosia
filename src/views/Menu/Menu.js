import React, { Component } from 'react'

require('./menu.scss')

export default class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="menu-container">
        <div className="submenu">
          <img className="main-img" src="/public/tiramisu.png"></img>
          <h4>Cakes</h4>
          <div className="description">
            <p>Ambrosia Bakery excels at creating unique and delicious desserts. Whether you’re looking for a cake, tart or specialty dessert, you're sure to be delighted with our selection. The style and presentation of these beautiful and flavorful products will vary throughout the year to complement the seasons, using the best possible ingredients.
            </p>
          </div>
          <div className="row">
            <div className="columns four">
              <h5>Chocolate Cakes</h5>
              <ul>
                <li>Ambrosia Chocolate</li>
                <li>Black Forest</li>
                <li>Carrot Cake</li>
                <li>Dream Cake</li>
                <li>Mocha Custard</li>
              </ul>
            </div>
            <div className="columns four">
              <h5>White Cakes</h5>
              <ul>
                <li>Birthday Cake</li>
                <li>Cappuccino Cake</li>
                <li>Diplomat</li>
                <li>Fantasia</li>
                <li>Princess Cake</li>
                <li>Strawberry Shortcake</li>
              </ul>
            </div>
            <div className="columns four">
              <h5>Mousse Cakes</h5>
              <ul>
                <li>Mango Mousse</li>
                <li>Tiramisu</li>
                <li>Tricolor Mousse</li>
                <li>Coconut Fusion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="submenu">
          <img className="main-img" src="/public/croissant.png"></img>
          <h4>Pastries</h4>
          <div className="description">
            <p>All of the pastries and breads at Ambrosia were inspired by traditional recipes and adapted with our bakers’ expertise.</p>
            <p>While we are always experimenting with ways to improve our baking, the basics never change.</p>
            <p>Bread is our passion, and we still form every loaf by hand daily to provide always fresh items for our customers.</p>
          </div>
          <div className="row">
            <div className="columns three">
              <div>
                <h5>Danishes</h5>
                <ul>
                  <li>Apple</li>
                  <li>Apple Puff</li>
                  <li>Apple Turnover</li>
                  <li>Apricot</li>
                  <li>Bear Claw</li>
                  <li>Brioche with Fruit</li>
                  <li>Brioche Plain</li>
                  <li>Butter Horn</li>
                  <li>Cheese</li>
                  <li>Cherry Puff</li>
                  <li>Cinnamon Twist</li>
                  <li>Custard</li>
                  <li>Hot Cross Bun (Seasonal)</li>
                  <li>Raisin</li>
                  <li>Raspberry</li>
                  <li>Pesto Twist</li>
                  <li>Raspberry Twist</li>
                  <li>Sundried Tomato Twist</li>
                  <li>Sourcream Custard Bar</li>
                  <li>Sourcream Fruit Bar</li>
                  <li>Sticky Bun (Pecan Roll)</li>
                  <li>Swedish Cinnamon</li>
                  <li>Scone</li>
                </ul>
              </div>
            </div>
            <div className="columns three">
              <div>
                <h5>Croissants</h5>
                <ul>
                  <li>Almond</li>
                  <li>Butter</li>
                  <li>Cheese</li>
                  <li>Chocolate</li>
                  <li>Ham and Cheese</li>
                  <li>Raspberry</li>
                </ul>
              </div>
              <div>
                <h5>Muffins</h5>
                <ul>
                  <li>Almond Poppyseed</li>
                  <li>Banana Walnut</li>
                  <li>Blueberry</li>
                  <li>Bran</li>
                  <li>Carrot</li>
                  <li>Cranberry</li>
                  <li>Lemon Poppyseed</li>
                  <li>Pumpkin</li>
                  <li>Sourcream</li>
                  <li>Strawberry</li>
                </ul>
              </div>
            </div>
            <div className="columns three">
              <h5>Cookies</h5>
              <ul>
                <li>Biscotti</li>
                <li>Chocolate Biscotti</li>
                <li>Butter</li>
                <li>Chocolate Chip</li>
                <li>Chocolate Dip</li>
                <li>Florentine</li>
                <li>French Tart</li>
                <li>Hamantaschan</li>
                <li>Mexican Wedding</li>
                <li>Oatmeal Raisin</li>
                <li>Palm Leaf</li>
                <li>Raspberry Shortbread</li>
                <li>Sourcream (Rugelach)</li>
                <li>Spiral</li>
                <li>Stripe</li>
              </ul>
            </div>
            <div className="columns three">
              <div>
                <h5>Coffee Cakes</h5>
                <ul>
                  <li>Almond</li>
                  <li>Chocolate Marble</li>
                  <li>Cinnamon Raisin</li>
                  <li>Pound Cake</li>
                  <li>Sourcream</li>
                </ul>
              </div>
              <div>
                <h5>Breads</h5>
                <ul>
                  <li>Baguette</li>
                  <li>Dinner Rolls</li>
                  <li>French Rolls</li>
                  <li>Honey Whole Wheat Loaf</li>
                  <li>White Loaf</li>
                  <li>Wheat Rolls</li>
                </ul>
              </div>
              <div>
                <h5>Other</h5>
                <ul>
                  <li>Bagel Cream Cheese</li>
                  <li>Bagel Egg Cheese Bacon</li>
                  <li>Fruit Yogurt Parfait</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="submenu">
          <img className="main-img" src="/public/tiramisu.png"></img>
          <h4>Deli</h4>
          <div className="description">
            <p>Ambrosia Bakery creates the finest deli sandwiches and salads. We only use the freshest ingredients.</p>
          </div>
          <div className="row">
            <div className="columns four">
              <h5>Sandwiches</h5>
              <ul>
                <li>Turkey</li>
                <li>Ham</li>
                <li>Roast Beef</li>
                <li>Pastrami</li>
                <li>Salami</li>
                <li>Avocado and Cheese</li>
                <li>BLT</li>
                <li>Cheese</li>
                <li>BBQ Chicken</li>
                <li>Club</li>
                <li>Tuna Salad</li>
                <li>Chicken Salad</li>
                <li>Egg Salad</li>
                <li>Crab Salad</li>
                <li>Shrimp Salad</li>
              </ul>
            </div>
            <div className="columns four">
              <h5>Salads</h5>
              <ul>
                <li>Green</li>
                <li>Egg</li>
                <li>Avocado</li>
                <li>Tuna</li>
                <li>Chicken</li>
                <li>BBQ Chicken</li>
                <li>Shrimp</li>
                <li>Crab</li>
                <li>Club</li>
                <li>Caesar</li>
              </ul>
            </div>
            <div className="columns four">
              <h5>Lunch</h5>
              <ul>
                <li>1/2 Sandwich + Soup</li>
                <li>Turkey</li>
                <li>Ham</li>
                <li>Roast Beef</li>
                <li>Pastrami</li>
                <li>Salami</li>
                <li>BLT</li>
                <li>Tuna Salad</li>
                <li>Chicken Salad</li>
                <li>Egg Salad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
