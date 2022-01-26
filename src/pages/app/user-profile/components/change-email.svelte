<script>
    import { List, ListInput, Button } from "framework7-svelte";

    import { changeUserEmail } from "../../../../js/stores/auth.store";
    import { t } from "../../../../js/i18n/index";
    import validation from "../../../../js/form-validation";
    $: ui = $t("ui");

    let isFormValid = false;
    export let emailField;
    let emailError = "";

    const updateEmail = async () => {
        isFormValid = true;
        if (!validation.inputEmpty(emailField)) {
            emailError = ui.validation.inputbosh;
            isFormValid = false;
        } else if (!validation.emailFormat(emailField)) {
            emailError = ui.validation.emailFormat;
            isFormValid = false;
        } else {
            emailError = "";
        }
        if (isFormValid) {
            await changeUserEmail(emailField);
        }
    };
</script>

<List>
    <ListInput
        label="Email"
        type="text"
        placeholder="email@domain.com"
        bind:value={emailField}
        errorMessageForce={emailError}
        errorMessage={emailError}
        clearButton
    />
</List>
<Button raised onClick={updateEmail}>Ndrysho Email</Button>
