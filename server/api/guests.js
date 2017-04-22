import Guest from '../models/guests';

const updateConfig = {
  upsert: true,
  strict: false,
};

const augmentGuest = item => Object.assign({}, item._doc, {
  isSynced: true,
  isSyncing: false,
});

const augmentGuestList = items => items.map(augmentGuest);

const createUpdate = update => ({
  $set: update,
});

const createGuest = guest => (Guest.create(guest));

const deleteGuest = query => Guest.findOneAndRemove(query);

const updateGuest = (query, guest) => Guest.update(query, createUpdate(guest), updateConfig);

const handlePatch = ({ type, query, guest }) => {
  switch (type) {
    case 'insert':
      return createGuest(guest);
    case 'delete':
      return deleteGuest(query);
    case 'update':
    default:
      return updateGuest(query, guest);
  }
};

export const getGuestList = () => { //eslint-disable-line
  return Guest.find().exec().then(augmentGuestList);
};

export const patchGuests = patch => handlePatch(patch).then(() => (getGuestList()));

const findGuestByCode = code => Guest.findOne();

export const getGuestByCode = code => findGuestByCode(code);
