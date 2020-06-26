import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../sass/PageHeader.sass';
import PropTypes from 'prop-types';
import PageHeaderDetails from '../components/PageHeaderDetails';
import ModalPortal from '../components/modal/ModalPortal';
import ModalWindow from '../components/modal/ModalWindow';
import ProfileChangeContainer from './modal/ProfileChangeContainer';
import { setCurrentUser } from '../redux/actions/index';
import { useHistory } from 'react-router-dom';

const PageHeader = ({ dispatch, currentUser }) => {

  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  let history = useHistory();

  const openModal = () => {
    closeDetails();
    setShowModal(true);
  }

  const acceptModal = (nickname) => {
    dispatch(setCurrentUser(nickname));
    closeModal();

    const currentUserPagePath = `/${nickname}`;
    history.push(currentUserPagePath);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  }

  const closeDetails = () => {
    setShowDetails(false);
  }

  const goToHomePage = () => {
    history.push('/');
  }

  return (
    <header className='page-header'>
      <div className='page-header__title page-header__content'
        onClick={goToHomePage}
      >
        Simple blog
      </div>

      <div className='page-header__user page-header__content'
        onClick={toggleShowDetails}
      >
        {currentUser}
      </div>

      {showDetails &&
        <PageHeaderDetails
          currentUserNickname={currentUser}
          changeProfileHandleClick={openModal}
          closeDetails={closeDetails}
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
  currentUser: state.currentUser
})

PageHeader.propTypes = {
  currentUser: PropTypes.string
}

export default connect(mapStateToProps)(PageHeader);