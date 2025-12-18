<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Friend } from '$lib/types/friend';

	// Props
	export let id: Friend['id'];
	export let username: Friend['username'];
	export let status: Friend['status'];
	export let avatar: Friend['avatar'];
</script>

<div
	class="flex cursor-pointer items-center gap-3 rounded-lg px-3
	       py-2 transition hover:bg-zinc-800"
>
	<!-- Avatar -->
	<div class="relative">
		<img
			src={avatar}
			alt={username}
			on:click={() => {
				goto(`/profile/${id}`);
			}}
			class="h-10 w-10 rounded-full object-cover"
		/>

		<!-- Status indicator -->
		<span
			class="absolute right-0 bottom-0 h-3 w-3 rounded-full ring-2 ring-zinc-900
			{status === 'online' ? 'bg-green-500' : 'bg-zinc-500'}"
		></span>
	</div>

	<!-- Username + status -->
	<div class="flex flex-col">
		<span class="text-sm font-medium text-zinc-100">
			{username}
		</span>
		<span class="text-xs text-zinc-400 capitalize">
			{status}
		</span>
	</div>
</div>
