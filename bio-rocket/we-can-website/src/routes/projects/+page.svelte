<script lang="ts">
	let { data } = $props();
	const { projects } = data;
</script>

<h1>Projects</h1>

<ul>
	{#each projects as project}
		<li>{project.name}</li>
	{/each}
</ul>
