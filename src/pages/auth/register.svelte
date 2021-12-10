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

    export let f7router;
    export let f7route;

    $: registerpage = $t("regjistro");
    $: loginpage = $t("login");
    $: ui = $t("ui");

    let fullName = "JC";
    let email = "julian.cuni@microservices.al";
    let password = "36638833";
    let passwordRepeat = "36638833";
    // let fullName = "";
    // let email = "";
    // let password = "";
    // let passwordRepeat = "";
    const registerUser = async () => {
        f7.progressbar.show();
        const user = await register(fullName, email, password);
        if (user) {
            const session = await login(email, password);
            if (session) {
                await createVerification();
            }
            f7router.navigate("/auth/login");
        }
        f7.progressbar.hide();
    };
</script>

<Page noToolbar noNavbar noSwipeback loginScreen name="login">
    <LoginScreenTitle>{registerpage.titulli}</LoginScreenTitle>
    <List form>
        <ListInput
            label={ui.input.emriPlote.label}
            type="text"
            placeholder={ui.input.emriPlote.placeholder}
            value={fullName}
            onInput={(e) => (fullName = e.target.value)}
        />
        <ListInput
            label={ui.input.email.label}
            type="email"
            placeholder={ui.input.email.placeholder}
            value={email}
            onInput={(e) => (email = e.target.value)}
        />
        <ListInput
            label={ui.input.fjalekalimi.label}
            type="password"
            placeholder={ui.input.fjalekalimi.placeholder}
            value={password}
            onInput={(e) => (password = e.target.value)}
        />
        <ListInput
            label={ui.input.fjalekalimiPrape.label}
            type="password"
            placeholder={ui.input.fjalekalimiPrape.placeholder}
            value={passwordRepeat}
            onInput={(e) => (passwordRepeat = e.target.value)}
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
