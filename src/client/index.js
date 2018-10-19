import { render } from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadComponents } from 'loadable-components';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from './../shared/app/rootReducer';
import App from '../shared/app';
import sagas from './../shared/app/rootSaga';

const preloadedState = window.__PRELOADED_STATE__;

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

delete window.__PRELOADED_STATE__;

const store = createStore(
  combinedReducers,
  preloadedState,
  compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

sagaMiddleware.run(sagas);

class Main extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    return (
      <Router>
        <App {...this.props} />
      </Router>
    );
  }
}

loadComponents().then(() => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter >
    </Provider>,
    document.getElementById('root'),
  );
});
