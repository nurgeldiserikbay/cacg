<template>
	<div
		class="wrapper"
		ref="imageSlider"
		:data-id="'imageSlider' + randomId"
		:class="{ 'news-wrapper': type === 'news', right: right }"
	>
		<div class="team_info">
			<div class="team_info_content">
				<p
					v-if="slides[current].author"
					class="author animate__animated"
					:class="{ animate__backInDown: anim }"
				>
					{{ slides[current].author }}
				</p>
				<h3 class="animate__animated" :class="{ animate__backInDown: anim }">
					{{ slides[current].title }}
				</h3>
				<div class="team_imgs_mobile">
					<div
						class="team_img"
						v-for="(elem, ind) in slides"
						:key="elem.id"
						:class="{ active: ind === current }"
					>
						<div class="img">
							<div class="img-in">
								<img :src="elem.img" alt="" :key="elem.img" />
							</div>
						</div>
						<div class="img">
							<div class="img-in">
								<img :src="elem.img" alt="" :key="elem.img" />
							</div>
						</div>
						<div class="img">
							<div class="img-in">
								<img :src="elem.img" alt="" :key="elem.img" />
							</div>
						</div>
						<div class="img">
							<div class="img-in">
								<img :src="elem.img" alt="" :key="elem.img" />
							</div>
						</div>
					</div>
				</div>
				<div>
					<p
						class="animate__animated"
						:class="{
							animate__backInUp: anim,
						}"
						v-for="(p, p_i) in slides[current].text"
						:key="p_i"
					>
						{{ p }}
					</p>
				</div>
			</div>
			<div class="team_info_control">
				<button class="left" @click="clcLeft">
					<img :src="'./images/slide-left.svg'" alt="" />
				</button>
				<div class="counter">{{ current + 1 }} / {{ slides.length }}</div>
				<button class="right" @click="clcRight">
					<img :src="'./images/slide-right.svg'" alt="" />
				</button>
			</div>
		</div>
		<div class="team_imgs">
			<div
				class="team_img"
				v-for="(elem, ind) in slides"
				:key="elem.id"
				:class="{ active: ind === current }"
			>
				<div class="img">
					<div class="img-in">
						<img :src="elem.img" alt="" :key="elem.img" />
					</div>
				</div>
				<div class="img">
					<div class="img-in">
						<img :src="elem.img" alt="" :key="elem.img" />
					</div>
				</div>
				<div class="img">
					<div class="img-in">
						<img :src="elem.img" alt="" :key="elem.img" />
					</div>
				</div>
				<div class="img">
					<div class="img-in">
						<img :src="elem.img" alt="" :key="elem.img" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapActions } from "vuex";
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	export default {
		props: ["slides", "right", "type"],
		transition: {
			name: "slide",
			mode: "out-in",
		},
		data() {
			return {
				randomId: null,
				current: 0,
				anim: false,
			};
		},
		methods: {
			...mapActions(["_add_listener"]),
			clcLeft() {
				if (this.current - 1 < 0 || this.anim) return;
				this.anim = true;
				setTimeout(() => {
					this.anim = false;
				}, 1200);
				this.current -= 1;
			},
			clcRight() {
				if (this.current + 1 >= this.slides.length || this.anim) return;
				this.anim = true;
				setTimeout(() => {
					this.anim = false;
				}, 1200);
				this.current += 1;
			},
		},
		beforeMount() {
			this.randomId = getRandomInt(1000000);
		},
		mounted() {
			let $this = this;
			this._add_listener({
				event: "swipe",
				target: this.$refs.imageSlider.dataset.id,
			});
			this.$refs.imageSlider.addEventListener("swipe", (e) => {
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
	.wrapper {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.wrapper.right {
		justify-content: flex-end;
	}
	.team_info {
		position: relative;
		z-index: 1;
		width: 38%;
		padding: 4rem 0 4.25rem;
		box-sizing: border-box;
		box-shadow: 0 0 4.15rem 0.5rem $box-shadow-color;
	}
	.team_info_content {
		min-height: 26.5rem;
		margin-bottom: 1rem;
		overflow: hidden;
	}
	.team_info .author {
		margin-top: 0;
	}
	.team_info h3 {
		max-width: 100%;
		text-align: center;
		font-weight: 700;
		word-break: break-word;
	}
	.wrapper.right .team_info h3 {
		font-weight: 400;
		padding: 0 1.25rem 0 2.1rem;
	}
	.news-wrapper .team_info h3 {
		text-align: left;
		margin-left: 0;
	}
	.team_imgs_mobile {
		display: none;
		position: relative;
		max-width: 90%;
		height: 19.2rem;
		margin: 0 auto 4rem;
	}
	.team_info p {
		margin-bottom: 1rem;
		padding: 0 1.25rem 0 2.1rem;
		word-break: break-word;
	}
	.team_info_control {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.team_info_control button {
		cursor: pointer;
		width: 1.8rem;
	}
	.team_info_control button img {
		width: 100%;
		height: auto;
	}
	.counter {
		font-family: $font-micra;
		font-weight: bold;
		font-size: 1.6rem;
		margin: 0 2.15rem;
	}
	.team_imgs {
		position: absolute;
		left: 38%;
		top: 10%;
		right: 0%;
		bottom: 10%;
		box-shadow: 0 0 4.15rem 0.5rem $box-shadow-color;
	}
	.wrapper.right .team_imgs {
		left: 0%;
		right: 38%;
		top: 15%;
		bottom: 15%;
	}
	.team_img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		transition: all 1.2s ease;
		perspective: 1000px;
		overflow: hidden;
	}
	.team_img.active {
		z-index: 5;
	}
	.team_img .img {
		position: absolute;
		top: 0;
		width: 25%;
		height: 100%;
		overflow: hidden;
		transform-origin: center;
		transform-style: preserve-3d;
		transition: all 0.3s linear;
		backface-visibility: hidden;
	}
	.team_img .img:nth-child(1) {
		transition-delay: 0.9s;
		left: 0;
	}
	.team_img .img:nth-child(2) {
		transition-delay: 0.6s;
		left: 25%;
	}
	.team_img .img:nth-child(3) {
		transition-delay: 0.3s;
		left: 50%;
	}
	.team_img .img:nth-child(4) {
		left: 75%;
	}
	.team_img .img:nth-child(1),
	.team_img .img:nth-child(2),
	.team_img .img:nth-child(3),
	.team_img .img:nth-child(4) {
		transform: rotateY(180deg);
	}
	.team_img.active .img:nth-child(1),
	.team_img.active .img:nth-child(2),
	.team_img.active .img:nth-child(3),
	.team_img.active .img:nth-child(4) {
		transform: rotateY(0deg);
	}
	.team_img .img .img-in {
		position: relative;
		width: 400%;
		height: 100%;
	}
	.team_img .img:nth-child(1) .img-in {
		left: 0;
	}
	.team_img .img:nth-child(2) .img-in {
		left: -100%;
	}
	.team_img .img:nth-child(3) .img-in {
		left: -200%;
	}
	.team_img .img:nth-child(4) .img-in {
		left: -300%;
	}
	.team_img img {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (max-width: 1699.98px) {
		.team_info {
			padding: 2rem 1.35rem 2rem 2.2rem;
		}
	}
	@media (max-width: 1199.98px) {
		.team_info {
			width: 44%;
			padding: 2rem 1.35rem 2rem 2.2rem;
			font-size: 0.9rem;
			line-height: 1.5;
		}
		.team_imgs {
			left: 44%;
		}
		.wrapper.right .team_imgs {
			right: 44%;
		}
	}
	@media (max-width: 991.98px) {
		.team_info {
			padding: 1rem 1.35rem 1rem 2.2rem;
		}
	}
	@media (max-width: 767.98px) {
		.team_info {
			width: 100%;
			padding: 1rem 0rem 1rem 0rem;
			margin: 0 auto;
			font-size: 1rem;
			text-align: center;
		}
		.team_info_content {
			min-height: 48rem;
		}
		.team_info h3 {
			margin-left: 0;
		}
		.news-wrapper .team_info h3 {
			text-align: center;
		}
		.team_info p {
			padding: 0 2rem;
			margin-bottom: 0.5rem;
		}
		.team_imgs_mobile {
			display: block;
		}
		.slide-enter-active,
		.slide-leave-active {
			transition: all 1.2s ease;
		}
		.slide-leave-to .img:nth-child(1),
		.slide-leave-to .img:nth-child(2),
		.slide-leave-to .img:nth-child(3),
		.slide-leave-to .img:nth-child(4) {
			transform: rotateY(180deg);
		}
		.slide-enter-from .img:nth-child(1),
		.slide-enter-from .img:nth-child(2),
		.slide-enter-from .img:nth-child(3),
		.slide-enter-from .img:nth-child(4) {
			transform: rotateY(-180deg);
		}
		.team_imgs {
			display: none;
		}
	}
</style>