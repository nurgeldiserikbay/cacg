<template>
	<section id="demo-detail">
		<h1 class="gs_reveal">{{ content.title }}</h1>
		<p class="large_p gs_reveal" data-gsapduration="0.5">
			{{ content.text }}
		</p>
		<div class="content">
			<div class="content_elems" v-for="(elem, i) in content.content" :key="i">
				<h3 class="gs_reveal" data-gsapduration="0.8" v-if="elem.title">
					{{ elem.title }}
				</h3>
				<img
					class="gs_reveal"
					data-gsapduration="1"
					v-for="(img, ind) in elem.media"
					:key="ind"
					:src="img"
					alt=""
				/>
			</div>
			<h3 v-if="content.video">{{ _getDictionary.videoTxt }}</h3>
			<video
				v-if="content.video"
				class="gs_reveal"
				:id="'video-demo-' + slug"
				:src="content.video"
				:data-plyr-config="JSON.stringify()"
			></video>
		</div>
	</section>
</template>
<script>
	import { mapGetters } from "vuex";
	import scrolltrigger from "~/mixins/scrolltrigger.js";

	export default {
		scrollToTop: true,
		mixins: [scrolltrigger],
		async asyncData({ params }) {
			let slug = params.slug;
			return { slug };
		},
		data() {
			return {};
		},
		computed: {
			...mapGetters(["_getDictionary"]),
			content() {
				return this._getDictionary.demos[this.slug];
			},
		},
		methods: {},
		mounted() {
			this.player = new Plyr("#video-demo-" + this.slug);
		},
	};
</script>
<style lang="scss" scoped>
	#demo-detail {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 11.6rem 16% 20rem;
	}
	.large_p {
		line-height: 2;
		margin-bottom: 6.6rem;
	}
	.content_elems {
		margin-bottom: 2.15rem;
	}
	h3 {
		text-align: center;
		font-size: 1.2rem;
		line-height: 2;
	}
	img {
		width: 100%;
		margin-bottom: 3.85rem;
	}
	video {
		max-width: 100%;
	}
	@media (min-width: 950px) {
		h1 {
			white-space: nowrap;
		}
	}
</style>