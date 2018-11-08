import React from 'react';
import Loadable from 'react-loadable';

const loading = () => <div>Loading...</div>;


const Home = Loadable({
  loader: () => import('./Home'),
  modules: ['./Home'],
  webpack: () => [require.resolveWeak('./Home')],
  loading,
});

const Signin = Loadable({
  loader: () => import('./containers/Signin'),
  modules: ['./containers/Signin'],
  webpack: () => [require.resolveWeak('./containers/Signin')],
  loading,
});

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/signin',
    component: Signin,
  },
];
