import React from 'react';
import styles from './button.css';

const Button = ({ title, children, onClick, className, customStyle }) => (
  <button
    title={title}
    onClick={onClick}
    className={styles[className]}
    style={customStyle}
  >
    {children}
  </button>
);

Button.propTypes = {
  title: React.PropTypes.string,
  className: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array,
    React.PropTypes.element,
  ]).isRequired,
  onClick: React.PropTypes.func.isRequired,
  customStyle: React.PropTypes.object, //eslint-disable-line
};

export default Button;
