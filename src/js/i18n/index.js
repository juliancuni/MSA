import { derived, writable } from "svelte/store";
import translations from "./translations";

const localeString = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
export const lcl = writable(localeString);
export const locales = Object.keys(translations);

const translate = (lcl, key, vars) => {
    // Let's throw some errors if we're trying to use keys/locales that don't exist.
    // We could improve this by using Typescript and/or fallback values.
    if (!key) throw new Error("no key provided to $t()");
    if (!lcl) throw new Error(`no translation for key "${key}"`);

    // Grab the translation from the translations object.
    let text = translations[lcl][key];

    if (!text) throw new Error(`no translation found for ${lcl}.${key}`);

    // Replace any passed in variables in the translation string.
    Object.keys(vars).map((k) => {
        const regex = new RegExp(`{{${k}}}`, "g");
        text = text.replace(regex, vars[k]);
    });

    return text;
}

export const t = derived(lcl, ($lcl) => (key, vars = {}) => {
    return translate($lcl, key, vars)
});

export const locale = {
    subscribe: lcl.subscribe,
    set: (str) => {
        localStorage.setItem('i18n', str);
        lcl.set(str);
    }
}