import React from 'react';
import Warning from 'react-icons/lib/fa/exclamation-triangle';
import { warningIcon } from './icons.css';

export default () => (
  <span className={warningIcon}>
    <Warning />
  </span>
);
