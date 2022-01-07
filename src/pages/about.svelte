<script>
    import { Page, Block, BlockTitle } from "framework7-svelte";
    import { t } from "../js/i18n";
    $: about = $t("about");
    export let f7router;
    export let f7route;
</script>

<Page name="about">
    <BlockTitle>{about.titulli}</BlockTitle>
    <Block strong>
        <p>About {about.njoftim}</p>
    </Block>
</Page>
