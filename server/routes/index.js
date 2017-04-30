// In here we declare a function that accepts our express app
// and sets up routing handlers for paths
import express, { Router } from 'express';
import initialRender from '../index';
import { requireAuthenticated } from '../middleware/authMiddleware';
import * as guests from './guests';
import * as users from './users';
import * as auth from './auth';
import {
  catchError,
  devErrorHandler,
  prodErrorHandler,
} from '../middleware/errorHandlers';

export default (app, passport) => {
  const router = new Router();

  router.get('/', requireAuthenticated, initialRender);
  // Auth
  // Local
  // -----
  router.post('/auth/login', auth.local(passport));
  router.post('/auth/logout', users.logoutUser);

  // User
  router.route('/api/generateApiKey').post(users.generateApiKey);

  // Guests
  // ======
  router.route('/api/guests').post(requireAuthenticated, guests.patchGuests);
  router.route('/api/guestByCode/:code').post(auth.localApiKey(passport), guests.getGuestByCode);


  router.get('*', initialRender);
  router.use(catchError);
  app.use(express.static('static'));
  if (app.get('env') === 'development') {
    router.use(devErrorHandler);
  } else {
    router.use(prodErrorHandler);
  }

  app.use(router);
};
