<template>
	<div class="logo">
		<a href="/" aria-label="logotype">
			<img :src="'/images/logo.png'" alt="logotype" />
			<span>CACG</span>
		</a>
	</div>
</template>
<script>
	export default {
		name: "Logotype",
	};
</script>
<style lang="scss" scoped>
	.logo {
		display: inline-block;
	}
	.logo a {
		display: inline-block;
		font-family: $font-din-pro;
		font-weight: 500;
		font-style: normal;
		font-size: 1.2rem;
		line-height: 1;
		letter-spacing: 0.054rem;
		color: #fff;
		cursor: pointer;
	}
	.logo a:link,
	.logo a:visited,
	.logo a:active,
	.logo a:hover {
		color: #fff;
	}
	.logo img {
		width: 2.5rem;
		height: auto;
		vertical-align: middle;
		margin-right: 0.8rem;
	}
</style>