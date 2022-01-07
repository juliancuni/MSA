import { f7 } from 'framework7-svelte';
import { writable } from 'svelte/store';
import { getLoggedInUser, login, logout } from '../services/parse/auth.services';

const loggedInUser = writable(null);

export const loginUser = async (identity, password) => {
    const user = await login(identity, password);
    if (user) {
        console.log(user);
        loggedInUser.set(user)
        f7.views.main.router.navigate("/app/dashboard");
    };
}

export const logoutUser = async () => {
    await logout();
    loggedInUser.set(null);
    f7.views.main.router.navigate("/auth/login");
}

export const checkAuthentication = async () => {
    const user = await getLoggedInUser();
    if (user) {
        loggedInUser.set(user)
    };
}

export default loggedInUser;