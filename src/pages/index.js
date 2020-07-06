import React from 'react';

const Home = () => (
  <section className="home-container">
    <img src={require("public/images/cakes/fantasia.png?webp")} />
    <div className="description">
      <p>
        Ambrosia was established in 1988 to provide a bright and welcoming
        gathering place serving fine baked goods to our local community in the
        Lakeside neighborhood of San Francisco.
      </p>
      <p>
        For more than 30 years, the aroma of fresh-baked breads and pastries has
        delighted our neighborhood, loyal customers and passersby every day. We
        offer French pastries, cookies, cakes, deli sandwiches and a
        full-service coffee bar.
      </p>
      <p>
        We bake with the freshest ingredients and no preservatives, so you can
        feel confident picking up some treats for your next meeting, dinner
        party, holiday celebration or just because.
      </p>
      <p>
        Seating is available inside -- we invite you to come in and enjoy our
        unique taste and warm atmosphere.
      </p>
      <p>We hope to see you soon!</p>
    </div>
    <style jsx>
      {`
        .home-container {
          margin-top: 2rem;
          text-align: center;
        }

        .description {
          margin: 0 auto;
          position: relative;
          width: 100%;
          text-align: justify;
        }

        .home-image {
          width: 100%;
        }

        img {
          width: 100%;
          border-radius: 2rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 550px) {
          img {
            margin: 0 auto 2rem;
            width: 80%;
          }

          .description {
            width: 80%;
          }

          .home-image {
            width: 300px;
          }
        }
      `}
    </style>
  </section>
);

export default Home;
