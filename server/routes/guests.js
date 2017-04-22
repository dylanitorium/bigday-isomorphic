// In here we declare functions that can be used in the routes index to handle requests.
// We will import the functions from the api directory and allow them to intepret
// and process requests and returns response
import * as service from '../api/guests';

export const patchGuests = (req, res) => {
  service.patchGuests(req.body)
    .then(data => (res.json(data)))
    .catch(err => console.error(err));
};


export function getGuest(req, res) {
  const { body: { code } } = req;
  service.getGuestByCode(code)
    .then(data => (res.json(data)))
    .catch(err => console.error(err));
}
