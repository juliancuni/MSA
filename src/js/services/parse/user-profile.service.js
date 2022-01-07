import { f7 } from 'framework7-svelte';
import Parse from "./parse.sdk";

const UserProfile = new Parse.Object.extend("UserProfile");
const loggedInUser = Parse.User.current();

export const loadLoggedInUserProfile = async () => {
    try {
        const userProfileQuery = new Parse.Query(UserProfile);

        // userProfileQuery.include("user");
        const userProfile = await userProfileQuery.first();
        // console.log(userProfile)
        return userProfile;
    } catch (error) {
        console.log(error);
        return null
    }
}

export const upsert = async (userProfile, user) => {
    try {
        const newProfile = new UserProfile();
        newProfile.set(userProfile);
        newProfile.set('user', user);
        const profile = await newProfile.save();
        if (profile) {
            const updatedUser = await user.save();
        }
        return { profile, updatedUser };
    } catch (error) {
        console.log(error);
        return null;
    }
} 