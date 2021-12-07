import { f7, app } from 'framework7-svelte';
import { appwriteSdk } from './appwrite.sdk';

export const login = async (email, password) => {
    try {
        const session = await appwriteSdk.account.createSession(email, password);
        localStorage.setItem('sessionId', session.$id);
        return session;
    } catch (error) {
        f7.dialog.alert(error.message, "Login Failed");
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
        f7.dialog.alert(error.message, "Logout Failed");
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
        f7.dialog.create({
            title: "Register Failed",
            text: error.message,
            buttons: [
                // {
                //     text: "Recover Password",
                //     color: "red",
                //     onClick: () => { console.log(f7.theme) }
                // },
                {
                    text: "Ok"
                }
            ]
        }).open()
        // f7.dialog.alert(error.message, "Register Failed");
        return null;
    }
}

export const createVerification = async () => {
    try {
        const token = await appwriteSdk.account.createVerification('http://localhost:3000/auth/emailverify');
        f7.dialog.alert(`Ne adresen tuaj te emailit<br> derguam linkun e konfirmimit. <br>Hapni adresen dhe ndiqni udhezimet per te aktivizuar llogarine qe sapo krijuat.`, "Email Verification Sent");
        return token;
    } catch (error) {
        f7.dialog.alert(error.message, "Create Verification Failed");
        return null;
    }
}

export const updateVerification = async (userId, secret) => {
    try {
        const token = await appwriteSdk.account.updateVerification(userId, secret);
        // f7.dialog.alert(token.userId, "Email Verification");
        return token;
    } catch (error) {
        console.log(error)
        f7.dialog.alert(error.message, "Email Verification Failed");
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
            title: "Email Not Verified!",
            text: `Hapni emailin ${user.email}<br> Aty do te gjeni udhezimet per te vazhduar. <br> Nese email nuk gjendet ne inbox, kontrolloni ne spam`,
            buttons: [
                {
                    text: "Resend email",
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
        // f7.dialog.alert(`Hapni emailin ${user.email}<br> Aty do te gjeni udhezimet per te vazhduar. <br> Nese email nuk gjendet ne inbox, kontrolloni ne spam`, "Email Not Verified");
        return null;
    } catch (error) {
        f7.dialog.alert(error.message, "Unauthorized!");
        return null;
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