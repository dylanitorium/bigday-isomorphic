import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../components/Buttons';
import {
  OkIcon,
  RefreshIcon,
  WarningIcon,
} from '../../components/Icons';
import { updateGuest } from '../../../state/actions';

const isOk = guest => (guest.isSynced && !guest.isSyncing);
const isSyncing = guest => guest.isSyncing;
const getClassName = (guest) => {
  if (isOk(guest)) {
    return 'okIndicator';
  } else if (isSyncing(guest)) {
    return 'syncingIndicator';
  }
  return 'warningIndicator';
};

const getIcon = (guest) => {
  if (isOk(guest)) {
    return <OkIcon />;
  } else if (isSyncing(guest)) {
    return <RefreshIcon isAnimated />;
  }
  return <WarningIcon />;
};

const handleClick = props => (() => (props.updateGuest(props.guest)));

const GuestStatus = props => (
  <Button
    className={getClassName(props.guest)}
    onClick={handleClick(props)}
  >
    {getIcon(props.guest)}
  </Button>
);

GuestStatus.propTypes = {
  guest: React.PropTypes.object.isRequired, //eslint-disable-line
};

export default connect(
  () => ({}),
  {
    updateGuest,
  },
)(GuestStatus);
