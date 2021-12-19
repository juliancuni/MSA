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

</script>

<Page name="home">
    <BlockTitle>{homepage.titulli}</BlockTitle>
    <Block strong>
        <p>Home {homepage.njoftim}</p>
    </Block>
</Page>
