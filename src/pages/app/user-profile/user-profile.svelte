<script>
    import { Page, Block, BlockTitle, Row, Col } from "framework7-svelte";

    import userProfile from "../../../js/stores/user-profile.store";

    import ChangePassword from "./components/change-pass.svelte";
    import ChangeEmail from "./components/change-email.svelte";
    import ChangeUsername from "./components/change-username.svelte";
    import ChangeProfile from "./components/change-profile.svelte";

    export let f7router;
    export let f7route;
    f7router;
    f7route;

    let profile = $userProfile.toJSON();
</script>

<Page name="userprofile">
    <Block strong>
        <Row>
            <Col width="100" medium="50">
                <BlockTitle>Gjeneralitete</BlockTitle>
                <ChangeProfile {profile} />
            </Col>
            <Col width="100" medium="50">
                <BlockTitle>Të dhënat e përdoruesit</BlockTitle>
                <ChangeUsername usernameField={profile.user.username} />
                <ChangeEmail emailField={profile.user.email} />
                <ChangePassword />
            </Col>
        </Row>
    </Block>
</Page>
