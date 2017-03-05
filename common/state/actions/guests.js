import fetch from 'isomorphic-fetch';
import {
  makeActionCreator,
  createGuestPatch,
  parseJSON,
  checkResponseStatus,
 } from './utils';
import {
  CREATE_GUEST_REQUEST,
  CREATE_GUEST_SUCCESS,
  CREATE_GUEST_ERROR,
  UPDATE_GUEST_REQUEST,
  UPDATE_GUEST_SUCCESS,
  UPDATE_GUEST_ERROR,
  DELETE_GUEST_REQUEST,
  DELETE_GUEST_SUCCESS,
  DELETE_GUEST_ERROR,
} from '../constants/guests';


// Action Creators
// ===============
const createGuestStart = makeActionCreator(CREATE_GUEST_REQUEST, 'guest');
const createGuestSuccess = makeActionCreator(CREATE_GUEST_SUCCESS, 'guests');
const createGuestError = makeActionCreator(CREATE_GUEST_ERROR, 'guest', 'error');

const updateGuestStart = makeActionCreator(UPDATE_GUEST_REQUEST, 'guest');
const updateGuestSuccess = makeActionCreator(UPDATE_GUEST_SUCCESS, 'guests');
const updateGuestError = makeActionCreator(UPDATE_GUEST_ERROR, 'guest', 'error');
//
const deleteGuestStart = makeActionCreator(DELETE_GUEST_REQUEST, 'guest');
const deleteGuestSuccess = makeActionCreator(DELETE_GUEST_SUCCESS, 'guests');
const deleteGuestError = makeActionCreator(DELETE_GUEST_ERROR, 'guest', 'error');

// Thunk Actions
// =============
// ...
const fetchGuest = (getState, guest) => (fetch('/api/guests', {
  method: 'post',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: createGuestPatch(guest, getState()),
}));

export const addGuest = guest => (
  (dispatch, getState) => {
    dispatch(createGuestStart(guest));
    fetchGuest(getState, guest)
    .then(checkResponseStatus)
    .then(parseJSON)
    .then(guests => dispatch(createGuestSuccess(guests)))
    .catch(err => dispatch(createGuestError(guest, err)));
  }
);

export const updateGuest = guest => (
  (dispatch, getState) => {
    dispatch(updateGuestStart(guest));
    fetchGuest(getState, guest)
    .then(checkResponseStatus)
    .then(parseJSON)
    .then(guests => dispatch(updateGuestSuccess(guests)))
    .catch(err => dispatch(updateGuestError(guest, err)));
  }
);

export const deleteGuest = guest => (
  (dispatch, getState) => {
    dispatch(deleteGuestStart(guest));
    fetchGuest(getState, guest)
    .then(checkResponseStatus)
    .then(parseJSON)
    .then(guests => dispatch(deleteGuestSuccess(guests)))
    .catch(err => dispatch(deleteGuestError(guest, err)));
  }
);
