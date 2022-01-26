import DashboardPage from '../../pages/app/dashboard.svelte';
import UserProfilePage from '../../pages/app/users/users.svelte';
import UsersPage from '../../pages/app/users/users.svelte'
import { authGuard } from './guards/auth.guard';
const appRoutes = [
    {
        path: '/dashboard',
        async({ resolve, reject }) {
            authGuard(resolve, reject, DashboardPage);
        }
    },
    {
        path: '/userprofile',
        async({ router, to, resolve, reject }) {
            // const app = router.app;
            // app.preloader.show();
            authGuard(resolve, reject, UserProfilePage);
            // app.preloader.hide();
        }
    },
    {
        path: '/users',
        async({ resolve, reject }) {
            authGuard(resolve, reject, UsersPage)
        }
    }
]

export default appRoutes;