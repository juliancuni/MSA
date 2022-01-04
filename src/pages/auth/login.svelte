<script>
    import {
        f7,
        Page,
        LoginScreenTitle,
        List,
        ListInput,
        Button,
        ListButton,
        useStore,
    } from "framework7-svelte";
    import Footer from "./components/footer.svelte";
    import { login } from "../../js/services/parse/auth.services";
    import store from "../../js/store";
    import { t } from "../../js/i18n";
    import validation from "../../js/form-validation";
    export let f7router;
    export let f7route;

    let fields = {
        username: import.meta.env.VITE_USERNAME,
        password: import.meta.env.VITE_PASSWORD,
    };
    let errors = { username: "", password: "" };
    let isFormValid = false;

    $: loginpage = $t("login");
    $: ui = $t("ui");

    const loginUser = async () => {
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
            f7.progressbar.show();
            const user = await login(fields.username, fields.password);
            if (user) {
                f7.loginScreen.close();
                store.dispatch("loginUser", user.attributes);
                f7router.navigate("/app/dashboard");
            }
            f7.progressbar.hide();
        }
    };

    $: userLoggedin = useStore("loggedInUser", (val) => (userLoggedin = val));

    const handleKeydown = (e) => {
        if (e.keyCode === 13) {
            loginUser();
        }
    };
</script>

<svelte:window on:keydown={handleKeydown} />

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
        <Button raised onClick={loginUser}>{loginpage.button}</Button>
        <ListButton color="green" href="/auth/register"
            >{ui.button.regjistro}</ListButton
        >
    </List>
    <Footer />
</Page>
