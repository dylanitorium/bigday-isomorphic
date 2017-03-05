import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../components/Buttons';
import { AddIcon } from '../../components/Icons';
import { openModal } from '../../../state/actions';
import AddGuestForm from './AddGuestForm';

const onClick = props => (
  () => {
    props.openModal(
      'Add Guest',
      <AddGuestForm />,
    );
  }
);

const GuestAddButton = props => (
  <Button
    className={'addButton'}
    onClick={onClick(props)}
  >
    <AddIcon />
  </Button>
);

GuestAddButton.propTypes = {
  openModal: React.PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  {
    openModal,
  },
)(GuestAddButton);
