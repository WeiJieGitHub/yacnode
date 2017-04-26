import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDom.render((
  <Provider store={store}>
    { routes }
  </Provider>
), document.getElementById('root'));
