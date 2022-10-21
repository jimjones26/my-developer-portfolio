<script>
	import ProjectCard from '../lib/components/project-card.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#each data.data.projects as { name, slug, description, image }}
	<ProjectCard {name} {description} url={image[0].url} {slug} />
{/each}
