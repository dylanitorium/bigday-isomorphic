import React from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form';
import { formFields } from '../../config/guests';
import {
  updateGuest,
  closeModal,
 } from '../../../state/actions';

const onDataChange = context => (
  data => (context.setState(data))
);

const handleSubmit = props => (
  (guest) => {
    props.updateGuest(guest);
    props.closeModal();
  }
);

class AddGuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.guest;
  }

  render() {
    return (
      <Form
        fields={formFields}
        formData={this.state}
        onSubmit={handleSubmit(this.props)}
        onDataChange={onDataChange(this)}
        buttonText={'Submit'}
      />
    );
  }
}

AddGuestForm.propTypes = {
  guest: React.PropTypes.object.isRequired, // eslint-disable-line
  updateGuest: React.PropTypes.func.isRequired,
  closeModal: React.PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  {
    updateGuest,
    closeModal,
  },
)(AddGuestForm);
