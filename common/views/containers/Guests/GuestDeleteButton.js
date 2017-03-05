import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../components/Buttons';
import { DeleteIcon } from '../../components/Icons';
import { openModal } from '../../../state/actions';
import DeleteGuestConfirmationBox from './DeleteGuestConfirmationBox';

const onClick = props => (
  () => {
    props.openModal('Delete Guest', <DeleteGuestConfirmationBox guest={props.guest} />);
  }
);

const GuestDeleteButton = props => (
  <Button
    className={'deleteButton'}
    onClick={onClick(props)}
  >
    <DeleteIcon />
  </Button>
);

export default connect(
  () => ({}),
  {
    openModal,
  },
)(GuestDeleteButton);
