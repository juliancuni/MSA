import { Appwrite } from 'appwrite';

export const appwriteSdk = new Appwrite().setEndpoint(import.meta.env.VITE_AW_ENDPOINT).setProject(import.meta.env.VITE_AW_PROJECTID);
