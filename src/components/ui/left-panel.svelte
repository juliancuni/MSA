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
    import userProfile from "../../js/stores/user-profile.store";

    $: nameInitials = $userProfile?.attributes?.emriIPlote
        ? $userProfile.attributes.emriIPlote
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
                <!-- <p>Main Nav</p> -->
            </Navbar>
            {#if $userProfile}
                <Block strong>
                    <Link href="/app/userprofile" panelClose>
                        <Chip
                            text={$userProfile?.attributes?.emriIPlote}
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
