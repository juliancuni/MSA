<script>
    import { f7, Page, Block, BlockTitle, Link } from "framework7-svelte";
    // import { onMount } from "svelte";
    // import { verifyEmail } from "../../js/services/parse/auth.services";
    // import store from "../../js/store";
    // import { t } from "../../js/i18n";
    export let f7route;
    export let f7router;

    // const appId = f7route.params.appid;
    // const token = f7route.query.token;
    // const username = f7route.query.username;
    // const verificationLink =
    //     import.meta.env.VITE_PARSE_ENDPOINT +
    //     "/apps/" +
    //     appId +
    //     "/verify_email?token=" +
    //     token +
    //     "&username=" +
    //     username;
    // let response = false;

    // onMount(async () => {
    //     if (!appId || !token) {
    //         f7.dialog.alert(
    //             "Link i parregullt.<br>Kontrolloni Linkun ne email dhe provoni serish",
    //             "Gabim!"
    //         );
    //     } else {
    //         response = await verifyEmail(verificationLink);
    //         // token = await updateVerification(userId, secret);
    //         // if (token) {
    //         //     if (localStorage.getItem("sessionId")) {
    //         //         await logout(localStorage.getItem("sessionId"));
    //         //         store.dispatch("logoutUser");
    //         //     }
    //         // }
    //     }
    // });
</script>

<Page class="grid-demo">
    <Block strong inset>
        <BlockTitle>Email u verifikua me sukses!</BlockTitle>
        <!-- {#if appId || token}
            {#if response}
                <BlockTitle>Email u verifikua me sukses!</BlockTitle>
            {:else}
                <BlockTitle
                    >Deshtim! Ridergo nje email tjeter konfirmimi.</BlockTitle
                >
            {/if}
        {:else}
            <BlockTitle>No UserId or Secret</BlockTitle>
        {/if} -->
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
