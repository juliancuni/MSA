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
    } from "framework7-svelte";

    let component;
    console.log(component)
    // component.instance();
</script>

<Panel left reveal themeDark visibleBreakpoint={1024} bind:this={component}>
    <Navbar>
        <NavTitle>
            <Link noLinkClass href="/" color="white">{f7.name}</Link>
        </NavTitle>
    </Navbar>
    <View>
        <Page>
            <Block>Left panel content goes here</Block>
        </Page>
    </View>
</Panel>
