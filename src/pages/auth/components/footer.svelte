<script>
    import { f7, BlockFooter, Link } from "framework7-svelte";
    
</script>

<br />
<br />
<BlockFooter>
    <Link href="/">Home Page</Link> |
    <Link onClick={() => f7.dialog.alert("Not Available")}>Recover Password</Link> |
    <Link onClick={() => f7.dialog.alert("Not Available")}>Contact</Link>
</BlockFooter>
