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
    import { createRecovery } from "../../js/services/auth.services";
    import store from "../../js/store";
    import { t } from "../../js/i18n";
    import validation from "../../js/form-validation";

    export let f7router;
    export let f7route;

    $: rikuperopage = $t("rikupero");
    $: ui = $t("ui");

    let email = "";
    let error = "";
    let isFormValid = false;

    const recoverPassword = async () => {
        isFormValid = true;
        if (!validation.inputEmpty(email)) {
            error = ui.validation.inputbosh;
            isFormValid = false;
        } else if (!validation.emailFormat(email)) {
            error = ui.validation.emailFormat;
            isFormValid = false;
        } else {
            error = "";
        }
        if (isFormValid) {
            f7.progressbar.show();
            const token = await createRecovery(email);
            if (token) {
                f7router.navigate("/auth/login");
            }
            f7.progressbar.hide();
        }
    };
</script>

<Page noToolbar noNavbar noSwipeback loginScreen name="createPasswordRecovery">
    <LoginScreenTitle>{rikuperopage.titulli}</LoginScreenTitle>
    <Block strong inset>
        <p>{rikuperopage.udhezim}</p>
    </Block>
    <List form>
        <ListInput
            label={ui.input.email.label}
            type="email"
            placeholder={ui.input.email.placeholder}
            value={email}
            onInput={(e) => (email = e.target.value)}
            errorMessageForce={error}
            errorMessage={error}
        />
    </List>
    <List>
        <Button raised onClick={recoverPassword}>{ui.button.dergoEmail}</Button>
        <ListButton color="green" href="/auth/login"
            >{ui.button.login}</ListButton
        >
    </List>
    <Footer />
</Page>
