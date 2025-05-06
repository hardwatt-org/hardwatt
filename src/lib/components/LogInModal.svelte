<script lang="ts">
    import { loginModal, loginWithGithub } from "$lib/auth.svelte";
    import Close from "$lib/components/Icons/Close.svelte";
    import GitHub from "$lib/components/Icons/GitHub.svelte";

    const heading = "Want to contribute your setup?"
    const infoText = "Log in to share your system with the community."

    let modal: HTMLDialogElement;

    $effect(() => {
        if (loginModal.show) {
            modal.showModal();
        } else {
            modal.close();
        }
    });
</script>

<dialog id="LogIn" class="modal" bind:this={modal} onclose={() => {loginModal.show = false}}>
    <div class="modal-box w-10/12 2xl:h-1/4 xl:h-1/3 bg-base-300 items-center py-15 rounded-2xl">
        <div class="md:text-lg font-black">{heading}</div>
        <div class="mt-2">{infoText}</div>
        <button class="btn bg-black text-white border-black mt-5" onclick={()=> {
            loginWithGithub()
          }}>
            <GitHub h="h-5" w="h-5"/>
            Login with GitHub
        </button>
        <div class="modal-action">
            <form method="dialog">
                <button class="absolute right-5 top-5">
                    <Close/>
                </button>
                <!--<button class="btn btn-primary absolute right-5 bottom-5">Next
                </button>-->
            </form>
        </div>
    </div>
</dialog>
