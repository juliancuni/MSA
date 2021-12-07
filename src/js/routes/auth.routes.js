import LoginPage from '../../pages/auth/login.svelte';
import RegisterPage from '../../pages/auth/register.svelte';
import CreateRecoveryPassPage from '../../pages/auth/createpasswordrecovery.svelte';
import UpdateRecoveryPassPage from '../../pages/auth/passwordrecovery.svelte';
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
        path: '/emailverify',
        component: EmailVerifyPage,
    }
]

export default authRoutes;