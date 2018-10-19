import { all } from 'redux-saga/effects';
import saveEmailSaga from './components/EmailPhoneInput/sagas';

console.log(typeof saveEmailSaga);

export default function* rootSaga() {
  yield all([
    saveEmailSaga(),
  ]);
}
