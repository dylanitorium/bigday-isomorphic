/* handles routing to api functions */
import * as service from '../api/users';

export const getUserById = (req, res, next) => {
  service.getUser(req.params.id)
  .then(data => (res.json(data)))
  .catch(err => next(err));
};

export const getUsers = (req, res, next) => {
  service.getAllUsers()
  .then(data => (res.json(data)))
  .catch(err => next(err));
};

export const createUser = (req, res, next) => {
  service.createUser(req.body)
  .then(data => (res.json(data)))
  .catch(err => next(err));
};

export const deleteUser = (req, res, next) => {
  service.deleteUser(req.params.id)
  .then(data => (res.json(data)))
  .catch(err => next(err));
};

export const logoutUser = (req, res) => {
  req.logout();
  res.status(200).send('OK');
};
