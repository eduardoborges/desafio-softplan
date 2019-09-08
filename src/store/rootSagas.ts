import { all, fork } from 'redux-saga/effects';

import todosSagas from './todos/sagas';
import charactersSagas from './characters/sagas';

export default function* root() {
  yield all([
    fork(todosSagas),
    fork(charactersSagas),
  ]);
}
