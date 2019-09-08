/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { api } from 'services';
import { AxiosResponse } from 'axios';
import {
 call, put, takeLatest,
} from 'redux-saga/effects';
import {
 indexSuccess, indexError,
} from './actions';
import { CharactersTypes as Types } from './types';

interface Action {
  type: Types,
  payload: any,
}


export function* _indexRequest(action:Action) {
  try {
    const resp : AxiosResponse = yield call(api.get, 'people');
    yield put(indexSuccess(resp.data));
  } catch (e) {
    yield put(indexError());
  }
}


export default function* saga() {
  yield takeLatest(Types.INDEX_REQUEST, _indexRequest);
}
