import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';

import gistsReducer from '../shared/home/reducer';
import combinedReducers from './../shared/app/reducers';
// import playlistReducer from '../shared/playlists/reducer';

const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [
  routerMiddleware(createMemoryHistory()),
  sagaMiddleware,
];

export default (initialState) => {
  const store = createStore(
    combinedReducers,
    initialState,
    compose(applyMiddleware(...reduxMiddlewares)),
  );

  store.runSaga = sagaMiddleware.run;

  store.close = () => store.dispatch(END);

  return store;
};
