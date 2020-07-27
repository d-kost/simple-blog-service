import React, { useState } from 'react';
import '../../sass/PageHeader.sass';
import PropTypes from 'prop-types';
import PageHeaderDetails from './PageHeaderDetails';
import ModalPortal from '../modal/ModalPortal';
import ModalWindow from '../modal/ModalWindow';
import ProfileChangeContainer from '../../containers/modal/ProfileChangeContainer';
import { setCurrentUser, setGuestUser } from '../../redux/actions/index';
import { useHistory, Link } from 'react-router-dom';
import { GUEST_USER } from '../../js_modules/initUsers';
import { isClickOrKeyDown } from '../../js_modules/eventCommonFunctions';

const PageHeader = ({ dispatch, currentUserNickname, currentUserPicture }) => {

  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const isUserGuest = currentUserNickname === GUEST_USER;

  let history = useHistory();

  const openModal = (event) => {
    //isClickOrKeyDown from js_modules
    if (isClickOrKeyDown(event)) {
      closeDetails();
      setShowModal(true);
    }
  }

  const acceptModal = (nickname) => {
    //change current user
    dispatch(setCurrentUser(nickname));
    closeModal();

    const currentUserPagePath = `/${nickname}`;
    history.push(currentUserPagePath);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const toggleShowDetails = (event) => {
    //isClickOrKeyDown from js_modules
    if (isClickOrKeyDown(event)) {
      setShowDetails(!showDetails);
    }
  }

  const closeDetails = () => {
    setShowDetails(false);
  }

  const logOutHandleClick = (event) => {
    //isClickOrKeyDown from js_modules
    if (isClickOrKeyDown(event)) {
      closeDetails();
      dispatch(setGuestUser());
    }
  }

  return (
    <header className='page-header'>
      <Link to='/' className='page-header__title page-header__content'>To Home Page</Link>

      {isUserGuest ?
        <div
          className='page-header__user page-header__content'
          onClick={openModal}
          onKeyDown={openModal}
          tabIndex={0}
          role='button'
          data-testid='login-button'
        >
          Log in
        </div>
        :
        <div
          className='page-header__user'
          tabIndex={0}
          role='button'
          onClick={toggleShowDetails}
          onKeyDown={toggleShowDetails}
          data-testid='menu-button'
        >
          <img
            src={currentUserPicture}
            alt={currentUserNickname}
            className='user-small-picture'
          />
          <p className='page-header__nickname page-header__content'>
            {currentUserNickname}
            <span className='page-header__triangle'></span>
          </p>
        </div>
      }

      {showDetails && !isUserGuest &&
        <PageHeaderDetails
          currentUserNickname={currentUserNickname}
          changeProfileHandleClick={openModal}
          closeDetails={closeDetails}
          logOutHandleClick={logOutHandleClick}
        />
      }

      {showModal &&
        <ModalPortal>
          <ModalWindow
            onCancelClick={closeModal}
          >
            <ProfileChangeContainer
              acceptModal={acceptModal}
            />
          </ModalWindow>
        </ModalPortal>
      }
    </header>
  )
}


PageHeader.propTypes = {
  currentUserNickname: PropTypes.string,
  currentUserPicture: PropTypes.string
}

export default PageHeader;