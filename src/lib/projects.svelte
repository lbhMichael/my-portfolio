<script lang="ts">
	import { fade } from 'svelte/transition';
	export let title: string;

	let projectTitle = '';
	let projectUrl = '';

	// Check if title is defined before manipulating it
	if (title) {
		projectTitle = title.toLowerCase().split(' ').join('-');
		projectUrl = new URL(`../assets/${projectTitle}.jpeg`, import.meta.url).href;
	}

	// Check if title is defined before manipulating it

	// Overlay styles
	let overlayStyles = `
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.5s;
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 30;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 16px;
		color: #333;
		cursor: pointer;
		`;

	let isHover = false;

	function toggleHover() {
		isHover = !isHover;
	}
</script>

<div class="relative">
	<!-- Overlay -->
	<div
		style={overlayStyles}
		on:mouseover={toggleHover}
		on:mouseout={toggleHover}
		transition:fade|{duration:500}
	>
		{#if title}
			<p class="text-2xl font-playfair">{title}</p>
		{/if}
		<p class="mt-7">
			Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan
			tincidunt.
		</p>
	</div>
	<!-- Image -->
	<img src={projectUrl} alt={projectTitle} />
</div>

<style>
</style>
