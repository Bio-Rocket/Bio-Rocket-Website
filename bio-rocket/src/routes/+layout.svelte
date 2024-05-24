<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Logo from '$lib/assets/biorocket.svg';
	import Github from '$lib/assets/github.svg';
	import Linkedin from '$lib/assets/linkedin.svg';
	import Instagram from '$lib/assets/instagram.svg';
	import { base } from '$app/paths';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	let isHovered = false;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns='grid-cols-3' shadow='shadow-xl' slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<a href="{base}/">
					<img
						src={Logo}
						alt="BioRocket Logo"
						width="200"
						height="40"
					/>
				</a>
			</svelte:fragment>
			<svelte:fragment>
				<div class="flex justify-center space-x-8">
					<a href="{base}/about-us" class="text-black big-text" 
					class:bg-primary-hover-token={isHovered}
					on:mouseover={() => isHovered = true}
					on:mouseout={() => isHovered = false}
					on:focus={() => isHovered = true}
					on:blur={() => isHovered = false}
					>
					ABOUT US
					</a>
					<a href="{base}/sponsors" class="text-black big-text"
					class:bg-primary-hover-token={isHovered}
					on:mouseover={() => isHovered= true}
					on:mouseout={() => isHovered = false}
					on:focus={() => isHovered = true}
					on:blur={() => isHovered = false}
					> SPONSORS </a>
					<a href="{base}/vision" class="text-black big-text"
					class:bg-primary-hover-token={isHovered}
					on:mouseover={() => isHovered = true}
					on:mouseout={() => isHovered = false}
					on:focus={() => isHovered = true}
					on:blur={() => isHovered = false}
					> OUR VISION </a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="https://github.com/Jgerbrandt/BioRocket" target="_blank" rel="noreferrer">
					<img
						src={Github}
						alt="Github Logo"
						width="40"
						height="40"
					/>
				</a>
				<a href="https://linkedin.com" target="_blank" rel="noreferrer">
					<img
						src={Linkedin}
						alt="Linkedin Logo"
						width="40"
						height="40"
					/>
				</a>
				<a href="https://instagram.com" target="_blank" rel="noreferrer">
					<img
						src={Instagram}
						alt="Instagram Logo"
						width="40"
						height="40"
					/>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
    .big-text {
        transition: box-shadow 0.3s ease, background-color 0.3s ease; /* Smooth transition for the shadow and background color */
        padding: 10px; /* Increase the size */
        border-radius: 10px; /* Make the corners round */
    }

    .big-text:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Shadow appears on hover */
        background-color: var(--bg-primary-hover-token); /* Background color changes on hover */
    }
</style>