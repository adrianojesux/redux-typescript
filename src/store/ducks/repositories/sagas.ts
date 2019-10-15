/* eslint-disable linebreak-style */
import { put, call } from 'redux-saga/effects';

import api from '../../../services/Api';
import { loadSuccess, loadFailure } from './actions';


export function* load() {
  try {
    const response = yield call(api.get, 'users/AdrianoJesus1994/repos');
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
