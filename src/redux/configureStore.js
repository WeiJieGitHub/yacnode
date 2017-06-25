import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import historyReducer from './historyReducer';

const reducer = historyReducer(combineReducers(Object.assign({}, rootReducer)));

export default function configureStore(initalState) {
  const store = createStore(
      reducer,
      initalState,
      applyMiddleware(thunk),
  );
  return store;
}
