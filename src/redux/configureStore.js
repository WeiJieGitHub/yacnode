import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createHistoryReducer from './historyReducer';

const localHistoryCache = JSON.parse(localStorage.getItem('historyCache'));
const historyReducer = createHistoryReducer(localHistoryCache);

const reducer = historyReducer(combineReducers(rootReducer));

export default function configureStore(initalState) {
  const store = createStore(
      reducer,
      initalState,
      applyMiddleware(thunk),
  );
  return store;
}
