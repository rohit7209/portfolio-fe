import { combineReducers } from 'redux';

// import playlistsReducer from '../playlists/reducer';
import homeReducer from './Home/reducers';
import saveEmailReducer from './components/EmailPhoneInput/reducers';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

const rootReducer = combineReducers({
  // playlists: playlistsReducer,
  homeReducer,
  saveEmailReducer,
  routing: routerReducer,
});

export default rootReducer;
