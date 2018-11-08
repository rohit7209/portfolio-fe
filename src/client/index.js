import { render, hydrate } from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadComponents } from 'loadable-components';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import combinedReducers from './../app/rootReducer';
import sagas from './../app/rootSaga';

import App from './../app';

// getting store state from server (store state is passed as window property)
const preloadedState = window.__PRELOADED_STATE__;

// initialise history for the first request
const history = createHistory();

// initialise saga middleware
const sagaMiddleware = createSagaMiddleware();

// deleting store state (as we already stored the state in preloadedState)
delete window.__PRELOADED_STATE__;

// create store and initialise with state recieved from server
const store = createStore(
  combinedReducers,
  preloadedState,
  compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

// runnning saga in client side
sagaMiddleware.run(sagas);

// once all required components needed render in client side
loadComponents().then(() => {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <App />
        </Router>
      </ConnectedRouter >
    </Provider>,
    document.getElementById('root'),
  );
});
