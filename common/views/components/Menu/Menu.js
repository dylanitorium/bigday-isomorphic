import React from 'react';
import MenuItem from './MenuItem';
import styles from './menu.css';

const Menu = ({ items }) => (
  <nav className={styles.menu}>
    <ul>
      {
        items.map(item => (
          <li key={item.path}>
            <MenuItem index={item.index} path={item.path} title={item.title} />
          </li>
        ))
      }
    </ul>
  </nav>
);

Menu.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    path: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    index: React.PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default Menu;
