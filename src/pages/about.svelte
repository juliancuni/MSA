<script>
    import { Page, Block } from "framework7-svelte";
    import { t } from "../js/i18n";
</script>

<Page name="about">
    <Block strong>
        <p>{$t("about.title")}</p>
    </Block>
</Page>
