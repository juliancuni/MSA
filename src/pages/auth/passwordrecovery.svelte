<script>
    import {
        f7,
        Page,
        LoginScreenTitle,
        List,
        ListInput,
        Button,
        ListButton,
        Block,
        Icon,
    } from "framework7-svelte";
    import Footer from "./components/footer.svelte";
    import { t } from "../../js/i18n";
    import validation from "../../js/form-validation";

    export let f7router;
    export let f7route;

    let fields = { password: "", passwordRepeat: "" };
    let errors = { password: "", passwordRepeat: "" };
    let isFormValid = false;

    $: rikuperoUpdatePage = $t("rikuperoUpdate");
    $: ui = $t("ui");

    const server_token = f7route.query.token;
    const appid = f7route.query.id;
    const username = f7route.query.username;
    // const resetPassword = async () => {
    //     isFormValid = true;
    //     if (!validation.inputEmpty(fields.password)) {
    //         errors.password = ui.validation.inputbosh;
    //         isFormValid = false;
    //     } else if (!validation.passwordShort(fields.password)) {
    //         errors.password = ui.validation.fjalekalimiShkurter;
    //         isFormValid = false;
    //     } else {
    //         errors.password = "";
    //     }
    //     if (!validation.inputEmpty(fields.passwordRepeat)) {
    //         errors.passwordRepeat = ui.validation.inputbosh;
    //         isFormValid = false;
    //     } else if (fields.password !== fields.passwordRepeat) {
    //         errors.passwordRepeat = ui.validation.fjalekalimetNukPerputhen;
    //         isFormValid = false;
    //     } else {
    //         errors.passwordRepeat = "";
    //     }
    //     if (isFormValid) {
    //         f7.progressbar.show();

    //         if (parseInt(appid) * 1000 < Date.now()) {
    //             f7.dialog.alert(
    //                 ui.alerts.rikuperoFailExpired.mesazhi,
    //                 ui.alerts.rikuperoFailExpired.titulli
    //             );
    //         } else if (!username || !server_token) {
    //             f7.dialog.alert(
    //                 ui.alerts.rikuperoFailParams.mesazhi,
    //                 ui.alerts.rikuperoFailParams.titulli
    //             );
    //         } else {
    //             const token = await passwordReset(
    //                 server_token,
    //                 username,
    //                 fields.password,
    //                 fields.passwordRepeat,
    //                 appid
    //             );
    //             if (token) {
    //                 //TODO Translations
    //                 f7.dialog.alert(
    //                     ui.alerts.rikuperoSukses.mesazhi,
    //                     ui.alerts.rikuperoSukses.titulli,
    //                     () => {
    //                         f7router.navigate("/auth/login");
    //                     }
    //                 );
    //             }
    //         }
    //         f7.progressbar.hide();
    //     }
    // };

    window.onload = function () {
        var urlParams = {};
        (function () {
            var pair, // Really a match. Index 0 is the full match; 1 & 2 are the key & val.
                tokenize = /([^&=]+)=?([^&]*)/g,
                // decodeURIComponents escapes everything but will leave +s that should be ' '
                re_space = function (s) {
                    return decodeURIComponent(s.replace(/\+/g, " "));
                },
                // Substring to cut off the leading '?'
                querystring = window.location.search.substring(1);

            while ((pair = tokenize.exec(querystring)))
                urlParams[re_space(pair[1])] = re_space(pair[2]);
        })();

        var base = import.meta.env.VITE_PARSE_APPID;
        var id = urlParams["id"];
        document
            .getElementById("form")
            .setAttribute(
                "action",
                base + "/apps/" + id + "/request_password_reset"
            );
        document.getElementById("username").value = urlParams["username"];
        document.getElementById("token").value = urlParams["token"];
        if (urlParams["error"]) {
            f7.dialog.alert(urlParams["error"], "Error")
            //   document.getElementById('error').appendChild(document.createTextNode(urlParams['error']));
        }
    };
</script>

<Page noToolbar noNavbar noSwipeback loginScreen name="login">
    <LoginScreenTitle>{rikuperoUpdatePage.titulli}</LoginScreenTitle>
    <Block strong inset>
        <p>{rikuperoUpdatePage.udhezim}</p>
    </Block>
    <!-- <form id="form" action="#" method="POST">
        <label>New Password</label>
        <input name="new_password" type="password" />
        <input name="utf-8" type="hidden" value="✓" />
        <input name="username" id="username" type="hidden" />
        <input name="token" id="token" type="hidden" />
        <button>Change Password</button>
    </form> -->
    <form id="form" action="#" method="POST">
        <List>
            <ListInput
                name="new_password"
                label={ui.input.fjalekalimi.label}
                type="password"
                placeholder={ui.input.fjalekalimi.placeholder}
                value={fields.password}
                onInput={(e) => (fields.password = e.target.value)}
                errorMessageForce={errors.password}
                errorMessage={errors.password}
                clearButton
            >
            <Icon icon="icon-back" />
            </ListInput>
            <!-- <ListInput
                label={ui.input.fjalekalimiPrape.label}
                type="password"
                placeholder={ui.input.fjalekalimiPrape.placeholder}
                value={fields.passwordRepeat}
                onInput={(e) => (fields.passwordRepeat = e.target.value)}
                errorMessageForce={errors.passwordRepeat}
                errorMessage={errors.passwordRepeat}
            /> -->
            <input name="utf-8" type="hidden" value="✓" />
            <input name="username" id="username" type="hidden" />
            <input name="token" id="token" type="hidden" />
        </List>
        <List>
            <!-- <Button raised onClick={resetPassword}
            >{ui.button.resetFjalekalimin}</Button
        > -->
            <Button raised type="submit">{ui.button.resetFjalekalimin}</Button>
            <ListButton color="green" href="/auth/login"
                >{ui.button.login}</ListButton
            >
        </List>
    </form>

    <Footer />
</Page>
