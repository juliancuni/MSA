
import { createStore } from 'framework7/lite';

const store = createStore({
    state: {},
    getters: {
        // authenticated({ state }) {
        //     return state.isAuthenticated;
        // },
        // loggedInUser({ state }) {
        //     return state.loggedInUser
        // },
        // userProfile({ state }) {
        //     return state.userProfile
        // }
    },
    actions: {
        // async checkAuthentication({ state }) {
        //     const user = await getLoggedInUser();
        //     if (user) {
        //         state.isAuthenticated = true;
        //         state.loggedInUser = user;
        //     } else {
        //         state.isAuthenticated = false;
        //         state.loggedInUser = null;
        //     }
        // },
        // loginUser({ state }, user) {
        //     state.loggedInUser = user;
        //     state.isAuthenticated = true;
        // },
        // logoutUser({ state }) {
        //     state.isAuthenticated = false;
        //     state.loggedInUser = null;
        // },
        // updateUser({ state }, user) {
        //     state.loggedInUser = user;
        // },
        // setUserProfile({ state }, userProfile) {
        //     state.userProfile = userProfile;
        // }
    },
})
export default store;
