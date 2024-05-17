<template>
	<div class="wrapper" ref="imageSlider" :data-id="'imageSlider' + randomId">
		<div class="team_info">
			<div class="team_info_content" @click="linkTo">
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
		<div class="team_imgs" @click="linkTo">
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
			linkTo() {
				this.$router.push("/media/" + this.slides[this.current].slug);
			},
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
		justify-content: flex-end;
	}
	.team_info {
		width: 23.75rem;
		height: 29.2rem;
		position: relative;
		z-index: 1;
		padding: 2.95rem 1.55rem 6.05rem 2.85rem;
		box-sizing: border-box;
		box-shadow: 0 0 4.15rem 0.5rem $box-shadow-color;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	.team_info_content {
		width: 100%;
		margin-bottom: 1rem;
		overflow: hidden;
	}
	.team_info .author {
		height: 1.2rem;
		line-height: 1.2rem;
		font-weight: 300;
		font-size: 0.9rem;
		white-space: nowrap;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 0;
	}
	.team_info h3 {
		max-height: 5.4rem;
		box-sizing: border-box;
		line-height: 1.5;
		font-size: 1.2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 700;
		margin-bottom: 1rem;
	}
	.team_imgs_mobile {
		display: none;
		position: relative;
		width: 100%;
		height: 19.2rem;
		object-fit: contain;
		margin: 0 auto 4rem;
	}
	.team_info p {
		margin-bottom: 1rem;
		box-sizing: border-box;
		word-break: break-word;
		overflow: hidden;
	}
	.team_info_control {
		position: absolute;
		width: 100%;
		bottom: 4.05rem;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.team_info_control button {
		cursor: pointer;
		width: 1rem;
	}
	.team_info_control button img {
		width: 100%;
		height: auto;
	}
	.counter {
		font-family: $font-micra;
		font-weight: bold;
		font-size: 1rem;
		margin: 0 1rem;
	}
	.team_imgs {
		position: absolute;
		left: 0%;
		right: 23.75rem;
		top: 15%;
		bottom: 15%;
		box-shadow: 0 0 4.15rem 0.5rem $box-shadow-color;
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
			padding: 2rem 1.35rem 2rem 2.2rem;
			font-size: 0.9rem;
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
			padding: 1rem;
			margin: 0 auto;
			height: 52.4rem;
			font-size: 1rem;
			text-align: center;
		}
		.team_info h3 {
			text-align: center;
		}
		.team_info p {
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