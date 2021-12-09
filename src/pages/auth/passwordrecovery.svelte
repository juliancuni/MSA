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
    import { updatePasswordRecovery } from "../../js/services/auth.services";
    import { t } from "../../js/i18n";

    export let f7router;
    export let f7route;

    $: rikuperoUpdatePage = $t("rikuperoUpdate");
    $: ui = $t("ui");

    const userId = f7route.query.userId;
    const secret = f7route.query.secret;
    const expire = f7route.query.expire;

    // let password = "366388333";
    // let passwordAgain = "366388333";

    let password = "";
    let passwordAgain = "";

    const resetPassword = async () => {
        f7.progressbar.show();
        if (parseInt(expire) * 1000 < Date.now()) {
            isExpired = true;
            f7.dialog.alert(
                "Password Recovery Link expired",
                "Password Recovery Failed!"
            );
        } else if (!userId || !secret) {
            f7.dialog.alert(
                "UserId or Secret Missing<br>Check your link and try again",
                "Wrong Params"
            );
        } else {
            const token = await updatePasswordRecovery(
                userId,
                secret,
                password
            );
            if (token) {
                f7.dialog.alert(
                    "Password reseted successfully<br>Go To Login",
                    "Success",
                    () => {
                        f7router.navigate("/auth/login");
                    }
                );
            }
        }
        f7.progressbar.hide();
    };
</script>

<Page noToolbar noNavbar noSwipeback loginScreen name="login">
    <LoginScreenTitle>{rikuperoUpdatePage.titulli}</LoginScreenTitle>
    <Block strong inset>
        <p>{rikuperoUpdatePage.udhezim}</p>
    </Block>
    <List form>
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
            value={passwordAgain}
            onInput={(e) => (passwordAgain = e.target.value)}
        />
    </List>
    <List>
        <Button raised onClick={resetPassword}
            >{ui.button.resetFjalekalimin}</Button
        >
        <ListButton color="green" href="/auth/login"
            >{ui.button.login}</ListButton
        >
    </List>
    <Footer />
</Page>
