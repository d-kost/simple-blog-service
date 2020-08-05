import React from 'react';
import PropTypes from 'prop-types';

const ImagePolyfill = ({ src, alt, imgClass }) => {
  //polyfill for Internet Explorer to support "object-fit: cover"

  const isIE = false || !!document.documentMode;

  if (isIE) {
    return (
      <div className={`${imgClass} ie-img-wrapper`}>
        <img
          src={src}
          alt={alt}
          className='ie-object-fit-cover'
        />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={imgClass}
    />
  )

}

ImagePolyfill.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  imgClass: PropTypes.string
}

export default ImagePolyfill;