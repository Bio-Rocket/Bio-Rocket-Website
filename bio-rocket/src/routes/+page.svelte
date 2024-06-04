<script lang='ts'>
	import Soar from "$lib/assets/soar.svelte";
	import Uofc from "$lib/assets/uofc.svelte";
	import Eng from "$lib/assets/eng.svelte";
	import Rocket from "$lib/assets/biorocketfull.svelte";

	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';

	let listData = [
		{ label: 'The <strong>first</strong> biofuel powered liquid rocket engine designed in Canada' },
		{ label: 'The <strong>fastest</strong> development of a liquid rocket engine in Canada' },
		{ label: 'The <strong>first</strong> liquid rocket engine designed in Alberta' },
		{ label: 'Supported by University of Calgary aerospace engineering faculty' },
		{ label: 'Supported by the University of Calgary’s student rocketry team (SOAR)' },
	];

	const conicStops: ConicStop[] = [
		{ label: 'Testing', color: 'rgb(var(--color-primary-500))', start: 0, end: 40 },
		{ label: 'Materials', color: 'rgb(var(--color-primary-400))', start: 40, end: 70 },
		{ label: 'Equipment', color: 'rgb(var(--color-primary-300))', start: 70, end: 93.3 },
		{ label: 'Outreach', color: 'rgb(var(--color-primary-200))', start: 93.3, end: 100 },
	];

</script>

<div class="container h-screen mx-auto flex justify-end items-end relative">
    <div class="triangle"></div>
	<div class="text-container text-right mr-8 md:mr-0 mt-[-5%] md:mt-[-1%] lg:space-y-2">
		<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">Engineering</h1>
		<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">Capstone</h1>
		<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">Project</h1>
		<h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-3xl">2023/2024</h1>
	</div>
    <div class="centered flex flex-col justify-center items-center absolute inset-0">
		<div class="w-[65%]">
        	<svelte:component this={Rocket} />
		</div>
		<div class="flex space-x-4 md:space-x-10 justify-center items-center">
			<div class="w-20 sm:w-48">
				<svelte:component this={Uofc} />
			</div>
			<div class="w-20 sm:w-48">
				<svelte:component this={Soar} />
			</div>
			<div class="w-20 sm:w-48">
				<svelte:component this={Eng} />
			</div>
		</div>
	</div>
</div>

