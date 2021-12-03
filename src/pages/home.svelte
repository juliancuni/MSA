<script context="module">
    import store from "../js/store";
    import { t } from "../js/i18n";

    store.dispatch("checkAuthentication");
</script>

<script>
    import { Page, Block } from "framework7-svelte";
</script>

<Page name="home">
    <Block strong>
        <p>{$t("homepage.title")}</p>
    </Block>
</Page>
