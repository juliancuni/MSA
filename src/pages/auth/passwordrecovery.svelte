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
    } from "framework7-svelte";
    import Footer from "./components/footer.svelte";
    import { updatePasswordRecovery } from "../../js/services/auth.services";
    import { t } from "../../js/i18n";
    import validation from "../../js/form-validation";

    export let f7router;
    export let f7route;

    let fields = { password: "", passwordRepeat: "" };
    let errors = { password: "", passwordRepeat: "" };
    let isFormValid = false;

    $: rikuperoUpdatePage = $t("rikuperoUpdate");
    $: ui = $t("ui");

    const userId = f7route.query.userId;
    const secret = f7route.query.secret;
    const expire = f7route.query.expire;

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

            if (parseInt(expire) * 1000 < Date.now()) {
                f7.dialog.alert(
                    ui.alerts.rikuperoFailExpired.mesazhi,
                    ui.alerts.rikuperoFailExpired.titulli
                );
            } else if (!userId || !secret) {
                f7.dialog.alert(
                    ui.alerts.rikuperoFailParams.mesazhi,
                    ui.alerts.rikuperoFailParams.titulli
                );
            } else {
                const token = await updatePasswordRecovery(
                    userId,
                    secret,
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
    <List form>
        <ListInput
            label={ui.input.fjalekalimi.label}
            type="password"
            placeholder={ui.input.fjalekalimi.placeholder}
            value={fields.password}
            onInput={(e) => (fields.password = e.target.value)}
            errorMessageForce={errors.password}
            errorMessage={errors.password}
        />
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
