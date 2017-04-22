import { Strategy } from 'passport-local';
import { localAuthCallback } from '../../api/auth';

export default new Strategy({
  usernameField: 'email',
}, localAuthCallback);
