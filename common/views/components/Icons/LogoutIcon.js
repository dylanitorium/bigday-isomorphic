import React from 'react';
import Logout from 'react-icons/lib/fa/sign-out';
import { logoutIcon } from './icons.css';

export default () => (
  <span className={logoutIcon}>
    <Logout />
  </span>
);
