<script lang="ts">
    import {X} from '@lucide/svelte';
    import {FormConfig} from "$lib/components/SetupContribution/modal.svelte.js";
    import ModalInput from "$lib/components/Input/ModalInput.svelte";
    import ModalSearchInput from "$lib/components/Input/ModalSearchInput.svelte";
    import ModalSelect from "$lib/components/Input/ModalSelect.svelte";
    import ModalToggleInput from "$lib/components/Input/ModalToggleInput.svelte";

    let {
        modalId,
        nextModalId,
        prevModalId,
        infoText,
        gridLayout,
        inputFields,
        selectFields,
        toggleInputFields,
    } = $props()

    const closeModal = () => {
        const modal = document.getElementById(modalId);
        if (modal instanceof HTMLDialogElement) {
            modal.close();
        }
    }

    const nextModal = (event) => {
        event.preventDefault();
        const currentModal = document.getElementById(modalId);
        const nextModal = document.getElementById(nextModalId);

        if (event.target.checkValidity()) {
            if (currentModal instanceof HTMLDialogElement && nextModal instanceof HTMLDialogElement) {
                currentModal.close();
                nextModal.showModal();
            }
        }
    }

    const backModal = () => {
        const currentModal = document.getElementById(modalId);
        const prevModal = document.getElementById(prevModalId);

        if (currentModal instanceof HTMLDialogElement && prevModal instanceof HTMLDialogElement) {
            currentModal.close();
            prevModal.showModal();
        }
    }
</script>

<dialog id="{modalId}" class="modal">
    <div class="modal-box xl:h-70 xl:w-10/12 md:11/12 w-10/12 max-w-6xl bg-base-300 flex items-center justify-center py-20 rounded-2xl">
        <div class="absolute top-5 left-5 md:text-lg font-black">{infoText}</div>
        <form onsubmit={nextModal}>
            <div class="grid {gridLayout} gap-6">
                {#each inputFields as field}
                    {#if FormConfig[field.bindId].type === "number"}
                        <ModalInput bindId={field.bindId}/>
                    {:else}
                        <ModalSearchInput bindId={field.bindId}/>
                    {/if}
                {/each}

                {#each selectFields as field}
                    <ModalSelect bindId={field.bindId}/>
                {/each}

                {#each toggleInputFields as field}
                    <ModalToggleInput bindId={field.bindId}/>
                {/each}
            </div>
            <div class="modal-action">
                <button type="button" class="absolute right-5 top-5" onclick={closeModal}>
                    <X/>
                </button>
                <!--first modal has itself as prevModal so this will only show for the rest-->
                {#if prevModalId !== modalId}
                    <button type="button" class="btn btn-primary absolute left-5 bottom-5"
                            onclick={backModal}>Back
                    </button>
                {/if}
                <button class="btn btn-primary absolute right-5 bottom-5">Next
                </button>
            </div>
        </form>
    </div>
</dialog>