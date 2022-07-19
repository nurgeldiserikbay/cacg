<template>
	<div
		class="wrap"
		:style="{
			left: x + '%',
			top: y + '%',
			transform: 'scale(' + (scale || 1) + ')',
			opacity: getOpacity,
		}"
	>
		<img :src="src" alt="" />
	</div>
</template>
<script>
	export default {
		props: ["src", "x", "y", "scale"],
		data() {
			return {
				width: undefined,
			};
		},
		computed: {
			getOpacity() {
				return (
					(1 * Math.abs(this.width / 2 - (this.x * this.width) / 100)) /
					(Math.max(this.width, 1800) / 2)
				);
			},
		},
		mounted() {
			this.width = window.innerWidth;
			window.addEventListener("resize", () => {
				this.width = window.innerWidth;
			});
		},
	};
</script>
<style lang="scss" scoped>
	.wrap {
		position: absolute;
		user-select: none;
		width: 6rem;
		z-index: -1;
	}
	img {
		width: 100%;
		height: auto;
		animation: img 25s linear infinite;
		box-shadow: unset !important;
	}
	@keyframes img {
		0% {
			transform: rotateZ(0);
		}
		100% {
			transform: rotateZ(360deg);
		}
	}
</style>