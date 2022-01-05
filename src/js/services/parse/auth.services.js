import { f7 } from 'framework7-svelte';
import Parse from "./parse.sdk";
import { localeString as locale } from "../../i18n";
import translations from '../../i18n/translations'
const alerts = translations[locale].ui.alerts;
const auth = translations[locale].auth;

// const UserSdk = new Parse.User();

export const login = async (username, password) => {
    try {
        return await Parse.User.logIn(username, password);
    } catch (error) {
        if (error.message.includes("multiple failed login")) {
            f7.dialog.create({
                title: "Llogaria u bllokua",
                text: error.message,
                buttons: [
                    {
                        text: auth.links.rikupero,
                        color: 'green',
                        onClick: async () => {
                            f7.views.main.router.navigate("/auth/createpasswordrecovery")
                        }
                    },
                    { text: "Cancel" }
                ]
            }).open()
        } else {
            f7.dialog.alert(`${error.code}: ${error.message}`, "Login Deshtoi");
        }
        return null;
    }
}

export const register = async (name, email, username, password) => {
    try {
        const user = new Parse.User();
        user.set("name", name);
        user.setUsername(username);
        user.setEmail(email)
        user.setPassword(password)
        const u = await user.signUp();
        f7.dialog.alert(alerts.krijoVerifikimSukses.mesazhi, alerts.krijoVerifikimSukses.titulli);
        return u;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Regjistrimi Deshtoi");
        return null;
    }
}

export const createEmailVerification = async (email) => {
    try {
        const user = await Parse.User.requestEmailVerification(email);
        if (user) {
            f7.dialog.alert(alerts.krijoVerifikimSukses.mesazhi, alerts.krijoVerifikimSukses.titulli);
        }
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Error");
    }

}

export const logout = async () => {
    try {
        const u = await Parse.User.logOut();
    } catch (error) {
        console.log(error);
    }
}

export const getLoggedInUser = async () => {
    try {
        const user = await Parse.User.current();
        return user;
    } catch (error) {
        return null;
    }
}

export const requestPassRecovery = async (email) => {
    try {
        const user = await Parse.User.requestPasswordReset(email);
        if (user) {
            f7.dialog.alert(alerts.krijoPasswordReset.mesazhi, alerts.krijoPasswordReset.titulli);
        }
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Error");
    }
}
