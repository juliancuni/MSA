import DashboardPage from '../../pages/app/dashboard.svelte';
import LoginPage from '../../pages/auth/login.svelte';

import store from '../store';
const isAuthenticated = store.getters.authenticated;
const appRoutes = [
    {
        path: '/dashboard',
        async({ resolve }) {
            console.log(isAuthenticated.value)
            if (isAuthenticated.value) {
                resolve({ component: DashboardPage })
            } else {
                resolve({ component: LoginPage })
            }
        }
    }
]

export default appRoutes;