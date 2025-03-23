<script>
    import PocketBase from 'pocketbase';
    import Close from "$lib/components/Icons/Close.svelte";
    import SummaryBlock from "$lib/components/AddSetup/SummaryBlock.svelte";

    import {input} from "$lib/components/AddSetup/state.svelte";

    let infoText = "Setup Summary";

    let formElement;
    let submitPromise= $state(null);

    const submitSetup = (event) => {
        event.preventDefault();
        const pb = new PocketBase('https://pb.cacaoglass.duckdns.org');

        // extract part key + its value into separate object
        let submitData = {};
        Object.entries(input).forEach(([k, v]) => {
            submitData[k] = v.value;
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
                    <Close/>
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
                            {formElement.submit()}
                        {:catch err}
                            :(
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
