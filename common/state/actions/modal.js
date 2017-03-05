import { makeActionCreator } from './utils';
import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../constants/modal';


export const openModal = makeActionCreator(OPEN_MODAL, 'title', 'content');
export const closeModal = makeActionCreator(CLOSE_MODAL);
