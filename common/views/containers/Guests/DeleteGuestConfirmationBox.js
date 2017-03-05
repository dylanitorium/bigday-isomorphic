import React from 'react';
import { connect } from 'react-redux';
import ConfirmationBox from '../../components/ConfirmationBox';
import {
  closeModal,
  deleteGuest,
} from '../../../state/actions';


const onAccept = props => ((guest) => {
  props.deleteGuest(guest);
  props.closeModal();
});

const getMessage = props => (
  `Are you sure you want to remove ${props.guest.name} from your guest list?`
);

const DeleteGuestConfirmationBox = props => (
  <ConfirmationBox
    message={getMessage(props)}
    acceptText={'Yes, delete this guest'}
    rejectText={'No, I changed my mind'}
    onAccept={onAccept(props)}
    onReject={props.closeModal}
    acceptData={props.guest}
  />
);

DeleteGuestConfirmationBox.propTypes = {
  deleteGuest: React.PropTypes.func,
  closeModal: React.PropTypes.func,
  guest: React.PropTypes.object // eslint-disable-line
};

export default connect(
  () => ({}),
  {
    closeModal,
    deleteGuest,
  },
)(DeleteGuestConfirmationBox);
