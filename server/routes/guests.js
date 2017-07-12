// In here we declare functions that can be used in the routes index to handle requests.
// We will import the functions from the api directory and allow them to intepret
// and process requests and returns respones
import * as service from '../api/guests';


export function patchGuests(req, res, next) { //eslint-disable-line
  service.patchGuests(req.body)
    .then(data => (res.json(data)))
    .catch(err => console.error(err));
}

export function getGuestByCode(req, res, next) {
  service.getGuestByCode(req.params.code)
    .then((data) => {
      if (!data) {
        throw new Error('No Guest');
      }
      res.json(data);
    }).catch(next);
}

