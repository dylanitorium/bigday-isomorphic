

import React from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form';
import { formFields } from '../../config/settings';
import {
  generateApiKey,
} from '../../../state/actions';


const handleSubmit = props => () => (props.generateApiKey());
const handleDataChange = () => {};


const ApiKeyForm = props => (
  <Form
    fields={formFields}
    formData={props}
    onSubmit={handleSubmit(props)}
    onDataChange={handleDataChange}
    buttonText={'Generate'}
  />
);


ApiKeyForm.propTypes = {
  apikey: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  apikey: state.users.currentUser.apikey || '',
});

export default connect(
  mapStateToProps,
  {
    generateApiKey,
  },
)(ApiKeyForm);

