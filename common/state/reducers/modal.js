import {
  createReducer,
} from './utils';

import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../constants/modal';

const handleOpenModal = (state, action) => {
  const { title, content } = action;
  return Object.assign({}, state, {
    isOpen: true,
    title,
    content,
  });
};

const handleCloseModal = state => (Object.assign({}, state, {
  isOpen: false,
  content: '',
  title: '',
}));

export default createReducer({
  isOpen: false,
  title: '',
  content: '',
}, {
  [OPEN_MODAL]: handleOpenModal,
  [CLOSE_MODAL]: handleCloseModal,
});
