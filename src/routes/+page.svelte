<script>
    import SetupView from "$lib/components/SetupView.svelte";
    import AddSetupHomescreen from "$lib/components/AddSetup/AddSetupHomescreen.svelte";

    let { data } = $props();
</script>

<div class="font-mono">
    <AddSetupHomescreen/>

    <div class="flex justify-center mt-10 mx-5 md:mx-0">
        {#await data.setups}
            <p>Loading (idk wia i des mim skeleton am besta mach xD)....</p>
        {:then setups}
            <SetupView {setups} />
        {/await}
    </div>
</div>
