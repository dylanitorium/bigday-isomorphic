export function requireAuthenticated(req, res, next) { //eslint-disable-line
  console.log(req.isAuthenticated());
  console.log(req.session);
  console.log(req);
  if (req.isAuthenticated()) {
    next();
  } else if (req.url.includes('/api/')) {
    res.status(401).send('Unauthorized request.');
  } else {
    res.status(302).redirect('/login');
  }
}
