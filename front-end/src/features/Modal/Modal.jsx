import React from 'react';

import './Modal.scss';

const Modal = ({ onClose, text }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='modal__close-button' onClick={onClose}>
          X
        </button>
        <p className='modal__text'>{text}</p>
      </div>
    </div>
  );
};

export default Modal;

