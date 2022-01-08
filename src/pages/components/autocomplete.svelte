<script>
    import { f7 } from "framework7-svelte";
    import { onMount } from "svelte";
    export let label;
    export let lista;
    export let placeholder;
    export let value;

    onMount(() => {
        f7.autocomplete.create({
            inputEl: "#list",
            openIn: "dropdown",
            source: (query, render) => {
                const results = [];
                if (query.length === 0) {
                    render(results);
                    return;
                }
                for (let i = 0; i < lista.length; i++) {
                    if (
                        lista[i].toLowerCase().indexOf(query.toLowerCase()) >= 0
                    )
                        results.push(lista[i]);
                }
                render(results);
            },
        });
    });
</script>

<div class="item-content item-input">
    <div class="item-inner">
        <div class="item-title item-label">{label}</div>
        <div class="item-input-wrap">
            <input id="list" type="text" {placeholder} class="" bind:value />
            <span class="input-clear-button" />
        </div>
    </div>
</div>
