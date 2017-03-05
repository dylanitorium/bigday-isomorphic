import React from 'react';
import Refresh from 'react-icons/lib/fa/refresh';
import {
  refreshIcon,
  spinningRefreshIcon,
 } from './icons.css';

const getClassName = isAnimated => (isAnimated ? spinningRefreshIcon : refreshIcon);

const RefreshIcon = ({ isAnimated }) => (
  <span className={getClassName(isAnimated)}>
    <Refresh />
  </span>
);

RefreshIcon.propTypes = {
  isAnimated: React.PropTypes.bool,
};

export default RefreshIcon;
