<script>
    import { List, ListInput, Button } from "framework7-svelte";
    import { changeUserUserName } from "../../../../js/stores/auth.store";
    import { t } from "../../../../js/i18n/index";
    import validation from "../../../../js/form-validation";
    $: ui = $t("ui");
    let isFormValid = false;
    export let usernameField;
    let usernameError = "";

    const updateUsername = async () => {
        isFormValid = true;
        if (!validation.inputEmpty(usernameField)) {
            usernameError = ui.validation.inputbosh;
            isFormValid = false;
        } else {
            usernameError = "";
        }
        if (isFormValid) {
            await changeUserUserName(usernameField);
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
