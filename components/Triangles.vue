<template>
	<div @mousemove="mousemove" @mouseleave="mouseleave">
		<img :src="src" alt="" ref="img" :style="getStyle" />
	</div>
</template>
<script>
	export default {
		props: ["src", "x", "y", "speed"],
		data() {
			return {
				centerX: 0,
				centerY: 0,
				over: false,
				overX: 0,
				overY: 0,
			};
		},
		computed: {
			getStyle() {
				if (this.over) {
					return {
						transform: `translateX(${
							(this.centerX +
								Math.floor((this.x * this.speed) / 100) -
								this.overX) /
							2
						}px) translateY(${
							(this.centerY +
								Math.floor((this.y * this.speed) / 100) -
								this.overY) /
							2
						}px)`,
					};
				} else {
					return {
						transform: `translateX(${Math.floor(
							(this.x * this.speed) / 100
						)}px) translateY(${Math.floor((this.y * this.speed) / 100)}px)`,
					};
				}
			},
		},
		methods: {
			mousemove(e) {
				this.over = true;
				let s = this.$refs.img.getBoundingClientRect();
				this.overX = e.clientX - s.left;
				this.overY = e.clientY - s.top;
			},
			mouseleave() {
				this.over = false;
				this.overX = 0;
				this.overY = 0;
			},
		},
		mounted() {
			this.$refs.img.onload = () => {
				let s = this.$refs.img.getBoundingClientRect();
				this.centerX = s.width / 2;
				this.centerY = s.height / 2;
			};
		},
	};
</script>
<style lang="scss" scoped>
	img {
		position: relative;
		display: block;
		left: 0;
		top: 0;
		transition: all 0.3s linear;
		width: 100%;
		height: auto;
	}
</style>