import React from 'react';
import {
  connect,
} from 'react-redux';
import { Button } from '../../components/Buttons';
import { EditIcon } from '../../components/Icons';
import { openModal } from '../../../state/actions';
import EditGuestForm from './EditGuestForm';

const onClick = props => (
  () => {
    props.openModal(
      'Edit Guest',
      <EditGuestForm guest={props.guest} />,
    );
  }
);

const GuestEditButton = props => (
  <Button
    className={'editButton'}
    onClick={onClick(props)}
  >
    <EditIcon />
  </Button>
);

GuestEditButton.propTypes = {
  openModal: React.PropTypes.func.isRequired,
  guest: React.PropTypes.object, //eslint-disable-line
};

export default connect(
  () => ({}),
  {
    openModal,
  },
)(GuestEditButton);
