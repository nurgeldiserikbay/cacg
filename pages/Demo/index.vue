<template>
	<section id="demo">
		<AnimFigure
			:src="'/images/figure-2.png'"
			x="60"
			y="2"
			scale="1.2"
		/>
		<AnimFigure
			:src="'/images/figure-3.png'"
			x="2"
			y="40"
			scale="1.2"
		/>
		<AnimFigure
			:src="'/images/figure-4.png'"
			x="88"
			y="60"
			scale="1.2"
		/>
		<h1 class="gs_reveal">{{ _getDictionary.demoPageTitle }}</h1>
		<p class="large_p gs_reveal" data-gsapduration="0.3">
			{{ _getDictionary.demoMainText }}
		</p>
		<div class="demos_wrapper">
			<div class="demos_list">
				<div
					class="demos gs_reveal"
					v-for="(elem, i) in _getDictionary.demos"
					:key="i"
					data-gsapduration="0.3"
				>
					<div class="img">
						<img :src="elem.src" alt="" />
					</div>
					<div class="demos_text">
						<div class="demos_text_header">
							<h4 class="demos_title">{{ elem.title }}</h4>
						</div>
						<div class="demos_text_data">
							{{ ellipsis(elem.text) }}
						</div>
						<div class="demos_text_bottom">
							<button class="main-btn" @click="linkTo(i)">
								<a :href="elem.link" target="_blank">{{
									_getDictionary.btnMore
								}}</a>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Pagination
				class="gs_reveal"
				:length="Math.floor(_getDictionary.demos.length / max)"
				:totalVisible="7"
				v-model="currentPage"
			/>
		</div>
	</section>
</template>
<script>
	import { mapGetters } from "vuex";
	import scrolltrigger from "~/mixins/scrolltrigger.js";
	export default {
		scrollToTop: true,
		mixins: [scrolltrigger],
		data() {
			return {
				currentPage: 1,
				max: 6,
			};
		},
		computed: {
			...mapGetters(["_getDictionary"]),
			getDemos() {
				let c = (this.currentPage - 1) * this.max;
				return this.demos.slice(c, c + this.max);
			},
		},
		methods: {
			linkTo(link) {
				this.$router.push("/demo/" + link);
			},
			ellipsis(text) {
				let arr = text.split(" ");
				return arr.length > 22 ? arr.slice(0, 22).join(" ") + "..." : text;
			},
		},
	};
</script>
<style lang="scss" scoped>
	#demo {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 11.6rem 16% 20rem;
	}
	.large_p {
		margin-bottom: 9rem;
	}
	.demos_wrapper {
		width: 100%;
	}
	.demos_list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;
		flex-wrap: wrap;
	}
	.demos {
		max-width: 46%;
		margin-bottom: 3.85rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		box-shadow: 0 0 3.2965rem 0.397rem $box-shadow-color;
	}
	.img {
		width: 100%;
		max-height: 17.6rem;
	}
	.img img {
		display: block;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		object-fit: cover;
		box-shadow: 0 0 3.2965rem 0.397rem $box-shadow-color;
	}
	.demos_text {
		box-sizing: border-box;
		padding: 2rem 2.5rem;
	}
	.demos_text_header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
	.demos_text_header h4 {
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.demos_text_data {
		-webkit-text-stroke: 0.5px #000;
		line-height: 1.1rem;
		max-height: 5.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: 2rem;
	}
	.demos_text_bottom button.main-btn {
		text-transform: none;
		float: right;
		min-width: 8.45rem;
		min-height: 2.3rem;
		padding: 0;
		font-size: 1rem;
		line-height: 1.5;
		font-weight: 400;
		font-family: $font-montserrat;
	}
	@media (max-width: 1650px) {
		#demo {
			padding: 11.6rem 12% 16rem;
		}
	}
	@media (max-width: 1199.98px) {
		#demo {
			padding: 11.6rem 10% 14rem;
		}
	}
	@media (max-width: 991.98px) {
		#demo {
			padding: 11.6rem 10% 14rem;
		}
	}
	@media (max-width: 767.98px) {
		#demo {
			padding: 11.6rem 7% 10rem;
		}
		.demos_wrapper {
			width: 80%;
		}
		.large_p {
			text-align: center;
			mask-position: 4rem;
			padding: 0 1rem;
		}
		.demos_list {
			justify-content: center;
		}
		.demos {
			max-width: 100%;
		}
	}
	@media (max-width: 575.98px) {
		#media {
			padding: 11.6rem 0% 10rem;
		}
		.demos_text_data {
			-webkit-text-stroke: unset !important;
		}
	}
</style>