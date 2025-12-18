import type { Friend } from "$lib/types/friend";

export const avatars: Friend["avatar"][] = [
	'https://cdn.discordapp.com/avatars/1447000678248480818/b78698df3849a93a47677f709786b215.webp?size=32',
	'https://cdn.discordapp.com/guilds/1091441097915506841/users/645343657075146772/avatars/c26a9a603a265363aa335dcf889b13e2.webp?size=128',
	'https://cdn.discordapp.com/avatars/1383973526205235240/f1d046bed39ec870334c6b33900b1959.webp?size=32',
	'https://cdn.discordapp.com/guilds/1091441097915506841/users/853262123106959401/avatars/7cb0fde1408aa13a3487c621ccbb2391.webp?size=128',
	'https://cdn.discordapp.com/avatars/265559063989977089/a8fafaed0fe00c1d745de8aa86d75d02.webp?size=32',
	'https://cdn.discordapp.com/guilds/1091441097915506841/users/152972790612361217/avatars/a_ffbf36307d9be3ed23fb2ed00e55a0ba.webp?size=128',
	'https://cdn.discordapp.com/avatars/1001479346160152626/f6d7f088c170a2c3e292c7ad261b3e3a.webp?size=32',
	'https://cdn.discordapp.com/avatars/824680303976906774/fce08e18177e3f3c23a01054e5a25346.webp?size=32',
	'https://cdn.discordapp.com/guilds/1091441097915506841/users/969182160265289758/avatars/46fca14c34b04bb8248159c01df76a6b.webp?size=128',
	'https://cdn.discordapp.com/avatars/890788660860059649/a_17399f573e22ffbb13e49630e0a1a1b6.webp?size=32',
	'https://cdn.discordapp.com/guilds/1091441097915506841/users/664484993552220181/avatars/0354fe8d59423832fa0d998b9a2c8766.webp?size=128',
	'https://cdn.discordapp.com/guilds/1091441097915506841/users/1024673386485526589/avatars/866938fb4d5e316437a08f645fae31c7.webp?size=128',
	'https://cdn.discordapp.com/avatars/1134108129961975838/bb32844d008139ba3d226d4b042f8d24.webp?size=32',
	'https://cdn.discordapp.com/guilds/1091441097915506841/users/1351068055257612288/avatars/e0e7e382f9a13ed5274d089d5364ca9f.webp?size=128',
	'https://cdn.discordapp.com/avatars/1382830193655152754/4d45f7b78bebac75eb8ca4ae0c74876a.webp?size=32',
	'https://cdn.discordapp.com/avatars/922154576822542470/eb3aea8916d8bb8d6ff072138d067745.webp?size=32',
	'https://cdn.discordapp.com/avatars/542509795408609291/a_ce8d9a0230599b93e5a80d80136afb7a.webp?size=32',
	'https://cdn.discordapp.com/avatars/774664265792880662/08fec5fc6d8e026b553035dab08b777c.webp?size=32',
	'https://cdn.discordapp.com/avatars/853327905357561948/b1785ce8fad6e6b6b2a7ccaba11be25e.webp?size=32',
	'https://cdn.discordapp.com/avatars/437808476106784770/def5e0a7ff07e73d477a87df10a3dc4f.webp?size=32',
	'https://cdn.discordapp.com/avatars/356950275044671499/84b29667d58a7ad8ed85ba82571aecff.webp?size=32',
	'https://cdn.discordapp.com/avatars/735147814878969968/8b72f174c30276f4d48c1e66608df70c.webp?size=32'
];

export const moreAvatars: Friend["avatar"][] = [
    ...avatars,
    ...avatars,
    ...avatars,
    ...avatars,
    ...avatars,
    ...avatars,
]

export const uuids: Friend["id"][] = [
	'7f1c1a6e-1c5e-4d21-8c3a-01f1a8b7a001',
	'7f1c1a6e-1c5e-4d21-8c3a-01f1a8b7a002',
	'7f1c1a6e-1c5e-4d21-8c3a-01f1a8b7a003',
	'7f1c1a6e-1c5e-4d21-8c3a-01f1a8b7a004',
	'7f1c1a6e-1c5e-4d21-8c3a-01f1a8b7a005',
	'7f1c1a6e-1c5e-4d21-8c3a-01f1a8b7a006',
	'7f1c1a6e-1c5e-4d21-8c3a-01f1a8b7a007',
	'7f1c1a6e-1c5e-4d21-8c3a-01f1a8b7a008',
	'7f1c1a6e-1c5e-4d21-8c3a-01f1a8b7a009',
	'7f1c1a6e-1c5e-4d21-8c3a-01f1a8b7a010'
];

export const usernames: Friend["username"][] = [
	'Itercio',
	'VoidRunner',
	'PixelGhost',
	'NightByte',
	'Zenitsu',
	'Frosty',
	'NullUser',
	'ByteLord',
	'ShadowDev',
	'GhostPing'
];

export const statuses: Friend["status"][] = [
	'online',
	'online',
	'offline',
	'online',
	'offline',
	'online',
	'offline',
	'online',
	'offline',
	'online'
];

export const mockFriends: Friend[] = Array.from(
	{ length: Math.min(avatars.length, usernames.length) },
	(_, i) => ({
		id: uuids[i] ?? crypto.randomUUID(),
		username: usernames[i],
		status: statuses[i % statuses.length],
		avatar: avatars[i % avatars.length]
	})
);
