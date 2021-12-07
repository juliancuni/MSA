import LoginPage from '../../pages/auth/login.svelte';
import RegisterPage from '../../pages/auth/register.svelte';
import EmailVerifyPage from '../../pages/auth/emailverify.svelte';

import { unAuthGuard } from './guards/auth.guard';

const authRoutes = [
    {
        path: '/login',
        async({ resolve, reject }) {
            unAuthGuard(resolve, reject, LoginPage);
        }
    },
    {
        path: '/register',
        async({ resolve, reject }) {
            unAuthGuard(resolve, reject, RegisterPage);
        }
    },
    {
        path: '/emailverify',
        component: EmailVerifyPage,
    }
]

export default authRoutes;