import { f7 } from 'framework7-svelte';
import store from '../../store';
const isAuthenticated = store.getters.authenticated;
const user = store.getters.loggedInUser;

export const authGuard = (resolve, reject, component) => {
    if (isAuthenticated.value) {
        if (user.value.emailVerification) {
            return resolve({ component })
        } else {
            f7.dialog.alert("STOP! Email i paverifikuar!")
            return reject()
        }
    } else {
        f7.views.main.router.navigate("/auth/login");
        return reject();
    }
}

export const unAuthGuard = (resolve, reject, component) => {
    if (isAuthenticated.value) {
        f7.views.main.router.navigate("/app/dashboard");
        return reject();
    } else {
        return resolve({ component });
    }
}