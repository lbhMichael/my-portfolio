<script>
	import '../app.css';
	import Navbar from '../lib/navbar.svelte';
	import Projects from '../lib/projects.svelte';
</script>

<div class="max-w-[100%] w-2/3 mx-auto">
	<Navbar />
	<slot />
	<Projects />
</div>
