import React from 'react';
import { avatar } from './avatar.css';

const getAvatarColor = backgroundColor => ({ backgroundColor });

const getLetterAvatar = (letter, color) => (
  <div className={avatar} style={getAvatarColor(color)}>{letter}</div>
);

const getImageAvatar = imagePath => (
  <img src={imagePath} className={avatar} alt={'avatar'} />
);

const Avatar = ({ type, imagePath, color, letter }) => {
  switch (type) {
    case 'image':
      return getImageAvatar(imagePath);
    case 'letter':
    default:
      return getLetterAvatar(letter, color);
  }
};

Avatar.propTypes = {
  type: React.PropTypes.oneOf([
    'letter',
    'image',
  ]).isRequired,
  letter: React.PropTypes.string,
  color: React.PropTypes.string,
  imagePath: React.PropTypes.string,
};

export default Avatar;
