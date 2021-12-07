
import HomePage from '../../pages/home.svelte';
import AboutPage from '../../pages/about.svelte';
import NotFoundPage from '../../pages/notfound.svelte';

import authRoutes from './auth.routes';
import appRoutes from './app.routes';

export const router = this;

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
        path: '/auth',
        routes: authRoutes,
    },
    {
        path: '/app',
        routes: appRoutes,
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];

export default routes;
