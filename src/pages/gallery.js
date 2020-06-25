import React, { Component } from 'react';
import Lightbox from 'react-images';

const cakes = [
  {
    src: 'ambrosiachocolate.png',
    name: 'Ambrosia Chocolate Cake',
  },
  {
    src: 'diplomat.png',
    name: 'Diplomat Cake',
  },
  {
    src: 'fantasia.png',
    name: 'Fantasia Cake',
  },
  {
    src: 'fantasia2.png',
    name: 'Fantasia Cake',
  },
  {
    src: 'fruittart.png',
    name: 'Fruit Tart',
  },
  {
    src: 'IMG_0469.png',
    name: 'Raspberry Mousse & Tricolour Mousse',
  },
  {
    src: 'IMG_0481.png',
    name: 'Tiramisu & Tricolour Mousse',
  },
  {
    src: 'mango.png',
    name: 'Mango Mousse',
  },
  {
    src: 'mint.png',
    name: 'Princess Cake',
  },
  {
    src: 'strawberryshort.png',
    name: 'Strawberry Shortcake',
  },
  {
    src: 'strawberryshort2.png',
    name: 'Strawberry Shortcake',
  },
  {
    src: 'tiramisu.png',
    name: 'Tiramisu',
  },
  {
    src: 'mochacustard.png',
    name: 'Mocha Custard',
  },
  {
    src: 'yulelog.png',
    name: 'Yule Log',
  },
  {
    src: 'dreamcake.png',
    name: 'Dream Cake',
  },
  {
    src: 'santabeltprincess.png',
    name: 'Santa Belt Princess Cake',
  },
  {
    src: 'coconutfusion.png',
    name: 'Coconut Fusion',
  },
];

const images = cakes.map((cake, i) => ({
  src: `/images/cakes/${cake.src}`,
  caption: cake.name,
}));

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      currentImage: null,
    };
  }

  close = () => {
    this.setState({
      currentImage: 0,
      isOpen: false,
    });
  };

  open = (i, e) => {
    this.setState({
      currentImage: i,
      isOpen: true,
    });
  };

  next = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };

  prev = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };

  goTo = (i) => {
    this.setState({
      currentImage: i,
    });
  };

  render() {
    const { currentImage, isOpen } = this.state;

    return (
      <div className="gallery-container">
        <Lightbox
          currentImage={currentImage}
          isOpen={isOpen}
          images={images}
          onClose={this.close}
          onClickNext={this.next}
          onClickPrev={this.prev}
          onClickThumbnail={this.goTo}
          showThumbnails={true}
        />
        {images.map((image, i) => (
          <span className="gallery-item" key={i}>
            <img src={image.src} onClick={(e) => this.open(i, e)} />
          </span>
        ))}
        <style jsx>{`
          .gallery-container {
            margin-top: 2rem;
            width: 100%;
            // columns: 300px;
            columns: 1;
            column-gap: 1rem;
          }

          .gallery-container .gallery-item {
            display: block;
            cursor: pointer;
            user-select: none;
            margin-bottom: 2rem;
          }

          .gallery-container .gallery-item img {
            border-radius: 6px;
            display: block;
            width: 100%;
            height: auto;
            max-width: 100%;
          }

          /* Larger than mobile */
          @media (min-width: 400px) {
          }

          /* Larger than phablet */
          @media (min-width: 550px) {
            .gallery-container {
              columns: 2;
            }
            .gallery-container .gallery-item {
              margin-bottom: 1rem;
            }
          }

          /* Larger than tablet */
          @media (min-width: 750px) {
          }

          /* Larger than desktop */
          @media (min-width: 1000px) {
            .gallery-container {
              columns: 3;
            }
          }
        `}</style>
      </div>
    );
  }
}
