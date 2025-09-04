<script>
    import CollapsedSetupView from "./CollapsedSetupView.svelte";

    let {
        idle,
        load,
        cState,
        cpu,
        motherboard,
        psu,
        os,
        index,
        setup
    } = $props();
</script>

<div
        tabindex="0"
        role="button"
        class="
            {index % 2 === 0 ? 'bg-base-200' : 'bg-base-300'}
            collapse grid grid-cols-subgrid col-span-8 text-xs md:text-sm"
>
    <div
            class="collapse-title grid grid-cols-subgrid col-span-8 p-0 min-h-8 h-10 items-center ml-2"
    >
        <div class="">{idle}</div>
        <div>{load}</div>
        <div class="hidden md:block">{cState}</div>
        <div>{cpu}</div>
        <div class="hidden md:block">{motherboard}</div>
        <div class="hidden xl:block">{psu}</div>
        <div class="hidden 2xl:block">{os}</div>
        {#if setup.status == "pending"}
            <div class="badge badge-sm badge-soft badge-primary absolute right-0 mr-2">awaiting approval</div>
        {/if}
    </div>
    <div class="collapse-content grid grid-cols-subgrid col-span-8 p-0 text-xs">
        <CollapsedSetupView {setup}/>
    </div>
</div>
