<script>
    import {
        f7,
        Navbar,
        NavTitle,
        NavRight,
        NavLeft,
        Link,
        useStore,
    } from "framework7-svelte";

    import store from "../../js/store";
    import { lcl, locales, locale } from "../../js/i18n";

    import { logout } from "../../js/services/auth.services";

    $: isAuthenticated = useStore(
        "authenticated",
        (authenticated) => (isAuthenticated = authenticated)
    );
    const logoutUser = async () => {
        f7.progressbar.show();
        const sessionId = localStorage.getItem("sessionId");
        const loggedOut = await logout(sessionId);
        // if (loggedOut) {
        //     store.dispatch("logoutUser");
        // }
        store.dispatch("logoutUser");
        f7.progressbar.hide();
    };
    const setLang = () => {
        f7.smartSelect.get(".smart-select").close();
        locale.set($lcl);
    };
</script>

<Navbar>
    <NavLeft>
        <Link
            iconIos="f7:menu"
            iconAurora="f7:menu"
            iconMd="material:menu"
            panelOpen="left"
        />
    </NavLeft>
    <!-- <NavLeft>
        <Link href="/app/dashboard">Dashboard</Link>
    </NavLeft> -->
    <NavRight>
        <Link
            smartSelect
            smartSelectParams={{ openIn: "popover" }}
            class="smart-select"
        >
            {$locale}
            <select bind:value={$lcl} on:change={setLang}>
                {#each locales as l}
                    <option value={l}>{l}</option>
                {/each}
            </select>
        </Link>
        <Link href="/about">About</Link>
        {#if isAuthenticated}
            <Link href="" onClick={logoutUser}>Logout</Link>
        {:else}
            <Link href="/auth/login">Login</Link>
        {/if}
    </NavRight>
</Navbar>
