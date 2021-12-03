
import HomePage from '../pages/home.svelte';
import AboutPage from '../pages/about.svelte';
import NotFoundPage from '../pages/notfound.svelte';

import LoginPage from '../pages/auth/login.svelte';


var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/auth/login',
    component: LoginPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
