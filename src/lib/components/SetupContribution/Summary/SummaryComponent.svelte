<script lang="ts">
    import {X} from '@lucide/svelte';
    import {pb} from "$lib/api";
    import {FormValues, resetForm} from "$lib/components/SetupContribution/modal.svelte";
    import SummaryBlock from "$lib/components/SetupContribution/Summary/SummaryBlock.svelte";
    import type {SetupRecord} from "$lib/models/api.type";
    import {invalidate} from "$app/navigation";


    let infoText = "Setup SummaryModal";
    let formElement = $state();
    let submitPromise = $state(null);


    const submitSetup = (event) => {
        event.preventDefault();

        // extract part key + its value into separate object
        let submitData: SetupRecord = {
            bootDrive: "",
            cState: "",
            cpu: "",
            cpuCooler: "",
            created: undefined,
            gpu: "",
            id: "",
            idle: 0,
            keyboard: "",
            load: 0,
            measuringDevice: "",
            monitor: "",
            motherboard: "",
            mouse: "",
            os: "",
            powerAdapter: "",
            psu: "",
            ram: "",
            status: "",
            updated: undefined,
            user: ""
        };

        Object.entries(FormValues).forEach(([k, v]) => {
            submitData[k] = v;
        });

        resetForm();

        // set additional stuff
        submitData.status = "pending";

        // TODO we should tell the user that you have to be logged in to create a setup...
        // right now the request just won't work
        submitData.user = pb.authStore.record?.id;

        submitPromise = pb.collection('setups').create(submitData).then(() => {
            // if succesfully added -> refresh setups
            invalidate("app:setups");
        });
    };

    const logError = (err) => {
        console.log(err)
    }
</script>

<div class="md:flex md:justify-evenly text-xs md:text-base md:gap-10">
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
