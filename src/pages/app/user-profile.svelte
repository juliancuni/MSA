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
    import { onMount } from "svelte";
    import loggedInUser from "../../js/stores/user.store";
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

    let user = { ...$loggedInUser.attributes };
    // let dl = [userProfil?.datelindja];

    const upsertProfile = async () => {};

    onMount(() => {
        console.log(f7);
        const qytetet = [
            "Bajram Curri",
            "Bajzë",
            "Ballsh",
            "Berat",
            "Bilisht",
            "Bulqizë",
            "Burrel",
            "Cërrik",
            "Çorovodë",
            "Delvinë",
            "Divjakë",
            "Durrës",
            "Elbasan",
            "Ersekë",
            "Fier",
            "Fierzë",
            "Finiq",
            "Fushë-Arrëz",
            "Fushë-Krujë",
            "Gjirokastër",
            "Gramsh",
            "Himarë",
            "Kamëz",
            "Kavajë",
            "Këlcyrë",
            "Klos",
            "Konispol",
            "Koplik",
            "Korçë",
            "Krastë",
            "Krrabë",
            "Krujë",
            "Krumë",
            "Kuçovë",
            "Kukës",
            "Kurbnesh",
            "Laç",
            "Leskovik",
            "Lezhë",
            "Libohovë",
            "Librazhd",
            "Lushnjë",
            "Maliq",
            "Mamurras",
            "Manëz",
            "Memaliaj",
            "Milot",
            "Orikum",
            "Patos",
            "Peqin",
            "Përmet",
            "Peshkopi",
            "Pogradec",
            "Poliçan",
            "Prrenjas",
            "Pukë",
            "Reps",
            "Roskovec",
            "Rrëshen",
            "Rrogozhinë",
            "Rubik",
            "Sarandë",
            "Selenicë",
            "Shëngjin",
            "Shijak",
            "Shkodër",
            "Sukth",
            "Tepelenë",
            "Tiranë",
            "Ulëz",
            "Ura Vajgurore",
            "Vau i Dejës",
            "Vlorë",
            "Vorë",
        ];
        f7.autocomplete.create({
            inputEl: "#qytetet",
            openIn: "dropdown",
            source: (query, render) => {
                console.log(query);
                const results = [];
                if (query.length === 0) {
                    render(results);
                    return;
                }
                for (let i = 0; i < qytetet.length; i++) {
                    if (
                        qytetet[i].toLowerCase().indexOf(query.toLowerCase()) >=
                        0
                    )
                        results.push(qytetet[i]);
                }
                render(results);
            },
        });
    });
</script>

<Page name="userprofile">
    <!-- <BlockTitle>
        {JSON.stringify(user.emriIPlote)}
        {#if userProfil?.avatar || loggedInUser?.emriIPlote}
            <Chip text={loggedInUser.emriIPlote}>
                <img slot="media" src={userProfil.avatar} />
            </Chip>
        {/if} 
    </BlockTitle>-->
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
                        bind:value={user.emriIPlote}
                    />
                    <ListInput
                        label="ID"
                        type="text"
                        placeholder="Nr. Personal"
                        clearButton
                    />
                    <ListInput
                        label="Datëlindja"
                        type="datepicker"
                        calendarParams={{
                            // value: [new Date().setFullYear(maxYear)],
                            dateFormat: "dd/mm/yyyy",
                            closeOnSelect: true,
                            yearPickerMax: maxYear,
                            yearPickerMin: minYear,
                        }}
                        placeholder="Zgjidh..."
                    />
                    <ListInput
                        label="Nr. Tel"
                        type="text"
                        placeholder="065 12 34 567"
                    />
                    <ListInput
                        label="Adresa"
                        type="text"
                        placeholder="Rr. Rruga, Nr. 47"
                        clearButton
                    />
                    <div class="item-content item-input">
                        <div class="item-inner">
                            <div class="item-title item-label">Qyteti</div>
                            <div class="item-input-wrap">
                                <input
                                    id="qytetet"
                                    type="text"
                                    placeholder="Tiranë"
                                    class=""
                                /> <span class="input-clear-button" />
                            </div>
                        </div>
                    </div>
                    <!-- <input
                        id="qytetet"
                        type="text"
                        label="Qyteti"
                        placeholder="Tiranë"
                    /> -->
                </List>
                <Button raised onClick={upsertProfile}>Ruaj Profilin</Button>
            </Col>
            <Col width="100" medium="50">
                <BlockTitle>Të dhënat e përdoruesit</BlockTitle>
                <List noHairlinesMd>
                    <ListInput
                        label="Përdoruesi"
                        type="text"
                        placeholder="Username"
                        disabled
                        bind:value={user.username}
                    />
                    <ListInput
                        label="Email"
                        type="text"
                        placeholder="email@domain.com"
                        disabled
                        bind:value={user.email}
                    />
                    <ListInput label="Fjalëkalimi aktual" type="password" />
                    <ListInput label="Fjalëkalimi i ri" type="password" />
                    <ListInput label="Përserite" type="password" />
                </List>
                <Button raised onClick={upsertProfile}
                    >Ndrysho fjalëkalimin</Button
                >
            </Col>
        </Row>
    </Block>
</Page>
