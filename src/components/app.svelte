<script context="module">
    const user = getLoggedInUser();
    user.then((val) => {
        if (val) {
            store.dispatch("loginUser", val?.attributes);
        }
    }).catch((err) => console.log(err));
</script>

<script>
    import { App, View } from "framework7-svelte";
    import Nav from "./ui/navbar.svelte";
    import RightPanel from "./ui/right-panel.svelte";
    import routes from "../js/routes";
    import store from "../js/store";
    import { getLoggedInUser } from "../js/services/parse/auth.services";

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
        class="safe-areas view-main view-init"
        url="/"
        browserHistory={true}
        browserHistorySeparator=""
    >
        <!-- RightPanel -->
        <RightPanel />
        <!-- TopNap -->
        <Nav />
    </View>
</App>
