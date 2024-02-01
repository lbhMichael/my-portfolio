<script lang="ts">
	import { fade } from 'svelte/transition';

	let showDetails = false;
	interface Project {
		imageUrl: string;
		title: string;
	}

	const projects: Project[] = [
		{ imageUrl: 'https://source.unsplash.com/random/800x600', title: 'Project 1' },
		{ imageUrl: 'https://source.unsplash.com/random/800x600', title: 'Project 2' },
		{ imageUrl: 'https://source.unsplash.com/random/800x600', title: 'Project 3' },
		{ imageUrl: 'https://source.unsplash.com/random/800x600', title: 'Project 4' },
		{ imageUrl: 'https://source.unsplash.com/random/800x600', title: 'Project 5' },
		{ imageUrl: 'https://source.unsplash.com/random/800x600', title: 'Project 6' }
	];
</script>

<div class="slide" on:click={toggleDetails}>
	<div>
		<h2>Title</h2>
		<img
			src="https://source.unsplash.com/random/800x600"
			alt="Project Image"
			width="200"
			height="150"
		/>
	</div>
	{#if showDetails}
		<div class="details" transition:fade>
			<p>Additional information Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<a href="#">Learn More</a>
		</div>
	{/if}
</div>

<style>
	.slide {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		overflow: hidden;
		border: 1px solid #ccc;
		border-radius: 8px;
		margin-bottom: 20px;
	}

	.details {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		padding: 10px;
		color: white;
		transition: transform 0.3s ease-in-out;
		transform: translateY(100%);
	}

	.slide:hover .details {
		transform: translateY(0);
	}
</style>
