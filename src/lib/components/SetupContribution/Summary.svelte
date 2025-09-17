<script lang="ts">
    import {X} from '@lucide/svelte';
    import {pb} from "$lib/api";
    import {FormValues} from "$lib/components/SetupContribution/form.svelte";
    import SummaryBlock from "$lib/components/SetupContribution/SummaryBlock.svelte";
    import type {SetupRecord} from "$lib/models/api.type";


    let infoText = "Setup Summary";
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

        // set additional stuff
        submitData.status = "pending";

        // TODO we should tell the user that you have to be logged in to create a setup...
        // right now the request just won't work
        submitData.user = pb.authStore.record?.id;

        submitPromise = pb.collection('setups').create(submitData);
    };
</script>

<dialog id="AddSummary" class="modal">
    <div class="modal-box w-10/12 max-w-6xl bg-base-300 items-center py-15 rounded-2xl">
        <div class="absolute top-5 md:text-lg font-black">{infoText}</div>
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
        <div class="modal-action">
            <form method="dialog" bind:this={formElement}>
                <button class="absolute right-5 top-5">
                    <X/>
                </button>
                <button class="btn btn-primary absolute right-5"
                        onclick={submitSetup}
                >
                    {#if submitPromise === null}
                        Submit
                    {:else}
                        {#await submitPromise}
                            <span class="loading loading-spinner loading-md"></span>
                        {:then res }
                            Thanks
                        {:catch err}
                            <div class="toast">
                                <div class="alert alert-info">
                                    <span>New message arrived.</span>
                                </div>
                            </div>
                        {/await}
                    {/if}
                </button>
                <button class="btn btn-primary absolute left-5"
                        onclick={()=>document.getElementById('AddModal4').showModal()}>Back
                </button>
            </form>
        </div>
    </div>
</dialog>