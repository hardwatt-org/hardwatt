<script>
    import Close from "$lib/components/Icons/Close.svelte";
    import GitHub from "$lib/components/Icons/GitHub.svelte";

    const heading = "Log In"
    const infoText = "Please sign in with on of the following services"
</script>

<dialog id="LogIn" class="modal">
    <div class="modal-box w-10/12 2xl:h-1/4 xl:h-1/3 bg-base-300 items-center py-15 rounded-2xl">
        <div class="absolute top-5 md:text-lg font-black">{heading}</div>
        <div class="">{infoText}</div>
        <GitHub/>
        <div class="modal-action">
            <form method="dialog">
                <button class="absolute right-5 top-5">
                    <Close/>
                </button>
                <button class="btn btn-primary absolute right-5 bottom-5">Next
                </button>
            </form>
        </div>
    </div>
</dialog>