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
    import { logout } from "../../js/services/auth.services";

    $: isAuthenticated = useStore(
        "authenticated",
        (authenticated) => (isAuthenticated = authenticated)
    );

    const logoutUser = async () => {
        const sessionId = localStorage.getItem("sessionId");
        const loggedOut = await logout(sessionId);

        if (loggedOut) {
            store.dispatch("logoutUser");
        }
    };
</script>

<Navbar>
    <NavTitle>
        <Link noLinkClass href="/" color="black">{f7.name}</Link>
    </NavTitle>
    <NavLeft>
        <Link href="/app/dashboard">Dashboard</Link>
    </NavLeft>
    <NavRight>
        <Link href="/about">About</Link>
        {#if isAuthenticated}
            <Link href="" onClick={logoutUser}>Logout</Link>
        {:else}
            <Link href="/auth/login">Login</Link>
        {/if}
    </NavRight>
</Navbar>
