import LoginPage from '../../pages/auth/login.svelte';
import RegisterPage from '../../pages/auth/register.svelte';
import EmailVerifyPage from '../../pages/auth/emailverify.svelte';

const authRoutes = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/emailverify',
        component: EmailVerifyPage
    }
]

export default authRoutes;