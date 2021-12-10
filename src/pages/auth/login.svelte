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

    export let f7router;
    export let f7route;

    let email = "julian.cuni@microservices.al";
    let password = "36638833";
    // let email = "";
    // let password = "";

    $: loginpage = $t("login");
    $: ui = $t("ui");

    const loginUser = async () => {
        f7.progressbar.show();
        const session = await login(email, password);
        if (session) {
            f7.loginScreen.close();
            const user = await getLoggedInUser();
            if (user) {
                store.dispatch("loginUser", user);
                f7router.navigate("/app/dashboard");
            }
        }
        f7.progressbar.hide();
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
            value={email}
            onInput={(e) => (email = e.target.value)}
        />
        <ListInput
            label={ui.input.fjalekalimi.label}
            type="password"
            name="password"
            placeholder={ui.input.fjalekalimi.placeholder}
            value={password}
            onInput={(e) => (password = e.target.value)}
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
