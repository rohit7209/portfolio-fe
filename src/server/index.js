/* eslint-disable no-console */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import stats from './../../react-loadable.json';

import App from './../app';
import configureStore from './store';
import { renderHeader, renderFooter } from './render';

import sagas from './../app/rootSaga';

const app = express();
app.use('/assets', express.static('./dist/assets'));

if (typeof window === 'undefined') {
  global.window = {};
}
if (typeof document === 'undefined') {
  global.document = {};
}

app.get('*', async (req, res) => {
  // creating an empty store
  // console.log('req::', req.path);
  const store = configureStore();
  const context = {};

  const modules = [];
  const htmlStream = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          {/* {renderRoutes(routes)} */}
          <App />
          {/* <div>{renderRoutes(routes)}</div> */}
        </StaticRouter>
      </Provider>
    </Loadable.Capture>);

  const bundles = getBundles(stats, modules);

  // console.log('context::', context);

  // if redirect context is set redirect to set url
  if (context.url) {
    res.redirect(context.url);
    return;
  }

  // inject all the sagas
  store.runSaga(sagas).done.then(() => {
    // getting reference from styled-components to get all the styles
    const sheet = new ServerStyleSheet();

    // writing HTML stream in response
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    // creating header
    // const header = Helmet.renderStatic();

    // get the state of store, this state will be passed to client side
    const preloadedState = store.getState();

    return res.status(200).send(renderHeader(styleTags) + htmlStream + renderFooter(bundles, preloadedState));
  });
  store.close();
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => console.log('App listening on port 3000'));
});

