<script>
    import {
        f7,
        Page,
        LoginScreenTitle,
        List,
        ListInput,
        Button,
        ListButton,
        Block,
    } from "framework7-svelte";
    import Footer from "./components/footer.svelte";
    import { createRecovery } from "../../js/services/auth.services";
    import store from "../../js/store";
    import { t } from "../../js/i18n";

    export let f7router;
    export let f7route;

    $: rikuperopage = $t("rikupero");
    $: ui = $t("ui");

    // let email = "julian.cuni@microservices.al";
    let email = "";

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
    <LoginScreenTitle>{rikuperopage.titulli}</LoginScreenTitle>
    <Block strong inset>
        <p>{rikuperopage.udhezim}</p>
    </Block>
    <List form>
        <ListInput
            label={ui.input.email.label}
            type="email"
            placeholder={ui.input.email.placeholder}
            value={email}
            onInput={(e) => (email = e.target.value)}
        />
    </List>
    <List>
        <Button raised onClick={recoverPassword}>{ui.button.dergoEmail}</Button>
        <ListButton color="green" href="/auth/login">{ui.button.login}</ListButton>
    </List>
    <Footer />
</Page>
