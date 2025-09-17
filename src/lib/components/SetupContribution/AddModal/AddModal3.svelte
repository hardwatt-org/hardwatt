<script lang="ts">
    import {X} from '@lucide/svelte';
    import ModalSearchInput from "$lib/components/Modal/ModalSearchInput.svelte";
    import ModalToggleInput from "$lib/components/Modal/ModalToggleInput.svelte";

    let config = {
        modalId: 'AddModal3',
        nextModalId: 'AddModal4',
        prevModalId: 'AddModal2',
        infoText: '3/4: Storage & PSU',
    }

    const closeModal = () => {
        const modal = document.getElementById(config.modalId);
        if (modal instanceof HTMLDialogElement) {
            modal.close();
        }
    }

    const nextModal = (event) => {
        event.preventDefault();
        const currentModal = document.getElementById(config.modalId);
        const nextModal = document.getElementById(config.nextModalId);

        if (event.target.checkValidity()) {
            if (currentModal instanceof HTMLDialogElement && nextModal instanceof HTMLDialogElement) {
                currentModal.close();
                nextModal.showModal();
            }
        }
    }

    const backModal = () => {
        const currentModal = document.getElementById(config.modalId);
        const prevModal = document.getElementById(config.prevModalId);

        if (currentModal instanceof HTMLDialogElement && prevModal instanceof HTMLDialogElement) {
            currentModal.close();
            prevModal.showModal();
        }
    }
</script>

<dialog id="{config.modalId}" class="modal">
    <div class="modal-box xl:h-70 xl:w-10/12 md:11/12 w-10/12 max-w-6xl bg-base-300 flex items-center justify-center py-20 rounded-2xl">
        <div class="absolute top-5 left-5 md:text-lg font-black">{config.infoText}</div>
        <form onsubmit={nextModal}>
            <div class="grid md:grid-cols-4 gap-6">
                <ModalSearchInput bindId="ram"/>
                <ModalSearchInput bindId="bootDrive"/>
                <ModalSearchInput bindId="psu"/>
                <ModalToggleInput bindId="powerAdapter"/>
            </div>
            <div class="modal-action">
                <button type="button" class="absolute right-5 top-5" onclick={closeModal}>
                    <X/>
                </button>
                {#if config.prevModalId !== config.modalId}
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