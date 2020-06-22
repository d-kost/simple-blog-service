import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PageHeaderDetails = ({ changeProfileHandleClick, closeDetails }) => {

  const detailsRef = useRef(null);

  useEffect(() => {
    const documentHandleClick = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        closeDetails();
      }
    }

    document.addEventListener('click', documentHandleClick);
    return () => {
      document.removeEventListener('click', documentHandleClick);
    }
  }, [closeDetails, detailsRef])

  return (
    <div className='header-details' ref={detailsRef}>
      <ul className='header-details__list'>

        <li className='header-details__item'>
          <Link className='header-details__link' to='/'>my profile</Link>
        </li>

        <li className='header-details__item'>
          <Link className='header-details__link' to='/'>edit profile</Link>
        </li>

        <li
          className='header-details__item'
          onClick={changeProfileHandleClick}
        >
          change profile
        </li>
        
      </ul>
    </div>

  )
}

PageHeaderDetails.propTypes = {
  changeProfileHandleClick: PropTypes.func,
  closeDetails: PropTypes.func
}

export default PageHeaderDetails;