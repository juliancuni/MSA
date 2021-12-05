<script context="module">
    import store from "../js/store";
    import { t } from "../js/i18n";
    store.dispatch("checkAuthentication");

    // const user = store.getters.loggedInUser;
</script>

<script>
    import { Page, Block, useStore } from "framework7-svelte";
    let user = useStore("loggedInUser", (data) => user = data);
</script>

<Page name="home">
    <Block strong>
        <p>{$t("homepage.title")}</p>
        <pre>{JSON.stringify(user?.emailVerification)}</pre>
    </Block>
</Page>
