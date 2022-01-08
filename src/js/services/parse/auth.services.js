import { f7 } from 'framework7-svelte';
import Parse from "./parse.sdk";
import { localeString as locale } from "../../i18n";
import translations from '../../i18n/translations'
const alerts = translations[locale].ui.alerts;
const auth = translations[locale].auth;

// const UserSdk = new Parse.User();

export const login = async (username, password) => {
    f7.progressbar.show();
    try {
        const user = await Parse.User.logIn(username, password);
        f7.progressbar.hide();
        return user;
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
        f7.progressbar.hide();
        return null;
    }
}

export const register = async (email, username, password) => {
    f7.progressbar.show();
    try {
        const user = new Parse.User();
        user.setUsername(username);
        user.setEmail(email)
        user.setPassword(password)
        const u = await user.signUp();
        f7.dialog.alert(alerts.krijoVerifikimSukses.mesazhi, alerts.krijoVerifikimSukses.titulli);
        f7.progressbar.hide();
        return u;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Regjistrimi Deshtoi");
        f7.progressbar.hide();
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
        f7.dialog.alert(`${error.code}: ${error.message}`, "Error");
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

export const changePassword = async (username, oldPassword, newPassword) => {
    try {
        const res = await Parse.User.verifyPassword(username, oldPassword);

        if (res) {
            const user = await Parse.User.current();
            user.setPassword(newPassword);
            const updatedUser = await user.save();
            f7.dialog.alert(`Fjalekalimi u ndryshua. Ju duhet te logoheni serish.`, "Sukses");
            return updatedUser;
        }
        return null;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Error");
        return null;
    }
}

export const changeUsername = async (username) => {
    const user = Parse.User.current();
    user.setUsername(username)
    try {
        const updatedUser = await user.save();
        f7.dialog.alert(`Perdoruesi u ndryshua me sukses. Ju duhet te logoheni serish.`, "Sukses");
        return updatedUser;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Error");
        return null;
    }

}

export const changeEmail = async (email) => {
    const user = Parse.User.current();
    user.setEmail(email)
    try {
        const updatedUser = await user.save();
        f7.dialog.alert(`Email u ndryshua me sukses. Ju duhet te logoheni serish.`, "Sukses");
        return updatedUser;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Error");
        return null;
    }
}
