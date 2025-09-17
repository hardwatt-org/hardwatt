<script lang="ts">
    import {pb} from "$lib/api.js";
    import {onMount} from 'svelte';
    import {FormConfig, FormValues} from '$lib/components/SetupContribution/form.svelte';
    
    let {bindId} = $props();
    let field = FormConfig[bindId];
    let options = $state([]);


    let filterOptions = $derived(options.filter((part) => part.toLowerCase().includes(FormValues[bindId].toLowerCase())));
    let showOptions = $state(false);
    let selectedOption = $state("");

    const selectOption = (part) => {
        selectedOption = part;
        FormValues[bindId] = selectedOption;
        showOptions = false;
    }

    const handleChange = () => {
        if (FormValues[bindId].length < 1) {
            selectedOption = "";
        }
    }

    const handleOutsideClick = (e) => {
        if (!e.target.closest('.' + bindId)) {
            showOptions = false;
        }
    }

    onMount(() => {
        pb.collection(bindId).getList().then(val => {
            options = val.items[0].options;
        });

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    });
</script>

<div id={bindId} class="relative {bindId}">
    <label class="input validator input-bordered flex items-center me-0">
        <span class="label">{field.label}</span>
        <input type={field.type} min={field.min} step={field.steps} required class="grow"
               placeholder={field.placeholder}
               bind:value={FormValues[bindId]} oninput={() => handleChange()} onfocus={() => showOptions = true}/>
    </label>
    <ul class="bg-base-100 absolute top-10 max-h-30 border rounded-(--radius-field) overflow-auto z-2 py-2 {showOptions ? 'block' : 'hidden'}">
        {#if filterOptions.length > 0}
            {#each filterOptions as part}
                <button type="button" class="w-full text-left p-2 hover:bg-base-300"
                        onclick={() => selectOption(part)}>{part}</button>
            {/each}
        {:else}
            <button type="button" class="w-full text-left p-2 hover:bg-base-300"
                    onclick={() => selectOption(FormValues[bindId])}>
                <div class="flex items-center gap-2">
                    <span class="material-icons-round">add</span>
                    Add component
                </div>

            </button>
        {/if}
    </ul>
</div>

<style>
    ul {
        width: clamp(3rem, 20rem, 100%);
    }

    .label {
        margin-inline-end: 0;
    }
</style>
