<script>
    import SetupItem from "./SetupItem.svelte";
    import {setups} from "$lib/components/state.svelte.js";

    let grid2xl = "2xl:grid-cols-[0.5fr_0.5fr_0.75fr_1.5fr_2fr_3fr_2.5fr]";
    let gridXl = "xl:grid-cols-[0.5fr_0.5fr_0.75fr_1.5fr_2fr_3fr]";
    let gridMd = "md:grid-cols-[0.4fr_0.4fr_0.6fr_1.5fr_1.5fr]"
    let grid = "grid-cols-[0.4fr_0.4fr_1fr]";
</script>

<div class="2xl:w-11/12 md:w-7/8 max-h-122 xl:max-h-167 w-full bg-base-300 p-5 rounded-2xl shadow-2xl inset-shadow-md text-md font-black">
    <div class="sticky top-0 z-1 bg-base-300">
        <div class="grid {grid} {gridXl} {grid2xl} {gridMd}">
            <div class="ml-2">Idle</div>
            <div>Load</div>
            <div class="hidden md:block">C-State</div>
            <div>Processor</div>
            <div class="hidden md:block">Motherboard</div>
            <div class="hidden xl:block">Power Supply</div>
            <div class="hidden 2xl:block">Operating System</div>
            <div class="divider col-span-7 mt-0 mb-0"></div>
        </div>
    </div>
    <div class="overflow-auto h-9/10">
        <div class="grid {grid} {gridXl} {grid2xl} {gridMd}">
            {#each setups as setup, index}
                <SetupItem
                        idle={setup.idle}
                        load={setup.load}
                        cState={setup.cState}
                        cpu={setup.cpu}
                        motherboard={setup.motherboard}
                        psu={setup.psu}
                        os={setup.os}
                        index={index}
                        {setup}
                />
            {/each}
        </div>
    </div>
</div>
