import React from 'react';
import styles from './header.css';

const Header = ({ title, children }) =>
(<header className={styles.header}>
  <h1>{title}</h1>
  {children}
</header>);

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array,
    React.PropTypes.string,
  ]),
};

export default Header;
