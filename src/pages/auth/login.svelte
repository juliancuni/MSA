<script>
    import {
        Page,
        LoginScreenTitle,
        List,
        ListInput,
        Button,
        ListButton,
    } from "framework7-svelte";
    import Footer from "./components/footer.svelte";
    import loggedInUser, { loginUser } from "../../js/stores/auth.store";
    import { t } from "../../js/i18n";
    import validation from "../../js/form-validation";
    export let f7router;
    export let f7route;
    f7router;
    f7route;

    let fields = {
        username: import.meta.env.VITE_USERNAME,
        password: import.meta.env.VITE_PASSWORD,
    };
    let errors = { username: "", password: "" };
    let isFormValid = false;

    $: loginpage = $t("login");
    $: ui = $t("ui");

    const login = async () => {
        isFormValid = true;
        if (!validation.inputEmpty(fields.username)) {
            errors.username = ui.validation.inputbosh;
            isFormValid = false;
        } else {
            errors.username = "";
        }
        if (!validation.inputEmpty(fields.password)) {
            errors.password = ui.validation.inputbosh;
            isFormValid = false;
        } else if (!validation.passwordShort(fields.password)) {
            errors.password = ui.validation.fjalekalimiShkurter;
            isFormValid = false;
        } else {
            errors.password = "";
        }
        if (isFormValid) {
            await loginUser(fields.username, fields.password);
        }
    };
</script>

<!-- <svelte:window on:keydown={handleKeydown} /> -->
<Page noToolbar noNavbar noSwipeback loginScreen name="login">
    <LoginScreenTitle>{loginpage.titulli}</LoginScreenTitle>
    <List form>
        <ListInput
            label={ui.input.perdoruesiOseEmail.label}
            type="text"
            name="username"
            placeholder={ui.input.perdoruesiOseEmail.placeholder}
            value={fields.username}
            onInput={(e) => (fields.username = e.target.value)}
            errorMessageForce={errors.username}
            errorMessage={errors.username}
        />
        <ListInput
            label={ui.input.fjalekalimi.label}
            type="password"
            name="password"
            placeholder={ui.input.fjalekalimi.placeholder}
            value={fields.password}
            onInput={(e) => (fields.password = e.target.value)}
            errorMessageForce={errors.password}
            errorMessage={errors.password}
        />
    </List>
    <List>
        <Button raised onClick={login}>{loginpage.button}</Button>
        <ListButton color="green" href="/auth/register"
            >{ui.button.regjistro}</ListButton
        >
    </List>
    <Footer />
</Page>
