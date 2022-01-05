<script>
    import { onMount } from "svelte";
    import { f7, f7ready, App, View } from "framework7-svelte";
    import Nav from "./ui/navbar.svelte";
    import RightPanel from "./ui/left-panel.svelte";
    import routes from "../js/routes";
    import store from "../js/store";
    // import { getLoggedInUser } from "../js/services/parse/auth.services";

    let f7params = {
        name: "AMMS-a",
        theme: "aurora",
        store: store,
        routes: routes,
    };

    onMount(() => {
        f7ready(async () => {
            // Call F7 APIs here
            // const device = f7.device;
            // f7.panel.open("left");
            // f7.panel.close("left");
            // f7.dialog.alert(JSON.stringify(device), "Device");
        });
    });
</script>

<App {...f7params}>
    <!-- Your main view, should have "view-main" class -->
    <View
        main
        class="safe-areas view-main view-init"
        url="/"
        browserHistory={true}
    >
        <!-- RightPanel -->
        <RightPanel />
        <!-- TopNap -->
        <Nav />
    </View>
</App>

<!-- "themes": [
    "ios",
    "md",
    "aurora"
  ], -->
