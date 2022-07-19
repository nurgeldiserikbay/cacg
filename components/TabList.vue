<template>
	<div class="tab-list-component">
		<div
			class="tab-item-wrapper gs_reveal"
			v-for="(tab, ind) in data"
			:key="ind"
			:data-gsapduration="0.5 * ind"
		>
			<div class="tab-item" :class="{ active: active[ind] }">
				<div class="tab-item-header" @click="toggle(ind)">
					<h3 class="tab-item-title">{{ tab.title }}</h3>
				</div>
				<transition
					name="expand"
					@enter="enter"
					@after-enter="afterEnter"
					@leave="leave"
				>
					<div class="tab-item-content" v-show="active[ind]">
						<div
							v-for="(p, i) in tab.text"
							:key="i"
							v-html="p"
							:class="[tab.type]"
						></div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from "vue";
	export default {
		name: "TabList",
		props: ["data"],
		data() {
			return {
				active: [false, false, false, false],
			};
		},
		methods: {
			toggle(ind) {
				Vue.set(this.active, ind, !this.active[ind]);
			},
			enter(element) {
				element.style.height = "auto";
				const height = getComputedStyle(element).height;
				element.style.height = 0;
				requestAnimationFrame(() => {
					element.style.height = height;
					element.style.transform = "translateY(-0.6rem)";
				});
			},
			afterEnter(element) {
				element.style.height = "auto";
			},
			leave(element) {
				const height = getComputedStyle(element).height;
				element.style.height = height;
				element.style.transform = "";
				requestAnimationFrame(() => {
					element.style.height = 0;
				});
			},
		},
		mounted() {},
	};
</script>
<style lang="scss">
	.tab-list-component {
		width: 100%;
	}
	.tab-item-wrapper {
		width: 100%;
		margin-bottom: 1.5rem;
	}
	.tab-list-component .tab-item {
		width: 100%;
		box-shadow: 0 0 83px 10px $box-shadow-color;
		padding-bottom: 0;
		box-sizing: border-box;
		transition: all 0.5s ease-in-out;
	}
	.tab-list-component .tab-item.active {
		transition: all 0.5s/0.1s ease-in-out;
		padding-bottom: 1rem;
	}
	.tab-list-component .tab-item-header {
		padding: 1.6rem 5rem 1.6rem 2.5rem;
		position: relative;
		cursor: pointer;
	}
	.tab-list-component .tab-item-header h3 {
		line-height: 1;
	}
	.tab-list-component .tab-item-header:before,
	.tab-list-component .tab-item-header:after {
		content: "";
		position: absolute;
		background-color: #fff;
		width: 1.35rem;
		height: 1.74px;
		right: 3rem;
		top: 50%;
		transform-origin: center;
		transform: rotateZ(0deg);
		transition: 0.3s ease-in-out;
	}
	.tab-list-component .active .tab-item-header:before {
		transform: rotateZ(45deg);
	}
	.tab-list-component .tab-item-header:after {
		transform: rotateZ(90deg);
	}
	.tab-list-component .active .tab-item-header:after {
		transform: rotateZ(135deg);
	}
	.tab-list-component .tab-item-content {
		z-index: 5;
		box-sizing: border-box;
		max-width: 100%;
		padding: 0 2rem 0 2.5rem;
		padding-right: 7.145rem;
	}
	.tab-list-component .tab-item-content .anim-wrap {
		transition: all 0.3s ease-in-out;
	}
	.tab-list-component .tab-item-content p {
		margin: 0;
		margin-bottom: 0.5rem;
	}
	.tab-list-component .tab-item-content div:last-child p:last-child {
		margin-bottom: 0;
	}
	.tab-list-component .expand-enter-active {
		transition: all 0.5s ease-in-out;
		overflow: hidden;
	}
	.tab-list-component .expand-leave-active {
		transition: all 0.5s ease-in-out;
		transition-delay: 0.2s;
		overflow: hidden;
	}
	.tab-list-component .expand-enter,
	.tab-list-component .expand-leave-to {
		height: 0;
	}
	.tab-list-component h3 {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 400;
		letter-spacing: 0.036rem;
	}
	.tab-list-component .vacancies {
		font-family: $font-din-pro;
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.15rem;
		margin-bottom: 2rem;
		font-weight: 300;
		-webkit-text-stroke: 0.5px #000;
	}
	.tab-list-component .vacancies li {
		position: relative;
		padding-left: 1rem;
	}
	.tab-list-component .vacancies li:before {
		content: "";
		position: absolute;
		left: 0;
		top: 0.5rem;
		width: 0.5rem;
		height: 0.5rem;
		transform-origin: center;
		transform: rotateZ(45deg);
		background: linear-gradient(45deg, #fff, #0a2bda, #4098ff);
	}
	@media (max-width: 1199.98px) {
		.tab-list-component .tab-item-content {
			padding-right: 8rem;
		}
	}
	@media (max-width: 991.98px) {
		.tab-list-component .tab-item-content {
			padding-right: 5rem;
		}
	}
	@media (max-width: 767.98px) {
		.tab-list-component .tab-item-content {
			padding-right: 2rem;
		}
	}
</style>