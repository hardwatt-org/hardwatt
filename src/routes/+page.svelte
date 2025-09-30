<script lang="ts">
    import SetupView from "$lib/components/SetupView/SetupView.svelte";
    import AddSetup from "$lib/components/SetupContribution/AddSetup.svelte";

    let {data} = $props();
</script>

<div class="flex justify-center xl:mt-30 md:mt-20 mt-10 font-mono xl:mx-0 mx-5">
    <SetupView {data}/>
    <AddSetup/>
</div>
