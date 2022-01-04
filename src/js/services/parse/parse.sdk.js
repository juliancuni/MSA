import Parse from 'parse/dist/parse.min.js';
// import Parse from 'parse';
const appId = import.meta.env.VITE_PARSE_APPID;
const jsKey = import.meta.env.VITE_PARSE_JSKEY;
const serverUrl = import.meta.env.VITE_PARSE_ENDPOINT;

Parse.initialize(appId, jsKey);
Parse.serverURL = serverUrl;

export default Parse;
// export const UserSdk = new Parse.User();