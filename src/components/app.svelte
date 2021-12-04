<script context="module">
    const user = localStorage.getItem("user");
    const sessionId = localStorage.getItem("sessionId");
    if (user && sessionId) {
        store.dispatch("loginUser", JSON.parse(user));
    }
</script>

<script>
    import { App, View } from "framework7-svelte";

    import Nav from "./ui/navbar.svelte";

    import routes from "../js/routes";
    import store from "../js/store";

    let f7params = {
        name: "AMMS",
        theme: "auto",
        store: store,
        routes: routes,
    };
</script>

<App {...f7params}>
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
