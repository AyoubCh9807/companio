<script lang="ts">
	import SuggestedServers from '$lib/ui/SuggestedServers.svelte';
</script>

<main>
	<div class="flex flex-row">
		<section class="m-2 w-90 rounded-xl bg-zinc-900 p-5 shadow-xl">
			<SuggestedServers></SuggestedServers>
		</section>

		<ul class="flexd-row flex space-x-4 text-white font-semibold text-center text-lg p-2">
			<li class="w-24 h-8 ">Friends</li>
			<li class="w-24 h-8">Online</li>
			<li class="w-24 h-8">Suggested</li>
			<li class="w-24 h-8 bg-[#1e73c2] rounded-lg">Add Friend</li>
		</ul>
	</div>
</main>
