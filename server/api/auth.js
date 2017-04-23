import bcrypt from 'bcrypt-nodejs';
import * as service from './users';

export const intoSession = (user, done) => done(null, user.id);

export const outOfSession = (id, done) => (
  service.getUserById(id).then((user, error) => done(error, service.filterProperties(user)))
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
  service.getUser({ email }).then(handleUserResult(done, password, message));
};
