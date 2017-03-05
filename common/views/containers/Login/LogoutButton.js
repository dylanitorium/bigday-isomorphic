import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../components/Buttons';
import { LogoutIcon } from '../../components/Icons';
import { logout } from '../../../state/actions/';

const onClick = props => (() => props.logout());

const LogoutButton = props => (
  <Button
    className={'closeButton'}
    onClick={onClick(props)}
  >
    <LogoutIcon />
  </Button>
);

export default connect(
  () => ({}),
  {
    logout,
  },
)(LogoutButton);
