<template>
	<section id="counter" ref="counter">
		<AnimFigure :src="'./images/figure-3.png'" x="87" y="3" scale="1" />
		<h2 class="gs_reveal">{{ _getDictionary.counterTitle }}</h2>
		<div class="row">
			<div class="counter counter-1 gs_reveal" data-gsapduration="0.9">
				<img
					:src="'./images/counter-icon-1.png'"
					alt=""
					class="counter-icon"
				/>
				<div class="counter-num">{{ num1 }}</div>
				<div class="counter-text">{{ _getDictionary.counterItemFirst }}</div>
			</div>
			<div class="counter counter-2 gs_reveal" data-gsapduration="0.5">
				<img
					:src="'./images/counter-icon-2.png'"
					alt=""
					class="counter-icon"
				/>
				<div class="counter-num">
					{{ num2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
				</div>
				<div class="counter-text">{{ _getDictionary.counterItemSecond }}</div>
			</div>
			<div class="counter counter-3 gs_reveal" data-gsapduration="0.9">
				<img
					:src="'./images/counter-icon-3.png'"
					alt=""
					class="counter-icon"
				/>
				<div class="counter-num">{{ num3 }}</div>
				<div class="counter-text">{{ _getDictionary.counterItemThird }}</div>
			</div>
		</div>
	</section>
</template>
<script>
	import { mapGetters } from "vuex";
	export default {
		data() {
			return {
				num1: 0,
				num2: 0,
				num3: 0,
				values: [7, 320000, 67],
				animated: false,
				visible: false,
			};
		},
		computed: {
			...mapGetters(["_getScrollTop", "_getDictionary"]),
		},
		watch: {
			_getScrollTop(val) {
				if (val) {
					this.visible =
						this.$refs.counter.getBoundingClientRect().top <
						(window.innerHeight * 4) / 5;
				}
			},
			visible(val) {
				if (val && !this.animated) {
					this.animated = true;
					for (let key in this.values) {
						let name = "num" + (+key + 1);
						let id = setInterval(() => {
							if (this[name] >= this.values[key]) clearInterval(id);
							else {
								this[name] +=
									this.values[key] < 1000
										? 1
										: Math.floor(Math.random() * 999 + 1);
								if (this[name] >= this.values[key]) {
									this[name] = this.values[key];
								}
							}
						}, 2000 / this.values[key]);
					}
				}
			},
		},
	};
</script>
<style  lang="scss" scoped>
	#counter {
		position: relative;
		padding: 0 12.3%;
		margin-bottom: 9rem;
	}
	.row {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		flex-wrap: wrap;
		max-width: 60rem;
		margin: 0 auto;
	}
	.counter {
		width: 33%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	#counter h2 {
		margin-bottom: 9rem;
	}
	.counter-icon {
		width: auto;
		height: 3.9rem;
		margin-bottom: 1.3rem;
	}
	.counter-num {
		font-family: $font-micra;
		font-weight: bold;
		font-size: 1.6rem;
		text-shadow: 0 7px 8px rgba(41, 106, 231, 0.25);
		line-height: 1.5;
		margin-bottom: 0.7rem;
		text-align: center;
	}
	.counter-text {
		text-align: center;
		letter-spacing: 0.042rem;
		font-weight: 400;
		max-width: 80%;
	}
	@media (max-width: 1640.98px) {
		#approach {
			padding: 4rem 8% 0;
		}
	}
	@media (max-width: 991.98px) {
		#approach {
			padding: 3.4rem 5% 0;
		}
	}
	@media (max-width: 767.98px) {
		#counter {
			padding: 3.4rem 3.5rem 0;
		}
	}
</style>