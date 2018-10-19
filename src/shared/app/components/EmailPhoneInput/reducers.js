import {
  SAVE_EMAIL,
  SAVE_EMAIL_DONE,
  RESET,
} from './constants';

const initialState = {
  requesting: null,
  completed: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_EMAIL:
      return {
        ...state,
        requesting: true,
      };
    case SAVE_EMAIL_DONE:
      console.log(action);
      return {
        ...state,
        requesting: false,
        completed: true,
        response: action.payload,
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
