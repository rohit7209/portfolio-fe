import { all } from 'redux-saga/effects';
import saveEmailSaga from './components/EmailPhoneInput/sagas';

export default function* rootSaga() {
  yield all([
    saveEmailSaga(),
  ]);
}
