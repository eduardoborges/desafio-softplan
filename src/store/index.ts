/* eslint-disable no-underscore-dangle */
import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducers from './rootReducers';
import rootSagas from './rootSagas';
import { TodoState } from './todos/types';
import { CharactersState } from './characters/types';

export interface AppState {
  TODOS: TodoState,
  CHARACTERS: CharactersState,
}
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
