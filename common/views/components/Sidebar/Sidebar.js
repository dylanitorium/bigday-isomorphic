// AdminMenu

import React from 'react';
import styles from './sidebar.css';

const Sidebar = ({ children }) => (
  <aside className={styles.sidebar}>
    {children}
  </aside>
);

Sidebar.propTypes = {
  children: React.PropTypes.array, //eslint-disable-line
};

export default Sidebar;
