<script>
    import {
        Page,
        Block,
        BlockTitle,
    } from "framework7-svelte";
    import { t } from "../js/i18n";

    export let f7route;
    export let f7router;
    f7router;
    f7route;

    $: homepage = $t("home");

</script>

<Page name="home">
    <BlockTitle>{homepage.titulli}</BlockTitle>
    <Block strong>
        <p>Home {homepage.njoftim}</p>
    </Block>
</Page>
