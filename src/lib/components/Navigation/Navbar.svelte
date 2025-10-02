<script lang="ts">
    import {showLoginModal, logout} from "$lib/auth.svelte.js";
    import {user} from "$lib/auth.svelte.js";
    import ThemeToggle from "$lib/components/Layout/ThemeToggle.svelte";
    import {Github, LogIn, LogOut} from '@lucide/svelte';
    import {onMount} from "svelte";

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
    <div class="flex mr-5 gap-5 items-center">
        <a href={githubRef} target="_blank">
            <Github/>
        </a>
        <ThemeToggle/>
        {#if user.loggedIn}
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        {#if user.avatar}
                            <img alt="user-avatar" src={user.avatar}/>
                        {/if}
                    </div>
                </div>
                <ul
                        class="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <button onclick={logout}>
                            <LogOut size="15"/>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        {:else}
            <button class="btn btn-ghost border-none" onclick={showLoginModal}>
                <LogIn size="18"/>
                Login
            </button>
        {/if}
    </div>
</div>
