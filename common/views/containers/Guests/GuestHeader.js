import React from 'react';
import Header from '../../components/Header';
import GuestAddButton from './GuestAddButton';

const GuestHeader = () => (
  <Header title={'Guests'}>
    <GuestAddButton />
  </Header>
);


export default GuestHeader;
