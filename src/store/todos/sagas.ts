/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { api } from 'services';
import { AxiosResponse } from 'axios';
import {
 call, put, takeLatest,
} from 'redux-saga/effects';
import {
 indexSuccess, indexError, addError, addSuccess, removeSuccess, removeError,
} from './actions';
import { TodoTypes } from './types';

interface Action {
  type: TodoTypes,
  payload: any,
}


export function* _indexRequest() {
  try {
    const resp : AxiosResponse = yield call(api.get, '/todos');
    yield put(indexSuccess(resp.data));
  } catch (e) {
    yield put(indexError());
  }
}


export function* _addRequest(action: Action) {
    try {
      yield call(api.post, '/todos', { text: action.payload, completed: false, userId: 1 });
      yield put(addSuccess());
    } catch (err) {
      yield put(addError());
    }
}

export function* _removeRequest(action: Action) {
  try {
    yield call(api.delete, `/todos/${action.payload}`);
    yield put(removeSuccess());
  } catch (err) {
    yield put(removeError());
  }
}


export default function* saga() {
  yield takeLatest(TodoTypes.INDEX_REQUEST, _indexRequest);
  yield takeLatest(TodoTypes.ADD_REQUEST, _addRequest);
  yield takeLatest(TodoTypes.REMOVE_REQUEST, _removeRequest);

  yield takeLatest(TodoTypes.ADD_SUCCESS, _indexRequest);
  yield takeLatest(TodoTypes.REMOVE_SUCCESS, _indexRequest);
}
