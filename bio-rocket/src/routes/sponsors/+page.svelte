<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import Sponsors from '$lib/assets/sponsors.svelte';

    const Soar = `${base}/soar.png`
    const Biorocket = `${base}/biorocket.png`
    const Yukon3d = `${base}/yukon3d.png`
    const YukonUniversity = `${base}/yukonuniversity.png`
    const Avnet = `${base}/avnet.png`
    const Ifm = `${base}/ifm.png`
    const Eecol = `${base}/eecol.png`
    const Phoenix = `${base}/phoenix.png`
    const Labjack = `${base}/labjack.png`
    const Skytrac = `${base}/skytrac.png`
    const Automation = `${base}/automation.png`
    const Solvest = `${base}/solvest.png`
    const Protospace = `${base}/protospace.png`
    const Whatif = `${base}/whatif.png`
    const Omega = `${base}/dwyeromega.png`
    const Outfrnt = `${base}/outfrnt.png`
    const Rockymountain = `${base}/rockymountain.png`
    const Cenovus = `${base}/cenovus.png`
    const Mikroe = `${base}/mikroe.png`
    const Rfdesign = `${base}/rfdesign.jpg`
    const Misumi = `${base}/misumi.png`
    const Aqua = `${base}/aqua.png`

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
    <a href="https://www.yukon3dsolutions.com/" target="_blank">
        <img src={Yukon3d} alt="Yukon3d" class="foreground yukon" />
    </a>
    <a href="https://www.yukonu.ca/" target="_blank">
        <img src={YukonUniversity} alt="YukonUniversity" class="foreground yukonuni" />
    </a>
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
    <a href="https://www.cenovus.com/" target="_blank">
        <img src={Cenovus} alt="Cenovus" class="foreground
        cenovus" />
    </a>
    <a href="https://www.mikroe.com/" target="_blank">
        <img src={Mikroe} alt="Mikroe" class="foreground
        mikroe" />
    </a>
    <a href="https://rfdesign.com.au/" target="_blank">
        <img src={Rfdesign} alt="Rfdesign" class="foreground
        rfdesign" />
    </a>
    <a href="https://www.misumiusa.com/" target="_blank">
        <img src={Misumi} alt="Misumi" class="foreground
        misumi" />
    </a>
    <a href="https://www.aquaenvironmentinc.com/" target="_blank">
        <img src={Aqua} alt="Aqua" class="foreground
        aqua" />
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
        top: calc(var(--container-width) * 0.32);
        left: 30%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 7000));
    }
    .biorocket {
        top: calc(var(--container-width) * 0.33);
        left: 70%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 3500));
    }

    /* 
    Platinum Tier 
    */

    .yukon {
        top: calc(var(--container-width) * 0.85);
        left: 75%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 2400));
    }

    .yukonuni {
        top: calc(var(--container-width) * 0.85);
        left: 30%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 2400));
    }

    /* 
    Silver Tier
    */

    .ifm {
        top: calc(var(--container-width) * 1.3);
        left: 70%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1300));
    }

    .phoenix {
        top: calc(var(--container-width) * 1.45);
        left: 45%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 3500));
    }

    /*
    Copper Tier
    */

    .cenovus {
        top: calc(var(--container-width) * 1.74);
        left: 32%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 4500));
    }
    .mikroe {
        top: calc(var(--container-width) * 1.74);
        left: 65%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1800));
    }

    .labjack {
        top: calc(var(--container-width) * 1.84);
        left: 32%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 2600));
    }

    .skytrac {
        top: calc(var(--container-width) * 1.84);
        left: 65%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 6000));
    }

    .automation {
        top: calc(var(--container-width) * 1.93);
        left: 30%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1400));
    }

    .rfdesign {
        top: calc(var(--container-width) * 1.94);
        left: 65%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 5000));
    }

    .solvest {
        top: calc(var(--container-width) * 2.055);
        left: 30%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
    }

    .misumi {
        top: calc(var(--container-width) * 2.06);
        left: 65%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 5000));
    }

    .whatif {
        top: calc(var(--container-width) * 2.23);
        left: 30%;
       
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 4500));
    }
    .protospace {
        top: calc(var(--container-width) * 2.22);
        left: 57%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 9000));
    }

    .aqua {
        top: calc(var(--container-width) * 2.36);
        left: 50%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 2500));
    }
    
    /*
    Honorable Mentions
    */

    .eecol {
        top: calc(var(--container-width) * 2.6);
        left: 30%;
        transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 6000));
    }

    .omega {
        top: calc(var(--container-width) * 2.6);
        left: 65%;
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
            top: calc(var(--container-width) * 0.35);
            left: 30%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1500));
        }
        .biorocket {
            top: calc(var(--container-width) * 0.36);
            left: 65%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1000));
        }

        /* 
        Platinum Tier 
        */

        .yukon {
            top: calc(var(--container-width) * 0.86);
            left: 70%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
        }

        .yukonuni {
            top: calc(var(--container-width) * 0.86);
            left: 30%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
        }

        /* 
        Silver Tier 
        */
 
        .ifm {
            top: calc(var(--container-width) * 1.36);
            left: 65%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1500));
        }

        .phoenix {
            top: calc(var(--container-width) * 1.42);
            left: 35%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1400));
        }

        /*
        Copper Tier
        */

        .cenovus {
            top: calc(var(--container-width) * 1.74);
            left: 32%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
        }

        .mikroe {
            top: calc(var(--container-width) * 1.74);
            left: 65%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1300));
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
            left: 31%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1100));
        }

        .rfdesign {
            top: calc(var(--container-width) * 1.94);
            left: 68%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1300));
        }

        .solvest {
            top: calc(var(--container-width) * 2.055);
            left: 30%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1200));
        }

        .misumi {
            top: calc(var(--container-width) * 2.06);
            left: 65%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1300));
        }

        .whatif {
            top: calc(var(--container-width) * 2.25);
            left: 31%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1500));
        }

        .protospace {
            top: calc(var(--container-width) * 2.25);
            left: 65%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 2000));
        }

        .aqua {
            top: calc(var(--container-width) * 2.39);
            left: 50%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1000));
        }

        /*
        Honorable Mentions
        */

        .eecol {
            top: calc(var(--container-width) * 2.6);
            left: 30%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1600));
        }

        .omega {
            top: calc(var(--container-width) * 2.6);
            left:65%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1300));
        }
        .outfrnt {
            top: calc(var(--container-width) * 2.73);
            left: 30%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1500));
        }
        .rockymountain {
            top: calc(var(--container-width) * 2.71);
            left: 66%;
            transform: translate(-50%, -50%) scale(calc(var(--container-width-unitless) / 1000));
        }
    }
</style>