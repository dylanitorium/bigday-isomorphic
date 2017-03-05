import React from 'react';
import { Button } from '../Buttons';
import {
  box,
  inner,
} from './confirmationbox.css';

const handleAccept = (acceptData, onAccept) => (() => onAccept(acceptData));
const handleReject = (rejectData, onReject) => (() => onReject(rejectData));

const ConfirmationBox = ({
  message,
  acceptText,
  rejectText,
  onAccept,
  onReject,
  acceptData,
  rejectData,
}) => (
  <div className={box}>
    {message}
    <div className={inner}>
      <Button className={'formCancelButton'} onClick={handleReject(rejectData, onReject)}>
        {rejectText}
      </Button>
      <Button className={'formSubmitButton'} onClick={handleAccept(acceptData, onAccept)}>
        {acceptText}
      </Button>
    </div>
  </div>
);

ConfirmationBox.propTypes = {
  message: React.PropTypes.string,
  acceptText: React.PropTypes.string,
  rejectText: React.PropTypes.string,
  onAccept: React.PropTypes.func,
  onReject: React.PropTypes.func,
  acceptData: React.PropTypes.object, // eslint-disable-line
  rejectData: React.PropTypes.object, // eslint-disable-line
};

export default ConfirmationBox;
