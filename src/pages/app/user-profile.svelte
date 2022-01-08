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
    import {
        changeUserPassword,
        changeUserUserName,
        changeUserEmail,
    } from "../../js/stores/user.store";
    import { t } from "../../js/i18n";
    import ListInputAutoComplete from "../components/autocomplete.svelte";
    import { qytetetList } from "../components/utils/qytetet.list";
    import validation from "../../js/form-validation";
    import { async } from "parse/lib/browser/StorageController.browser";
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

    let profile = $userProfile.toJSON();

    let isFormValid = false;
    let userFields = {
        username: profile.user.username,
        email: profile.user.email,
        oldPassword: "",
        newPassword: "",
        newPasswordRepeat: "",
    };
    let userErrors = {
        username: "",
        email: "",
        oldPassword: "",
        newPassword: "",
        newPasswordRepeat: "",
    };
    $: ui = $t("ui");

    let dl = [profile.datelindja?.iso || new Date().setFullYear(maxYear)];
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
    const updateUsername = async () => {
        isFormValid = true;
        if (!validation.inputEmpty(userFields.username)) {
            userErrors.username = ui.validation.inputbosh;
            isFormValid = false;
        } else {
            userErrors.username = "";
        }
        if (isFormValid) {
            await changeUserUserName(userFields.username);
        }
    };

    const updateEmail = async () => {
        isFormValid = true;
        if (!validation.inputEmpty(userFields.email)) {
            userErrors.email = ui.validation.inputbosh;
            isFormValid = false;
        } else if (!validation.emailFormat(userFields.email)) {
            userErrors.email = ui.validation.emailFormat;
            isFormValid = false;
        } else {
            userErrors.email = "";
        }
        if (isFormValid) {
            await changeUserEmail(userFields.email);
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
                        clearButton
                        placeholder="Zgjidh..."
                        bind:value={dl}
                    />
                    <ListInput
                        label="Nr. Tel"
                        type="text"
                        placeholder="065 12 34 567"
                        clearButton
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
                        bind:value={userFields.username}
                        errorMessageForce={userErrors.username}
                        errorMessage={userErrors.username}
                        clearButton
                    />
                    <Button raised onClick={updateUsername}>
                        Ndrysho Përdoruesin
                    </Button>
                </List>
                <List>
                    <ListInput
                        label="Email"
                        type="text"
                        placeholder="email@domain.com"
                        bind:value={userFields.email}
                        errorMessageForce={userErrors.email}
                        errorMessage={userErrors.email}
                        clearButton
                    />
                </List>
                <Button raised onClick={updateEmail}>Ndrysho Email</Button>
                <List>
                    <ListInput
                        label="Fjalëkalimi aktual"
                        type="password"
                        bind:value={userFields.oldPassword}
                        errorMessageForce={userErrors.oldPassword}
                        errorMessage={userErrors.oldPassword}
                        clearButton
                    />
                    <ListInput
                        label="Fjalëkalimi i ri"
                        type="password"
                        bind:value={userFields.newPassword}
                        errorMessageForce={userErrors.newPassword}
                        errorMessage={userErrors.newPassword}
                        clearButton
                    />
                    <ListInput
                        label="Përserite"
                        type="password"
                        bind:value={userFields.newPasswordRepeat}
                        errorMessageForce={userErrors.newPasswordRepeat}
                        errorMessage={userErrors.newPasswordRepeat}
                        clearButton
                    />
                </List>
                <Button raised onClick={updatePassword}
                    >Ndrysho fjalëkalimin</Button
                >
            </Col>
        </Row>
    </Block>
</Page>
