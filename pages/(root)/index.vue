<template>
	<section class='flex flex-col space-y-4 py-2.5'>
		<SectionTitle icon='flame' text='Trending' />

		<ul role='list' class='wrapper'>
			<Card :key='1' :id='1'
				poster='https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg'
				avatar='https://yt3.googleusercontent.com/q_M_xI1c2K2osn5jwuJ69rbYA4qJCpN_thaojC5V-dlNhlEiGBbMsjuh9vHvvKLkEPSI6KYF=s160-c-k-c0x00ffffff-no-rj'
				channel='Macan' title='MACAN, A.V.G - Привыкаю' views='1.5k' createdAt='2 days ago' isTrend isOfficial />

			<Card :key='2' :id='2'
				poster='https://i.ytimg.com/vi/7dnvtlYi0Vc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdzT0JHTKBuBAqXj6uvuBTHT1UbQ'
				avatar='https://yt3.googleusercontent.com/BHcM28mKcOC3ZTUzwCPqZlU7nWfK0iqlOuRUH448NqxNtKAtSU9LYohWgxbKSojlUoKF5kMMvQ=s160-c-k-c0x00ffffff-no-rj'
				title='Зачем тебе Switch 2, если ты первый не прошёл?' channel='Rozetked' views='2k' createdAt='2 days ago'
				isTrend isOfficial />

			<Card :key='3' :id='3'
				poster='https://i9.ytimg.com/vi/Eiu9hzJ-YrE/hq720_custom_2.jpg?sqp=CKzexL8G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIJw9Oo9QKyHGaMXpI00cVv1KrdA'
				avatar='https://yt3.ggpht.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s88-c-k-c0x00ffffff-no-rj'
				channel='RED Group' title='Я ПРЕДУПРЕЖДАЛ! УЯЗВИМОСТЬ в NEXT JS' views='1M' createdAt='a month ago' isTrend
				isOfficial />

			<Card :key='4' :id='4'
				poster='https://i.ytimg.com/vi/cPYTxu0vTOk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwzMTm4uhVqGJGmeJyo7NDRnX90w'
				avatar='https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj'
				title='Курс Nuxt 3. Урок 1. Знакомство с фреймворком' channel='CodeHorizon' views='1.5k' createdAt='2 days ago'
				isTrend :isOfficial='false' />
		</ul>
	</section>

	<section class='flex flex-col space-y-4 py-2.5'>
		<SectionTitle icon='compass' text='Explore' />

		<ul role='list' class='wrapper'>
			<Card :key='1' :id='1'
				poster='https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg'
				avatar='https://yt3.googleusercontent.com/q_M_xI1c2K2osn5jwuJ69rbYA4qJCpN_thaojC5V-dlNhlEiGBbMsjuh9vHvvKLkEPSI6KYF=s160-c-k-c0x00ffffff-no-rj'
				channel='Macan' title='MACAN, A.V.G - Привыкаю' views='1.5k' createdAt='2 days ago' :isTrend='false'
				isOfficial />

			<Card :key='2' :id='2'
				poster='https://i.ytimg.com/vi/7dnvtlYi0Vc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdzT0JHTKBuBAqXj6uvuBTHT1UbQ'
				avatar='https://yt3.googleusercontent.com/BHcM28mKcOC3ZTUzwCPqZlU7nWfK0iqlOuRUH448NqxNtKAtSU9LYohWgxbKSojlUoKF5kMMvQ=s160-c-k-c0x00ffffff-no-rj'
				title='Зачем тебе Switch 2, если ты первый не прошёл?' channel='Rozetked' views='2k' createdAt='2 days ago'
				:isTrend='false' isOfficial />

			<Card :key='3' :id='3'
				poster='https://i9.ytimg.com/vi/Eiu9hzJ-YrE/hq720_custom_2.jpg?sqp=CKzexL8G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIJw9Oo9QKyHGaMXpI00cVv1KrdA'
				avatar='https://yt3.ggpht.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s88-c-k-c0x00ffffff-no-rj'
				channel='RED Group' title='Я ПРЕДУПРЕЖДАЛ! УЯЗВИМОСТЬ в NEXT JS' views='1M' createdAt='a month ago'
				:isTrend='false' isOfficial />

			<Card :key='4' :id='4'
				poster='https://i.ytimg.com/vi/cPYTxu0vTOk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwzMTm4uhVqGJGmeJyo7NDRnX90w'
				avatar='https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj'
				title='Курс Nuxt 3. Урок 1. Знакомство с фреймворком' channel='CodeHorizon' views='1.5k' createdAt='2 days ago'
				:isTrend='false' :isOfficial='false' />

			<Card :key='5' :id='5'
				poster='https://i.ytimg.com/vi/_Pv6wfABwF0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHZTJ4MYr9t05CTTIQZePej-GKjQ'
				avatar='https://yt3.ggpht.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s88-c-k-c0x00ffffff-no-rj'
				channel='RED Group' title='10 ОШИБОК, которые ЛОМАЮТ ваши ПРОЕКТЫ!' views='65.2k' created-at='3 month ago'
				:isTrend='false' isOfficial />
		</ul>
	</section>
</template>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply grid grid-cols-1 gap-5 py-0.5 md:grid-cols-2 lg:grid-cols-4;
}
</style>