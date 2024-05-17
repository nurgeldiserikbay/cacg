<template>
	<section id="demo" class="full-screen">
		<AnimFigure
			:src="'./images/figure-5.png'"
			x="85"
			y="-5"
			scale="1.2"
		/>
		<h2 class="gs_reveal">{{ _getDictionary.demoTitle }}</h2>
		<Slider :controls="true" :slides="_getDictionary.demos" @select="select" />
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
		methods: {
			select(ind) {
				this.$router.push("/demo/" + ind);
			},
		},
	};
</script>
<style  lang="scss" scoped>
	#demo {
		padding: 0;
		padding-top: 6rem;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		position: relative;
		margin-bottom: 10rem;
	}
	h2 {
		margin-left: 12.5%;
	}
	@media (max-width: 767.98px) {
		h2 {
			margin-left: unset;
		}
	}
</style>