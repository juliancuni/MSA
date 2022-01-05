
import { createStore } from 'framework7/lite';
import { getLoggedInUser } from '../js/services/parse/auth.services';

const store = createStore({
    state: {
        isAuthenticated: false,
        loggedInUser: null,
    },
    getters: {
        authenticated({ state }) {
            return state.isAuthenticated;
        },
        loggedInUser({ state }) {
            return state.loggedInUser
        }
    },
    actions: {
        async checkAuthentication({ state }) {
            const user = await getLoggedInUser();
            if (user) {
                state.isAuthenticated = true;
                state.loggedInUser = user.attributes;
            } else {
                state.isAuthenticated = false;
                state.loggedInUser = null;
            }
        },
        loginUser({ state }, user) {
            state.loggedInUser = user;
            state.isAuthenticated = true;
        },
        logoutUser({ state }) {
            state.isAuthenticated = false;
            state.loggedInUser = null;
        }
    },
})
export default store;
