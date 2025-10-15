<script>
    import CollapsedSetup from "./CollapsedSetup.svelte";

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
        {#if setup.status === "pending"}
            <div class="tooltip tooltip-left" data-tip="setup is in preview">
                <div aria-label="warning" class="status status-warning relative right-0 mr-5"></div>
            </div>
        {/if}
    </div>
    <div class="collapse-content grid grid-cols-subgrid col-span-8 p-0 text-xs">
        <CollapsedSetup {setup}/>
    </div>
</div>
