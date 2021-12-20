import { f7 } from 'framework7-svelte';
import Parse from "./parse.sdk";
import { localeString as locale } from "../../i18n";

import translations from '../../i18n/translations'
const alerts = translations[locale].ui.alerts;

// const UserSdk = new Parse.User();

export const login = async (username, password) => {
    try {
        return await Parse.User.logIn(username, password);
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Login Deshtoi");
        return null;
    }
}

export const register = async (name, email, username, password) => {
    try {
        console.log(name, email, username, password)
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

export const logout = async () => {
    try {
        const u = await Parse.User.logOut();
        console.log(u)
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

export const verifyEmail = async (link) => {
    try {
        console.log(link)
        const res = await fetch(link);
        console.log(res)
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const requestPassRecovery = async (email) => {
    try {
        const u = await Parse.User.requestPasswordReset(email);
        console.log(u)
    } catch (error) {
        console.log(error);
    }
}