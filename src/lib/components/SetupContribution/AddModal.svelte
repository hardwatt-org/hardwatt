<script lang="ts">
    import {X} from '@lucide/svelte';
    import BaseAddForm from "$lib/components/SetupContribution/AddModal/BaseAddForm.svelte";
    import {FormConfig, FormValues, resetForm} from "$lib/components/SetupContribution/modal.svelte";
    import SummaryComponent from "$lib/components/SetupContribution/Summary/SummaryComponent.svelte";
    import type {SetupRecord} from "$lib/models/api.type";
    import {pb} from "$lib/api";
    import {invalidate} from "$app/navigation";

    let modalId = "AddModal";
    let modal = $state<HTMLDialogElement>();
    let currentStep = $state<number>(0);

    let showSummary = $state<boolean>(false);
    let submitPromise = $state(null);

    const closeModal = () => {
        if (modal) {
            modal.close();
            resetForm();
            currentStep = 0;
        }
    }

    const formSubmit = async (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            if (currentStep < FormConfig.length - 1) {
                currentStep++;
                showSummary = false;
            } else if (!showSummary) {
                showSummary = true;
            } else if (showSummary) {
                submitSetup(event);
                closeModal();
            }
        }
    }

    const stepBack = () => {
        currentStep--;
    }

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
            // if successfully added -> refresh setups
            invalidate("app:setups");
        });
    };

</script>

<dialog id={modalId} class="modal" bind:this={modal}>
    <div class="modal-box xl:w-10/12 md:11/12 w-10/12 max-w-6xl bg-base-300 flex items-center justify-center py-20 rounded-2xl">
        <div class="absolute top-5 left-5 md:text-lg font-black">
            {#if showSummary}
                Summary
            {:else}
                {FormConfig[currentStep].infoText}
            {/if}
        </div>
        <form onsubmit={formSubmit}>
            {#if showSummary}
                <SummaryComponent/>
            {:else}
                {#key currentStep}
                    <BaseAddForm step={FormConfig[currentStep]}/>
                {/key}
            {/if}
            <div class="modal-action">
                <button type="button" class="absolute right-5 top-5" onclick={closeModal}>
                    <X/>
                </button>
                {#if currentStep > 0}
                    <button type="button" class="btn btn-primary absolute left-5 bottom-5"
                            onclick={stepBack}>Back
                    </button>
                {/if}
                <button class="btn btn-primary absolute right-5 bottom-5">
                    {#if showSummary}
                        Submit
                    {:else}
                        Next
                    {/if}
                </button>
            </div>
        </form>
    </div>
</dialog>