<script lang="ts">
    import {FormInputFields, FormValues} from "$lib/components/SetupContribution/modal.svelte.js";

    let {bindId} = $props();
</script>

<label class="select validator">
    <span class="label mr-0">{FormInputFields[bindId].label}</span>
    <select required bind:value={FormValues[bindId]}>
        {#each FormInputFields[bindId].options as option}
            <option>{option}</option>
        {/each}
    </select>
</label>

<style>
    .label {
        margin-inline-end: 0;
    }
</style>

