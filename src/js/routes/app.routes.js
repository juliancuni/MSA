import DashboardPage from '../../pages/app/dashboard.svelte';
import TestPage from '../../pages/app/test.svelte';
import UserProfilePage from '../../pages/app/user-profile.svelte';
import { authGuard } from './guards/auth.guard';

const appRoutes = [
    {
        path: 'dashboard',
        async({ resolve, reject }) {
            authGuard(resolve, reject, DashboardPage);
        }
    },
    {
        path: '/test',
        async({ resolve, reject }) {
            authGuard(resolve, reject, TestPage);
        }
    }, 
    {
        path: '/userprofile',
        async({ resolve, reject }) {
            authGuard(resolve, reject, UserProfilePage);
        }
    },
]

export default appRoutes;