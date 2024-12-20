<script lang="ts">
    import { onMount } from 'svelte';
    import Sponsors from '$lib/assets/sponsors.svelte';
    import Soar from '$lib/assets/soar.png';
    import Biorocket from '$lib/assets/biorocket.png';
    import Ucalgary from '$lib/assets/ucalgary.png';
    import Schulich from '$lib/assets/schulich.png';
    import Yukon3d from '$lib/assets/yukon3d.png';
    import Avnet from '$lib/assets/avnet.png';
    import Ifm from '$lib/assets/ifm.png';
    import Eecol from '$lib/assets/eecol.png';
    import Phoenix from '$lib/assets/phoenix.png';
    import Labjack from '$lib/assets/labjack.png';
    import Skytrac from '$lib/assets/skytrac.png';
    import Automation from '$lib/assets/automation.png';
    import Solvest from '$lib/assets/solvest.png';
    import Protospace from '$lib/assets/protospace.png';
    import Whatif from '$lib/assets/whatif.png';
    import Omega from '$lib/assets/omega.png';
    import Outfrnt from '$lib/assets/outfrnt.png';
    import Rockymountain from '$lib/assets/rockymountain.png';

    onMount(() => {
        let containerElement = document.querySelector('.background') as HTMLElement;
        // Define the resize handler
        const handleResize = () => {
            if (containerElement) {
                let containerWidth = containerElement.offsetWidth;
                let containerHeight = containerElement.offsetHeight;

                document.documentElement.style.setProperty('--container-width', `${containerWidth}px`);
                document.documentElement.style.setProperty('--container-height', `${containerHeight}px`);
                document.documentElement.style.setProperty(
                    '--container-width-unitless',
                    `${containerWidth}`
                );
            } else {
                console.error('No element with class "container" found');
            }
        };

        // Call the resize handler once on mount
        handleResize();

        // Attach the resize handler to the resize event
        window.addEventListener('resize', handleResize);

        // Return a cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
</script>

<div class="background">
    <svelte:component this={Sponsors} />
    <a href="https://www.soar-rockets.ca/" target="_blank">
        <img src={Soar} alt="Soar" class="foreground soar" />
    </a>
    <a href="https://www.biorocket.ca/" target="_blank">
        <img src={Biorocket} alt="Biorocket" class="foreground biorocket" />
    </a>
    <a href="https://www.ucalgary.ca/" target="_blank">
        <img src={Ucalgary} alt="Ucalgary" class="foreground ucalgary" />
    </a>
    <a href="https://schulich.ucalgary.ca/" target="_blank">
        <img src={Schulich} alt="Schulich" class="foreground schulich" />
    </a>
    <a href="https://www.yukon3dsolutions.com/" target="_blank">
        <img src={Yukon3d} alt="Yukon3d" class="foreground yukon" />
    </a>
    <!-- <a href="https://www.avnet.com/wps/portal/us" target="_blank">
        <img src={Avnet} alt="Avnet" class="foreground avnet" />
    </a> -->
    <a href="https://www.ifm.com/ca/en" target="_blank">
        <img src={Ifm} alt="Ifm" class="foreground ifm" />
    </a>
    <a href="https://www.eecol.com/ca/en" target="_blank">
        <img src={Eecol} alt="Eecol" class="foreground
        eecol" />
    </a>
    <a href="https://www.phoenixcontact.com/en-ca/" target="_blank">
        <img src={Phoenix} alt="Phoenix" class="foreground
        phoenix" />
    </a>
    <a href="https://labjack.com/" target="_blank">
        <img src={Labjack} alt="Labjack" class="foreground
        labjack" />
    </a>
    <a href="https://www.skytrac.ca/" target="_blank">
        <img src={Skytrac} alt="Skytrac" class="foreground
        skytrac" />
    </a>
    <a href="https://www.automationdirect.com/adc/home/home" target="_blank">
        <img src={Automation} alt="Automation" class="foreground
        automation" />
    </a>
    <a href="https://solvest.ca/" target="_blank">
        <img src={Solvest} alt="Solvest" class="foreground
        solvest" />
    </a>
    <a href="https://protospace.ca/" target="_blank">
        <img src={Protospace} alt="Protospace" class="foreground
        protospace" />
    </a>
    <a href="https://whatif-labs.ca/" target="_blank">
        <img src={Whatif} alt="Whatif" class="foreground
        whatif" />
    </a>
    <a href="https://www.omega.ca/en/" target="_blank">
        <img src={Omega} alt="Omega" class="foreground
        omega" />
    </a>
    <a href="https://www.outfrnt.com/" target="_blank">
        <img src={Outfrnt} alt="Outfrnt" class="foreground
        outfrnt" />
    </a>
    <a href="https://rmmc.net/8020/index.htm" target="_blank">
        <img src={Rockymountain} alt="Rockymountain" class="foreground
        rockymountain" />
    </a>

</div>

<style>
    .background {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        overflow: auto;
        z-index: -1;
    }
    @media (min-width: 576px) {
		.background {
			max-width: 100%;
		}
	}
    
    .foreground {
        position: absolute;
        z-index: 1;
    }
    .soar {
        top: calc(var(--container-width) * 0.28);
        left: 30%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 7000));
    }
    .biorocket {
        top: calc(var(--container-width) * 0.29);
        left: 70%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 3500));
    }
    .ucalgary {
        top: calc(var(--container-width) * 0.43);
        left: 35%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 3000));
    }
    .schulich {
        top: calc(var(--container-width) * 0.43);
        left: 65%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 3500));
    }
    .yukon {
        top: calc(var(--container-width) * 0.85);
        left: 50%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 2400));
    }
    /* .avnet {
        top: calc(var(--container-width) * 0.85);
        left: 70%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 4500));
    } */
    .ifm {
        top: calc(var(--container-width) * 1.36);
        left: 50%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1300));
    }
    .eecol {
        top: calc(var(--container-width) * 1.73);
        left: 32%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 4500));
    }
    .phoenix {
        top: calc(var(--container-width) * 1.73);
        left: 68%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 4000));
    }
    .labjack {
        top: calc(var(--container-width) * 1.84);
        left: 32%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 2400));
    }
    .skytrac {
        top: calc(var(--container-width) * 1.84);
        left: 68%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 6000));
    }
    .automation {
        top: calc(var(--container-width) * 1.93);
        left: 50%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1000));
    }
    .solvest {
        top: calc(var(--container-width) * 2.055);
        left: 35%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
    }
    .protospace {
        top: calc(var(--container-width) * 2.05);
        left: 65%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 9000));
    }
    .whatif {
        top: calc(var(--container-width) * 2.33);
        left: 50%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 4000));
    }
    .omega {
        top: calc(var(--container-width) * 2.6);
        left: 50%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 5000));
    }
    .outfrnt {
        top: calc(var(--container-width) * 2.70);
        left: 35%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 7000));
    }
    .rockymountain {
        top: calc(var(--container-width) * 2.71);
        left: 66%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1000));
    }

    @media (max-width: 400px) {
        .soar {
            top: calc(var(--container-width) * 0.28);
            left: 30%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1500));
        }
        .biorocket {
            top: calc(var(--container-width) * 0.29);
            left: 65%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1000));
        }
        .ucalgary {
            top: calc(var(--container-width) * 0.43);
            left: 35%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1500));
        }
        .schulich {
            top: calc(var(--container-width) * 0.43);
            left: 60%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1500));
        }
        .yukon {
            top: calc(var(--container-width) * 0.85);
            left: 50%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
        }
        /* .avnet {
            top: calc(var(--container-width) * 0.85);
            left: 70%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
        } */
        .ifm {
            top: calc(var(--container-width) * 1.36);
            left: 50%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1300));
        }
        .eecol {
            top: calc(var(--container-width) * 1.73);
            left: 32%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
        }
        .phoenix {
            top: calc(var(--container-width) * 1.73);
            left: 68%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
        }
        .labjack {
            top: calc(var(--container-width) * 1.84);
            left: 32%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1300));
        }
        .skytrac {
            top: calc(var(--container-width) * 1.84);
            left: 68%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1300));
        }
        .automation {
            top: calc(var(--container-width) * 1.93);
            left: 50%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 800));
        }
        .solvest {
            top: calc(var(--container-width) * 2.055);
            left: 35%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
        }
        .protospace {
            top: calc(var(--container-width) * 2.05);
            left: 65%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 2000));
        }
        .whatif {
            top: calc(var(--container-width) * 2.33);
            left: 50%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1500));
        }
        .omega {
            top: calc(var(--container-width) * 2.6);
            left: 50%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1500));
        }
        .outfrnt {
            top: calc(var(--container-width) * 2.70);
            left: 35%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1500));
        }
        .rockymountain {
            top: calc(var(--container-width) * 2.71);
            left: 66%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1000));
        }
    }
</style>