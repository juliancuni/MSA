import { writable } from "svelte/store";

import { get, create, update } from '../services/parse/user-profile.service';

const userProfile = writable(null);

export const getLoggedInUserProfile = async () => {
    const profile = await get();
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

export default userProfile;