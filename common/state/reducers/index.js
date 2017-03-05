import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import guests from './guests';
import modal from './modal';
import users from './users';

export default combineReducers({
  guests,
  modal,
  users,
  routing,
});
