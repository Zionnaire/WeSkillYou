import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyImage = ({ src, alt }) => {
  return (
    <LazyLoad height={200} once>
      <img src={src} alt={alt} />
    </LazyLoad>
  );
};

export default LazyImage;