import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/Modal.sass';

const ModalWindow = (props) => {

  return (
    <div className="modal-window">

      {props.children}

      <div className="modal-window__bottom-panel">
        <button
          className='modal-window__button common-button'
          onClick={props.onCancelClick}
        >
          Cancel
        </button>

      </div>
    </div>
  )
}

ModalWindow.propTypes = {
  onCancelClick: PropTypes.func,
}

export default ModalWindow;

