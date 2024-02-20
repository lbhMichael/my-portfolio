<script>
	import Projects from '../lib/projects.svelte';

	const imgUrl = new URL('../assets/michaelb&w.png', import.meta.url).href;
</script>

<div class="flex p-8 gap-4 align-center justify-center mt-32">
	<div class="w-1/2 max-w-[100%] my-auto flex flex-col text-right gap-6">
		<h1 class="heading">Developer By <br /> Day, Designer By <br />Night</h1>
		<p class="paragraph">
			Greetings, I'm Michael Ndukwe, an enthusiast deeply immersed in the world of programming and
			all facets of technology.
		</p>
		<div class="buttons">
			<button class="p-3 border-2 border-blue">Contact Me</button>
			<button class="p-3 border-2 border-black"><a href="~">Download CV</a></button>
		</div>
	</div>
	<div class="w-1/2">
		<img src={imgUrl} class="w-[500px] h-[500px]" alt="" />
	</div>
</div>
<section id="projects" class="py-48 h-50 w-50 text-center">
	<div class="justify-center grid grid-cols-3 gap-2 mx-auto">
		<div class="flex p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
			BEAUTIFUL USER INTERFACES
		</div>
		<Projects title="Project 1" />
		<Projects title="Project 2" />
		<Projects title="Project 3" />
		<Projects title="Project 4" />
		<Projects title="Project 5" />
		<Projects title="Project 6" />
		<Projects title="Project 7" />
		<Projects title="Project 1" />
	</div>
</section>

<style>
	.heading {
		font-size: var(--h1);
	}
	.paragraph {
		font-size: var(--p);
	}
</style>
