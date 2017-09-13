import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from './reducers';
import api from './middleware/api';

const reducer = combineReducers(reducers);
const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(
      api,
      thunkMiddleware,
      loggerMiddleware
    )
  )
};