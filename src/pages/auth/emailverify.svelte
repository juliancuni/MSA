<script>
    import {
        f7,
        Page,
        Block,
        BlockTitle,
        Link,
    } from "framework7-svelte";
    import { onMount } from "svelte";
    import {
        logout,
        updateVerification,
    } from "../../js/services/auth.services";
    import store from "../../js/store";

    export let f7route;
    export let f7router;

    const userId = f7route.query.userId;
    const secret = f7route.query.secret;
    const expire = f7route.query.expire;

    let token = null;

    let isExpired = false;
    let isParamGabim = false;
    onMount(async () => {
        if (parseInt(expire) * 1000 < Date.now()) {
            isExpired = true;
            f7.dialog.alert(
                "Verification Link expired",
                "Email Verification Failed!"
            );
        } else if (!userId || !secret) {
            isParamGabim = true;
            f7.dialog.alert(
                "UserId or Secret Missing<br>Check your link and try again",
                "Wrong Params"
            );
        } else {
            token = await updateVerification(userId, secret);
            if (token) {
                if (localStorage.getItem("sessionId")) {
                    await logout(localStorage.getItem("sessionId"));
                    store.dispatch("logoutUser");
                }
            }
        }
    });
</script>

<Page class="grid-demo">
    <Block strong inset>
        {#if userId || secret}
            {#if token}
                <BlockTitle>Email Verification Succeded!</BlockTitle>
            {:else}
                <BlockTitle>Failure! Check your email or ask for another verification email.</BlockTitle>
            {/if}
        {:else}
            <BlockTitle>No UserId or Secret</BlockTitle>
        {/if}
        <Link href="/auth/login">Go To Login</Link>
        <!-- <Button fill>Login</Button> -->
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
