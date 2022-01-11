<script>
    import { List, ListInput, Button } from "framework7-svelte";
    import { setLoggedInUserProfile } from "../../../../js/stores/user-profile.store";
    
    import { qytetetList } from "../../../components/utils/qytetet.list";
    import ListInputAutoComplete from "../../../components/autocomplete.svelte";
    import PicInput from "./picinput.svelte";

    export let profile;
    let maxYear = new Date();
    let minYear = new Date();
    maxYear = maxYear.getFullYear();
    maxYear = maxYear - 15;
    minYear = minYear.getFullYear();
    minYear = minYear - 70;

    let dl = [profile.datelindja?.iso || new Date().setFullYear(maxYear)];
    const updateProfile = async () => {
        console.log(profile.avatar);

        profile.datelindja = new Date(dl[0].toDateString());
        setLoggedInUserProfile(profile);
    };
</script>
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
    <PicInput bind:value={profile.avatar} /><br />
</List>
<Button raised onClick={updateProfile}>Ruaj Profilin</Button>