<script lang="ts">
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/all.css';

	import {AppShell, AppBar, initializeStores, Drawer, getDrawerStore, storePopup, type DrawerSettings} from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';

	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import Logo from '$lib/assets/biorockettext.svg';
	import Favicon from '$lib/assets/small-logo.svelte';
	import Github from '$lib/assets/github.svg';
	import Linkedin from '$lib/assets/linkedin.svg';
	import Instagram from '$lib/assets/instagram.svg';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();

	let isHovered = false;

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}
	function drawerClose(): void {
		drawerStore.close();
	}
	let listboxItemActive: (href: string) => string;

	$: {
		listboxItemActive = (href: string) => ($page.url.pathname?.includes(href) ? 'bg-primary-active-token' : '');
	}

</script>

<Drawer>
	<button class="close-button" on:click={drawerClose}>
	<i class="fas fa-times"></i>
	</button>

	<section class="p-4 pb-20 space-y-4 overflow-y-auto mt-8">
		<!-- Nav List -->
		<nav class="list-nav">
			<ul>
				<li>
					<a href="{base}/" class={$page.url.pathname === base || $page.url.pathname === base + '/BioRocket/' ? 'bg-primary-active-token' : ''} data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
						<span class="flex-auto">Home</span>
					</a>
				</li>
				<li>
					<a href="{base}/about-us" class={listboxItemActive(base + '/about-us')} data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
						<span class="flex-auto">About Us</span>
					</a>
				</li>
				<li>
					<a href="{base}/sponsors" class={listboxItemActive(base + '/sponsors')} data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
						<span class="flex-auto">Sponsors</span>
					</a>
				</li>
				<li>
					<a href="{base}/vision" class={listboxItemActive(base + '/vision')} data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
						<span class="flex-auto">Our Vision</span>
					</a>
				</li>
			</ul>
		</nav>
	</section>

  <!-- rest of your drawer content -->
</Drawer>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns='grid-cols-3' shadow='shadow-xl' slotTrail="place-content-end">

			<svelte:fragment slot="lead">
				<a href="{base}/" class="logo-large-screen">
					<img
						src={Logo}
						alt="BioRocket Logo"
						width="280"
					/>
				</a>

				<div class="flex items-center space-x-4">
					<!-- Hamburger Menu -->
				<button class="btn-icon btn-icon-sm lg:!hidden mobile-button" on:click={drawerOpen}>
					<i class="fas fa-bars text-xl"></i>
				</button>
					<!-- Logo -->
				<a class="lg:!ml-0 lg:!hidden mobile-button overflow-hidden" href="/" title="Go to Homepage">
					<Favicon width="36" height="36" />
				</a>

				</div>

			</svelte:fragment>

			<svelte:fragment slot="default">
				<div class="flex justify-center space-x-8 desktop-link">
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
				<a href="https://www.linkedin.com/in/biorocket/" target="_blank" rel="noreferrer">
					<img
						src={Linkedin}
						alt="Linkedin Logo"
						width="40"
						height="40"
					/>
				</a>
				<a href="https://www.instagram.com/biorocketuofc/" target="_blank" rel="noreferrer">
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
        padding: 10px;
        border-radius: 10px;
    }

    .big-text:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Shadow appears on hover */
        background-color: var(--bg-primary-hover-token); /* Background color changes on hover */
    }

	.mobile-button {
		display: none;
	}

	.desktop-link {
		display: block;
	}

	.logo-large-screen {
		display: none;
	}

	@media (min-width: 768px) {
		.logo-large-screen {
			display: block;
		}
	}

	@media (max-width: 768px) {
		.desktop-link {
			display: none;
		}
		.mobile-button {
			display: block;
		}
	}

	.close-button {
		position: absolute;
		top: 1%;
		left: 3%;
		border: none;
		border-radius: 50%;
		padding: 5px;
		cursor: pointer;
	}

	.close-button i {
		color: #000;
	}

</style>