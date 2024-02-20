<script lang="ts">
	function scrollTo(elementId) {
		const element = document.getElementById(elementId);
		element?.scrollIntoView({ behavior: 'smooth' });
	}
	let scrollY: number;
	$: sticky = scrollY;

	let styles = sticky > 3 ? 'bg-blue' : ' ';
</script>

<svelte:window bind:scrollY />
<navbar
	class={`w-full mt-2 p-2 flex items-center text-center justify-between border-2 border-gray-950 ${styles}`}
>
	<div class="left border-2 border-slate-50">MN</div>
	<ul class="flex gap-3 text-bold text-2xl cursor-pointer">
		<li on:click={() => scrollTo('projects')}>Projects</li>
		<li on:click={() => scrollTo('about')}>About</li>
	</ul>
</navbar>

<style>
</style>
