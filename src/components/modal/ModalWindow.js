import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/Modal.sass';

const ModalWindow = (props) => {

  return (
    <div className="modal-window">

      <div className='modal-window__top-line'>
        <button
          className='modal-window__close-button'
          onClick={props.onCancelClick}
        >
          &#10006;
      </button>
      </div>

      {props.children}

    </div>
  )
}

ModalWindow.propTypes = {
  onCancelClick: PropTypes.func,
}

export default ModalWindow;

