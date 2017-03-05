import React from 'react';
import * as styles from './alertbox.css';

const AlertBox = ({ type, children }) => (
  <div className={styles[type]}>
    {children}
  </div>
);

AlertBox.propTypes = {
  type: React.PropTypes.oneOf([
    'bad',
    'good',
    'info',
  ]).isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
    React.PropTypes.array,
  ]).isRequired,
};

export default AlertBox;
