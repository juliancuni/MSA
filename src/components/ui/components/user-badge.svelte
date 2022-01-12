<script>
    import { f7, Link, Chip } from "framework7-svelte";
    import userProfile from "../../../js/stores/user-profile.store";
    import { logoutUser } from "../../../js/stores/user.store";
    $: profile = $userProfile?.toJSON() || {};
    $: nameInitials = profile.emriIPlote
        ? profile.emriIPlote
              .split(" ")
              .map((n) => n[0])
              .join("")
        : null;
</script>

<div class="dropdown">
    <Link panelClose aria-haspopup="true">
        <Chip
            text={f7.device.android || f7.device.iphone
                ? null
                : profile.emriIPlote}
            media={profile.avatar?.url ? null : nameInitials}
        >
            <img slot="media" src={profile.avatar?.url} alt="avatar" />
        </Chip>
    </Link>
    <div class="dropdown-content">
        <a href="/app/userprofile">Profile</a>
        <a href="/" on:click={logoutUser}>Logout</a>
    </div>
</div>

<style>
    /* Style the links inside the navigation bar */
    a {
        float: right;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 5px 16px;
        text-decoration: none;
    }
    /* Dropdown container - needed to position the dropdown content */
    .dropdown {
        float: right;
        overflow: hidden;
    }
    /* Style the dropdown button to fit inside the topnav */
    .dropdown {
        border: none;
        outline: none;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
    }
    /* Style the dropdown content (hidden by default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    /* Style the links inside the dropdown */
    .dropdown-content a {
        color: grey;
        text-decoration: none;
        display: block;
    }
    /* Add a dark background on topnav links and the dropdown button on hover */
    a:hover,
    .dropdown:hover {
        color: white;
    }
    /* Add a grey background to dropdown links on hover */
    .dropdown-content a:hover {
        background-color: #ddd;
        color: black;
    }
    /* Show the dropdown menu when the user moves the mouse over the dropdown button */
    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>
