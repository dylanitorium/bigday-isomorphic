import React from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form';
import { formFields } from '../../config/guests';
import {
  addGuest,
  closeModal,
 } from '../../../state/actions';

const onDataChange = context => (
  data => (context.setState(data))
);

const handleSubmit = props => (
  (guest) => {
    props.addGuest(guest);
    props.closeModal();
  }
);

class AddGuestForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form
        fields={formFields}
        onSubmit={handleSubmit(this.props)}
        onDataChange={onDataChange(this)}
        buttonText={'Submit'}
      />
    );
  }
}

AddGuestForm.propTypes = {
  addGuest: React.PropTypes.func.isRequired,
  closeModal: React.PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  {
    addGuest,
    closeModal,
  },
)(AddGuestForm);
