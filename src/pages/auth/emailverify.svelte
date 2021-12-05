<script>
    import {f7} from 'framework7-svelte';
    import { onMount } from "svelte";
    import { updateVerification } from "../../js/services/auth.services";
    export let f7route;
    export let f7router;

    const userId = f7route.query.userId;
    const secret = f7route.query.secret;
    const expire = f7route.query.expire;
    let isExpired = false;
    let isParamGabim = false;
    onMount(async () => {
        if (parseInt(expire) * 1000 < Date.now()) {
            isExpired = true;
            f7.dialog.alert("Verification Token expired")
        } else if (!userId || !secret) {
            isParamGabim = true;
            f7.dialog.alert("UserId or Secret null|undefined")
        } else {
            const token = await updateVerification(userId, secret);
            // if (token) {
            //     f7router.navigate("/auth/login");
            // }
        }
    });
</script>
