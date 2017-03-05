// Here is where the functions live to serve the rendered html
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import { getGuestList } from './api/guests';
import configureStore from '../common/state/stores/configureStore';
import createRoutes from '../common/views/routes';

const initialiseStore = (data, currentUser = {}) => {
  const isAuthenticated = !!currentUser.id;
  let initialState;
  if (isAuthenticated) {
    initialState = {
      guests: {
        isFetching: false,
        items: data,
        serverState: data,
      },
      users: {
        error: '',
        hasError: false,
        isFetching: false,
        isAuthenticated,
        currentUser,
      },
    };
  } else {
    initialState = {
      guests: {
        isFetching: false,
      },
      users: {
        error: '',
        hasError: false,
        isFetching: false,
        isAuthenticated,
        currentUser,
      },
    };
  }
  return configureStore(initialState);
};

const renderTemplate = (html, initialState) => (
 `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Big Day</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,500,500i" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="/dist/build.css"></script>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
      <script src="/dist/build.js"></script>
    </body>
  </html>
  `
);

const mergeLocationIntoState = (state, { location }) => (Object.assign({}, state, {
  routing: {
    location,
  },
}));

export default function initialRender(req, res) {
  getGuestList().then((data) => {
    const store = initialiseStore(data, req.user);
    const initialState = store.getState();
    const routes = createRoutes(store);

    console.log(req.flash());

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        // Initial Render
        // ==============
        const html = renderToString(
          <div>
            <Provider store={store}>
              <div>
                <RouterContext {...renderProps} />
              </div>
            </Provider>
          </div>,
        );
        const renderedTemplate = renderTemplate(
          html,
          mergeLocationIntoState(initialState, renderProps),
        );
        res.status(200).send(renderedTemplate);
      } else {
        res.status(404).send('Not Found');
      }
    });
  });
}
