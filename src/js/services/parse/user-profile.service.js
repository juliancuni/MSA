import { f7 } from 'framework7-svelte';
import Parse from "./parse.sdk";
import { getLoggedInUser } from './auth.services';
const UserProfile = new Parse.Object.extend("UserProfile");
// const acl = new Parse.ACL();

// acl.setPublicReadAccess(false);
// acl.setPublicWriteAccess(false);

export const getUserProfile = async () => {
    try {
        // f7.progressbar.show();
        const currentUser = await getLoggedInUser();
        const userProfileQuery = new Parse.Query(UserProfile);
        userProfileQuery.equalTo('user', currentUser)
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
    // acl.setReadAccess(user._getId(), true);
    // acl.setWriteAccess(user._getId(), true);
    // newProfile.setACL(acl);
    try {
        f7.progressbar.show();
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
    userProfile.className = "UserProfile"
    let avatar;
    let updatedProfile = Parse.Object.fromJSON(userProfile);

    if (userProfile.avatar.avatar) {
        avatar = new Parse.File(userProfile.avatar.name, { base64: userProfile.avatar.avatar }, userProfile.avatar.type);
        updatedProfile.set('avatar', avatar);
    }
    try {
        f7.progressbar.show();
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

export const getUsersProfile = async () => {
    try {
        f7.progressbar.show();
        const usersProfileQuery = new Parse.Query(UserProfile);
        const usersProfile = await usersProfileQuery.find();
        f7.progressbar.hide();
        return usersProfile;
    } catch (error) {
        f7.progressbar.hide();
        f7.dialog.alert(`${error.code}: ${error.message}`, "Error");
        return null;
    }
}
