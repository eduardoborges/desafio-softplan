/* eslint-disable no-underscore-dangle */
import {
 createStore, Store, applyMiddleware, compose,
} from 'redux';
import persistState from 'redux-localstorage';
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
  composeWithDevTools(compose(
    applyMiddleware(...middlewares),
    persistState(),
  )),

);

sagaMiddleware.run(rootSagas);


export default store;
