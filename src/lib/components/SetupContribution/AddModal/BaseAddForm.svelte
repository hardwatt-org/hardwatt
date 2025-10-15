<script>
    import {FormInputFields} from "$lib/components/SetupContribution/modal.svelte.ts";
    import ModalToggleInput from "$lib/components/Input/ModalToggleInput.svelte";
    import ModalSelect from "$lib/components/Input/ModalSelect.svelte";
    import ModalSearchInput from "$lib/components/Input/ModalSearchInput.svelte";
    import ModalInput from "$lib/components/Input/ModalInput.svelte";

    let {step} = $props();

</script>

<div class="min-h-10"></div>
<div class="w-full grid {step.gridLayout} gap-6">
    {#each step.inputFields as field}
        {#if FormInputFields[field.bindId].type === "number"}
            <ModalInput bindId={field.bindId}/>
        {:else}
            <ModalSearchInput bindId={field.bindId}/>
        {/if}
    {/each}

    {#each step.selectFields as field}
        <ModalSelect bindId={field.bindId}/>
    {/each}

    {#each step.toggleInputFields as field}
        <ModalToggleInput bindId={field.bindId}/>
    {/each}
</div>
<div class="min-h-10"></div>

