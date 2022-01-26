<script>
    import { List, ListInput, Button } from "framework7-svelte";

    import { changeUserPassword } from "../../../../js/stores/auth.store";

    import { t } from "../../../../js/i18n/index";

    import validation from "../../../../js/form-validation";

    $: ui = $t("ui");

    export let username;

    let isFormValid = false;
    
    let passFields = {
        oldPassword: "",
        newPassword: "",
        newPasswordRepeat: "",
    };
    let userErrors = {
        oldPassword: "",
        newPassword: "",
        newPasswordRepeat: "",
    };

    const updatePassword = async () => {
        isFormValid = true;
        if (!validation.inputEmpty(passFields.oldPassword)) {
            userErrors.oldPassword = ui.validation.inputbosh;
            isFormValid = false;
        } else if (!validation.passwordShort(passFields.oldPassword)) {
            userErrors.oldPassword = ui.validation.fjalekalimiShkurter;
            isFormValid = false;
        } else {
            userErrors.oldPassword = "";
        }
        if (!validation.inputEmpty(passFields.newPassword)) {
            userErrors.newPassword = ui.validation.inputbosh;
            isFormValid = false;
        } else if (!validation.passwordShort(passFields.newPassword)) {
            userErrors.newPassword = ui.validation.fjalekalimiShkurter;
            isFormValid = false;
        } else {
            userErrors.newPassword = "";
        }
        if (!validation.inputEmpty(passFields.newPasswordRepeat)) {
            userErrors.newPasswordRepeat = ui.validation.inputbosh;
            isFormValid = false;
        } else if (passFields.newPassword !== passFields.newPasswordRepeat) {
            userErrors.newPasswordRepeat =
                ui.validation.fjalekalimetNukPerputhen;
            isFormValid = false;
        } else {
            userErrors.newPasswordRepeat = "";
        }
        if (isFormValid) {
            await changeUserPassword(
                username,
                passFields.oldPassword,
                passFields.newPassword
            );
        }
    };
</script>

<List>
    <ListInput
        label="Fjalëkalimi aktual"
        type="password"
        bind:value={passFields.oldPassword}
        errorMessageForce={userErrors.oldPassword}
        errorMessage={userErrors.oldPassword}
        clearButton
    />
    <ListInput
        label="Fjalëkalimi i ri"
        type="password"
        bind:value={passFields.newPassword}
        errorMessageForce={userErrors.newPassword}
        errorMessage={userErrors.newPassword}
        clearButton
    />
    <ListInput
        label="Përserite"
        type="password"
        bind:value={passFields.newPasswordRepeat}
        errorMessageForce={userErrors.newPasswordRepeat}
        errorMessage={userErrors.newPasswordRepeat}
        clearButton
    />
</List>
<Button raised onClick={updatePassword}>Ndrysho fjalëkalimin</Button>
