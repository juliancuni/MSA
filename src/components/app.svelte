<script context="module">
    const user = localStorage.getItem("user");
    const sessionId = localStorage.getItem("sessionId");
    if (user && sessionId) {
        store.dispatch("loginUser", JSON.parse(user));
    }
</script>

<script>
    import { getDevice } from "framework7";
    import {
        f7,
        App,
        View,
        Panel,
        Page,
        Navbar,
        BlockTitle,
        Link,
        Block,
        List,
        ListItem,
        theme,
    } from "framework7-svelte";
    import Nav from "./ui/navbar.svelte";
    import RightPanel from "./ui/right-panel.svelte";
    import routes from "../js/routes";
    import store from "../js/store";

    console.log(getDevice());
    if (getDevice().desktop) {
        console.log(theme);
    }
    let f7params = {
        name: "AMMS",
        theme: "auto",
        store: store,
        routes: routes,
    };
</script>

<App {...f7params}>
    <!-- RightPanel -->
    <RightPanel />
    <!-- Your main view, should have "view-main" class -->
    <View
        main
        class="safe-areas view-main"
        url="/"
        browserHistory={true}
        browserHistorySeparator=""
    >
        <!-- TopNap -->
        <Nav />
    </View>
</App>
