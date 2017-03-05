// MenuItem

import React from 'react';
import { Link } from 'react-router';
import styles from './menuitem.css';

const MenuItem = ({ index, path, title }) => (
  <Link
    to={path}
    className={styles.item}
    activeClassName={styles.active}
    onlyActiveOnIndex={index}
  >
    {title}
  </Link>
);

MenuItem.propTypes = {
  path: React.PropTypes.string,
  title: React.PropTypes.string,
  index: React.PropTypes.bool,
};

export default MenuItem;
