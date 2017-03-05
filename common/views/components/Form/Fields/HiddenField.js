import React from 'react';

const HiddenField = ({ name, onValueChange, value }) => (
  <input type={'hidden'} name={name} value={value} onChange={onValueChange} />
);

HiddenField.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  onValueChange: React.PropTypes.func,
};

export default HiddenField;
