import { call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {
  SAVE_EMAIL,
} from './constants';
import { saveEmailDone, handleError } from './actions';
import CONSTANTS from './../../utils/constants';

function saveEmailAPICall(payload) {
  console.log('pay::', payload);
  const { email } = payload;
  const URL = `${CONSTANTS.config.server_url}${CONSTANTS.api.saveEmail}`;

  console.log('URL:', URL);

  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
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
