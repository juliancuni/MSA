export default {
    inputEmpty: (email) => {
        if (email.trim() === "") {
            return false
        }
        return true;
    },
    emailFormat: (email) => {
        return String(email)
            .trim()
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    },
    passwordShort: (password) => {
        return password.length >= 6;
    }
} 