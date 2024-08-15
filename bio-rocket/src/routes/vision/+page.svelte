<script>
    import Vision from '$lib/assets/vision.svelte';
    import MobileVision from "$lib/assets/vision_mobile.svelte";

</script>

<main>
    <div class="vision desktop">
        <svelte:component this={Vision} />
    </div>
    <div class="vision mobile">
        <svelte:component this={MobileVision} />
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

    .mobile {
        display: none;
    }

    @media (max-width: 640px) {
        .desktop {
            display: none;
        }
        .mobile {
            width: 100%;
            display: flex;
        }
    }

</style>