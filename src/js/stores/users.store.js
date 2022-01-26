
import { writable } from "svelte/store";
import { getUserProfile, create, update, getUsersProfile } from '../services/parse/user-profile.service';

export const userProfile = writable(null);
export const usersProfile = writable([]);

export const getLoggedInUserProfile = async () => {
    const profile = await getUserProfile();
    if (profile) userProfile.set(profile);
}

export const createLoggedInUserProfile = async (profile, user) => {
    const newProfile = await create(profile, user);
    if (newProfile) userProfile.set(newProfile);
}

export const setLoggedInUserProfile = async (updatedProfile) => {
    const profile = await update(updatedProfile);
    if (profile) userProfile.set(profile);
}

export const getAllUsersProfile = async () => {
    const allUsersProfile = await getUsersProfile();
    if (allUsersProfile) usersProfile.set(allUsersProfile);
}


// export default usersProfile;