import { call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {
  SAVE_EMAIL,
} from './constants';
import { saveEmailDone, handleError } from './actions';

function saveEmailAPICall(payload) {
  console.log('pay::', payload);
  return fetch('https://api.github.com/gists', {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) throw new Error();
    return response.json();
  });
}

function* saveEmailFlow(action) {
  try {
    const response = yield call(saveEmailAPICall, action.payload);
    yield put(saveEmailDone(response));
  } catch (error) {
    yield put(handleError(error));
  }
}

export default function* () {
  yield takeEvery(SAVE_EMAIL, saveEmailFlow);
}
