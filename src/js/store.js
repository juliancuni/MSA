
import { createStore } from 'framework7/lite';

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
        checkAuthentication({ state }) {
            if (localStorage.getItem("sessionId")) {
                state.isAuthenticated = true;
            } else if (localStorage.getItem("user")) {
                state.loggedInUser = JSON.parse(localStorage.getItem("user"));
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
