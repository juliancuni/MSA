<script>
    import { f7, BlockFooter, Link } from "framework7-svelte";
    import { t } from "../../../js/i18n";
    $: auth = $t("auth");
</script>

<br />
<br />
<BlockFooter>
    <Link href="/">{auth.links.homepage}</Link> |
    <Link href="/auth/createpasswordrecovery">{auth.links.rikupero}</Link> |
    <Link
        onClick={() =>
            f7.dialog.alert(auth.alerts.kontakt.mesazhi, auth.alerts.kontakt.titulli)}
        >{auth.links.kontakt}</Link
    >
</BlockFooter>
