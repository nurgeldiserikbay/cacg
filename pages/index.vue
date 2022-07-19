<template>
	<div class="wrapper">
		<BannerSection />
		<VideoInfoSection />
		<ApproachSection />
		<CounterSection />
		<TeamSection />
		<DemoSection />
	</div>
</template>

<script>
	import scrolltrigger from "~/mixins/scrolltrigger.js";
	export default {
		scrollToTop: true,
		mixins: [scrolltrigger],
		name: "MainPage",
	};
</script>

<style>
</style>
