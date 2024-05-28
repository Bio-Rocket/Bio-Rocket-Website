<script>
	import Soar from "$lib/assets/soar.svelte";
	import Uofc from "$lib/assets/uofc.svelte";
	import Eng from "$lib/assets/eng.svelte";
	import Rocket from "$lib/assets/biorocketfull.svelte";
</script>

<div class="container h-screen mx-auto flex justify-end items-start relative">
    <div class="triangle"></div>
	<div class="text-container absolute top-0 right-0 transform translate-x-[-50%] translate-y-[-50%]">
		<h1>Capstone</h1>
		<h1>2023/2024</h1>
	</div>
    <div class="centered flex flex-col justify-center items-center absolute inset-0">

        <svelte:component this={Rocket} />
		<div class="flex justify-center space-x-12 mt-4">
			<svelte:component this={Uofc} />	
			<svelte:component this={Soar} width={200} />
			<svelte:component this={Eng} />
		</div>
	</div>
	
</div>

<div class="container h-screen mx-auto flex justify-center items-center">
    <h2> Hello 2</h2>
</div>

<div class="container h-screen mx-auto flex justify-center items-center">
    <h3> Hello 3</h3>
</div>

<div class="container h-screen mx-auto flex justify-center items-center">
    <h4> Hello 4</h4>
</div>

<style lang="postcss">
	.triangle {
		position: absolute;
		right: -7em;
		top: -25em;
		width: 0;
		height: 0;
		border-left: 25em solid transparent;
		border-bottom: 70em solid #62A945;
		transform: rotate(-90deg);
	}
	.text-container {
		position: absolute;
		top: 10vh;
		right: -11vw;
		transform: translateX(-50%) translateY(-50%);
		color: white;
		font-size: 3em;
	}
	h1 {
		margin-bottom: 0.8em;
	}
	h1:nth-of-type(2) {
		font-size: 0.5em;
		text-align: center;
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
