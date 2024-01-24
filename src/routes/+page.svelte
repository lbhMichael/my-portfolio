<script>
	const imgUrl = new URL('$lib/assets/michaelb&w.png', import.meta.url).href;
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

<style>
	.heading {
		font-size: var(--h1);
	}
	.paragraph {
		font-size: var(--p);
	}
</style>
