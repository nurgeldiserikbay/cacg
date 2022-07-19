<template>
	<section id="approach" ref="approach">
		<div class="wrapper" ref="wrapper">
			<div class="content" ref="content">
				<h2 class="gs_reveal">{{ _getDictionary.approachTitle }}</h2>
				<div class="approach-row">
					<div class="steps">
						<div class="nums gs_reveal">
							<span
								v-for="(elem, ind) in _getDictionary.approachSlides"
								:key="elem.id"
								:class="{
									top: ind < current,
									active: ind === current,
									bottom: ind > current,
								}"
								>{{ ind + 1 }}</span
							>
						</div>
						<div class="texts gs_reveal">
							<div
								v-for="(elem, ind) in _getDictionary.approachSlides"
								:key="elem.id"
								class="text-item"
								:class="{
									top: ind < current,
									active: ind === current,
									bottom: ind > current,
								}"
							>
								<h3>{{ elem.title }}</h3>
								<p>{{ elem.text }}</p>
							</div>
						</div>
					</div>
					<div class="circle-slider-content gs_reveal">
						<div
							class="circle-slider"
							ref="circleSlider"
							:style="{
								transform: 'rotateZ(' + (current * 60 - deg) + 'deg)',
							}"
						>
							<span
								v-for="(elem, ind) in _getDictionary.approachSlides"
								:key="elem.id"
								:style="getStyle(ind)"
								><span :style="{ opacity: getOpacity(ind) }"></span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import { mapGetters } from "vuex";
	export default {
		name: "CircleCarusel",
		data() {
			return {
				current: 0,
				fade: "",
				deg: 0,
				radius: 0,
				scrollTop: 0,
			};
		},
		computed: {
			...mapGetters(["_getScrollTop", "_getDictionary"]),
			scrollHeight() {
				return this.$refs.approach.offsetHeight - this.$refs.content.offsetHeight;
			},
			stepHeight() {
				return this.scrollHeight / this._getDictionary.approachSlides.length;
			},
			getScale() {
				return (num) => {
					let order =
						(this.current + num) % this._getDictionary.approachSlides.length;
					if (order > 1 && order < this._getDictionary.approachSlides.length - 1)
						return 1;
					else if (order === 0) return 5;
					else if (order === 1) return 3;
					else return 2.5;
				};
			},
			getOpacity() {
				return (num) => {
					let order =
						(this.current + num) % this._getDictionary.approachSlides.length;
					if (order > 1 && order < this._getDictionary.approachSlides.length - 1)
						return 0;
					else if (order === 0) return 1;
					else if (order === 1) return 0.7;
					else return 0.4;
				};
			},
			getStyle() {
				return (num) => {
					let left =
						50 -
						50 *
							Math.cos(
								(2 * Math.PI * num) / this._getDictionary.approachSlides.length
							);
					let top =
						50 -
						50 *
							Math.sin(
								(2 * Math.PI * num) / this._getDictionary.approachSlides.length
							);
					return {
						transform:
							"translate(-50%, -50%) rotateZ(" +
							(-this.current * 60 + this.deg) +
							"deg) scale(" +
							this.getScale(num) +
							")",
						left: left + "%",
						top: top + "%",
					};
				};
			},
		},
		watch: {
			_getScrollTop() {
				let top = this.$refs.approach.getBoundingClientRect().top;
				if (top > 0) {
					this.scrollTop = 0;
				} else if (Math.abs(top) > this.scrollHeight) {
					this.scrollTop = this.scrollHeight;
				} else {
					this.scrollTop = Math.abs(top);
				}
			},
			scrollTop(newVal, oldVal) {
				let step = Math.floor(newVal / this.stepHeight);
				if (step >= 0 && step < this._getDictionary.approachSlides.length) {
					this.fade = Math.sign(newVal - oldVal) > 0 ? "fade-bottom" : "fade-top";
					this.current = step;
				} else if (step >= this._getDictionary.approachSlides.length) {
					this.fade = "fade-top";
					this.current = this._getDictionary.approachSlides.length - 1;
				} else if (step < 0) {
					this.fade = "fade-bottom";
					this.current = 0;
				}
				this.$refs.content.style.top = newVal + "px";
			},
		},
		methods: {},
		mounted() {
			this.radius = this.$refs.circleSlider.getBoundingClientRect().width / 2;
			this.$refs.approach.style.height =
				this._getDictionary.approachSlides.length *
					this.$refs.content.offsetHeight +
				"px";
			this.current = 0;
			this.fade = "";
			this.deg = 0;
			if (window.innerWidth < 767.98) {
				this.deg = 90;
			} else {
				this.deg = 0;
			}
			window.addEventListener("resize", () => {
				if (window.innerWidth < 767.98) {
					this.deg = 90;
				} else {
					this.deg = 0;
				}
			});
		},
	};
