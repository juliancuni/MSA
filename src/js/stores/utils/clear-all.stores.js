import loggedInUser from "../auth.store";
import { userProfile, usersProfile } from "../users.store";

const clearAllStores = () => {
    loggedInUser.set(null);
    userProfile.set(null);
    usersProfile.set(null);
}

export default clearAllStores;