export const local = passport => (
  (req, res, next) => (passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      return next(authError);
    }

    if (!user) {
      return res.status(401).json(info);
    }

    return req.logIn(user, (loginError) => {
      if (loginError) {
        return next(loginError);
      }
      return res.status(200).json(user);
    });
  })(req, res, next))
);
