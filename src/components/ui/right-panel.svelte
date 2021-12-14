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
    $: nameInitials = user?.name
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
            <Block strong />
        </PageContent>
    </Page>
</Panel>
