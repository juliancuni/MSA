<script context="module">
    import store from "../js/store";
    store.dispatch("checkAuthentication");
</script>

<script>
    import { Page, Block } from "framework7-svelte";
</script>

<Page name="home">
    <Block strong>
        <p>Home</p>
    </Block>
</Page>
