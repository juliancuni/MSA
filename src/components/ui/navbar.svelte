<script>
    import { f7, Navbar, NavTitle, NavRight, Link } from "framework7-svelte";
</script>

<Navbar>
    <NavTitle>
        <Link noLinkClass href="/" color="black">{f7.name}</Link>
    </NavTitle>
    <!-- <NavTitleLarge>{f7.name}</NavTitleLarge> -->
    <NavRight
        ><Link href="/about">About</Link>
        <Link href="/auth/login">Login</Link>
    </NavRight>
</Navbar>
