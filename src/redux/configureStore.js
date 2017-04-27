import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';

const reducer = combineReducers(Object.assign({}, rootReducer));

export default function configureStore(initalState) {
  const store = createStore(
      reducer,
      initalState,
  );
  return store;
}
