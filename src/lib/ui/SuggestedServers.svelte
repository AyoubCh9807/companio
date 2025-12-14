<script lang="ts">
	import { moreAvatars } from '$lib/mocks/avatars';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	let limit = 6;
	let show = false;

	onMount(() => {
		show = true;
	});
</script>

{#if show}
	<h2 class="mb-4 text-center text-xl font-semibold tracking-wide text-white">
		Discover new servers
	</h2>
	<div class="scrollbar-hide grid max-h-128 grid-cols-3 gap-4 overflow-y-scroll"
     in:fly 
     out:fade>
		{#each moreAvatars.slice(0, limit) as avatar}
			<div
				class="group relative h-24 w-24 cursor-pointer rounded-full
				bg-cover bg-center
				ring-2 ring-white/10
				transition-all duration-200
				hover:scale-105 hover:ring-emerald-400"
				style={`background-image: url(${avatar});`}
			>
				<!-- hover overlay -->
				<div
					class="absolute inset-0 rounded-full bg-black/40 opacity-0
					transition group-hover:opacity-100"
				></div>
			</div>
		{/each}

		<!-- Load more -->
		{#if limit < moreAvatars.length}
			<div class="col-span-3 mt-2 flex justify-center">
				<button
					on:click={() => {
						if (limit + 9 <= moreAvatars.length) {
							limit += 9;
						}
					}}
					class="w-full rounded-lg border border-white/20
					bg-emerald-600 px-4 py-2
					text-sm font-bold tracking-wide text-white
					transition hover:bg-emerald-500 active:scale-95"
				>
					Load more
				</button>
			</div>
		{/if}
	</div>
{/if}
