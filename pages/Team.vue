<template>
	<section id="about-team">
		<AnimFigure
			:src="'images/figure-1.png'"
			x="60"
			y="2"
			scale="1.2"
		/>
		<AnimFigure
			:src="'images/figure-2.png'"
			x="80"
			y="30"
			scale="0.1"
		/>
		<AnimFigure
			:src="'images/figure-2.png'"
			x="7"
			y="50"
			scale="0.8"
		/>
		<AnimFigure
			:src="'images/figure-3.png'"
			x="83"
			y="75"
			scale="0.8"
		/>
		<AnimFigure
			:src="'images/figure-4.png'"
			x="5"
			y="88"
			scale="2"
		/>
		<h1 class="gs_reveal">{{ _getDictionary.teamTitle }}</h1>
		<p class="large_p gs_reveal" data-gsapduration="0.3">
			{{ _getDictionary.teamMainText }}
		</p>
		<Slider
			:controls="false"
			class="slider"
			:slides="_getDictionary.teamPageSlides"
		/>
		<h3 class="gs_reveal">{{ _getDictionary.teamSecondTitle }}</h3>
		<ul class="principles">
			<li
				class="gs_reveal"
				v-for="elem in _getDictionary.teamPrinciples"
				:key="elem.id"
				:data-gsapduration="0.3 * elem.id"
			>
				<span class="num">{{ elem.id }}</span>
				<p>{{ elem.text }}</p>
			</li>
		</ul>
		<h3 class="gs_reveal">{{ _getDictionary.teamThirdTitle }}</h3>
		<TabList :data="_getDictionary.teamVacancies" class="tab-list" />
		<h3 class="form-title gs_reveal">{{ _getDictionary.teamFourTitle }}</h3>
		<Form class="gs_reveal" data-gsapduration="0.3" />
	</section>
</template>
<script>
	import { mapGetters } from "vuex";
	import scrolltrigger from "~/mixins/scrolltrigger.js";
	export default {
		scrollToTop: true,
		mixins: [scrolltrigger],
		computed: {
			...mapGetters(["_getDictionary"]),
		},
		data() {
			return {};
		},
	};
</script>
<style lang="scss" scoped>
	#about-team {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 11.6rem 16% 20rem;
	}
	.slider {
		margin-bottom: 9rem;
	}
	.principles {
		font-size: 1.2rem;
		line-height: 1.8rem;
		margin-right: 2.1rem;
		margin-bottom: 9rem;
	}
	.principles li {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}
	h3 {
		width: 100%;
		text-align: center;
		font-weight: 400;
	}
	.num {
		font-family: $font-micra;
		font-size: 1.6rem;
		line-height: 2.4rem;
		font-weight: 400;
		margin-right: 2.1rem;
	}
	.tab-list {
		margin-bottom: 9rem;
	}
	.form-title {
		margin-bottom: 3.85rem;
	}
	@media (max-width: 1650px) {
		#about-team {
			padding: 11.6rem 12% 16rem;
		}
	}
	@media (max-width: 1199.98px) {
		#about-team {
			padding: 11.6rem 10% 14rem;
		}
	}
	@media (max-width: 991.98px) {
		#about-team {
			padding: 11.6rem 10% 14rem;
		}
	}
	@media (max-width: 767.98px) {
		#about-team {
			padding: 11.6rem 7% 10rem;
		}
		.large_p {
			text-align: center;
			mask-position: 4rem;
			padding: 0 1rem;
		}
	}
	@media (max-width: 575.98px) {
		#about-team {
			padding: 11.6rem 0% 10rem;
		}
		.principles {
			padding: 0 2rem;
		}
	}
</style>