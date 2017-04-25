import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Index from './views/Index';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDom.render((
  <Provider store={store}>
    <Index />
  </Provider>
), document.getElementById('root'));
