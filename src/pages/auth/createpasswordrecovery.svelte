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
    import { createRecovery } from "../../js/services/auth.services";
    import store from "../../js/store";

    export let f7router;
    export let f7route;

    let email = "julian.cuni@microservices.al";

    const recoverPassword = async () => {
        f7.progressbar.show();
        const token = await createRecovery(email);
        if (token) {
            // f7router.navigate("/auth/login");
            console.log(token);
        }
        f7.progressbar.hide();
    };
</script>

<Page noToolbar noNavbar noSwipeback loginScreen name="createPasswordRecovery">
    <LoginScreenTitle>{f7.name} Recover your password</LoginScreenTitle>
    <List form>
        <ListInput
            label="Email"
            type="email"
            placeholder="email@domain.al"
            value={email}
            onInput={(e) => (email = e.target.value)}
        />
    </List>
    <List>
        <Button raised onClick={recoverPassword}>Recover</Button>
        <ListButton color="green" href="/auth/login">Login</ListButton>
    </List>
    <Footer />
</Page>
