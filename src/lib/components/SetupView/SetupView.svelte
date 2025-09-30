<script lang="ts">
    import {RefreshCw} from '@lucide/svelte';
    import Setup from "./Setup.svelte";
    import {invalidate} from "$app/navigation";
    import SetupViewLoading from "$lib/components/SetupView/Loading/SetupViewLoading.svelte";

    let {data} = $props();
    let grid2xl = "2xl:grid-cols-[0.5fr_0.5fr_0.75fr_1.5fr_2fr_3fr_2.5fr]";
    let gridXl = "xl:grid-cols-[0.5fr_0.5fr_0.75fr_1.5fr_2fr_3fr]";
    let gridMd = "md:grid-cols-[0.4fr_0.4fr_0.6fr_1.5fr_1.5fr]"
    let grid = "grid-cols-[0.4fr_0.4fr_1fr]";

    const reloadSetupView = () => {
        invalidate("app:setups");
    }
</script>

<div class="2xl:w-11/12 md:w-7/8 max-h-155 xl:max-h-180 w-full bg-base-300 p-5 rounded-2xl shadow-2xl inset-shadow-md text-md font-black">
    <div class="flex justify-between items-center ml-2 text-lg">
        <div>Low Power Systems</div>
        <button class="btn btn-ghost btn-circle mb-0" onclick={reloadSetupView}>
            <RefreshCw size="20"/>
        </button>
    </div>
    <div class="divider col-span-7 mt-0 mb-2"></div>
    <div class="sticky top-0 z-1 bg-base-300 mb-2">
        <div class="grid {grid} {gridMd} {gridXl} {grid2xl}">
            <div class="ml-2">Idle</div>
            <div>Load</div>
            <div class="hidden md:block">C-State</div>
            <div>Processor</div>
            <div class="hidden md:block">Motherboard</div>
            <div class="hidden xl:block">Power Supply</div>
            <div class="hidden 2xl:block">Operating System</div>
        </div>
    </div>

    {#await data.setups}
        <SetupViewLoading/>
    {:then setups}
        <div class="overflow-auto h-8/10">
            <div class="grid {grid} {gridMd} {gridXl} {grid2xl} ">
                {#each setups as setup, index}
                    <Setup
                            index={index}
                            {...setup}
                            setup={setup}
                    />
                {/each}
            </div>
        </div>
    {:catch err}
        <SetupViewLoading/>
    {/await}
</div>


