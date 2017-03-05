const getType = (state) => {
  const { items, serverState } = state.guests;
  if (items > serverState) {
    return 'insert';
  } else if (items < serverState) {
    return 'delete';
  }
  return 'update';
};

export default ({ _id, ...guest }, state) => (JSON.stringify({
  type: getType(state),
  query: { _id },
  guest,
}));
