import { f7 } from 'framework7-svelte';
import { appwriteSdk } from './appwrite.sdk';

export const login = async (email, password) => {
    try {
        const session = await appwriteSdk.account.createSession(email, password);
        localStorage.setItem('sessionId', session.$id);
        return session
    } catch (error) {
        // f7.dialog.alert(error.message, "Login Failed");
        f7.notification.create({
            title: 'microservices.al',
            // titleRightText: 'now',
            subtitle: "Login Failed",
            text: error.message,
            closeOnClick: true,
            closeTimeout: 5000
        }).open();
        return null;
    }
}

export const logout = async (sessionId) => {
    try {
        await appwriteSdk.account.deleteSession(sessionId);
        localStorage.removeItem('sessionId')
        localStorage.removeItem('user')
        return true;
    } catch (error) {
        f7.dialog.alert(error.message, "Logout Failed");
        return false;
    }
}

export const register = async ({ fullname, email, password }) => {
    try {
        const user = await appwriteSdk.account.create(email, password, fullname);
        if (user) localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        f7.dialog.alert(error.message, "Register Failed");
    }
}

export const getLoggedInUser = async () => {
    try {
        const user = await appwriteSdk.account.get();
        if (user) localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        f7.dialog.alert(error.message, "Unauthorized!");
    }
}

export const getLocale = async () => {
    try {
        const locale = await appwriteSdk.locale.get();
        return locale;
    } catch (error) {
        f7.dialog.alert(error.message, "Locale Failed!");
        return null;
    }
}