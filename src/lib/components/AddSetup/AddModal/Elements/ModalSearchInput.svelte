<script>
    import {pb} from "$lib/api/pocketbase";
    import {onMount} from 'svelte';
    import {input, parts} from '$lib/components/AddSetup/state.svelte.js';

    let {bindId} = $props();
    let field = input[bindId];
    let options = $state([]);


    let filterOptions = $derived(options.filter((part) => part.toLowerCase().includes(field.value.toLowerCase())));
    let showOptions = $state(false);
    let selectedOption = $state("");

    const selectOption = (part) => {
        selectedOption = part;
        field.value = selectedOption;
        showOptions = false;
    }

    const handleChange = () => {
        if (field.value.length < 1) {
            selectedOption = '';
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
               bind:value={field.value} onchange={handleChange} onfocus={() => showOptions = true}/>
    </label>
    <ul class="bg-base-100 absolute top-10 max-h-30 border rounded-(--radius-field) overflow-auto z-2 py-2 {showOptions ? 'block' : 'hidden'}">
        {#each filterOptions as part}
            <button type="button" class="w-full text-left p-2 hover:bg-base-300"
                    onclick={() => selectOption(part)}>{part}</button>
        {/each}
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
