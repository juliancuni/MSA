import DashboardPage from '../../pages/app/dashboard.svelte';
import UserProfilePage from '../../pages/app/user-profile.svelte';
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
]

export default appRoutes;