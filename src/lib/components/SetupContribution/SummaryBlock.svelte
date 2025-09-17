<script>
    import {FormConfig, FormValues} from "$lib/components/SetupContribution/form.svelte.ts";

    let {blockTitle, setupParts} = $props();
</script>

<div>
    <p class="underline md:text-base/7 md:no-underline font-black">{blockTitle}</p>
    {#each setupParts as part}
        <p>{FormConfig[part].label}: {FormValues[part]}</p>
    {/each}
</div>