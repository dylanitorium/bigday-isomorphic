import React from 'react';
import LoginForm from './LoginForm';

const styles = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default () => (
  <div style={styles}>
    <div style={{ width: '500px' }}>
      <LoginForm />
    </div>
  </div>
);
