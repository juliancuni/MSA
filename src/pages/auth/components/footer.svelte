<script>
    import { f7, BlockFooter, Link } from "framework7-svelte";
    import { t } from "../../../js/i18n";
    $: auth = $t("auth");
    $: ui = $t("ui");
</script>

<br />
<br />
<BlockFooter>
    <Link href="/">{auth.links.homepage}</Link> |
    <Link href="/auth/createpasswordrecovery">{auth.links.rikupero}</Link> |
    <Link
        onClick={() =>
            f7.dialog.alert(ui.alerts.kontakt.mesazhi, ui.alerts.kontakt.titulli)}
        >{auth.links.kontakt}</Link
    >
</BlockFooter>
