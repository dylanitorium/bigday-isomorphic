import local from './local';

import {
  intoSession,
  outOfSession,
} from '../../api/auth';

export default (passport) => {
  // Session Control
  // ===============
  passport.serializeUser(intoSession);
  passport.deserializeUser(outOfSession);

  // Strategies
  // ==========
  passport.use(local);
};
