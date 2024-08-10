<script>
    import Vision from '$lib/assets/vision.svelte';
</script>

<main>
    <div class="vision">
        <svelte:component this={Vision} />
    </div>
</main>

<style>
    :global(body, html) {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .vision {
        width: 100%;
        display: flex;
    }

</style>