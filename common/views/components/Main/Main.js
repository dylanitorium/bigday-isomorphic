import React from 'react';
import styles from './main.css';

const Main = ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
);

Main.propTypes = {
  children: React.PropTypes.element,
};

export default Main;
