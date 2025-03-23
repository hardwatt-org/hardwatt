<script>
    let {setup} = $props();

    const fields = [
        { label: "idle power", key: "idle" },
        { label: "Motherboard", key: "motherboard" },
        { label: "RAM", key: "ram" },
        { label: "OS", key: "os" },
        { label: "load power", key: "load" },
        { label: "CPU", key: "cpu" },
        { label: "boot device", key: "bootDrive" },
        { label: "mouse", key: "mouse" },
        { label: "meas. device", key: "measuringDevice" },
        { label: "CPU cooler", key: "cpuCooler" },
        { label: "PSU", key: "psu" },
        { label: "keyboard", key: "keyboard" },
        { label: "C-State", key: "cState" },
        { label: "GPU", key: "gpu" },
        { label: "power adapter", key: "powerAdapter" },
        { label: "monitor", key: "monitor" },
    ];

</script>

<div class="grid grid-cols-subgrid col-span-7 ml-2">
    <div class="col-span-7">
        <div class="divider mt-0 mb-0"></div>
        <div class="grid xl:grid-cols-4 md:grid-cols-2 font-normal text-xs 2xl:text-sm">
            {#each fields as field}
                <div class="flex gap-1"><div class="font-black">{field.label}:</div>{setup[field.key]}</div>
            {/each}
        </div>
        <div class="divider mt-0 mb-0"></div>
    </div>
</div>
