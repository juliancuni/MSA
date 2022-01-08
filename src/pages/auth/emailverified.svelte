<script>
    import { f7, Page, Block, BlockTitle, Link } from "framework7-svelte";
    import { onMount } from "svelte";
    import loggedInUser, { logoutUser } from "../../js/stores/user.store";
    export let f7route;
    export let f7router;
    f7route;
    f7router;
    onMount(async () => {
        if ($loggedInUser) {
            f7.dialog.alert("Emaili u verifikua me sukses", "Sukses");
            await logoutUser();
        }
    });
</script>

<Page class="grid-demo">
    <Block strong inset>
        <BlockTitle>Email u verifikua me sukses!</BlockTitle>
        <Link href="/auth/login">Login</Link>
    </Block>
</Page>

<style>
    :global(.grid-demo div[class*="col"]) {
        background: #fff;
        text-align: center;
        color: #000;
        border: 1px solid #ddd;
        padding: 5px;
        margin-bottom: 15px;
        font-size: 12px;
    }
    :global(.grid-resizable-demo) {
        --f7-grid-row-gap: 16px;
    }
    :global(.grid-resizable-demo div[class*="col"]) {
        margin-bottom: 0;
    }
    :global(.grid-resizable-demo .demo-col-center-content) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
