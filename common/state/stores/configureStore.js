import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

let createStoreWithMiddleware;
let middleware;
const loggerMiddleware = createLogger();
export const reduxRouterMiddleware = syncHistory(browserHistory);

// Client
// ------
if (typeof window !== 'undefined') {
  middleware = [
    thunk,
    loggerMiddleware,
    reduxRouterMiddleware,
  ];
  createStoreWithMiddleware = compose(
    applyMiddleware(...middleware),
    // DevTools.instrument
  )(createStore);
} else {
  middleware = [
    thunk,
    loggerMiddleware,
  ];
  createStoreWithMiddleware = compose(
    applyMiddleware(...middleware),
    // DevTools.instrument
  )(createStore);
}

// Export store creator
// ====================
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}
