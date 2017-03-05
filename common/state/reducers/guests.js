import { createReducer } from './utils';
import {
  CREATE_GUEST_REQUEST,
  CREATE_GUEST_SUCCESS,
  CREATE_GUEST_ERROR,
  DELETE_GUEST_REQUEST,
  DELETE_GUEST_SUCCESS,
  DELETE_GUEST_ERROR,
  UPDATE_GUEST_REQUEST,
  UPDATE_GUEST_SUCCESS,
  UPDATE_GUEST_ERROR,
} from '../constants/guests';

const handleCreateGuest = (state, action) => {
  const { items } = state;
  const { guest } = action;
  return Object.assign({}, state, {
    items: [
      ...items,
      Object.assign({}, guest, {
        isSyncing: true,
        isSynced: false,
      }),
    ],
  });
};

const excludeGuestById = ({ _id }) => (item => (_id !== item._id));

const handleDeleteGuest = (state, action) => {
  const { items } = state;
  const { guest } = action;
  return Object.assign({}, state, {
    items: [
      ...items.filter(excludeGuestById(guest)),
    ],
  });
};

const handleUpdateGuest = (state, action) => {
  const { items } = state;
  const { guest } = action;
  return Object.assign({}, state, {
    items: [
      ...items.filter(excludeGuestById(guest)),
      Object.assign({}, guest, {
        isSyncing: true,
        isSynced: false,
      }),
    ],
  });
};

const handlePatchGuestError = (state, action) => {
  const { items } = state;
  const { guest } = action;
  return Object.assign({}, state, {
    items: [
      ...items.filter(excludeGuestById(guest)),
      Object.assign({}, guest, {
        isSyncing: false,
        isSynced: false,
      }),
    ],
  });
};

const handleIncomingGuestList = (state, action) => {
  const { guests } = action;
  return Object.assign({}, state, {
    items: guests,
    serverState: guests,
  });
};

export default createReducer({
  isFetching: false,
  revision: '',
  items: [],
  serverState: [],
}, {
  [CREATE_GUEST_REQUEST]: handleCreateGuest,
  [CREATE_GUEST_SUCCESS]: handleIncomingGuestList,
  [CREATE_GUEST_ERROR]: handlePatchGuestError,
  [DELETE_GUEST_REQUEST]: handleDeleteGuest,
  [DELETE_GUEST_SUCCESS]: handleIncomingGuestList,
  [DELETE_GUEST_ERROR]: handlePatchGuestError,
  [UPDATE_GUEST_REQUEST]: handleUpdateGuest,
  [UPDATE_GUEST_SUCCESS]: handleIncomingGuestList,
  [UPDATE_GUEST_ERROR]: handlePatchGuestError,
});
