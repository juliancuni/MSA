import { f7 } from 'framework7-svelte';
import Parse from "./parse.sdk";

// const UserSdk = new Parse.User();

export const login = async (username, password) => {
    try {
        const user = await Parse.User.logIn(username, password);
        console.log(user);
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Login Deshtoi");
    }
}

export const register = async (name, email, username, password) => {
    const user = new Parse.User();
    user.setUsername(username);
    user.setEmail(email)
    user.setPassword(password)
    try {
        const u = await user.signUp()
        console.log(u)
    } catch (error) {
        console.log(error);
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
        const u = await Parse.User.current();
        console.log(u)
    } catch (error) {
        console.log(error);
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