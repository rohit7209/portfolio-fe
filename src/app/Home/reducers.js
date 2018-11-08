import {
  UPDATE_SCROLLY,
} from './constants';

const initialState = {
  scrollY: 0,
};

const homeReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SCROLLY:
      return {
        ...state,
        scrollY: payload,
      };
    default:
      return state;
  }
};

export default homeReducers;
