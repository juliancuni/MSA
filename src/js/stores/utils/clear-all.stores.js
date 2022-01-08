import loggedInUser from "../user.store";
import userProfile from "../user-profile.store";

const clearAllStores = () => {
    loggedInUser.set(null);
    userProfile.set(null);
}

export default clearAllStores;