import React from 'react';
import styles from './container.css';

const Container = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

Container.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
};

export default Container;
