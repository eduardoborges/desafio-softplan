import { all, fork } from 'redux-saga/effects';

import todosSagas from './todos/sagas';

export default function* root() {
  yield all([
    fork(todosSagas),
  ]);
}
