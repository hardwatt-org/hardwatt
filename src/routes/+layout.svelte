<script>
    import "../app.css";
    import Navbar from "$lib/components/Navigation/Navbar.svelte"
    let { children } = $props();
</script>

{@render Navbar?.()}
{@render children?.()}