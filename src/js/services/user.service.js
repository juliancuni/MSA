import { f7 } from 'framework7-svelte';
import { appwriteSdk } from './appwrite.sdk';

const loggedInUser = JSON.parse(localStorage.getItem('user'));

export const getUserProfile = async () => {
    try {
        console.log(loggedInUser.$id);
        const doc = await appwriteSdk.database.listDocuments(import.meta.env.VITE_AW_PERDORUESIT, [`user_id =${loggedInUser.$id}`])
        console.log(doc.documents)
        return doc;
    } catch (error) {
        f7.dialog.alert(error.message, "Get Profile Failed")
    }
}