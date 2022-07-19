<template>
	<div class="error">
		<h1 v-if="error.statusCode === 404">Page not found</h1>
		<h1 v-else>An error occurred</h1>
		<a href="/">{{ _getDictionary.backAgain }}</a>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		props: ["error"],
		layout: "error",
		computed: {
			...mapGetters(["_getDictionary"]),
		},
	};
</script>

<style lang="scss" scoped>
	.error {
		margin: 0 12.3%;
		padding-top: 11.6rem;
		padding-bottom: 25rem;
	}
	.error a {
		color: inherit;
	}
</style>