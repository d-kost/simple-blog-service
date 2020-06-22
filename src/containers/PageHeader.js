import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../sass/PageHeader.sass';
import PropTypes from 'prop-types';
import PageHeaderDetails from '../components/PageHeaderDetails';
import ModalPortal from '../components/modal/ModalPortal';
import ModalWindow from '../components/modal/ModalWindow';
import ProfileChange from '../components/modal/ProfileChange';

const PageHeader = ({ currentUser }) => {

  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    closeDetails();
    setShowModal(true);
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

  return (
    <header className='page-header'>
      <div className='page-header__title page-header__content'>Simple blog </div>
      <div className='page-header__user page-header__content' onClick={toggleShowDetails}>{currentUser}</div>
      {showDetails &&
        <PageHeaderDetails
          changeProfileHandleClick={openModal}
          closeDetails={closeDetails}
        />
      }

      {showModal &&
        <ModalPortal>
          <ModalWindow
            onCancelClick={closeModal}
            onAcceptClick={closeModal}
          >
            <ProfileChange />
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