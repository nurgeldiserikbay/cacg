<template>
	<section id="teams" class="full-screen">
		<AnimFigure
			:src="'/images/figure-4.png'"
			x="-1"
			y="3"
			scale="1.2"
		/>
		<ImageSlider :slides="_getDictionary.teamSlides" class="gs_reveal" />
	</section>
</template>
<script>
	import { mapGetters } from "vuex";
	export default {
		data() {
			return {};
		},
		computed: {
			...mapGetters(["_getDictionary"]),
		},
	};
</script>
<style lang="scss" scoped>
	#teams {
		position: relative;
		padding: 0 12.3%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 7rem;
	}
	@media (max-width: 1699.98px) {
		#teams {
			padding: 4rem 8% 0;
		}
	}
	@media (max-width: 991.98px) {
		#teams {
			padding: 3.4rem 8% 0;
		}
	}
	@media (max-width: 767.98px) {
		#teams {
			padding: 3.4rem 4% 0;
			min-height: auto;
		}
	}
	@media (max-width: 575.98px) {
		#teams {
			padding: 3.4rem 2% 0;
		}
	}
	@media (max-width: 480px) {
		#teams {
			padding: 0 1.6rem;
		}
	}
</style>