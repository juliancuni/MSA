import { f7 } from 'framework7-svelte';
import Parse from "./parse.sdk";
import { getLoggedInUser } from './auth.services';
const UserProfile = new Parse.Object.extend("UserProfile");
const acl = new Parse.ACL();

acl.setPublicReadAccess(false);
acl.setPublicWriteAccess(false);

export const get = async () => {
    // f7.progressbar.show();
    checkProgressBar();
    try {
        const currentUser = await getLoggedInUser();
        const userProfileQuery = new Parse.Query(UserProfile);
        const userProfile = await userProfileQuery.first();
        // console.log(userProfile)
        f7.progressbar.hide();
        return userProfile;
    } catch (error) {
        f7.progressbar.hide();
        console.log(error);
        return null;
    }
}

export const create = async (userProfile, user) => {
    let newProfile = new UserProfile();
    newProfile.add(userProfile);
    newProfile.set('user', user);
    acl.setReadAccess(user._getId(), true);
    acl.setWriteAccess(user._getId(), true)
    newProfile.setACL(acl);
    f7.progressbar.show();
    try {
        const profile = await newProfile.save();
        f7.progressbar.hide();
        return profile;
    } catch (error) {
        console.log(error);
        f7.progressbar.hide();
        return null;
    }
}

export const update = async (userProfile) => {
    userProfile.className = "UserProfile"
    let updatedProfile = Parse.Object.fromJSON(userProfile);
    try {
        const profile = await updatedProfile.save(updatedProfile.attributes);
        console.log(profile);
        return profile;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const checkProgressBar = () => {
}