<script>
    import {
        f7,
        Page,
        LoginScreenTitle,
        List,
        ListInput,
        ListButton,
        Button,
    } from "framework7-svelte";
    import Footer from "./components/footer.svelte";
    import { t } from "../../js/i18n";
    import validation from "../../js/form-validation";
    import { registerUser } from "../../js/stores/auth.store";
    export let f7router;
    export let f7route;
    f7router;
    f7route;

    let fields = {
        fullName: import.meta.env.VITE_FULLNAME,
        username: import.meta.env.VITE_USERNAME,
        email: import.meta.env.VITE_EMAIL,
        password: import.meta.env.VITE_PASSWORD,
        passwordRepeat: import.meta.env.VITE_PASSWORD,
    };
    let errors = {
        fullName: "",
        username: "",
        email: "",
        password: "",
        passwordRepeat: "",
    };
    let isFormValid = false;

    $: registerpage = $t("regjistro");
    $: loginpage = $t("login");
    $: ui = $t("ui");

    const regUser = async () => {
        isFormValid = true;
        if (!validation.inputEmpty(fields.fullName)) {
            errors.fullName = ui.validation.inputbosh;
            isFormValid = false;
        } else {
            errors.fullName = "";
        }
        if (!validation.inputEmpty(fields.email)) {
            errors.email = ui.validation.inputbosh;
            isFormValid = false;
        } else if (!validation.emailFormat(fields.email)) {
            errors.email = ui.validation.emailFormat;
            isFormValid = false;
        } else {
            errors.email = "";
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
            await registerUser(
                { emriIPlote: fields.fullName },
                fields.email,
                fields.username,
                fields.password
            );
        }
    };
</script>

<Page noToolbar noNavbar noSwipeback loginScreen name="login">
    <LoginScreenTitle>{registerpage.titulli}</LoginScreenTitle>
    <List form>
        <ListInput
            label={ui.input.emriPlote.label}
            type="text"
            placeholder={ui.input.emriPlote.placeholder}
            value={fields.fullName}
            onInput={(e) => (fields.fullName = e.target.value)}
            errorMessageForce={errors.fullName}
            errorMessage={errors.fullName}
        />
        <ListInput
            label={ui.input.perdoruesi.label}
            type="text"
            placeholder={ui.input.perdoruesi.placeholder}
            value={fields.username}
            onInput={(e) => (fields.username = e.target.value)}
            errorMessageForce={errors.username}
            errorMessage={errors.username}
        />
        <ListInput
            label={ui.input.email.label}
            type="email"
            placeholder={ui.input.email.placeholder}
            value={fields.email}
            onInput={(e) => (fields.email = e.target.value)}
            errorMessageForce={errors.email}
            errorMessage={errors.email}
        />
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
        <Button raised onClick={regUser}>{ui.button.ruaj}</Button>
        <ListButton color="green" href="/auth/login"
            >{loginpage.button}</ListButton
        >
    </List>
    <Footer />
</Page>
