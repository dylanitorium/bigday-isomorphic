// Allows us to use babel on the server
import 'babel-polyfill';
// Allows us to use css modules on the server
import 'css-modules-require-hook/preset';

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import flash from 'connect-flash'
import { Server } from 'http';

import mongooseConfig from './config/mongoose';
import passportConfig from './config/passport';
import sessionConfig from './config/session';
import middlewareConfig from './middleware';
import routesConfig from './routes';

// Server Config
// =============
const app = express();
const server = Server(app);
const port = 3000;

// Database Config
// ================
mongooseConfig(mongoose);

// Server Middleware
// =================
middlewareConfig(app, passport);

// Session Config
app.use(sessionConfig(session));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Passport Config
// ===============
passportConfig(passport);

// Routes Config
// =============
routesConfig(app, passport);

// Start Server
// ============
server.listen(port, (error) => {
  if (error) {
    console.error(error); // eslint-disable-line no-console
  } else {
    console.info('----------'); // eslint-disable-line no-console
    console.info(`Big Day Version 2 listening on port ${port}.`); // eslint-disable-line no-console
    console.info('==========');// eslint-disable-line no-console
  }
});