<div class="container h-screen mx-auto flex flex-col justify-center items-center">
    <h1 class="text-center text-5xl mt-8 mb-8 text-primary-500">What is Bio Rocket</h1>
    <div class="w-full text-token card p-4 space-y-4">
		<ol class="list space-y-8">
			{#each listData as v, i}
				<li>
					<span class="badge-icon p-10 variant-soft-primary text-3xl">{i + 1}</span>
					<span class="flex-auto text-3xl">
						{@html `${v.label}`}
					</span>
					<span class="text-3xl">⋮</span>
				</li>
			{/each}
		</ol>
	</div>
</div>

<div class="container h-screen mx-auto flex flex-col justify-center items-center">
	<h1 class="text-center text-5xl mt-8 mb-8 text-primary-500">Timeline</h1>
	<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-8 overflow-x-auto px-4 py-10">
		{#each [
			{id: "Sept. 2024", subtitle: 'DESIGN KICKOFF', description: 'The team will set system level design requirements to lay the groundwork for the detailed design phase.'},
			{id: "Jan. 2025", subtitle: 'HOT FIRE CAMPAIGN I', description: 'It’s rocket science! In this phase, the team will demonstrate their progress with a series of static fire tests of the biofuel liquid rocket engine.'},
			{id: "Feb. 2025", subtitle: 'HOT FIRE CAMPAIGN II', description: 'After analyzing the data obtained in the first campaign, the team will tweak the engine and test it again, bringing it to its full potential!'},
			{id: "Mar. 2025", subtitle: 'PROJECT CLOSEOUT', description: 'Our team will showcase Bio Rocket at Sponsor Night and enter the Schulich School of Engineering capstone design fair.'}
		] as tile, i}
			<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center relative flex flex-col justify-center items-center {i % 2 === 1 ? 'bg-primary-400' : ''}">
				<h2 class="mb-6 absolute top-0 pt-5"><strong>{tile.id}</strong></h2>
				<div>
					<h3 class="mb-6"><strong>{tile.subtitle}</strong></h3>
					<p>{tile.description}</p>
					{#if tile.description.split(' ').length <= 19} <!-- Adjust this condition based on your needs -->
						<p>&nbsp;</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="container h-screen mx-auto flex justify-center items-center">
	<ConicGradient stops={conicStops} digits={1} width='w-96' regionCaption="text-center text-5xl mt-8 mb-8 text-primary-500" legend>Cost Breakdown</ConicGradient>
</div>

<div class="container h-screen mx-auto flex flex-col justify-center items-center">
	<h1 class="text-center text-5xl mt-8 mb-8 text-primary-500">Sustainable Rocketry - The Biofuel Advantage</h1>
    <div class="w-full text-token grid grid-cols-3 md:grid-cols-3 gap-4">
		<div class="card bg-initial card-hover overflow-hidden">
			<header>
				<h3 class="h3 mt-4 flex justify-center items-center" data-toc-ignore><strong>RENEWABLE</strong></h3>
			</header>
			<div class="p-4 space-y-4">
				<article>
					<p>
						<!-- cspell:disable -->
						Made from renewable biomass, biofuels will never run out!
						<!-- cspell:enable -->
					</p>
				</article>
			</div>
			<hr class="opacity-50" />
		</div>

		<div class="card bg-initial card-hover overflow-hidden">
			<header>
				<h3 class="h3 mt-4 flex justify-center items-center" data-toc-ignore><strong>LOW CARBON</strong></h3>
			</header>
			<div class="p-4 space-y-4">
				<article>
					<p>
						<!-- cspell:disable -->
						Combustion emissions are partially offset by carbon negative fuel production.
						<!-- cspell:enable -->
					</p>
				</article>
			</div>
			<hr class="opacity-50" />
		</div>

		<div class="card bg-initial card-hover overflow-hidden">
			<header>
				<h3 class="h3 mt-4 flex justify-center items-center" data-toc-ignore><strong>COMPATIBLE</strong></h3>
			</header>
			<div class="p-4 space-y-4">
				<article>
					<p>
						<!-- cspell:disable -->
						Minor design modifications required to replace traditional propellants.
						<!-- cspell:enable -->
					</p>
				</article>
			</div>
			<hr class="opacity-50" />
		</div>

		<div class="card bg-initial card-hover overflow-hidden">
			<header>
				<h3 class="h3 mt-4 flex justify-center items-center" data-toc-ignore><strong>LOW EMISSON</strong></h3>
			</header>
			<div class="p-4 space-y-4">
				<article>
					<p>
						<!-- cspell:disable -->
						Biofuels are non-toxic and emit fewer pollutants.
						<!-- cspell:enable -->
					</p>
				</article>
			</div>
			<hr class="opacity-50" />
		</div>

		<div class="card bg-initial card-hover overflow-hidden">
			<header>
				<h3 class="h3 mt-4 flex justify-center items-center" data-toc-ignore><strong>LOCAL</strong></h3>
			</header>
			<div class="p-4 space-y-4">
				<article>
					<p>
						<!-- cspell:disable -->
						Agricultural feedstocks available for production right here in Alberta!
						<!-- cspell:enable -->
					</p>
				</article>
			</div>
			<hr class="opacity-50" />
		</div>

		<div class="card bg-initial card-hover overflow-hidden">
			<header>
				<h3 class="h3 mt-4 flex justify-center items-center" data-toc-ignore><strong>EFFICIENT</strong></h3>
			</header>
			<div class="p-4 space-y-4">
				<article>
					<p>
						<!-- cspell:disable -->
						Comparable performance compared to traditional propellants.
						<!-- cspell:enable -->
					</p>
				</article>
			</div>
			<hr class="opacity-50" />
		</div>

    </div>
</div>

<style lang="postcss">
	.triangle {
		position: absolute;
		right: -7em;
		top: -25em;
		width: 0;
		height: 0;
		border-left: 45em solid transparent;
		border-bottom: 65em solid #62A945;
		transform: rotate(-90deg);
	}
	@media (max-width: 768px) {
		.triangle {
			border-left: 50em solid transparent;
			border-bottom: 50em solid #62A945;
		}
	}
	.text-container {
		position: absolute;
		top: 4vh;
		right: -5vw;
		color: white;
		font-size: 3em;
	}
	.container {
		@apply h-screen;
	}
	.centered {
		position: absolute;
		inset: 0;
	}
	.relative {
    	position: relative;
	}
</style>
