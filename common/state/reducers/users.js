import { createReducer } from './utils';
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

const handleRequest = state => (
  Object.assign({}, state, {
    isFetching: true,
  })
);

const handleLoginSuccess = (state, action) => (
  Object.assign({}, state, {
    isFetching: false,
    currentUser: action.user,
    isAuthenticated: true,
  })
);

const handleLoginError = (state, action) => (
  Object.assign({}, state, {
    error: action.error,
    hasError: true,
    currentUser: {},
    isAuthenticated: false,
    isFetching: false,
  })
);

const handleLogoutSuccess = state => (
  Object.assign({}, state, {
    isFetching: false,
    currentUser: {},
    isAuthenticated: false,
  })
);

const handleLogoutError = state => (
  Object.assign({}, state, {
    isFetching: false,
  })
);

const handleGenerateApiKeyRequest = state => (
  Object.assign({}, state, {

  })
);
const handleGenerateApiKeySuccess = (state, action) => (
  Object.assign({}, state, {
    currentUser: action.user,
  })
);
const handleGenerateApiKeyError = (state, action) => (
  Object.assign({}, state, {
    error: action.error,
    hasError: true,
  })
);

export default createReducer({
  error: '',
  hasError: false,
  isFetching: false,
  isAuthenticated: false,
  currentUser: {},
}, {
  [LOGIN_REQUEST]: handleRequest,
  [LOGIN_SUCCESS]: handleLoginSuccess,
  [LOGIN_ERROR]: handleLoginError,
  [LOGOUT_REQUEST]: handleRequest,
  [LOGOUT_SUCCESS]: handleLogoutSuccess,
  [LOGOUT_ERROR]: handleLogoutError,
  [GENERATE_APIKEY_REQUEST]: handleGenerateApiKeyRequest,
  [GENERATE_APIKEY_SUCCESS]: handleGenerateApiKeySuccess,
  [GENERATE_APIKEY_ERROR]: handleGenerateApiKeyError,
});
