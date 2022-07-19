<template>
	<div class="slider" ref="slider" :data-id="'nav-menu-item-' + randomId">
		<div class="slider-content" @mousedown="mousedown">
			<div
				v-for="(slide, ind) in slides"
				:key="slide.id"
				class="img"
				:class="['slide-' + (2 - current + ind)]"
				:style="getStyle(ind)"
				@dblclick="select(ind)"
			>
				<div class="img-content">
					<img
						class="gs_reveal"
						:data-gsapduration="0.3 * ind + 0.6"
						:src="slide.src"
						alt=""
						@click="change(ind)"
					/>
				</div>
				<transition name="fade">
					<h4 v-if="current == ind && controls">
						<span class="gs_reveal" :data-gsapduration="0.3 * ind + 0.6">{{
							slide.title
						}}</span>
					</h4>
				</transition>
			</div>
		</div>
		<div class="slider-control-wrap">
			<div
				v-if="controls"
				class="slider-control gs_reveal"
				@mousedown="sliderClick"
				ref="sliderControl"
			>
				<div class="carousel" ref="carousel">
					<div
						class="carousel-rotate"
						ref="carouselRotate"
						:class="{ active: x }"
						:style="{
							transform:
								'rotateZ(' +
								-(
									baseDeg +
									(x
										? Math.min((x / 100) * rangeDeg, rangeDeg)
										: current * stepDeg)
								) +
								'deg)',
						}"
					>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapActions, mapGetters } from "vuex";
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	export default {
		name: "Slider",
		props: ["controls", "slides"],
		emits: ["select"],
		data() {
			return {
				ctrlStyle: null,
				rangeDeg: 0,
				baseDeg: 0,
				stepDeg: 65,
				randomId: null,
				x: 0,
				prev: 0,
				current: 0,
				percent: 0,
				timerId: null,
				autoplayId: null,
			};
		},
		computed: {
			...mapGetters(["_getScrollTop"]),
		},
		watch: {
			x(val) {
				if (!val) return;
				this.clearAutoPlay();
				this.change(Math.round(((this.slides.length - 1) * val) / 100));
			},
		},
		methods: {
			...mapActions(["_add_listener"]),
			select(ind) {
				this.$emit("select", ind);
			},
			sliderClick(event) {
				let target = this.$refs.sliderControl;
				this.x = Math.round(
					((event.clientX - this.ctrlStyle.left) / this.ctrlStyle.width) * 100
				);
				let $this = this;
				function scroll(event) {
					$this.x = Math.round(
						((event.clientX - $this.ctrlStyle.left) / $this.ctrlStyle.width) * 100
					);
				}
				target.addEventListener("mousemove", scroll);
				document.addEventListener(
					"mouseup",
					() => {
						target.removeEventListener("mousemove", scroll);
					},
					{ once: true }
				);
			},
			change(value) {
				if (this.timerId) {
					clearInterval(this.timerId);
					this.timerId = null;
				}
				this.timerId = setInterval(() => {
					if (this.current == value) {
						clearInterval(this.timerId);
						this.timerId = null;
						this.x = 0;
						this.autoplay();
					} else {
						this.current += Math.sign(value - this.current);
					}
				}, 300);
			},
			getStyle(num) {
				let scale = 1;
				let translateX = 0;
				let zIndex = 5;
				if (num - this.current !== 0) {
					scale -= 0.18 * Math.abs(num - this.current);
					translateX += 45 * (num - this.current);
					zIndex -= Math.abs(num - this.current);
				}
				return {
					zIndex: zIndex,
					left: (num + 2 - this.current) * 20 + this.percent + "%",
					transform: `scale(${
						scale + (Math.sign(scale - 1) * (scale * this.percent)) / 100
					}) translateX(${translateX + (translateX * this.percent) / 100}%)`,
				};
			},
			mousedown(event) {
				let $this = this;
				let start = event.clientX;
				this.clearAutoPlay();
				function move(e) {
					let scroll = e.clientX - start;
					let percent = Math.floor(
						(scroll / $this.$refs.slider.clientWidth) * 100
					);
					if (Math.abs(percent) > 5) {
						let current = $this.current - Math.sign(percent);
						if (current >= 0 && current < $this.slides.length) {
							$this.current = current;
						}
						document.removeEventListener("mousemove", move);
						$this.percent = percent = 0;
						start = e.clientX;
					} else {
						$this.percent = 4 * percent;
					}
				}
				document.addEventListener("mouseup", () => {
					document.removeEventListener("mousemove", move);
					$this.percent = 0;
					this.autoplay();
				});
				document.addEventListener("mousemove", move);
			},
			clearAutoPlay() {
				if (this.autoplayId) {
					clearInterval(this.autoplayId);
					this.autoplayId = null;
				}
			},
			autoplay() {
				let style = this.$refs.slider.getBoundingClientRect();
				let top = style.top;
				let bottom = top + style.height;
				if (!this.autoplayId) {
					this.autoplayId = setInterval(() => {
						if (
							this._getScrollTop + window.innerHeight > top &&
							this._getScrollTop < bottom
						) {
							this.current = (this.current + 1) % this.slides.length;
						}
					}, 3000);
				}
			},
		},
		beforeMount() {
			this.randomId = getRandomInt(1000000);
		},
		mounted() {
			let $this = this;
			if (this.controls) {
				let sliderControl = this.$refs.sliderControl;
				let carouselRotate = this.$refs.carouselRotate;
				this.ctrlStyle = sliderControl.getBoundingClientRect();
				this.rangeDeg =
					(this.ctrlStyle.width / carouselRotate.getBoundingClientRect().width) *
					80;
				this.baseDeg = (90 - this.rangeDeg) / 2;
				this.stepDeg = this.rangeDeg / (this.slides.length - 1);
				function resize() {
					$this.ctrlStyle = sliderControl.getBoundingClientRect();
					$this.rangeDeg =
						(($this.ctrlStyle.width - 190) /
							carouselRotate.getBoundingClientRect().width) *
						90;
					$this.baseDeg = (90 - $this.rangeDeg) / 2;
					$this.stepDeg = $this.rangeDeg / ($this.slides.length - 1);
				}
				window.addEventListener("resize", resize);
			}
			this.autoplay();
			this._add_listener({
				event: "swipe",
				target: this.$refs.slider.dataset.id,
			});
			this.$refs.slider.addEventListener("swipe", (e) => {
				if (
					$this.current + e.detail >= 0 &&
					$this.current + e.detail < $this.slides.length
				) {
					$this.current = $this.current + e.detail;
				}
			});
		},
	};
