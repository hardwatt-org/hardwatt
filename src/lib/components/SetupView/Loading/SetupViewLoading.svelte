<script lang="ts">
    import SetupLoading from "$lib/components/SetupView/Loading/SetupLoading.svelte";
</script>

<div class="grid grid-cols-subgrid col-span-8">
    {#each {length: 9} as _, index}
        <SetupLoading {index}/>
    {/each}

</div>