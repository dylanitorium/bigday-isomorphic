

import React from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form';
import { formFields } from '../../config/settings';
import {

} from '../../../state/actions';


const handleSubmit = () => {};
const handleDataChange = () => {};


class ApiKeyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <Form
        fields={formFields}
        formData={this.state}
        onSubmit={handleSubmit}
        onDataChange={handleDataChange}
        buttonText={'Generate'}
      />
    );
  }
}

ApiKeyForm.propTypes = {
  // guest: React.PropTypes.object.isRequired, // eslint-disable-line
  // updateGuest: React.PropTypes.func.isRequired,
  // closeModal: React.PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    apikey: 'adasa',
  }),
  {
  },
)(ApiKeyForm);


