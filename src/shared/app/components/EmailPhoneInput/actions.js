import { SAVE_EMAIL, SAVE_EMAIL_DONE, RESET, ERROR } from './constants';

export const saveEmail = payload => ({
  type: SAVE_EMAIL,
  payload,
});

export const saveEmailDone = payload => ({
  type: SAVE_EMAIL_DONE,
  payload,
});

export const reset = payload => ({
  type: RESET,
  payload,
});

export const handleError = payload => ({
  type: ERROR,
  payload,
});
