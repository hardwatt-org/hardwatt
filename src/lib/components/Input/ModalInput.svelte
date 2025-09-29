<script lang="ts">
    import {FormConfig, FormValues} from '$lib/components/SetupContribution/modal.svelte.js';

    let {bindId} = $props();
    let field = FormConfig[bindId];
</script>

<div>
    <label class="input validator input-bordered flex items-center">
        <span class="label">{field.label}</span>
        <input type={field.type} min={field.min} step={field.steps} required class="grow"
               placeholder={field.placeholder}
               bind:value={FormValues[bindId]} list={bindId}/>
    </label>
    <div class="validator-hint">{field.tooltip}</div>
</div>

<style>
    .label {
        margin-inline-end: 0;
    }
</style>