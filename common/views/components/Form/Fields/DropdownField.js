import React from 'react';
import Dropdown from 'react-dropdown';
import * as styles from './fields.css';

const getValidClass = (isValid) => {
  if (isValid === true) {
    return styles.formFieldValid;
  } else if (isValid === false) {
    return styles.formFieldInvalid;
  }
  return '';
};

const getClasses = (isValid, extraClasses) => {
  return `${styles.dropdownField} ${extraClasses} ${getValidClass(isValid)}`;
};


const DropdownField = ({
  title,
  name,
  value,
  options,
  isValid,
  extraClasses,
  onValueChange,
}) => (
  <div className={getClasses(isValid, extraClasses)}>
    <label htmlFor={name}>{title}</label>
    <Dropdown name={name} options={options} value={value} onChange={event => onValueChange({ target: { name, ...event } })} />
  </div>
);

DropdownField.propTypes = {
  title: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  fieldClass: React.PropTypes.string,
  extraClasses: React.PropTypes.string,
  isValid: React.PropTypes.bool,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  options: React.PropTypes.array.isRequired,
  onValueChange: React.PropTypes.func,
};

export default DropdownField;
/**
 * Created by deadsalt on 10/07/17.
 */
