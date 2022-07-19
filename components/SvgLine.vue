<template>
	<svg
		width="100%"
		height="10"
		:viewBox="'0 0 1000 10'"
		version="1.1"
		ref="svg"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient
				id="curved-line-gradient"
				x1="0%"
				y1="0%"
				x2="100%"
				y2="0%"
			>
				<stop offset="0%" stop-color="rgba(255, 255, 255, 0.2)" />
				<stop offset="50%" stop-color="rgba(255, 255, 255, 1)" />
				<stop offset="100%" stop-color="rgba(255, 255, 255, 0.2)" />
			</linearGradient>
		</defs>
		<path
			:d="getPath"
			stroke="url(#curved-line-gradient)"
			stroke-width="1"
			fill="transparent"
		/>
	</svg>
</template>

<script>
	export default {
		name: "SvgLine",
		props: ["x", "dir"],
		data() {
			return {
				dx: 120,
				width: null,
			};
		},
		computed: {
			getPath() {
				if (!this.dir) {
					return "M 0 5 L 1000 6";
				}
				let c = 10 * this.x;
				return `M 0 5 L ${c - this.dx} 5 Q ${c} ${5 + this.dir * 5} ${
					c + this.dx
				} 5 L 1000 5`;
			},
		},
		mounted() {
			this.width = this.$refs.svg.getBoundingClientRect().width;
		},
	};
</script>

<style  lang="scss" scoped>
	svg {
		display: inline;
	}
</style>