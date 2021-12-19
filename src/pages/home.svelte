<script context="module">
    import store from "../js/store";
    import { t } from "../js/i18n";
    store.dispatch("checkAuthentication");
</script>

<script>
    import {
        Page,
        Block,
        useStore,
        BlockTitle,
        Button,
    } from "framework7-svelte";
    let user = useStore("loggedInUser", (data) => (user = data));
    export let f7route;
    export let f7router;

    $: homepage = $t("home");

    const name = "Julian Cuni";
    const email = "juliancuni@gmail.com";
    const username = "jc";
    const password = "123456789Aa";

    import {
        login,
        register,
        logout,
        getLoggedInUser,
        requestPassRecovery,
    } from "../js/services/parse/auth.service";

    const loginUser = async () => {
        const user = await login(username, password);
    };

    const registerUser = async () => {
        const user = await register(name, email, username, password);
    };

    const logoutUser = async () => {
        await logout();
    };
    const getUser = async () => {
        await getLoggedInUser();
    };

    const resetPass = async () => {
        await requestPassRecovery(email);
    };
</script>

<Page name="home">
    <BlockTitle>{homepage.titulli}</BlockTitle>
    <Block strong>
        <p>Home {homepage.njoftim}</p>
    </Block>

    <Button onClick={loginUser}>Login</Button>
    <Button onClick={registerUser}>Register</Button>
    <Button onClick={logoutUser}>Logout</Button>
    <Button onClick={getUser}>GetUser</Button>
    <Button onClick={resetPass}>Reset Pass</Button>
</Page>
