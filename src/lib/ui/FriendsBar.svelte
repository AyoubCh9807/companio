<script lang="ts">
	export let searchValue: string = '';
</script>

<nav class="flex-1 rounded-2xl bg-zinc-900 px-6 py-4 shadow-lg ring-1 ring-zinc-800">
	<ul class="flex flex-row items-center gap-4 text-sm font-medium">
		<li class="cursor-pointer rounded-lg px-4 py-2 transition hover:bg-zinc-800">Friends</li>

		<li class="cursor-pointer rounded-lg px-4 py-2 transition hover:bg-zinc-800">Online</li>

		<li
			class="cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 transition
					hover:opacity-80 active:scale-95"
		>
			Add Friend
		</li>

		<li class="ml-auto">
			<input
				bind:value={searchValue}
				type="text"
				placeholder="Search friends..."
				class="w-64 rounded-lg bg-zinc-800 px-4 py-2
						text-gray-200 placeholder-gray-400
						ring-1 ring-zinc-700 transition
						outline-none focus:ring-2
						focus:ring-indigo-500"
			/>
		</li>

		<li
			class="cursor-pointer rounded-lg bg-red-500/10 px-4 py-2
					text-red-400 transition
					hover:bg-red-500/20 hover:text-red-300
					active:scale-95"
		>
			Logout
		</li>
	</ul>
</nav>
