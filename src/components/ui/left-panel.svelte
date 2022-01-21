<script>
    import {
        f7,
        Panel,
        Page,
        Navbar,
        Block,
        NavTitle,
        Link,
        PageContent,
    } from "framework7-svelte";
    // import UserBadge from "./components/user-badge.svelte";
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
            <!-- <Block strong>
                <UserBadge />
            </Block> -->
            <Block strong>
                <Link href="/app/dashboard" panelClose>Dashboard</Link>
            </Block>
            <Block strong>
                <Link href="/app/users" panelClose>Users</Link>
            </Block>
        </PageContent>
    </Page>
</Panel>
