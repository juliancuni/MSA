<script>
    import {
        f7,
        Page,
        LoginScreenTitle,
        List,
        ListInput,
        Button,
        ListButton,
    } from "framework7-svelte";
    import Footer from "./components/footer.svelte";
    import { login, getLoggedInUser } from "../../js/services/auth.services";
    import store from "../../js/store";
    import { t } from "../../js/i18n";
    import validation from "../../js/form-validation";
    export let f7router;
    export let f7route;

    // let email = "julian.cuni@microservices.al";
    // let password = "36638833";
    // let email = "";
    // let password = "";
    let fields = { email: "", password: "" };
    let errors = { email: "", password: "" };
    let isFormValid = false;

    $: loginpage = $t("login");
    $: ui = $t("ui");

    const loginUser = async () => {
        isFormValid = true;
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
        if (isFormValid) {
            f7.progressbar.show();
            const session = await login(fields.email, fields.password);
            if (session) {
                f7.loginScreen.close();
                const user = await getLoggedInUser();
                if (user) {
                    console.log(f7route);
                    store.dispatch("loginUser", user);
                    f7router.navigate("/app/dashboard");
                }
            }
            f7.progressbar.hide();
        }
    };
</script>

<Page noToolbar noNavbar noSwipeback loginScreen name="login">
    <LoginScreenTitle>{loginpage.titulli}</LoginScreenTitle>
    <List form>
        <ListInput
            label={ui.input.email.label}
            type="email"
            name="email"
            placeholder={ui.input.email.placeholder}
            value={fields.email}
            onInput={(e) => (fields.email = e.target.value)}
            errorMessageForce={errors.email}
            errorMessage={errors.email}
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
        <Button raised onClick={loginUser}>{loginpage.button}</Button>
        <ListButton color="green" href="/auth/register"
            >{ui.button.regjistro}</ListButton
        >
    </List>
    <Footer />
</Page>
