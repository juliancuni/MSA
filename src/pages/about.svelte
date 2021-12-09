<script>
    import { Page, Block, BlockTitle } from "framework7-svelte";
    import { t } from "../js/i18n";
    $: about = $t("about");
</script>

<Page name="about">
    <BlockTitle>{about.titulli}</BlockTitle>
    <Block strong>
        <p>About {about.njoftim}</p>
    </Block>
</Page>
