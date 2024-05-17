<template>
	<section id="banner" @mouseover="moveTriangles" @mouseleave="mouseleave">
		<AnimFigure
			:src="'./images/figure-1.png'"
			x="40"
			y="10"
			scale="1"
		/>
		<div class="banner-content">
			<h1 class="gs_reveal">
				<span>{{ _getDictionary.bannerTitleFirst }}</span>
				<span>{{ _getDictionary.bannerTitleSecond }}</span>
				<span>{{ _getDictionary.bannerTitleThird }}</span>
			</h1>
			<div class="banner-mobile-img gs_reveal" data-gsapduration="0.5">
				<Gerych :x="x" :y="y" />
			</div>
			<p class="gs_reveal" data-gsapduration="0.9">
				{{ _getDictionary.bannerTextFirst }}
				<br />
				{{ _getDictionary.bannerTextSecond }}
			</p>
			<button
				id="demoBtn"
				class="main-btn gs_reveal"
				data-gsapduration="1.3"
				@click="scrollToDemo"
			>
				{{ _getDictionary.btnDemo }}
			</button>
			<div class="banner-img">
				<Gerych :x="x" :y="y" />
			</div>
		</div>
	</section>
</template>
<script>
	import { mapGetters } from "vuex";
	export default {
		name: "BannerSection",
		data() {
			return {
				x: null,
				y: null,
			};
		},
		computed: {
			...mapGetters(["_getDictionary"]),
		},
		methods: {
			moveTriangles(e) {
				this.x = Math.floor((e.clientX / window.innerWidth) * 100);
				this.y = Math.floor((e.clientY / window.innerHeight) * 100);
			},
			mouseleave() {
				this.x = null;
				this.y = null;
			},
			scrollToDemo() {
				window.scrollTo(
					0,
					document.querySelector("#demo").getBoundingClientRect().top
				);
			},
		},
	};
</script>
<style lang="scss" scoped>
	#banner {
		position: relative;
		margin-bottom: 6.9rem;
	}
	.banner-content {
		position: relative;
		margin: 0 12.3%;
		padding-top: 11.6rem;
		z-index: 1;
	}
	.banner-content h1 {
		font-family: $font-micra;
		font-weight: 400;
		font-style: normal;
		line-height: 1;
		margin: 0;
		margin-bottom: 3.75rem;
		text-transform: uppercase;
		letter-spacing: 0.096rem;
		color: #fff;
		text-shadow: 0 0.3475rem 0.4635rem rgba(41, 106, 231, 0.5);
		pointer-events: none;
		position: relative;
		z-index: 10;
	}
	.banner-content h1 span {
		display: block;
	}
	.banner-content h1 span:nth-child(1) {
		font-size: 20px;
		margin-bottom: 1rem;
	}
	.banner-content h1 span:nth-child(2) {
		font-weight: 700;
		margin-bottom: 1rem;
	}
	.banner-content h1 span:nth-child(3) {
		font-size: 16px;
	}
	.banner-mobile-img {
		position: relative;
		width: 100%;
		margin: 0 auto;
		display: none;
		background: radial-gradient(
			farthest-corner at 52% 54%,
			$box-shadow-color,
			transparent 50%
		);
		mask-image: linear-gradient(to bottom, #fff 40%, transparent 85%);
	}
	#banner p {
		font-size: 12px;
		font-weight: 300;
		margin: 0;
		margin-bottom: 5rem;
		letter-spacing: 0.126rem;
		text-shadow: 0 0 2px rgba(0, 0, 0, 1);
		text-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
		pointer-events: none;
		width: 42.5%;
		position: relative;
		z-index: 10;
	}
	.banner-img {
		position: absolute;
		top: 60%;
		transform: translateY(-50%);
		right: -10%;
		width: 50vw;
		background: radial-gradient(
			farthest-corner at 52% 54%,
			$box-shadow-color,
			transparent 50%
		);
		mask-image: linear-gradient(to bottom, #fff 40%, transparent 85%);
	}

	@media screen and (min-width: 375px) {
		.banner-content {
			padding-top: 12.2rem;
			padding-top: calc(122px + 110 * ((100vw - 375px) / 1545));
		}
		.banner-content h1 span:nth-child(1) {
			font-size: 20px;
			font-size: calc(20px + 28 * ((100vw - 375px) / 1545));
		}
		.banner-content h1 span:nth-child(3) {
			font-size: 16px;
			font-size: calc(16px + 16 * ((100vw - 375px) / 1545));
		}
		#banner p {
			font-size: 12px;
			font-size: calc(12px + 12 * ((100vw - 375px) / 1545));
		}
	}

	@media screen and (min-width: 1920px) {
		.banner-content {
			padding-top: 11.6rem;
		}
		.banner-content h1 span:nth-child(1) {
			font-size: 48px;
		}
		.banner-content h1 span:nth-child(3) {
			font-size: 32px;
		}
		#banner p {
			font-size: 24px;
		}
	}

	@media (max-width: 1699.98px) {
		.banner-content {
			margin: 0 8%;
		}
		.banner-content h1 {
			margin-bottom: 3rem;
		}
		#banner p {
			margin-bottom: 2rem;
			width: 50%;
		}
	}

	@media (max-width: 767.98px) {
		#banner {
			margin-bottom: 3.75rem;
		}
		.banner-content {
			margin: 0 4%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
		}
		.banner-content h1 {
			margin-bottom: 2rem;
		}
		.banner-img {
			display: none;
		}
		.banner-mobile-img {
			display: block;
		}
		#banner p {
			width: 100%;
			text-align: center;
		}
	}
	@media (max-width: 575.98px) {
		.banner-content {
			margin: 0 2%;
		}
		.banner-content h1 {
			margin-bottom: 1rem;
		}
		#banner p {
			margin-bottom: 4rem;
		}
	}
	@media (max-width: 480px) {
		.banner-content {
			margin: 0 1.6rem;
		}
		.banner-content h1 {
			margin-bottom: 0rem;
		}
		.banner-content h1 span:nth-child(1) {
			text-align: left;
		}
		.banner-content h1 span:nth-child(3) {
			text-align: right;
		}
	}
</style>