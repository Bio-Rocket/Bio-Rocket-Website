<script lang="ts">
	import './layout.css';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { MenuIcon, Instagram, Linkedin, Youtube, Github, ArrowLeft, ArrowRight } from '@lucide/svelte';
	import { page } from '$app/stores';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	
	const { children } = $props();

	// =========================
	// SOCIAL MEDIA LINKS
	// =========================
	const LINKEDIN_URL = "https://www.linkedin.com/company/biorocket/";
	const GITHUB_URL = "https://github.com/Bio-Rocket";
	const YOUTUBE_URL = "https://www.youtube.com/@BioRocket-yyc";
	const INSTAGRAM_URL = "https://www.instagram.com/biorocketuofc/";

	const projectLinks = [
        { label: 'Proteus', href: '/projects/proteus' },
        { label: 'Test Stand', href: '/projects/test-stand' }
    ];

	// =========================
	// NAVIGATION BAR
	// =========================
	const navLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ 
			label: 'Projects', 
			dropdown: projectLinks
		},
		{ label: 'Sponsors', href: '/sponsors' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Get Involved', href: '/get-involved' }
	];

	const socialBtn = 'btn-icon !w-[44px] !h-[44px] !p-0 flex items-center justify-center text-[var(--color-success-500)] hover:text-[var(--color-success-500)] hover:bg-[var(--color-surface-600)] rounded-lg';
	const socialIcon = '!w-6 !h-6';
	const socailBtnFtr = 'btn-icon !w-[20px] !h-[20px] flex items-center justify-center text-[var(--color-success-500)] hover:text-[var(--color-success-500)] hover:bg-[var(--color-surface-600)] rounded-md';
	const baseNavLink = 'px-3 py-2 text-sm font-medium text-[var(--color-sucess-500)] transition-colors hover:text-[var(--color-success-500)] hover:bg-[var(--color-surface-600)] rounded-lg';
	const activeNavLink = 'text-primary-500';
	const inactiveNavLink = 'text-surface-600-200';

	// =========================
	// GALLERY CONSTANTS
	// =========================
	
	/** Carousel arrow button styles. */
	const carouselArrowBtn = 'btn-icon preset-filled bg-[var(--color-surface-500)] hover:bg-[var(--color-surface-600)] text-white';

	/** Array of placeholder images for the gallery carousel. */
	const generatedArray = Array.from({ length: 6 });
	
	/** Reference to the carousel container element. */
	let elemCarousel: HTMLDivElement | null = null;

	/**
	 * Scroll the carousel one full "page" to the left.
	 * Wraps to the last slide if currently at the start.
	 */
	function carouselLeft() {
		if (!elemCarousel) return;
		const x = elemCarousel.scrollLeft === 0
			? elemCarousel.clientWidth * elemCarousel.childElementCount
			: elemCarousel.scrollLeft - elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}

	/**
	 * Scroll the carousel one full "page" to the right.
	 * Wraps to the first slide if currently at the end.
	 */
	function carouselRight() {
		if (!elemCarousel) return;
		const x = elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0
			: elemCarousel.scrollLeft + elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}

	/**
	 * Scroll the carousel to a specific slide based on index.
	 * @param index - The index of the carousel item to scroll to.
	 */

	function carouselThumbnail(index: number) {
		if (elemCarousel) {
			elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
		}
	}
</script>

