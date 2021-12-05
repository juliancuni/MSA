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

    import store from "../../js/store";
    import {
        login,
        logout,
        register,
        createVerification,
    } from "../../js/services/auth.services";

    export let f7router;
    export let f7route;

    let fullName = "JC";
    let email = "julian.cuni@microservices.al";
    let password = "36638833";
    let passwordRepeat = "36638833";
    const registerUser = async () => {
        f7.progressbar.show();
        const user = await register(fullName, email, password);
        if (user) {
            const session = await login(email, password);
            if (session) {
                await createVerification(email);
                // await logout(session.$id);
            }
            f7router.navigate("/auth/login");
        }
        // if(user)
        // f7router.navigate("/");
        f7.progressbar.hide();
    };
</script>

<Page noToolbar noNavbar noSwipeback loginScreen name="login">
    <LoginScreenTitle>{f7.name} Register</LoginScreenTitle>
    <List form>
        <ListInput
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onInput={(e) => (fullName = e.target.value)}
        />
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
        <ListInput
            label="Repeat"
            type="password"
            placeholder="Repeat password"
            value={passwordRepeat}
            onInput={(e) => (passwordRepeat = e.target.value)}
        />
    </List>
    <List>
        <Button raised onClick={registerUser}>Register</Button>
        <ListButton color="green" href="/auth/login">To Login</ListButton>
    </List>
    <Footer />
</Page>
