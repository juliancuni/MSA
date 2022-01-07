import { f7 } from 'framework7-svelte';
import store from '../../store';

const isAuthenticated = store.getters.authenticated;
export const unAuthGuard = async (resolve, reject, component) => {
    await store.dispatch("checkAuthentication");
    if (isAuthenticated.value) {
        f7.views.main.router.navigate("/app/dashboard");
        return reject();
    } else {
        return resolve({ component });
    }
}