<script lang="ts">
    import SummaryBlock from "$lib/components/SetupContribution/Summary/SummaryBlock.svelte";
</script>

<div class="min-h-10"></div>
<div class="w-full md:flex md:justify-evenly text-xs md:text-base md:gap-10">
    <div class="grid gap-5">
        <SummaryBlock blockTitle="Power Consumption" setupParts={["idle","load","measuringDevice","cState"]}/>
        <SummaryBlock blockTitle="Processors" setupParts={["motherboard","cpu","cpuCooler","gpu"]}/>
    </div>
    <div class="divider divider-horizontal"></div>
    <div class="grid gap-5 md:mt-0 mt-5">
        <SummaryBlock blockTitle="Storage & PSU" setupParts={["ram","bootDrive","psu","powerAdapter"]}/>
        <SummaryBlock blockTitle="OS & Peripherals" setupParts={["os","mouse","keyboard","monitor"]}/>
    </div>
</div>
<div class="min-h-10"></div>
