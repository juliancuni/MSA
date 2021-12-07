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

    export let f7router;
    export let f7route;

    let email = "julian.cuni@microservices.al";
    let password = "36638833";

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
    <LoginScreenTitle>{f7.name} Login</LoginScreenTitle>
    <List form>
        <ListInput
            label="Email"
            type="email"
            placeholder="email@domain.al"
            value={email}
            onInput={(e) => (email = e.target.value)}
        />
        <ListInput
            label="Password"
            type="password"
            placeholder="Your password"
            value={password}
            onInput={(e) => (password = e.target.value)}
        />
    </List>
    <List>
        <Button raised onClick={loginUser}>Login</Button>
        <ListButton color="green" href="/auth/register">Register</ListButton>
    </List>
    <Footer />
</Page>
