import React, { Component } from 'react'
import Lightbox from 'react-images'
// import { scroller } from 'react-scroll'
import cakes from '../../static/images/cakes'
import './Gallery.scss'

const importAll = paths => 
  paths.keys().reduce( (images, image) => ({
    ...images,
    [image.replace('./', '')]: paths(image)
  }), {})

const images = cakes.map((cake, i) => ({ 
  src: require(`../../static/images/cakes/${cake.src}`), 
  caption: cake.name
}))

export default class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      currentImage: 0
    }
  }

  componentDidMount() {
    // scroller.scrollTo('scrollToEl', {
    //   duration: 1000,
    //   delay: 100,
    //   smooth: true
    // })
  }

  close = () => {
    this.setState({
      currentImage: 0,
      isOpen: false
    })
  }

  open = (i, e) => {
    this.setState({
      currentImage: i,
      isOpen: true
    })
  }

  next = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  prev = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  goTo = i => {
    this.setState({
      currentImage: i
    })
  }

  render() {
    const { currentImage, isOpen } = this.state

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
      {
        images.map((image, i) => (
          <span className="gallery-item" key={i}>
            <img src={image.src} onClick={e => this.open(i, e)} />
          </span>
        ))
      }
      </div>
    )
  }
}

