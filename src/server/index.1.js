/* eslint-disable no-console */
import express from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import { getLoadableState } from 'loadable-components/server';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import App from '../shared/app';
import configureStore from './store';
import { renderHeader, renderFooter } from './render';

import sagas from './../shared/app/rootSaga';

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
  const store = configureStore();
  const context = {};

  // connecting store and router with App
  const appWithRouter = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  // if redirect context is set redirect to set url
  if (context.url) {
    res.redirect(context.url);
    return;
  }

  // initialising loadable state
  let loadableState = {};

  // inject all the sagas
  store.runSaga(sagas).done.then(() => {
    // getting reference from styled-components to get all the styles
    const sheet = new ServerStyleSheet();

    // converting App to HTML stream & getting style from styled-components
    const htmlStream = renderToNodeStream(sheet.collectStyles(appWithRouter));

    // writing HTML stream in response
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    // creating header
    const header = Helmet.renderStatic();

    // writing HTML header in response (its not response header)
    res.status(200).write(renderHeader(header, styleTags));

    // get the state of store, this state will be passed to client side
    const preloadedState = store.getState();

    htmlStream.pipe(res, { end: false });
    htmlStream.on('end', () => {
      // once writing done, HTML footer is added (loadableState: script tags to import required components, preloadedState: current store state)
      res.write(renderFooter(loadableState, preloadedState));
      return res.send();
    });
  });

  // getting scripts for all the imported components (which are loadable)
  loadableState = await getLoadableState(appWithRouter);
  store.close();
});


app.listen(3000, () => console.log('App listening on port 3000'));
