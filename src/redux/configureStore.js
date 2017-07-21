import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createStoreCacheReducer, { defaultOptions } from 'components/StoreCacheManager/StoreCacheManagerRedux';
import rootReducer from './reducers';

const localHistoryCache = JSON.parse(localStorage.getItem('historyCache'));
const cacheReducer = createStoreCacheReducer(localHistoryCache || defaultOptions);

const reducer = cacheReducer(combineReducers(rootReducer));

export default function configureStore(initalState) {
  const store = createStore(
      reducer,
      initalState,
      applyMiddleware(thunk),
  );
  return store;
}
