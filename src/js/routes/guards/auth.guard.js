import { f7 } from 'framework7-svelte';
import store from '../../store';
// import { createVerification } from '../../services/appwrite/auth.services';
import { createEmailVerification } from '../../services/parse/auth.services';
import { logout } from '../../services/parse/auth.services';
import { localeString as locale } from "../../i18n";
import translations from '../../i18n/translations'

const alerts = translations[locale].ui.alerts;
const isAuthenticated = store.getters.authenticated;
const user = store.getters.loggedInUser;

export const authGuard = (resolve, reject, component) => {
    if (isAuthenticated.value) {
        if (user?.value?.emailVerified) {
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
                            await createEmailVerification(user.value.email)
                            await logout()
                            store.dispatch("logoutUser");
                        }
                    },
                    {
                        text: "Cancel",
                        onClick: async () => {
                            await logout()
                            store.dispatch("logoutUser");
                        }
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