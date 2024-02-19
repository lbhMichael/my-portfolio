<script>
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise(async (resolve) => {
			resolve;
			await navigation.complete;
		});
	});
</script>
