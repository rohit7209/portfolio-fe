import loadable from 'loadable-components';

// export const AlbumPage = loadable(() => import('../albums/AlbumPage'));
const HomePage = loadable(() => import('./Home'));
const Signin = loadable(() => import('./containers/Signin'));

export default ({
  '/': HomePage,
  '/home/:a/:b/': HomePage,
  '/home': HomePage,
  '/signin/': Signin,
});

// export const PlaylistPage = loadable(() => import('../playlists/PlaylistPage'));
// export const PlayListsPage = loadable(() => import('../playlists/ListPage'));
// export const SearchAlbumPage = loadable(() => import('../albums/SearchPage'));
