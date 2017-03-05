import React from 'react';
import { connect } from 'react-redux';
import Avatar from '../../components/Avatar';
import LogoutButton from './LogoutButton';

const styles = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
};

const getColour = () => 'rgba(142, 68, 173,1.0)';

const getType = () => 'letter';

const getLetter = name => ((name) ? name.substring(0, 1) : '');

const getAvatar = name => (
  <Avatar color={getColour()} letter={getLetter(name)} type={getType()} />
);

const LoginStatus = ({ name }) => (
  <div style={styles}>
    {getAvatar(name)}
    {name}
    <LogoutButton />
  </div>
);

LoginStatus.propTypes = {
  name: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: state.users.currentUser.name || '',
});


export default connect(mapStateToProps)(LoginStatus);
