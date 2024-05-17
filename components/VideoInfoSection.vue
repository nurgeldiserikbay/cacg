<template>
	<section id="video-info">
		<AnimFigure
			:src="'/images/figure-2.png'"
			x="85"
			y="0"
			scale="0.8"
		/>
		<AnimFigure
			:src="'/images/figure-2.png'"
			x="5"
			y="110"
			scale="0.8"
		/>
		<h2 class="gs_reveal">{{ _getDictionary.videoInfoTitle }}</h2>
		<div class="video-info-content">
			<div class="video-wrapper gs_reveal">
				<div
					class="video"
					@mousemove="mousemove"
					@mouseleave="mouseleave"
					ref="videoContainer"
				>
					<video
						id="video"
						ref="video"
						:src="'./videos/video.mp4'"
						:poster="'./images/poster.png'"
						:data-plyr-config="JSON.stringify({ hideControls: played })"
						@play="play"
						@pause="pause"
						@ended="ended"
					></video>
				</div>
			</div>
			<div class="info gs_reveal">
				<p>
					<span>{{ _getDictionary.videoInfoTextTitle }}</span>
					{{ _getDictionary.videpInfoTextFirst }}
				</p>
				<p>
					{{ _getDictionary.videpInfoTextSecond }}
				</p>
				<p>
					{{ _getDictionary.videpInfoTextThird }}
				</p>
			</div>
		</div>
	</section>
</template>
<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "VideoInfoSection",
		data() {
			return {
				played: false,
				timer: null,
				full: false,
				player: null,
			};
		},
		computed: {
			...mapGetters(["_getDictionary"]),
		},
		methods: {
			...mapActions(["_add_listener"]),
			play() {
				this.played = true;
				this.player.toggleControls(true);
			},
			pause() {
				this.played = false;
				this.player.toggleControls(false);
			},
			ended() {
				this.played = false;
				this.$refs.video.load();
			},
			mousemove(event) {
				if (this.played) {
					this.mousemoved = true;
					if (this.timer) {
						clearTimeout(this.timer);
					}
					this.timer = setTimeout(() => {
						this.mousemoved = false;
					}, 1000);
					return (event.currentTarget.style.cssText = null);
				}
				let style = event.currentTarget.getBoundingClientRect();
				let cx = style.left + style.width / 2;
				let cy = style.top + style.height / 2;
				let x = Math.floor(((event.clientX - cx) / style.width) * 200 * 0.1);
				let y = Math.floor(((event.clientY - cy) / style.height) * 200 * 0.1);
				event.currentTarget.style.cssText = `transform: rotateX(${-y}deg) rotateY(${x}deg)`;
			},
			mouseleave(event) {
				event.currentTarget.style.cssText = null;
			},
		},
		mounted() {
			this._add_listener({
				event: "mousemove",
				target: this.$refs.videoContainer,
			});
			this.player = new Plyr("#video");
			this.$refs.video.addEventListener("loadstart", () => {
				this.player.toggleControls(false);
			});
		},
	};
</script>
<style scoped lang="scss">
	#video-info {
		position: relative;
		padding: 0 12.3%;
		padding-top: 3.4rem;
		margin-bottom: 10rem;
	}
	.video-info-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		perspective: 600px;
	}
	.video-info-content > div {
		flex-grow: 1;
	}
	.video-wrapper {
		width: 39.9%;
		perspective: 600px;
	}
	.video {
		position: relative;
		margin-right: 4.3rem;
		transform-origin: center;
		perspective: 600px;
		transform-style: preserve-3d;
		transition: all 0.3s linear;
		transform: rotateX(0deg) rotateY(0deg);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.video video {
		width: 100%;
		box-shadow: 0 0 65px 0 $box-shadow-color;
		height: auto;
		object-fit: cover;
	}
	.video video[poster] {
		object-fit: cover;
	}
	.info {
		width: 30.6%;
	}
	.info p {
		margin: 0;
		margin-bottom: 2rem;
	}
	.info p span {
		font-weight: bold;
	}
	@media (max-width: 1699.98px) {
		#video-info {
			margin-bottom: 5rem;
			padding: 0 8%;
		}
	}
	@media (max-width: 991.98px) {
		.video {
			width: 100%;
			margin: 0 auto;
			margin-bottom: 4rem;
		}
		.info {
			width: 100%;
		}
	}
	@media (max-width: 767.98px) {
		#video-info {
			padding: 0 0;
			padding-top: 3.75rem;
			margin-bottom: 2.5rem;
			min-height: auto;
		}
		.video {
			margin-bottom: 0;
		}
		.info {
			display: none;
		}
	}
</style>