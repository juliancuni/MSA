<script>
    import {
        f7,
        Navbar,
        NavRight,
        NavLeft,
        Link,
    } from "framework7-svelte";

    import { lcl, locales, locale } from "../../js/i18n";
    import loggedInUser, { logoutUser } from "../../js/stores/user.store";

    const setLang = () => {
        f7.smartSelect.get(".smart-select").close();
        locale.set($lcl);
    };
    let profileDropdown = null;
    const profileMan = async () => {
        if (profileDropdown === "0") {
            await logoutUser();
        } else {
            f7.views.main.router.navigate("/app/userprofile");
        }
    };
</script>

<Navbar>
    <NavLeft>
        <Link
            iconIos="f7:menu"
            iconAurora="f7:menu"
            iconMd="material:menu"
            panelOpen="left"
        />
    </NavLeft>
    <NavRight>
        <Link
            iconMaterial="translate"
            smartSelect
            smartSelectParams={{ openIn: "popover" }}
            class="smart-select"
        >
            <!-- {$locale} -->
            <select bind:value={$lcl} on:change={setLang}>
                {#each locales as l}
                    <option value={l}>{l}</option>
                {/each}
            </select>
        </Link>
        {#if $loggedInUser}
            <Link
                smartSelect
                iconMaterial="person"
                smartSelectParams={{ openIn: "popover", closeOnSelect: true }}
                class="smart-select"
            >
                <select bind:value={profileDropdown} on:change={profileMan}>
                    <option value="0">Logout</option>
                    <option value="1">Profile</option>
                </select>
            </Link>
        {:else}
            <Link href="/auth/login">Login</Link>
        {/if}
    </NavRight>
</Navbar>
