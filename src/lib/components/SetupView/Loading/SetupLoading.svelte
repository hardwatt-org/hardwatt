<script>
    let {index} = $props();
</script>

<div
        class="{index % 2 === 0 ? 'bg-base-200' : 'bg-base-300'} grid grid-cols-subgrid col-span-8 p-0 min-h-8 h-10 items-center rounded-box"
>
    <div class="ml-1 mr-4 skeleton h-5"></div>
    <div class="mr-4 skeleton h-5"></div>
    <div class="mr-4 skeleton h-5 hidden md:block"></div>
    <div class="mr-4 skeleton h-5"></div>
    <div class="mr-4 skeleton h-5 hidden md:block"></div>
    <div class="mr-4 skeleton h-5 hidden xl:block"></div>
    <div class="mr-4 skeleton h-5 hidden 2xl:block"></div>
</div>