</script>
<style  lang="scss" scoped>
	#approach {
		position: relative;
		padding: 0 12.3%;
		margin-bottom: 9rem;
		z-index: 20;
	}
	.wrapper {
		position: relative;
		height: 100%;
	}
	.content {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		padding-top: 6rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
	}
	.content h2 {
		margin-bottom: 0;
	}
	.approach-row {
		position: relative;
		width: 100%;
		flex-grow: 1;
	}
	.steps {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 50%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.steps > .nums {
		width: 2rem;
		margin-right: 1rem;
		box-sizing: border-box;
		mask-image: linear-gradient(
			transparent 0rem,
			#fff 5rem,
			#fff calc(100% - 5rem),
			transparent 100%
		);
	}
	.nums span {
		position: absolute;
		display: block;
		padding: 5rem 0;
		font-family: $font-micra;
		font-size: 16px;
		line-height: 1.5;
		font-weight: bold;
		transition: all 0.6s cubic-bezier(0, -1.37, 0.61, 1.84);
	}
	.nums span.top {
		opacity: 0;
		transform: translateY(-150%);
		transition: transform 0.6s cubic-bezier(0, -1.37, 0.61, 1.84),
			opacity 0.6s ease-out;
	}
	.nums span.active {
		position: relative;
		opacity: 1;
		transform: translateY(0%);
		transition: transform 0.6s cubic-bezier(0, -1.37, 0.61, 1.84);
	}
	.nums span.bottom {
		transform: translateY(150%);
		opacity: 0;
		transition: transform 0.6s cubic-bezier(0, -1.37, 0.61, 1.84),
			opacity 0.6s ease-in;
	}
	.texts {
		position: relative;
		box-sizing: border-box;
		padding: 5rem 0;
		flex-grow: 1;
		mask-image: linear-gradient(
			transparent 0rem,
			#fff 2rem,
			#fff calc(100% - 2rem),
			transparent 100%
		);
		max-height: 100%;
	}
	.texts:before {
		content: "";
		position: absolute;
		top: 5rem;
		left: 0;
		bottom: 5rem;
		min-width: 4px;
		background: linear-gradient(to bottom, #0a2bda, #4098ff);
		transition: all 0.6s cubic-bezier(0, -1.37, 0.61, 1.84);
	}
	.text-item {
		position: absolute;
		padding-left: 1.7rem;
		max-height: 100%;
	}
	.text-item.top {
		opacity: 0;
		transform: translateY(-150%);
		transition: transform 0.6s cubic-bezier(0, -1.37, 0.61, 1.84),
			opacity 0.6s ease-out;
	}
	.text-item.active {
		position: relative;
		opacity: 1;
		transform: translateY(0%);
		transition: transform 0.6s cubic-bezier(0, -1.37, 0.61, 1.84);
	}
	.text-item.bottom {
		transform: translateY(150%);
		opacity: 0;
		transition: transform 0.6s cubic-bezier(0, -1.37, 0.61, 1.84),
			opacity 0.6s ease-in;
	}
	.text-item.top h3 {
		transform: translateY(-2rem);
	}
	.text-item.bottom p {
		transform: translateY(4rem);
	}
	.texts h3 {
		position: relative;
		font-family: $font-micra;
		font-size: 1.6rem;
		line-height: 2.2rem;
		text-transform: uppercase;
		margin-bottom: 2.5rem;
		font-weight: 300;
		transition: all 0.6s cubic-bezier(0, -1.37, 0.61, 1.84);
	}
	.texts p {
		transition: all 0.6s cubic-bezier(0, -1.37, 0.61, 1.84);
	}
	.fade-top-enter-active,
	.fade-top-leave-active,
	.fade-bottom-enter-active,
	.fade-bottom-leave-active {
		transition: all 0.6s cubic-bezier(0, -1.37, 0.61, 1.84);
	}
	.fade-top-leave-active,
	.fade-bottom-leave-active {
		position: absolute;
	}
	.fade-top-enter-from,
	.fade-bottom-leave-to {
		transform: translateY(-140%);
	}
	.fade-top-enter-from h3,
	.fade-bottom-leave-to h3 {
		transform: translateY(-2rem);
	}
	.fade-bottom-enter-from,
	.fade-top-leave-to {
		transform: translateY(140%);
	}
	.fade-bottom-enter-from p,
	.fade-top-leave-to p {
		transform: translateY(4rem);
	}
	.circle-slider-content {
		position: absolute;
		top: 0;
		right: 0;
		width: 50%;
		bottom: 0;
	}
	.circle-slider {
		position: absolute;
		right: -10%;
		top: 50%;
		margin-top: -17.5vw;
		margin-top: max(-17.5vw, -32.5vh);
		width: 35vw;
		height: 35vw;
		max-width: 65vh;
		max-height: 65vh;
		border-radius: 50%;
		border: 1.5px solid rgba(255, 255, 255, 0.6);
		box-sizing: border-box;
		transition: all 0.6s linear;
		transform-origin: 50% 50%;
	}
	.circle-slider > span {
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		width: 1.4rem;
		height: 1.4rem;
		border-radius: 50%;
		transition: all 0.6s linear;
		transform-origin: center;
		transform: translate(-50%, -50%);
		box-shadow: 0 0 0.8rem 0.3rem $box-shadow-color;
	}
	.circle-slider span > span {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		transition: all 0.6s linear;
	}
	.circle-slider span:nth-child(1) > span {
		background-image: url("/images/circle-icon-2.svg");
	}
	.circle-slider span:nth-child(2) > span {
		background-image: url("/images/circle-icon-6.svg");
	}
	.circle-slider span:nth-child(3) > span {
		background-image: url("/images/circle-icon-5.svg");
	}
	.circle-slider span:nth-child(4) > span {
		background-image: url("/images/circle-icon-4.svg");
	}
	.circle-slider span:nth-child(5) > span {
		background-image: url("/images/circle-icon-3.svg");
	}
	.circle-slider span:nth-child(6) > span {
		background-image: url("/images/circle-icon-2.svg");
	}
	@media screen and (min-width: 375px) {
		.nums span {
			font-size: 16px;
			font-size: calc(16px + 16 * ((100vw - 375px) / 1545));
		}
	}
	@media screen and (min-width: 1920px) {
		.nums span {
			font-size: 32px;
		}
	}
	@media (max-width: 1699.98px) {
		#approach {
			padding: 0 6%;
		}
	}
	@media (max-width: 1200.98px) {
		.circle-slider {
			right: -6%;
		}
	}
	@media (max-width: 767.98px) {
		#approach {
			padding: 0 2%;
		}
		.approach-row {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			display: flex;
			flex-direction: column;
		}
		.steps {
			position: relative;
			left: unset;
			top: unset;
			transform: translateY(0);
			order: 2;
			width: 100%;
			height: 50vh;
			padding-top: 2rem;
			box-sizing: border-box;
			flex-grow: 1;
			margin: 0 auto;
		}
		.steps > .nums {
			margin-top: -5rem;
		}
		.circle-slider-content {
			position: relative;
			right: unset;
			top: unset;
			bottom: unset;
			margin-top: unset;
			order: 1;
			flex-grow: 1;
			margin: 0 auto;
			transform-origin: center;
			width: 100%;
			height: 50vh;
			box-sizing: border-box;
			mask-image: linear-gradient(to bottom, transparent 30%, white 40%);
		}
		.circle-slider {
			position: relative;
			top: unset;
			right: unset;
			margin: 0 auto;
			transform: rotateZ(90deg);
			margin-top: -4rem;
			width: 40vh;
			height: 40vh;
			max-width: auto;
			max-height: auto;
		}
		.circle-slider > span {
			width: 1rem;
			height: 1rem;
		}
		.texts {
			padding: 2rem 0;
			margin: -2rem auto 0;
		}
		.texts:before {
			display: none;
		}
		.text-item {
			overflow: hidden;
			overflow-y: auto;
		}
		.texts h3 {
			padding-left: 2rem;
		}
		.texts h3:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			min-width: 4px;
			background: linear-gradient(to bottom, #0a2bda, #4098ff);
			transition: all 0.6s cubic-bezier(0, -1.37, 0.61, 1.84);
		}
	}
	@media (max-width: 480px) {
		#approach {
			margin: 0 1.6rem;
		}
	}
</style>