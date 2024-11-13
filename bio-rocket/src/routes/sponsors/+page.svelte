<script>
    import Sponsors from '$lib/assets/sponsors.svelte';
    import Yukon3d from '$lib/assets/yukon3d.png';
    import Avnet from '$lib/assets/avnet.png';
</script>

<main>
    <div class="background">
        <svelte:component this={Sponsors} />
    </div>
    <img src={Yukon3d} alt="Yukon3d" class="foreground yukon" />
    <img src={Avnet} alt="Avnet" class="foreground avnet" />
</main>

<style>
    :global(body, html) {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    main {
        width: 100%;
        min-height: 200vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        z-index: -1;
    }
    .foreground {
        position: absolute;
        z-index: 1;
    }
    .yukon {
        top: 150vh;
        left: 30vw;
        width: 30vw;
        transform: translate(-50%, -50%);
    }
    .avnet {
        top: 110%;
        left: 50%;
        width: 40%;
    }

</style>