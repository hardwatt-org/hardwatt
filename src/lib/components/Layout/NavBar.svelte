<script>
    import {loginWithGithub, logout} from "$lib/api/pocketbase";
    import {user} from "$lib/api/user.svelte";
    import ThemeToggle from "$lib/components/Layout/ThemeToggle.svelte";
    import GitHub from "$lib/components/Icons/GitHub.svelte";
    import {onMount} from "svelte";
    import Login from "$lib/components/Icons/Login.svelte";

    let githubRef = "https://github.com/hardwatt-org/";
    let title = "hardwatt";
    let shownTitle = $state("");
    let typewriterSleep = 1000;
    let typewriterSpeed = 200;


    const typeWriter = (index = 1, direction = 1) => {
        shownTitle = title.slice(0, index);

        if (shownTitle.length >= title.length) {
            setTimeout(() => typeWriter(index - 1, -1), typewriterSleep);
        } else if (shownTitle.length === 0) {
            setTimeout(() => typeWriter(index + 1, 1), typewriterSleep);
        } else {
            setTimeout(() => typeWriter(index + direction, direction), typewriterSpeed);
        }
    }

    let loginPromise = $state(null);
    
    onMount(() => {
        typeWriter();
    })
</script>

<div class="md:fixed md:top-0 navbar rounded-b-lg font-mono flex justify-between">
    <div class="flex gap-0 text-2xl font-black ml-5">
        <div>
            {shownTitle}
        </div>
        {#if shownTitle.length !== title.length}
            <div>
                _
            </div>
        {/if}
    </div>
    <div class="flex mr-5 gap-5">
        <a href={githubRef} target="_blank">
            <GitHub h="h-10" w="w-10"/>
        </a>
        <ThemeToggle/>
        {#if user.loggedIn}
            <button class="avatar" onclick={logout}>
              <div class="w-10 rounded-xl">
                {#if user.avatar}
                    <img alt="user-avatar" src={user.avatar} />
                {/if}
              </div>
            </button>
        {:else}
            {#await loginPromise}
                <span class="loading loading-spinner loading-md"></span>
            {:then}
                <button class="btn bg-primary text-white border-black" onclick={() => {loginPromise = loginWithGithub()}} >
                    <Login/>
                    Login
                </button>
            {/await}
        {/if}
    </div>
</div>
