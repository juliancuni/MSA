<!-- <script context="module">
    let profile = getUserProfile();
</script> -->
<script>
    import {
        f7,
        Page,
        Block,
        Row,
        Col,
        List,
        ListInput,
        useStore,
    } from "framework7-svelte";
    // import { getUserProfile } from "../../js/services/user.service";

    $: loggedInUser = useStore("loggedInUser", (user) => (loggedInUser = user));
</script>

<Page name="userprofile">
    <Block strong>
        <p>Profili per {loggedInUser?.name}</p>
        <Row>
            <Col width="100" medium="50">
                <List noHairlinesMd>
                    <ListInput
                        label="Full Name"
                        type="text"
                        placeholder="Your name"
                        clearButton
                    >
                        <i class="icon demo-list-icon" slot="media" />
                    </ListInput>
                </List>
            </Col>
        </Row>
    </Block>
</Page>
