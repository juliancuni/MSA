import LoginPage from '../../pages/auth/login.svelte';
import RegisterPage from '../../pages/auth/register.svelte';
import CreateRecoveryPassPage from '../../pages/auth/createpasswordrecovery.svelte';
import UpdateRecoveryPassPage from '../../pages/auth/passwordrecovery.svelte';
import EmailVerifiedPage from '../../pages/auth/emailverified.svelte';
import InvalidLink from '../../pages/auth/invalidlink.svelte';
import ResetPassSuccess from '../../pages/auth/resetpasswordsuccess.svelte';

import { unAuthGuard } from './guards/unauth.guard';

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
        path: '/createpasswordrecovery',
        async({ resolve, reject }) {
            unAuthGuard(resolve, reject, CreateRecoveryPassPage);
        }
    },
    {
        path: '/passwordrecovery',
        async({ resolve, reject }) {
            unAuthGuard(resolve, reject, UpdateRecoveryPassPage);
        }
    },
    {
        path: '/emailverified',
        component: EmailVerifiedPage,
    },
    {
        path: '/invalidlink',
        component: InvalidLink,
    },
    {
        path: 'resetpasswordsuccess',
        component: ResetPassSuccess
    }
]

export default authRoutes;