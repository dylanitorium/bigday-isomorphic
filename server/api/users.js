import bcrypt from 'bcrypt-nodejs';
import User from '../models/users';

export const filterProperties = user => ({
  id: user.id,
  name: user.name || {},
  email: user.email,
});

export const createUser = data => User.create(data);

export const deleteUser = id => User.findByIdAndRemove(id);

export const getUser = cond => User.findOne(cond);

export const getUserById = id => User.findById(id);

export const getAllUsers = () => User.find().exec();

export const intoSession = (user, done) => done(null, user.id);

export const outOfSession = (id, done) => (
  getUserById(id).then((user, error) => done(error, filterProperties(user)))
);

const handleHashCompareResult = (done, user, message) => (
  (compareError, res) => {
    if (compareError) {
      return done(compareError);
    }

    if (!res) {
      return done(null, false, { message });
    }

    return done(null, user);
  }
);

const handleUserResult = (done, password, message) => (
  (user, error) => {
    if (error) {
      return done(error);
    }

    if (!user) {
      return done(null, false, { message });
    }

    return bcrypt.compare(password, user.password, handleHashCompareResult(done, user, message));
  }
);

export const localAuthCallback = (email, password, done) => {
  const message = 'Those details don\'t seem to be correct';
  getUser({ email }).then(handleUserResult(done, password, message));
};
