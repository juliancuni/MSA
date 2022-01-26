import { f7 } from 'framework7-svelte';
import { checkAuthentication, logoutUser } from '../../stores/auth.store';
import { createEmailVerification, getLoggedInUser } from '../../services/parse/auth.services';
import { localeString as locale } from "../../i18n";
import translations from '../../i18n/translations'

const alerts = translations[locale].ui.alerts;

export const authGuard = async (resolve, reject, component) => {
    await checkAuthentication();
    let user = await getLoggedInUser();
    if (user) {
        if (user.attributes?.emailVerified) {
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
                            await createEmailVerification(user.attributes.email)
                            await logoutUser();
                        }
                    },
                    {
                        text: "Cancel",
                        onClick: async () => {
                            await logoutUser();
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