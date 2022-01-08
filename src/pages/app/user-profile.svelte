<script>
    import {
        f7,
        Page,
        Block,
        BlockTitle,
        Row,
        Col,
        List,
        ListInput,
        Button,
        Icon,
        Chip,
        Input,
    } from "framework7-svelte";
    import userProfile, {
        setLoggedInUserProfile,
    } from "../../js/stores/user-profile.store";
    import { changeUserPassword } from "../../js/stores/user.store";
    import { t } from "../../js/i18n";
    import ListInputAutoComplete from "../components/autocomplete.svelte";
    import { qytetetList } from "../components/utils/qytetet.list";
    import validation from "../../js/form-validation";
    export let f7router;
    export let f7route;
    f7router;
    f7route;
    let maxYear = new Date();
    let minYear = new Date();
    maxYear = maxYear.getFullYear();
    maxYear = maxYear - 15;
    minYear = minYear.getFullYear();
    minYear = minYear - 70;
    let isFormValid = false;
    let userFields = {
        oldPassword: "",
        newPassword: "",
        newPasswordRepeat: "",
    };
    let userErrors = {
        oldPassword: "",
        newPassword: "",
        newPasswordRepeat: "",
    };
    $: ui = $t("ui");

    let profile = $userProfile.toJSON();
    let dl = [profile.datelindja.iso];
    const updateProfile = async () => {
        profile.datelindja = new Date(dl[0].toDateString());
        setLoggedInUserProfile(profile);
    };
    const updatePassword = async () => {
        isFormValid = true;
        if (!validation.inputEmpty(userFields.oldPassword)) {
            userErrors.oldPassword = ui.validation.inputbosh;
            isFormValid = false;
        } else if (!validation.passwordShort(userFields.oldPassword)) {
            userErrors.oldPassword = ui.validation.fjalekalimiShkurter;
            isFormValid = false;
        } else {
            userErrors.oldPassword = "";
        }
        if (!validation.inputEmpty(userFields.newPassword)) {
            userErrors.newPassword = ui.validation.inputbosh;
            isFormValid = false;
        } else if (!validation.passwordShort(userFields.newPassword)) {
            userErrors.newPassword = ui.validation.fjalekalimiShkurter;
            isFormValid = false;
        } else {
            userErrors.newPassword = "";
        }
        if (!validation.inputEmpty(userFields.newPasswordRepeat)) {
            userErrors.newPasswordRepeat = ui.validation.inputbosh;
            isFormValid = false;
        } else if (userFields.newPassword !== userFields.newPasswordRepeat) {
            userErrors.newPasswordRepeat =
                ui.validation.fjalekalimetNukPerputhen;
            isFormValid = false;
        } else {
            userErrors.newPasswordRepeat = "";
        }
        if (isFormValid) {
            await changeUserPassword(
                profile.user.username,
                userFields.oldPassword,
                userFields.newPassword
            );
        }
    };
</script>

<Page name="userprofile">
    <Block strong>
        <Row>
            <Col width="100" medium="50">
                <BlockTitle>Gjeneralitete</BlockTitle>
                <List noHairlinesMd>
                    <ListInput
                        label="Emri i plotë"
                        type="text"
                        placeholder="Emër Mbiemër"
                        clearButton
                        bind:value={profile.emriIPlote}
                    />
                    <ListInput
                        label="ID"
                        type="text"
                        placeholder="Nr. Personal"
                        clearButton
                        bind:value={profile.nid}
                    />
                    <ListInput
                        label="Datëlindja"
                        type="datepicker"
                        calendarParams={{
                            dateFormat: "dd/mm/yyyy",
                            closeOnSelect: true,
                            yearPickerMax: maxYear,
                            yearPickerMin: minYear,
                        }}
                        placeholder="Zgjidh..."
                        bind:value={dl}
                    />
                    <ListInput
                        label="Nr. Tel"
                        type="text"
                        placeholder="065 12 34 567"
                        bind:value={profile.tel}
                    />
                    <ListInput
                        label="Adresa"
                        type="text"
                        placeholder="Rr. Rruga, Nr. 47"
                        clearButton
                        bind:value={profile.adresa}
                    />
                    <ListInputAutoComplete
                        placeholder="psh. Tiranë"
                        lista={qytetetList}
                        label="Qyteti"
                        bind:value={profile.qyteti}
                    />
                </List>
                <Button raised onClick={updateProfile}>Ruaj Profilin</Button>
            </Col>
            <Col width="100" medium="50">
                <BlockTitle>Të dhënat e përdoruesit</BlockTitle>
                <List noHairlinesMd>
                    <ListInput
                        label="Përdoruesi"
                        type="text"
                        placeholder="Username"
                        disabled
                        bind:value={profile.user.username}
                    />
                    <ListInput
                        label="Email"
                        type="text"
                        placeholder="email@domain.com"
                        disabled
                        bind:value={profile.user.email}
                    />
                    <ListInput
                        label="Fjalëkalimi aktual"
                        type="password"
                        bind:value={userFields.oldPassword}
                        errorMessageForce={userErrors.oldPassword}
                        errorMessage={userErrors.oldPassword}
                    />
                    <ListInput
                        label="Fjalëkalimi i ri"
                        type="password"
                        bind:value={userFields.newPassword}
                        errorMessageForce={userErrors.newPassword}
                        errorMessage={userErrors.newPassword}
                    />
                    <ListInput
                        label="Përserite"
                        type="password"
                        bind:value={userFields.newPasswordRepeat}
                        errorMessageForce={userErrors.newPasswordRepeat}
                        errorMessage={userErrors.newPasswordRepeat}
                    />
                </List>
                <Button raised onClick={updatePassword}
                    >Ndrysho fjalëkalimin</Button
                >
            </Col>
        </Row>
    </Block>
</Page>
