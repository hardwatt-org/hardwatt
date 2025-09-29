<script lang="ts">
    import ModalSearchInput from "$lib/components/Input/ModalSearchInput.svelte";
    import {FormConfig, FormValues} from "$lib/components/SetupContribution/modal.svelte.js";

    let componentVisibility = $state(false);
    let {bindId} = $props();
    let field = FormConfig[bindId];

    $effect(() => {
        if (!componentVisibility) {
            FormValues[bindId] = '';
        }
    });
</script>

<label class="flex flex-col gap-2">
    <label class="{componentVisibility ? 'xl:absolute xl:top-19':''}
                            flex cursor-pointer gap-2 items-center">
        <span>{field.toggleLabelL}</span>
        <input type="checkbox" bind:checked={componentVisibility} class="toggle"/>
        <span>{field.toggleLabelR}</span>
    </label>

    {#if componentVisibility}
        <ModalSearchInput bindId={bindId}/>
    {/if}
</label>