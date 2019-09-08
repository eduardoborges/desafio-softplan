/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { api } from 'services';
import { AxiosResponse } from 'axios';
import {
 call, put, takeLatest, select,
} from 'redux-saga/effects';
import { AppState } from 'store/types';
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
    const { page } = yield select((state:AppState) => state.CHARACTERS);
    const resp : AxiosResponse = yield call(api.get, `people?page=${page}`);
    yield put(indexSuccess(resp.data));
  } catch (e) {
    yield put(indexError());
  }
}


export default function* saga() {
  yield takeLatest(Types.INDEX_REQUEST, _indexRequest);
}
