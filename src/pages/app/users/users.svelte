<script>
    import {
        f7,
        theme,
        Page,
        Block,
        Searchbar,
        List,
        ListItem,
    } from "framework7-svelte";

    import { onMount } from "svelte";

    import {
        usersProfile,
        getAllUsersProfile,
    } from "../../../js/stores/users.store";

    onMount(async () => {
        await getAllUsersProfile();
    });
</script>

<Page name="users">
    <!-- <Block strong>
        <p>Users and Roles</p>

        <div class="data-table">
            <table>
                <thead>
                    <tr>
                        <th class="label-cell">Emri i plote</th>
                        <th class="numeric-cell">Calories</th>
                        <th class="medium-only">Comment</th>
                        <th class="medium-only">Comment</th>
                        <th class="medium-only">Comment</th>
                        <th class="medium-only">Comment</th>
                        <th class="medium-only">Comment</th>
                        <th class="medium-only">Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {#each $usersProfile as { attributes }}
                        <tr>
                            <td class="label-cell">{attributes?.emriIPlote}</td>
                            <td class="numeric-cell" />
                            <td class="medium-only">I like it!</td>
                            <td class="medium-only">I like it!</td>
                            <td class="medium-only">I like it!</td>
                            <td class="medium-only">I like it!</td>
                            <td class="medium-only">I like it!</td>
                            <td class="medium-only">I like it!</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
        {JSON.stringify($usersProfile)} 
    </Block>-->
    <Searchbar
        searchContainer=".search-list"
        searchIn=".item-title"
        disableButton={!theme.aurora}
    />
    <List class="searchbar-not-found">
        <ListItem title="Nothing found" />
    </List>
    <List mediaList inset class="search-list searchbar-found">
        {#each $usersProfile as { attributes }}
            <ListItem
                badge="2"
                link="#"
                title={attributes.emriIPlote}
                after="Ore pune Janar"
                subtitle={attributes.tel}
                text={attributes.user.attributes.email}
            >
                <img
                    slot="media"
                    src={attributes.avatar.url()}
                    width="80"
                    alt="avatar"
                />
            </ListItem>
        {/each}
    </List>
</Page>
