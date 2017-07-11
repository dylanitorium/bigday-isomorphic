// catch 404 and forward to error handler
export function catchError(req, res, next) {
  next({
    status: 404,
  });
}

// development error handler
// will print stacktrace
export function devErrorHandler(err, req, res) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
}

// production error handler
// no stacktraces leaked to user
export function prodErrorHandler(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
}
