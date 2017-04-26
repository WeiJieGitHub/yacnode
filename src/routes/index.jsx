import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Frame from 'layouts/frame/Frame';

const history = createHistory();
const routes = (
  <ConnectedRouter history={history}>
    <Frame />
  </ConnectedRouter>
);

export default routes;
