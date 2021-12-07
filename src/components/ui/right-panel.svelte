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
    } from "framework7-svelte";
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
            <Block strong>
                <Link href="/app/dashboard" panelClose>Dashboard</Link>
            </Block>
            <Link href="/app/test" panelClose>Test</Link>
            <Link href="/auth/login" panelClose>Login</Link>
        </PageContent>
    </Page>
</Panel>
