import React from 'react';
import * as styles from './fields.css';

const getValidClass = (isValid) => {
  if (isValid === true) {
    return styles.formFieldValid;
  } else if (isValid === false) {
    return styles.formFieldInvalid;
  }
  return '';
};

const getClasses = (fieldClass, isValid, extraClasses) => {
  if (!fieldClass) {
    return `${styles.formField} ${extraClasses} ${getValidClass(isValid)}`;
  }
  return `${styles[fieldClass]} ${extraClasses} ${getValidClass(isValid)}`;
};

const FormField = ({
  title,
  name,
  type,
  required,
  value,
  isValid,
  fieldClass,
  extraClasses,
  onValueChange,
}) => (
  <div className={getClasses(fieldClass, isValid, extraClasses)}>
    <label htmlFor={name}>{title}</label>
    <input required={required} type={type} name={name} value={value} onChange={onValueChange} />
  </div>
);

FormField.propTypes = {
  title: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  fieldClass: React.PropTypes.string,
  extraClasses: React.PropTypes.string,
  isValid: React.PropTypes.bool,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  onValueChange: React.PropTypes.func,
};

export default FormField;
