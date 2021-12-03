<script>
    import {
        f7,
        Page,
        LoginScreenTitle,
        List,
        ListInput,
        Button,
    } from "framework7-svelte";
    import Footer from "./components/footer.svelte";
    export let f7router;

    let email = "";
    let password = "";

    function signIn() {
    }
</script>

<Page noToolbar noNavbar noSwipeback loginScreen name="login">
    <LoginScreenTitle>{f7.name}</LoginScreenTitle>
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
        <Button raised onClick={signIn}>Sign In</Button>
    </List>
    <Footer />
</Page>
