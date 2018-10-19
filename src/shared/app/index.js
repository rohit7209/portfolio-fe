import React from 'react';
// import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import * as Routes from './routes';

// const Router = (props) => {
//   console.log('props:', props);
//   switch (props.location.pathname) {
//     case '/':
//       return <Routes.HomePage {...props} />;
//     case '/sign':
//     default:
//       return <Routes.HomePage {...props} />;
//   }
// };

// Router.propTypes = {};

/* <Route path="/playlists/:playlistId(pl-[a-z]{0,4})" component={Routes.PlaylistPage} />
            <Route path="/playlists" component={Routes.PlayListsPage} />
            <Route path="/search-album" component={Routes.SearchAlbumPage} />
            <Route path="/albums/:albumSlug" component={Routes.AlbumPage} /> */

const App = (props, e) => {
  return (<div>
    <Helmet
      htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
      bodyAttributes={{ style: 'margin: 0px' }}
      titleTemplate="%s | Universal React POC "
      titleAttributes={{ itemprop: 'name', lang: 'en' }}
      meta={[
        { name: 'description', content: 'Server side rendering example' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />
    {/* <MainMenu /> */}
    <Switch>
      <Route exact path="/" component={Routes.HomePage} />
      <Route exact path="/signin" component={Routes.Signin} />
    </Switch>
  </div>);
};


export default App;
