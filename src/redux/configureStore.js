import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

const reducer = combineReducers(Object.assign({}, rootReducer, { router: routerReducer }));
const history = createHistory();
const middleware = routerMiddleware(history);

export default function configureStore(initalState) {
  const store = createStore(
      reducer,
      initalState,
      applyMiddleware(middleware),
  );
  return store;
}
