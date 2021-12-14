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
    import {
        login,
        logout,
        register,
        createVerification,
    } from "../../js/services/auth.services";
    import { t } from "../../js/i18n";
    import validation from "../../js/form-validation";
    export let f7router;
    export let f7route;

    let fields = { fullName: "", email: "", password: "", passwordRepeat: "" };
    let errors = { fullName: "", email: "", password: "", passwordRepeat: "" };
    let isFormValid = false;

    $: registerpage = $t("regjistro");
    $: loginpage = $t("login");
    $: ui = $t("ui");

    const registerUser = async () => {
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
            f7.progressbar.show();

            const user = await register(
                fields.fullName,
                fields.email,
                fields.password
            );
            if (user) {
                const session = await login(fields.email, fields.password);
                if (session) {
                    await createVerification();
                }
                f7router.navigate("/auth/login");
            }
            f7.progressbar.hide();
        }
    };
    const handleKeydown = (e) => {
        if (e.keyCode === 13) {
            registerUser();
        }
    };
</script>

<svelte:window on:keydown={handleKeydown} />

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
        <Button raised onClick={registerUser}>{ui.button.ruaj}</Button>
        <ListButton color="green" href="/auth/login"
            >{loginpage.button}</ListButton
        >
    </List>
    <Footer />
</Page>
