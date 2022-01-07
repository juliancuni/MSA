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
    } from "framework7-svelte";
    import loggedInUser from '../../js/stores/user.store'

    $: nameInitials = $loggedInUser?.emriIPlote
        ? $loggedInUser.emriIPlote
              .split(" ")
              .map((n) => n[0])
              .join("")
        : null;
</script>

<Panel left reveal themeDark visibleBreakpoint={1024}>
    <Page>
        <PageContent>
            <Navbar>
                <NavTitle>
                    <Link noLinkClass href="/" color="white">{f7.name}</Link>
                </NavTitle>
                <p>Main Nav</p>
            </Navbar>
            {#if $loggedInUser && nameInitials}
                <Block strong>
                    <Link href="/app/userprofile" panelClose>
                        <Chip
                            text={loggedInUser?.emriIPlote}
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
