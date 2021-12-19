import Parse from 'parse/dist/parse.min.js';
const appId = import.meta.env.VITE_PARSE_APPID || "5rZxGmn5KzrvNTbreYb5wywddK1WwItQOkUfEQT4";
const jsKey = import.meta.env.VITE_PARSE_JSKEY || "5R8a1uPQxLsKCf9lGWioPNAMwcZ5rXh8ojiIIdCg";
const serverUrl = import.meta.env.VITE_PARSE_ENDPOINT || "https://api-dev.apps.microservices.al/dev";

Parse.initialize(appId, jsKey);
Parse.serverURL = serverUrl;

export default Parse;
// export const UserSdk = new Parse.User();