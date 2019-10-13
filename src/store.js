import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './logic/actions/combinedReducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}, config = {}) {
  const middlewares = [thunkMiddleware];

  const enhancers = [
    applyMiddleware(...middlewares),
    applyMiddleware(thunk)
  ]

  const store = createStore(
    allReducers,
    initialState,
    composeWithDevTools(...enhancers)
  );

  return store;
}