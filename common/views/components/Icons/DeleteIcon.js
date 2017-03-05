import React from 'react';
import Delete from 'react-icons/lib/fa/trash-o';
import { deleteIcon } from './icons.css';

export default () => (
  <span className={deleteIcon}>
    <Delete />
  </span>
);
