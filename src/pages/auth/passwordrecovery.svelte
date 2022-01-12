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

    import { passwordResetCloud } from "../../js/services/parse/auth.services";

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
    const resetPassword = async () => {
        isFormValid = true;
        if (!validation.inputEmpty(fields.password)) {
            errors.password = ui.validation.inputbosh;
            isFormValid = false;
        } else if (!validation.passwordShort(fields.password)) {
            errors.password = ui.validation.fjalekalimiShkurter;
            isFormValid = false;
        } else {
            errors.password = "";
        }
        if (!validation.inputEmpty(fields.passwordRepeat)) {
            errors.passwordRepeat = ui.validation.inputbosh;
            isFormValid = false;
        } else if (fields.password !== fields.passwordRepeat) {
            errors.passwordRepeat = ui.validation.fjalekalimetNukPerputhen;
            isFormValid = false;
        } else {
            errors.passwordRepeat = "";
        }
        if (isFormValid) {
            f7.progressbar.show();

            if (parseInt(appid) * 1000 < Date.now()) {
                f7.dialog.alert(
                    ui.alerts.rikuperoFailExpired.mesazhi,
                    ui.alerts.rikuperoFailExpired.titulli
                );
            } else if (!username || !server_token) {
                f7.dialog.alert(
                    ui.alerts.rikuperoFailParams.mesazhi,
                    ui.alerts.rikuperoFailParams.titulli
                );
            } else {
                const token = await passwordResetCloud(
                    server_token,
                    fields.password
                );
                if (token) {
                    //TODO Translations
                    f7.dialog.alert(
                        ui.alerts.rikuperoSukses.mesazhi,
                        ui.alerts.rikuperoSukses.titulli,
                        () => {
                            f7router.navigate("/auth/login");
                        }
                    );
                }
            }
            f7.progressbar.hide();
        }
    };
</script>

<Page noToolbar noNavbar noSwipeback loginScreen name="login">
    <LoginScreenTitle>{rikuperoUpdatePage.titulli}</LoginScreenTitle>
    <Block strong inset>
        <p>{rikuperoUpdatePage.udhezim}</p>
    </Block>
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
        <ListInput
            label={ui.input.fjalekalimiPrape.label}
            type="password"
            placeholder={ui.input.fjalekalimiPrape.placeholder}
            value={fields.passwordRepeat}
            onInput={(e) => (fields.passwordRepeat = e.target.value)}
            errorMessageForce={errors.passwordRepeat}
            errorMessage={errors.passwordRepeat}
        />
    </List>
    <List>
        <Button raised onClick={resetPassword}
            >{ui.button.resetFjalekalimin}</Button
        >
        <ListButton color="green" href="/auth/login"
            >{ui.button.login}</ListButton
        >
    </List>
    <Footer />
</Page>
