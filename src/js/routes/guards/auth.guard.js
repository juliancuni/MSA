import { f7 } from 'framework7-svelte';
import store from '../../store';
import { createVerification, logout } from '../../services/auth.services'
const locale = localStorage.getItem("i18n");
import translations from '../../i18n/translations'
const alerts = translations[locale].ui.alerts;

const isAuthenticated = store.getters.authenticated;
const user = store.getters.loggedInUser;

export const authGuard = (resolve, reject, component) => {
    if (isAuthenticated.value) {
        if (user.value.emailVerification) {
            return resolve({ component })
        } else {
            f7.dialog.create({
                title: alerts.emailJoIVerifikuar.titulli,
                text: alerts.emailJoIVerifikuar.mesazhi,
                buttons: [
                    {
                        text: alerts.emailJoIVerifikuar.action,
                        color: 'green',
                        onClick: async () => {
                            await createVerification()
                            await logout("")
                        }
                    },
                    {
                        text: "Cancel",
                        onClick: async () => { await logout("") }
                    }
                ]
            }).open()
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