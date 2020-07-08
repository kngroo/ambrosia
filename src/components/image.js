import React from 'react';

const Image = ({src, alt}) => (
  <picture>
    <source srcSet={require(`public/images/${src}?webp`)} type="image/webp" />
    <img src={require(`public/images/${src}`)} alt={alt} />
  </picture>
);

export default Image;
