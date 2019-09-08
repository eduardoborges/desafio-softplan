/* eslint-disable no-underscore-dangle */
import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AppState } from './types';

import rootReducers from './rootReducers';
import rootSagas from './rootSagas';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];

const store : Store<AppState> = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);

sagaMiddleware.run(rootSagas);


export default store;
