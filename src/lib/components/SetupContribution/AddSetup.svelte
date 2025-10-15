<script lang="ts">
    import {Plus} from '@lucide/svelte';
    import {user, showLoginModalCb} from "$lib/auth.svelte";
    import LogInModal from "$lib/components/SetupContribution/LogInModal.svelte";
    import AddModal from "$lib/components/SetupContribution/AddModal.svelte";

    const checkForAuthentication = () => {
        const modal = document.getElementById('AddModal');
        if (modal instanceof HTMLDialogElement) {
            if (user.loggedIn) {
                modal.showModal();
            } else {
                showLoginModalCb(() => {
                    modal.showModal()
                });
            }
        } else {
            throw new Error("Can't find modals")
        }

    }
</script>

<div class="mx-auto inset-x-0 max-w-max fixed bottom-10">
    <button class="btn bg-primary/70 w-20 h-12 rounded-4xl border-white"
            onclick={checkForAuthentication}>
        <Plus/>
    </button>
</div>

<LogInModal/>
<!--<AddModal1/>
<AddModal2/>
<AddModal3/>
<AddModal4/>-->
<AddModal/>
<!--<SummaryModal/>-->
