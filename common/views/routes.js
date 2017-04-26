import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import GuestPanel from './containers/Guests';
import SettingsPanel from './containers/Settings';
import { Login } from './containers/Login';

const Dashboard = () => (<div>Dashboards</div>);

const requireAuth = store => (
  (nextState, replace, callback) => {
    const { users: { isAuthenticated } } = store.getState();
    if (!isAuthenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
    callback();
  }
);

const redirectIfAuth = store => (
  (nextState, replace, callback) => {
    const { users: { isAuthenticated } } = store.getState();
    if (isAuthenticated) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname },
      });
    }
    callback();
  }
);


export default store => (
  <Route>
    <Route path="/" component={App} onEnter={requireAuth(store)}>
      <IndexRoute component={Dashboard} />
      <Route path="/guests" component={GuestPanel} />
      <Route path="/settings" component={SettingsPanel} />
    </Route>
    <Route path="/login" component={Login} onEnter={redirectIfAuth(store)} />
  </Route>
);
