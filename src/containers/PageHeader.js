import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../sass/PageHeader.sass';
import PropTypes from 'prop-types';
import PageHeaderDetails from '../components/pageHeader/PageHeaderDetails';
import ModalPortal from '../components/modal/ModalPortal';
import ModalWindow from '../components/modal/ModalWindow';
import ProfileChangeContainer from './modal/ProfileChangeContainer';
import { setCurrentUser, setGuestUser } from '../redux/actions/index';
import { useHistory, Link } from 'react-router-dom';
import { GUEST_USER } from '../js_modules/initUsers';
import { isClickOrKeyDown } from '../js_modules/eventCommonFunctions';

const PageHeader = ({ dispatch, currentUserNickname }) => {

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
        >
          Log in
        </div>
        :
        <div
          className='page-header__user page-header__content'
          tabIndex={0}
          role='button'
          onClick={toggleShowDetails}
          onKeyDown={toggleShowDetails}
        >
          {currentUserNickname}
          <span className='page-header__triangle'></span>
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
              onLoginClick={acceptModal}
            />
          </ModalWindow>
        </ModalPortal>
      }
    </header>
  )
}

const mapStateToProps = state => ({
  currentUserNickname: state.currentUserNickname
})

PageHeader.propTypes = {
  currentUserNickname: PropTypes.string
}

export default connect(mapStateToProps)(PageHeader);