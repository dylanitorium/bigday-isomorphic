import { Strategy } from 'passport-local';
import { localAuthCallback } from '../../api/users';

export default new Strategy({
  usernameField: 'email',
  // passReqToCallback: true,
}, localAuthCallback);
