<template>
	<section id="about-compony">
		<AnimFigure
			:src="'/images/figure-1.png'"
			x="70"
			y="20"
			scale="1.2"
		/>
		<AnimFigure
			:src="'/images/figure-2.png'"
			x="7"
			y="50"
			scale="0.8"
		/>
		<AnimFigure
			:src="'/images/figure-3.png'"
			x="83"
			y="75"
			scale="0.8"
		/>
		<AnimFigure
			:src="'/images/figure-4.png'"
			x="5"
			y="88"
			scale="2.0"
		/>
		<h1 class="gs_reveal">{{ _getDictionary.componyTitle }}</h1>
		<p class="large_p gs_reveal" data-gsapduration="0.5">
			{{ _getDictionary.componyMainText }}
		</p>
		<div class="chronology" ref="chronology">
			<span class="border"></span>
			<div class="chronology-items" ref="chronologyItems">
				<div v-for="(elem, ind) in _getDictionary.componyChronology" :key="ind">
					<div class="chronology_elem">
						<h3>{{ elem.year }}</h3>
						<p>{{ elem.text }}</p>
					</div>
				</div>
			</div>
		</div>
		<h3 class="gs_reveal">{{ _getDictionary.componySecondTitle }}</h3>
		<TabList :data="_getDictionary.componyServices" class="tab-list" />
		<h3 class="gs_reveal">{{ _getDictionary.componyThirdTitle }}</h3>
		<div class="technologies gs_reveal" data-gsapduration="0.5">
			<div
				class="technology"
				v-for="(technology, ind) in _getDictionary.componyTechnologies"
				:key="ind"
			>
				<img :src="technology.src" alt="" />
				<div class="text">
					<h3>{{ technology.title }}</h3>
					<p v-for="(p, i) in technology.text" :key="i">{{ p }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import { mapGetters } from "vuex";
	import scrolltrigger from "~/mixins/scrolltrigger.js";
	export default {
		scrollToTop: true,
		mixins: [scrolltrigger],
		name: "AboutCompony",
		data() {
			return {
				chronologyHeight: 0,
				start: null,
			};
		},
		computed: {
			...mapGetters(["_getScrollTop", "_getDictionary"]),
		},
		watch: {
			_getScrollTop(val) {
				if (this.chronologyHeight === null) return;
				let s = window.innerHeight - this.getTop();
				if (s > 100) {
					if (!this.start) {
						this.start = val;
					}
					if (val - this.start < this.chronologyHeight) {
						this.$refs.chronologyItems.style.height = val - this.start + "px";
					} else {
						this.$refs.chronologyItems.style.height =
							this.chronologyHeight + "px";
						this.chronologyHeight = null;
					}
				}
			},
		},
		methods: {
			getTop() {
				return this.$refs.chronologyItems.getBoundingClientRect().top;
			},
			enter(element) {
				const width = getComputedStyle(element).width;
				element.style.width = width;
				element.style.position = "absolute";
				element.style.visibility = "hidden";
				element.style.height = "auto";
				const height = getComputedStyle(element).height;
				element.style.width = null;
				element.style.position = null;
				element.style.visibility = null;
				element.style.height = 0;
				getComputedStyle(element).height;
				requestAnimationFrame(() => {
					element.style.height = height;
				});
			},
			afterEnter(element) {
				element.style.height = "auto";
			},
			leave(element) {
				const height = getComputedStyle(element).height;

				element.style.height = height;

				getComputedStyle(element).height;

				requestAnimationFrame(() => {
					element.style.height = 0;
				});
			},
		},
		mounted() {
			this.$nextTick(() => {
				this.chronologyHeight = this.$refs.chronologyItems.getBoundingClientRect().height;
				this.$refs.chronologyItems.style.height = "0px";
			});
		},
	};
</script>
<style lang="scss" scoped>
	#about-compony {
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
	.chronology {
		position: relative;
		width: 75%;
		padding-left: 3rem;
		margin-bottom: 9rem;
	}
	.border {
		position: absolute;
		left: 0;
		top: 0;
		width: 1px;
		height: 100%;
		background: linear-gradient(to bottom, transparent, #fff, transparent);
	}
	.border:before,
	.border:after {
		content: "";
		position: absolute;
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		left: 50%;
		top: 0;
		transform: translate(-50%, -50%);
		box-shadow: 0 0 13px 5px $box-shadow-color;
		background: linear-gradient(130deg, #0a2bda, #4098ff);
	}
	.border:after {
		transform: translate(-50%, -50%);
		top: 100%;
	}
	.chronology-items {
		overflow: hidden;
	}
	.chronology-items div:first-child .chronology_elem {
		padding: 4.15rem 0 1.3rem;
	}
	.chronology-items div:last-child .chronology_elem {
		padding: 1.3rem 0 4.15rem;
	}
	.chronology_elem h3 {
		font-weight: 300;
		text-align: left;
		margin-bottom: 0.5rem;
	}
	.expand-enter-active,
	.expand-leave-active {
		transition: height 1s cubic-bezier(0.3, 0.68, 0.53, 1.54);
		overflow: hidden;
	}
	.expand-enter,
	.expand-leave-to {
		height: 0;
	}
	h3 {
		width: 100%;
		text-align: center;
		font-weight: 400;
		margin-bottom: 3.95rem;
	}
	.tab-list {
		margin-bottom: 9rem;
	}
	.technologies {
		box-shadow: 0 0 83px 10px $box-shadow-color;
	}
	.technology {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		padding: 2.5rem;
	}
	.technology img {
		display: block;
		width: 50%;
		height: auto;
		background: radial-gradient($box-shadow-color, transparent 50%) no-repeat;
	}
	.technologies h3 {
		font-family: $font-montserrat;
		text-transform: unset;
		margin-bottom: 1.5rem;
		line-height: 1;
		text-align: left;
		font-weight: 500;
	}
	.text {
		width: 50%;
		box-sizing: border-box;
		flex-basis: 10rem;
		flex-grow: 1;
		padding-left: 2.5rem;
	}
	@media (max-width: 1650px) {
		#about-compony {
			padding: 11.6rem 12% 16rem;
		}
	}
	@media (max-width: 1199.98px) {
		#about-compony {
			padding: 11.6rem 10% 14rem;
		}
		.chronology {
			width: 80%;
			margin-bottom: 7rem;
		}
	}
	@media (max-width: 991.98px) {
		#about-compony {
			padding: 11.6rem 10% 14rem;
		}
		.chronology {
			width: 85%;
			margin-bottom: 5rem;
		}
	}
	@media (max-width: 767.98px) {
		#about-compony {
			padding: 11.6rem 7% 10rem;
		}
		.large_p {
			text-align: center;
			mask-position: 4rem;
			padding: 0 1rem;
			margin-bottom: 8rem;
		}
		.chronology {
			margin-bottom: 5rem;
		}
		.technology img {
			width: 100%;
			margin-bottom: 3rem;
		}
		.text {
			width: 100%;
			padding: 0;
		}
	}
	@media (max-width: 575.98px) {
		#about-compony {
			padding: 11.6rem 0% 10rem;
		}
		.technology {
			text-align: center;
		}
		.technology h3 {
			text-align: center;
		}
	}
</style>