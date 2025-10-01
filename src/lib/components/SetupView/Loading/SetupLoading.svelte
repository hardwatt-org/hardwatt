<script>
    let {index} = $props();

    const isEven = $derived(index % 2 === 0);
    const bgClass = $derived(isEven ? 'bg-base-200' : 'bg-base-300');
    const skeletonClass = $derived(isEven ? 'skeleton' : '');
</script>

<div
        class="grid grid-cols-subgrid col-span-8 p-0 min-h-8 h-10 items-center rounded-box {bgClass}"
>
    <div class="ml-1 mr-4 h-5 {skeletonClass}"></div>
    <div class="mr-4 h-5 {skeletonClass}"></div>
    <div class="mr-4 h-5 hidden md:block {skeletonClass}"></div>
    <div class="mr-4 h-5 {skeletonClass}"></div>
    <div class="mr-4 h-5 hidden md:block {skeletonClass}"></div>
    <div class="mr-4 h-5 hidden xl:block {skeletonClass}"></div>
    <div class="mr-4 h-5 hidden 2xl:block {skeletonClass}"></div>
</div>