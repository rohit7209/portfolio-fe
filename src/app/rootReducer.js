import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import playlistsReducer from '../playlists/reducer';
import homeReducer from './Home/reducers';
import saveEmailReducer from './components/EmailPhoneInput/reducers';

const rootReducer = combineReducers({
  // playlists: playlistsReducer,
  homeReducer,
  saveEmailReducer,
  routing: routerReducer,
});

export default rootReducer;
