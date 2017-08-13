import React from 'react';
import GuestDeleteButton from '../containers/Guests/GuestDeleteButton';
import GuestEditButton from '../containers/Guests/GuestEditButton';
import GuestStatus from '../containers/Guests/GuestStatus';
import { requiredField } from './validation';

export const tableColumns = [
  {
    name: 'name',
    title: 'Name',
    callback: value => value,
  },
  {
    name: 'email',
    title: 'Email',
    callback: value => value,
  },
  {
    name: 'quantity',
    title: 'Quantity',
    callback: value => value,
  },
  {
    name: 'notes',
    title: 'Notes',
    callback: value => value,
  },
  {
    name: 'code',
    title: 'Code',
    callback: value => value,
  },
  {
    name: 'status',
    title: 'Status',
    callback: value => value,
  },
];

export const tableActions = [
  {
    position: 'after',
    name: 'update',
    action: guest => (<GuestEditButton guest={guest} />),
  },
  {
    position: 'after',
    name: 'delete',
    action: guest => (<GuestDeleteButton guest={guest} />),
  },
  {
    position: 'before',
    name: 'sync',
    action: guest => (<GuestStatus guest={guest} />),
  },
];

export const tableLoadingMessage = 'Loading...';
export const tableEmptyMessage = 'No Guests Yet';

export const addFields = [
  {
    type: 'TextField',
    name: 'name',
    title: 'Name',
    default: '',
    validation: {
      callback: requiredField,
      message: 'This field needs to be filed out',
    },
    layout: [
      'alpha',
      'threeQuarters',
    ],
  },
  {
    type: 'NumericField',
    name: 'quantity',
    title: 'Quantity',
    default: '1',
    validation: {
      callback: requiredField,
      message: 'This field needs to be filed out',
    },
    layout: [
      'omega',
      'oneQuarter',
    ],
  },
  {
    type: 'HiddenField',
    name: '_id',
    title: '',
  },
];


export const editFields = [
  {
    type: 'TextField',
    name: 'name',
    title: 'Name',
    default: '',
    validation: {
      callback: requiredField,
      message: 'This field needs to be filled out',
    },
    layout: [
      'alpha',
      'threeQuarters',
    ],
  },
  {
    type: 'NumericField',
    name: 'quantity',
    title: 'Quantity',
    default: '1',
    validation: {
      callback: requiredField,
      message: 'This field needs to be filled out',
    },
    layout: [
      'omega',
      'oneQuarter',
    ],
  },
  {
    type: 'DropdownField',
    name: 'status',
    title: 'Status',
    options: [
      'Invite not yet sent',
      'Awaiting RSVP',
      'Accepted',
      'Declined',
    ],
    default: 'Invite not yet sent',
  },
  {
    type: 'HiddenField',
    name: '_id',
    title: '',
  },
];
