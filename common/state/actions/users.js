import { routeActions } from 'react-router-redux';
import {
  makeActionCreator,
  parseJSON,
  checkResponseStatus,
} from './utils';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  GENERATE_APIKEY_REQUEST,
  GENERATE_APIKEY_SUCCESS,
  GENERATE_APIKEY_ERROR,
} from '../constants/users';

const loginRequest = makeActionCreator(LOGIN_REQUEST);
const loginSuccess = makeActionCreator(LOGIN_SUCCESS, 'user');
const loginError = makeActionCreator(LOGIN_ERROR, 'error');

const logoutRequest = makeActionCreator(LOGOUT_REQUEST);
const logoutSuccess = makeActionCreator(LOGOUT_SUCCESS);
const logoutError = makeActionCreator(LOGOUT_ERROR, 'error');

const generateApiKeyRequest = makeActionCreator(GENERATE_APIKEY_REQUEST);
const generateApiKeySuccess = makeActionCreator(GENERATE_APIKEY_SUCCESS, 'user');
const generateApiKeyError = makeActionCreator(GENERATE_APIKEY_ERROR, 'error');

export const login = credentials => (
  (dispatch) => {
    dispatch(loginRequest());
    fetch('/auth/login', {
      method: 'post',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json', //eslint-disable-line
        'Content-Type': 'application/json' //eslint-disable-line
      },
      body: JSON.stringify(credentials),
    })
    .then(checkResponseStatus)
    .then(parseJSON)
    .then((user) => {
      dispatch(loginSuccess(user));
      dispatch(routeActions.push('/'));
      location.reload();
    })
    .catch(({ message }) => {
      dispatch(loginError(message));
    });
  }
);

export const logout = () => (
  (dispatch) => {
    dispatch(logoutRequest());
    fetch('/auth/logout', {
      method: 'post',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json', //eslint-disable-line
        'Content-Type': 'application/json' //eslint-disable-line
      },
    })
    .then(checkResponseStatus)
    .then(() => {
      dispatch(logoutSuccess());
      dispatch(routeActions.push('/login'));
      location.reload();
    })
    .catch(err => dispatch(logoutError(err)));
  }
);

export const generateApiKey = () => (
  (dispatch) => {
    dispatch(generateApiKeyRequest());
    fetch('/api/generateApiKey', {
      method: 'post',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json', //eslint-disable-line
        'Content-Type': 'application/json' //eslint-disable-line
      },
    })
      .then(checkResponseStatus)
      .then(parseJSON)
      .then((user) => {
        dispatch(generateApiKeySuccess(user));
      })
      .catch(err => dispatch(generateApiKeyError(err)));
  }
);

