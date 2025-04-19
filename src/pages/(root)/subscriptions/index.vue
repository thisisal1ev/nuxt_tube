<script lang='ts' setup>
const items = ref([
	{
		id: 1,
		poster: "https://i.ytimg.com/vi/o73VS_WDigI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFDYTUBAMNRDTQo2Tzex-bMNRTJw",
		avatar: 'https://yt3.ggpht.com/jekM6Kf7R5w9gakHFzzAR1T9DQfkjODfck7p8ZpM1Q-0coxZqDA66PcIxAEYk6Bfytx4t4CR6Q=s68-c-k-c0x00ffffff-no-rj',
		channel: "ARROW'S PATH",
		views: '266',
		title: 'ОНИ ПО ВСЮДУ! - ПРОХОЖДЕНИЕ НА МАКСИМАЛЬНОМ УРОВНЕ СЛОЖНОСТИ! - Aliens vs. Predator 2010 #2',
		createdAt: '2 days ago',
		isOfficial: false,
		isTrend: false
	},
	{
		id: 2,
		poster: "https://i.ytimg.com/vi/MwnjOM6_BHo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02gW4Gyrdf0IRDEoQsBYnyROcyA",
		avatar: "https://yt3.googleusercontent.com/ytc/AIdro_nEIDFK-fdwXoOlWqd3hZMkkzuxR7jdnNLqoJdmrto-tqA=s160-c-k-c0x00ffffff-no-rj",
		channel: 'SpecterChannel',
		views: '9.5k',
		title: 'GTA VICE CITY С ПОЛНОЙ РУССКОЙ ОЗВУЧКОЙ GAMESVOICE (Игрофильм и Полное Прохождение GTA Vice City)',
		createdAt: '2 days ago',
		isOfficial: true,
		isTrend: false
	},
	{
		id: 3,
		poster: "https://i.ytimg.com/vi/jLSxQ5rRaAg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4ReDc84LT7ehb27SBRyDAf7EBng",
		avatar: "https://yt3.googleusercontent.com/ytc/AIdro_l7fMd3QQieTzvXql6v55DlZjX73-IDc07NF_xuHqzxLes=s160-c-k-c0x00ffffff-no-rj",
		channel: 'WellplayedTV',
		views: '10k',
		title: 'Макро игра против микроконтроля, кто кого?: Cash (Orc) vs Deathnote (Hum) Warcraft 3 Reforged',
		createdAt: '4 days ago',
		isOfficial: false,
		isTrend: false
	},
	{
		id: 4,
		poster: "https://i.ytimg.com/vi/rtR7bkCiWSk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhJq_49_mMnQBCX0ppPbTztlKFcw",
		avatar: 'https://yt3.ggpht.com/jekM6Kf7R5w9gakHFzzAR1T9DQfkjODfck7p8ZpM1Q-0coxZqDA66PcIxAEYk6Bfytx4t4CR6Q=s68-c-k-c0x00ffffff-no-rj',
		channel: "ARROW'S PATH",
		views: '2.8k',
		title: 'ЗАКРЫТОЕ БЕТА-ТЕСТИРОВАНИЕ WARCRAFT 4! - BLIZZARD ДЕЛАЮТ ВЕЩИ!',
		createdAt: '4 days ago',
		isOfficial: false,
		isTrend: false
	},
])
</script>

<template>
	<Section icon='circle-play' label='Subscriptions' :items />
</template>