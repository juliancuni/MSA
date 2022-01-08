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
        f7.progressbar.hide();
        return userProfile;
    } catch (error) {
        f7.progressbar.hide();
        f7.dialog.alert(`${error.code}: ${error.message}`, "Error");
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
    try {
        const profile = await newProfile.save();
        f7.progressbar.hide();
        return profile;
    } catch (error) {
        f7.dialog.alert(`${error.code}: ${error.message}`, "Error");
        f7.progressbar.hide();
        return null;
    }
}

export const update = async (userProfile) => {
    f7.progressbar.show();
    userProfile.className = "UserProfile"
    let updatedProfile = Parse.Object.fromJSON(userProfile);
    try {
        const profile = await updatedProfile.save(updatedProfile.attributes);
        f7.progressbar.hide();
        f7.dialog.alert(`Profili u ruaj me sukses`, "Sukses");
        return profile;
    } catch (error) {
        f7.progressbar.hide();
        f7.dialog.alert(`${error.code}: ${error.message}`, "Error");
        return null;
    }
}

const checkProgressBar = () => {
}