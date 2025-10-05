<script lang="ts">
    import {loginModal, loginWithGithub} from "$lib/auth.svelte.js";
    import {Github, X, CircleX} from '@lucide/svelte';

    const heading = "Want to contribute your setup?"
    const infoText = "Login to share your system with the community."

    const State = Object.freeze({
        None: 0,
        Loading: 1,
        Error: 2,
    })

    let modal: HTMLDialogElement;

    $effect(() => {
        if (loginModal.show) {
            modal.showModal();
        } else {
            // reset state when modal gets closed
            state = State.None;
            modal.close();
        }
    });

    let state = $state<number>(State.None);

    const login = () => {
        state = State.Loading;
        loginWithGithub().then(() => {
            loginModal.show = false;
            loginModal.loginCb();
        }).catch((err) => {
            console.error(err);
            state = State.Error;
        });
    };
</script>

<dialog id="LogIn" class="modal" bind:this={modal} onclose={() => {loginModal.show = false}}>
    <div class="modal-box w-10/12 bg-base-300 items-center py-15 rounded-2xl">
        <div class="md:text-lg font-black">{heading}</div>
        <div class="mt-2">{infoText}</div>
        <div class="mt-5">
            <button class="btn bg-black text-white border-black" class:skeleton={state === State.Loading}
                    onclick={login}>
                <Github/>
                Login with GitHub
            </button>

            {#if state === State.Error}
                <div role="alert" class="mt-5 alert alert-error">
                    <CircleX/>
                    <span>Something went wrong :c</span>
                </div>
            {/if}

        </div>
        <div class="modal-action">
            <form method="dialog">
                <button class="btn btn-circle btn-ghost border-none absolute right-5 top-5">
                    <X/>
                </button>
            </form>
        </div>
    </div>
</dialog>
