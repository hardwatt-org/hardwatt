<script lang="ts">
    import {Plus} from '@lucide/svelte';
    import {user, showLoginModalCb} from "$lib/auth.svelte";
    import AddModal1 from "$lib/components/SetupContribution/AddModal/AddModal1.svelte";
    import AddModal2 from "$lib/components/SetupContribution/AddModal/AddModal2.svelte";
    import AddModal3 from "$lib/components/SetupContribution/AddModal/AddModal3.svelte";
    import AddModal4 from "$lib/components/SetupContribution/AddModal/AddModal4.svelte";
    import Summary from "$lib/components/SetupContribution/Summary/Summary.svelte";
    import LogInModal from "$lib/components/SetupContribution/LogInModal.svelte";

    const checkForAuthentication = () => {
        const modal = document.getElementById('AddModal1');
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
<AddModal1/>
<AddModal2/>
<AddModal3/>
<AddModal4/>
<Summary/>