</script>
<style lang="scss" scoped>
	.slider {
		width: 100vw;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-start;
		overflow: hidden;
	}
	.slider-content {
		position: relative;
		width: 100%;
		height: 22.3rem;
		margin-bottom: 6rem;
		perspective: 600;
	}
	.img {
		position: absolute;
		width: 20%;
		height: 100%;
		transform-origin: center;
		transform-style: preserve-3d;
		transition: all 0.5s ease-in-out;
		cursor: pointer;
	}
	.img-content {
		overflow: hidden;
		position: absolute;
		max-width: 30rem;
		max-width: 80vw;
		height: 100%;
		left: 50%;
		transform: translateX(-50%);
		transition: all 0.3sss;
		box-shadow: 0;
	}
	.img img {
		height: 100%;
		object-fit: contain;
		object-position: center;
		user-select: none;
		user-drag: none;
	}
	.slide-2 .img-content {
		box-shadow: 0 4px 53px 6px $box-shadow-color,
			5rem 0 3.2rem 1rem rgba(0, 0, 0, 0.7),
			-5rem 0 3.2rem 1rem rgba(0, 0, 0, 0.7);
	}
	.slide-2 img {
		-webkit-user-drag: none;
	}
	.img h4 {
		position: absolute;
		top: 105%;
		left: 50%;
		transform: translateX(-50%);
		margin: 1rem 0;
		font-size: 1.2rem;
		width: 100vh;
		font-weight: 400;
		text-align: center;
		text-transform: uppercase;
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
	.slider-control-wrap {
		width: 90%;
		max-width: 55.2rem;
		margin: 0 auto;
		transform: translateY(-20%);
	}
	.slider-control {
		position: relative;
		width: 100%;
		padding-bottom: 20%;
		cursor: pointer;
		mask-image: linear-gradient(to bottom, transparent 0%, white 20%);
	}
	.carousel {
		position: absolute;
		bottom: 20%;
		left: 50%;
		width: 172.25%;
		padding-bottom: 172.25%;
		transform-origin: center;
		transform: translateX(-50%);
		border-radius: 50%;
		pointer-events: none;
	}
	.carousel:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border-radius: 50%;
		box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 1);
		pointer-events: none;
	}
	.carousel-rotate {
		position: absolute;
		top: 14.644661%;
		left: 14.644661%;
		width: 70.710678%;
		height: 70.710678%;
		z-index: 1;
		transition: all 0.5s ease-in-out;
		pointer-events: none;
	}
	.carousel-rotate.active {
		transition: unset;
	}
	.carousel span {
		display: block;
		position: absolute;
		width: 2rem;
		height: 2rem;
		transition: all 0.5s ease-in-out;
		border-radius: 50%;
		background: linear-gradient(45deg, #0a2bda, #4098ff);
		cursor: pointer;
		bottom: -1rem;
		left: -1rem;
		z-index: 15;
	}
</style>