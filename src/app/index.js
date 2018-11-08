import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import { matchRoutes, renderRoutes } from 'react-router-config';
// import 'react-notifications/src/notifications.scss';
import './../assets/stylesheets/styles.global.css';
// import 'react-notifications/lib/notifications.css';

import routes from './routes';

// import HomePage from './Home';
// import Signin from './containers/Signin';


const App = (props) => {
  // console.log('pro::', props);
  return (
    <Switch>
      {/* {(routes || []).map(route => <Route key={route.path} {...route} />)} */}
      {renderRoutes(routes)}
    </Switch>
  );
};


export default App;

/* <Route exact path="/" component={routes[0].component} /> */
/* {renderRoutes(routes)} */

/* <Helmet
  htmlAttributes={{ lang: 'en', amp: undefined }}
  bodyAttributes={{ style: 'margin: 0px' }}
  titleTemplate="%s | Rohit Sharma "
  titleAttributes={{ itemprop: 'name', lang: 'en' }}
  meta={[
    { name: 'description', content: 'Rohit Sharma' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ]}
/> */

