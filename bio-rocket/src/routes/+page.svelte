<script lang='ts'>
	import { base } from '$app/paths';

	const Biorocket = `${base}/br_light.png`
	const wcan = `${base}/wcan.png`

</script>

<div class="relative flex min-h-screen flex-col items-center justify-center px-6 py-16 font-sans select-none text-white">
	
	<!-- Top Content Wrapper -->
	<div class="flex flex-col items-center text-center max-w-2xl w-full space-y-12 md:space-y-16 mb-12">
		
		<!-- Hero Headings (Inter Bold / Uppercase) -->
		<h1 class="font-bold uppercase tracking-wider text-2xl sm:text-4xl md:text-5xl leading-tight">
			Same Team.<br />
			Bigger Vision.
		</h1>

		<div class="w-full max-w-xl md:max-w-2xl lg:max-w-3xl px-4 flex justify-center items-center transition-all duration-300">
			<a href="https://www.wcan-aero.ca/" target="_blank">
				<img 
					src={wcan} 
					alt="Western Canada Aerospace Initiative Logo" 
					class="h-auto w-full object-contain max-h-[280px] md:max-h-[380px] lg:max-h-[450px]"
				/>
			</a>
		</div>

		<div class="mt-8">
			<a href="https://www.wcan-aero.ca/" target="_blank" class="inline-flex items-center gap-2 rounded-full bg-[#117CA7] px-6 py-3 font-semibold tracking-wide text-white transition hover:bg-[#3B99C9]">
				Explore Our Mission
				<span class="text-lg">➔</span>
			</a>
		</div>
		
	</div>

	<!-- Bottom Left Logo Footer (BioRocket) -->
	<div class="absolute bottom-6 left-26 md:bottom-10 md:left-24 max-w-[150px] sm:max-w-[180px]">
		<img 
			src={Biorocket} 
			alt="BioRocket Logo" 
			class="h-auto w-full object-contain"
		/>
	</div>

</div>