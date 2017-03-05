import React from 'react';
import { Button } from '../Buttons';
import { CloseIcon } from '../Icons';
import styles from './modal.css';

const getClassName = isOpen => (
  isOpen ? styles.activeModal : styles.modal
);

const buttonPosition = {
  position: 'absolute',
  right: '1rem',
  top: '1rem',
};

const Modal = ({ title,  content, isOpen, onCloseClick }) => (
  <div className={getClassName(isOpen)}>
    <div className={styles.panel}>
      <header>
        <h2>{title}</h2>
        <Button customStyle={buttonPosition} className={'closeButton'} onClick={onCloseClick}>
          <CloseIcon />
        </Button>
      </header>
      {content}
    </div>
  </div>
);


Modal.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
    React.PropTypes.array,
  ]),
  isOpen: React.PropTypes.bool.isRequired,
  onCloseClick: React.PropTypes.func.isRequired,
};


export default Modal;
