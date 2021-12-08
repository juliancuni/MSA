<script>
    import {
        f7,
        Panel,
        View,
        Page,
        Navbar,
        Block,
        NavTitle,
        Link,
        PageContent,
        Chip,
        useStore,
    } from "framework7-svelte";

    let user = useStore("loggedInUser", (val) => (user = val));
    const nameInitials = user?.name
        .split(" ")
        .map((n) => n[0])
        .join("");
</script>

<Panel left reveal themeDark visibleBreakpoint={1280}>
    <Page>
        <PageContent>
            <Navbar>
                <NavTitle>
                    <Link noLinkClass href="/" color="white">{f7.name}</Link>
                </NavTitle>
                <p>Main Nav</p>
            </Navbar>
            {#if user}
                <Block strong>
                    <Link href="/app/userprofile" panelClose>
                        <Chip
                            onclick={() => console.log("clicked")}
                            text={user?.name}
                            mediaBgColor="pink"
                            media={nameInitials}
                        />
                    </Link>
                </Block>
            {/if}
            <Block strong>
                <Link href="/app/dashboard" panelClose>Dashboard</Link>
            </Block>

            <Link href="/app/test" panelClose>Test</Link>
            <Link href="/auth/login" panelClose>Login</Link>
        </PageContent>
    </Page>
</Panel>
