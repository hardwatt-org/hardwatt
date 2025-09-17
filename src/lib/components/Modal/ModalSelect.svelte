<script lang="ts">
    import {FormConfig, FormValues} from "$lib/components/SetupContribution/form.svelte";

    let {bindId} = $props();
</script>

<label class="select validator">
    <span class="label mr-0">{FormConfig[bindId].label}</span>
    <select required bind:value={FormValues[bindId]}>
        {#each FormConfig[bindId].options as option}
            <option>{option}</option>
        {/each}
    </select>
</label>

<style>
    .label {
        margin-inline-end: 0;
    }
</style>

