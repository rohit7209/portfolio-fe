import { combineReducers } from 'redux';

// import playlistsReducer from '../playlists/reducer';
import homeReducer from './Home/reducers';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

const rootReducer = combineReducers({
  // playlists: playlistsReducer,
  homeReducer,
  routing: routerReducer,
});

export default rootReducer;
