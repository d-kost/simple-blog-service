import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isClickOrKeyDown } from '../../js_modules/eventCommonFunctions';

const PageHeaderDetails = (
  { currentUserNickname,
    changeProfileHandleClick,
    closeDetails,
    logOutHandleClick }
) => {

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

  let history = useHistory();

  const goToCurrentUserPage = (event) => {
    //isClickOrKeyDown from js_modules
    if (isClickOrKeyDown(event)) {
      closeDetails();
      history.push(`/${currentUserNickname}`);
    }
  };

  const goToEditCurrentUser = (event) => {
    if (isClickOrKeyDown(event)) {
      closeDetails();
      history.push(`/${currentUserNickname}/editProfile`);
    }
  };

  return (
    <div className='header-details' ref={detailsRef} data-testid='header-details'>
      <ul className='header-details__list'>

        <li
          className='header-details__item'
          onClick={goToCurrentUserPage}
          onKeyDown={goToCurrentUserPage}
          tabIndex={0}
        >
          {/* <Link className='header-details__link'
            to={myProfileLink}
            onClick={closeDetails}
          > */}
            my profile
          {/* </Link> */}
        </li>

        <li
          className='header-details__item'
          onClick={goToEditCurrentUser}
          onKeyDown={goToEditCurrentUser}
          tabIndex={0}
        >
          {/* <Link className='header-details__link'
            to={editProfileLink}
            onClick={closeDetails}
          > */}
            edit profile
          {/* </Link> */}
        </li>

        <li
          className='header-details__item'
          onClick={changeProfileHandleClick}
          onKeyDown={changeProfileHandleClick}
          tabIndex={0}
        >
          change account
        </li>

        <li
          className='header-details__item'
          onClick={logOutHandleClick}
          onKeyDown={logOutHandleClick}
          tabIndex={0}
        >
          log out
        </li>

      </ul>
    </div>

  )
}

PageHeaderDetails.propTypes = {
  currentUserNickname: PropTypes.string,
  changeProfileHandleClick: PropTypes.func,
  closeDetails: PropTypes.func,
  logOutHandleClick: PropTypes.func
}

export default PageHeaderDetails;