import { f7 } from 'framework7-svelte';
import DashboardPage from '../../pages/app/dashboard.svelte';
import LoginPage from '../../pages/auth/login.svelte';

import store from '../store';
const isAuthenticated = store.getters.authenticated;
const user = store.getters.loggedInUser;
const appRoutes = [
    {
        path: '/dashboard',
        async({ resolve, reject }) {
            if (isAuthenticated.value) {
                if (user.value.emailVerification) {
                    resolve({ component: DashboardPage })
                } else {
                    reject()
                    f7.dialog.alert("STOP! Email i paverifikuar!")
                }
            } else {
                resolve({ component: LoginPage })
            }
        }
    }
]

export default appRoutes;