<style>
	:global(html) {
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
		overflow-y: scroll;
		height: 100vh;
	}
	
	:global(body) {
		margin: 0;
		padding: 0;
	}
	
	.page {
		height: 100vh;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
</style>

<div class="bg-[var(--color-background)] text-[var(--color-text)]">
	<!-- =========================
	     HEADER / NAVIGATION BAR
	     ========================= -->
	<header class="fixed top-0 left-0 right-0 z-50">
		<AppBar class="bg-[var(--color-surface-500)] py-0">
			<AppBar.Toolbar class="grid-cols-[auto_1fr_auto] items-center">
				
				<AppBar.Lead>
					<img src="/WeCAN Logo Dark Mode - High Resolution.png" alt="Menu" class="w-56 h-28" />
				</AppBar.Lead>

				<AppBar.Headline class="flex justify-center items-center gap-4">
					<nav class="flex items-center gap-4">
						{#each navLinks as link}
							{#if link.dropdown}
								<Menu>
									<Menu.Trigger class={`${baseNavLink} ${$page.url.pathname.startsWith('/projects') ? activeNavLink : inactiveNavLink}`}>
										<span>{link.label}</span>
									</Menu.Trigger>
									<Portal>
										<Menu.Positioner>
											<Menu.Content class="z-50">
												{#each link.dropdown as project}
													<Menu.Item value={project.href}>
														<Menu.ItemText>
															<a href={project.href}>{project.label}</a>
														</Menu.ItemText>
													</Menu.Item>
												{/each}
											</Menu.Content>
										</Menu.Positioner>
									</Portal>
								</Menu>
							{:else}
								<a
									href={link.href}
									class={`${baseNavLink} ${$page.url.pathname === link.href ? activeNavLink : inactiveNavLink}`}
								>
									{link.label}
								</a>
							{/if}
						{/each}
					</nav>
				</AppBar.Headline>
			
				<AppBar.Trail class="flex items-center gap-0">
					<a href={LINKEDIN_URL} target="_blank" class={socialBtn}>
						<Linkedin class={socialIcon} />
					</a>
					<a href={GITHUB_URL} target="_blank" class={socialBtn}>
						<Github class={socialIcon} />
					</a>
					<a href={YOUTUBE_URL} target="_blank" class={socialBtn}>
						<Youtube class={socialIcon} />
					</a>
					<a href={INSTAGRAM_URL} target="_blank" class={socialBtn}>
						<Instagram class={socialIcon} />
					</a>
				</AppBar.Trail>

			</AppBar.Toolbar>
		</AppBar>
	</header>

	<!-- Page 1: -->
	<section class="page flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat" style="background-image: url('/BackgroundTest.jpg');">
		<div class="bg-black/30 w-full h-full flex items-center justify-center">
			<h1 class="text-5xl sm:text-7xl font-bold text-white mb-4">Bio Rocket</h1>
		</div>
	</section>

	<!-- Page 2: Vision -->
	<section class="page flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat" style="background-image: url('/BackgroundTest.jpg');">
		<div class="bg-black/30 w-full h-full flex items-center justify-center p-6">
			<h2 class="text-4xl font-bold">Our Vision for the Future</h2>
		</div>
	</section>

	<!-- Page 3: Recruitment -->
	<section class="page flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat" style="background-image: url('/BackgroundTest.jpg');">
		<div class="bg-black/30 w-full h-full flex items-center justify-center p-6">
			<h3 class="text-2xl font-bold">We want you!</h3>
		</div>
	</section>

	<!-- Page 4: Gallery -->
	<section class="page flex flex-col bg-cover bg-center bg-no-repeat" style="background-image: url('/BackgroundTest.jpg');">
		<div class="bg-black/30 w-full flex-1 flex flex-col justify-center items-center p-6">
			<div class="w-full max-w-4xl mx-auto">
				
				<!-- Carousel Navigation -->
 				<div class="card p-2 grid grid-cols-[auto_1fr_auto] gap-2 items-center">
					
					<!-- Button: Left -->
					<button 
						type="button" 
						class={carouselArrowBtn}
						onclick={carouselLeft}
						title="Previous slide" 
						aria-label="Previous slide"
					>
						<ArrowLeft size={16} />
					</button>
					
					<!-- Carousel Images -->
					<div 
						bind:this={elemCarousel}
						class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto gap-4 px-2"
					>
						{#each generatedArray as _, i}
							<img
								class="snap-center w-[640px] rounded-container flex-shrink-0"
								src={`https://picsum.photos/seed/${i + 1}/640/480`}
								alt={`full-${i}`}
								loading="lazy"
							/>
						{/each}
					</div>
					
					<!-- Button: Right -->
					<button 
						type="button" 
						class={carouselArrowBtn}
						onclick={carouselRight}
						title="Next slide" 
						aria-label="Next slide"
					>
						<ArrowRight size={16} />
					</button>
				</div>
				
				<!-- Thumbnails -->
				<div class="card p-4 grid grid-cols-6 gap-4 mt-4">
					{#each generatedArray as _, i}
						<button 
							type="button" 
							onclick={() => carouselThumbnail(i)}
						>
							<img
								class="rounded-container hover:brightness-125"
								src={`https://picsum.photos/seed/${i + 1}/256`}
								alt={`thumb-${i}`}
								loading="lazy"
							/>
						</button>
					{/each}
				</div>
			</div>
		</div>
		
			<!-- =========================
				FOOTER
				========================= -->
		<footer class="bg-[var(--color-surface-500)] text-[var(--color-text)] py-4 px-6 shadow-inner">
			<div class="flex items-center w-full relative">
				<!-- Left: Text -->
				<p class="text-xs xs:text-base">
					&copy; {new Date().getFullYear()} BioRocket. All rights reserved.
				</p>

				<!-- Center: Social icons -->
				<div class="flex items-center gap-0 justify-center absolute inset-0 mx-auto w-fit">
					<a href={LINKEDIN_URL} target="_blank" class={socailBtnFtr}>
						<Linkedin class={socialIcon} />
					</a>
					<a href={GITHUB_URL} target="_blank" class={socailBtnFtr}>
						<Github class={socialIcon} />
					</a>
					<a href={YOUTUBE_URL} target="_blank" class={socailBtnFtr}>
						<Youtube class={socialIcon} />
					</a>
					<a href={INSTAGRAM_URL} target="_blank" class={socailBtnFtr}>
						<Instagram class={socialIcon} />
					</a>
				</div>
			</div>
		</footer>
	</section>

</div>