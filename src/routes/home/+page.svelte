<script lang="ts">
	import SuggestedServers from '$lib/ui/SuggestedServers.svelte';
	import FriendsBar from '$lib/ui/FriendsBar.svelte';
	import Friend from '$lib/ui/Friend.svelte';
	import { mockFriends } from '$lib/mocks/friendData';
	let friendQuery: string = '';

	$: filteredFriends = mockFriends.filter((friend) =>
		friend.username.toLowerCase().includes(friendQuery.toLowerCase())
	);

</script>

<main class="min-h-screen bg-zinc-950 text-gray-200">
	<div class="flex flex-row items-start gap-6 p-6">
		<!-- Left panel -->
		<section class="w-90 shrink-0 rounded-2xl bg-zinc-900 p-5 shadow-lg ring-1 ring-zinc-800">
			<SuggestedServers />
		</section>
		<div class="flex flex-col">
			<FriendsBar bind:searchValue={friendQuery} />
			<div class="mt-3">
				{#each filteredFriends as friend}
					<Friend
						id={friend.id}
						username={friend.username}
						status={friend.status}
						avatar={friend.avatar}
					/>
				{/each}
			</div>
		</div>
	</div>
</main>
