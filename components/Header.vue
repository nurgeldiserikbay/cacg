<template>
	<header>
		<Logotype />
		<div
			class="lang_wrap"
			:class="{ active: langsActive }"
			@click.stop="langsActive = !langsActive"
		>
			<ul class="langs">
				<li
					class="lang"
					v-for="elem in _getLangs"
					:key="elem"
					:class="{ active: elem.toLowerCase() === _getLang }"
				>
					<button @click="langsActive && _set_lang(elem)">{{ elem }}</button>
				</li>
			</ul>
			<button><img :src="'/images/arrow-to-down.svg'" /></button>
		</div>
		<Navbar />
	</header>
</template>
<script>
	import { mapActions, mapGetters } from "vuex";
	export default {
		name: "Header",
		data() {
			return {
				langsActive: false,
			};
		},
		computed: {
			...mapGetters(["_getLang", "_getLangs"]),
		},
		methods: {
			...mapActions(["_set_lang"]),
		},
	};
</script>
<style  lang="scss" scoped>
	header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to bottom, black, transparent);
		height: 5.3rem;
		box-sizing: border-box;
		padding: 4rem;
		z-index: 30;
	}
	.lang_wrap {
		position: absolute;
		top: 4.4rem;
		right: 13.1rem;
		height: 1.5rem;
		z-index: 5;
		background: rgba(15, 15, 16, 0.3);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;
		border-radius: 2px;
	}
	.langs {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		transition: all0 0.5s linear;
		overflow: hidden;
	}
	.lang_wrap.active .langs {
		height: 300%;
	}
	.langs li {
		display: block;
		min-height: 1.5rem;
		order: 2;
	}
	.langs li.active {
		order: 1;
	}
	.langs li button {
		height: 100%;
		padding: 0 0.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: $font-montserrat;
		font-weight: 600;
		text-transform: uppercase;
		font-size: 1.2rem;
		color: white;
		cursor: pointer;
	}
	.lang_wrap > button {
		position: relative;
		height: 100%;
		width: 1.25rem;
		padding: 0 0.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.lang_wrap > button img {
		width: 100%;
		height: auto;
	}
	@media (max-width: 767.98px) {
		header {
			padding: 4.2rem 2rem;
		}
	}
	@media (max-width: 480px) {
		header {
			padding: 5.5rem 1.3rem;
		}
		.lang_wrap {
			top: 6.5rem;
			left: 4rem;
		}
	}
</style>