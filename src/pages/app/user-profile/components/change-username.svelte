<script>
    import { List, ListInput, Button } from "framework7-svelte";
    import { changeUserUserName } from "../../../../js/stores/user.store";
    import { t } from "../../../../js/i18n/index";
    import validation from "../../../../js/form-validation";
    $: ui = $t("ui");
    let isFormValid = false;
    export let usernameField;
    let usernameError = "";

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
</script>

<List noHairlinesMd>
    <ListInput
        label="Përdoruesi"
        type="text"
        placeholder="Username"
        bind:value={usernameField}
        errorMessageForce={usernameError}
        errorMessage={usernameError}
        clearButton
    />
    <Button raised onClick={updateUsername}>Ndrysho Përdoruesin</Button>
</List>
