<script>
    import { f7, BlockFooter, Link } from "framework7-svelte";
    
</script>

<br />
<br />
<BlockFooter>
    <Link href="/">Home Page</Link> |
    <Link href="/auth/createpasswordrecovery">Recover Password</Link> |
    <Link onClick={() => f7.dialog.alert("Not Available", "Contact Form")}>Contact</Link>
</BlockFooter>
