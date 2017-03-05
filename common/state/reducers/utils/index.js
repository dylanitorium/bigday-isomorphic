export function createReducer(initialState, handlers) { //eslint-disable-line
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) { //eslint-disable-line
      return handlers[action.type](state, action);
    }
    return state;
  };
}
