<script>
    import SetupView from "$lib/components/SetupView.svelte";
    import AddSetup from "$lib/components/AddSetup/AddSetup.svelte";
    let { data } = $props();
</script>

<div class="flex justify-center xl:mt-30 md:mt-20 mt-10 font-mono xl:mx-0 mx-5">
    {#await data.setups}
        <p>Loading (idk wia i des mim skeleton am besta mach xD)....</p>
    {:then setups}
        <SetupView {setups} />
    {/await}
    <AddSetup/>
</div>
