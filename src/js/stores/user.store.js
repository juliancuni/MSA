import { f7 } from 'framework7-svelte';
import { writable } from 'svelte/store';
import { getLoggedInUser, login, logout, register, changePassword, changeUsername, changeEmail } from '../services/parse/auth.services';
import { createLoggedInUserProfile, getLoggedInUserProfile } from './user-profile.store';
import clearAllStores from './utils/clear-all.stores';

const loggedInUser = writable(null);

export const loginUser = async (identity, password) => {
    const user = await login(identity, password);
    if (user) {
        loggedInUser.set(user)
        f7.views.main.router.navigate("/app/dashboard");
    };
}

export const logoutUser = async () => {
    await logout();
    clearAllStores();
    f7.views.main.router.navigate("/auth/login");
}

export const checkAuthentication = async () => {
    const user = await getLoggedInUser();
    if (user) {
        loggedInUser.set(user)
        await getLoggedInUserProfile();
    };
}

export const registerUser = async (fullname, email, username, password) => {
    const user = await register(email, username, password);
    if (user) {
        loggedInUser.set(user);
        await createLoggedInUserProfile(fullname, user);
        logoutUser();
    };
}

export const changeUserPassword = async (username, oldPassword, newPassword) => {
    const res = await changePassword(username, oldPassword, newPassword);
    if (res) logoutUser();
}

export const changeUserUserName = async (username) => {
    const res = await changeUsername(username);
    if (res) logoutUser();
}

export const changeUserEmail = async (email) => {
    const res = await changeEmail(email);
    if (res) logoutUser();
}

export default loggedInUser;