import { f7 } from 'framework7-svelte';
import { appwriteSdk } from './appwrite.sdk';
import { localeString as locale } from "../../i18n";
import translations from '../../i18n/translations'

const alerts = translations[locale].ui.alerts;

export const login = async (email, password) => {
    try {
        const session = await appwriteSdk.account.createSession(email, password);
        localStorage.setItem('sessionId', session.$id);
        return session;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, alerts.login.titulli);
        return null;
    }
}

export const logout = async (sessionId) => {
    try {
        await appwriteSdk.account.deleteSession(sessionId);
        localStorage.removeItem('sessionId');
        localStorage.removeItem('user');
        return true;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, alerts.logout.titulli);
        localStorage.removeItem('sessionId');
        localStorage.removeItem('user');
        return false;
    }
}

export const register = async (fullname, email, password) => {
    try {
        const user = await appwriteSdk.account.create(email, password, fullname);
        if (user) localStorage.setItem('user', JSON.stringify(user));
        return user;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, alerts.regjistro.titulli);
        return null;
    }
}

export const createRecovery = async (email) => {
    try {
        const token = await appwriteSdk.account.createRecovery(email, "http://localhost:3000/auth/passwordrecovery");
        f7.dialog.alert(alerts.krijoRikuperoSukses.mesazhi, alerts.krijoRikuperoSukses.titulli);
        return token;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, alerts.rikupero.titulli);
        return null;
    }
}

export const updatePasswordRecovery = async (userId, secret, password) => {
    try {
        const token = await appwriteSdk.account.updateRecovery(userId, secret, password, password);
        return token;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, alerts.rikupero.titulli);
        return null;
    }
}

export const createVerification = async () => {
    try {
        const token = await appwriteSdk.account.createVerification('http://localhost:3000/auth/emailverify');
        f7.dialog.alert(alerts.krijoVerifikimSukses.mesazhi, alerts.krijoVerifikimSukses.titulli);
        return token;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, alerts.verifikim.titulli);
        return null;
    }
}

export const updateVerification = async (userId, secret) => {
    try {
        const token = await appwriteSdk.account.updateVerification(userId, secret);
        // f7.dialog.alert(token.userId, "Email Verification");
        return token;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, alerts.verifikim.titulli);
        return null;
    }
}

export const getLoggedInUser = async () => {
    try {
        const user = await appwriteSdk.account.get();
        if (user && user.emailVerification) {
            localStorage.setItem('user', JSON.stringify(user))
            return user
        };
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
        return null;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Unauthorized!");
        return null;
    }
}

export const getLocale = async () => {
    try {
        const locale = await appwriteSdk.locale.get();
        return locale;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Locale Failed!");
        return null;
    }
}