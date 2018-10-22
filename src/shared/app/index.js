import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
// import 'react-notifications/src/notifications.scss';
// import 'react-notifications/lib/notifications.css';
// import './../../assets/stylesheets/notifications.css';


import * as Routes from './routes';

const App = () => (<div>
  <Helmet
    htmlAttributes={{ lang: 'en', amp: undefined }}
    bodyAttributes={{ style: 'margin: 0px' }}
    titleTemplate="%s | Universal React POC "
    titleAttributes={{ itemprop: 'name', lang: 'en' }}
    meta={[
      { name: 'description', content: 'Server side rendering example' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]}
  />
  <Switch>
    <Route exact path="/" component={Routes.HomePage} />
    <Route exact path="/signin" component={Routes.Signin} />
  </Switch>
</div>);


export default App;
