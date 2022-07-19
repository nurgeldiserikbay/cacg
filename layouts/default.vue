<template>
	<div id="app">
		<Header />
		<Nuxt />
		<Footer />
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger);
	}
	export default {
		scrollToTop: true,
		data() {
			return {};
		},
		computed: {
			...mapGetters(["_getListeners"]),
			moveListeners() {
				return this._getListeners.filter((listener) => {
					return listener.event === "mousemove";
				});
			},
			swipeListeners() {
				return this._getListeners.filter((listener) => {
					return listener.event === "swipe";
				});
			},
		},
		methods: {
			...mapActions(["_set_scroll_top", "_set_lang"]),
			refresh() {
				let $this = this;
				window.addEventListener("scroll", () => {
					this._set_scroll_top(window.scrollY);
				});
				let startX = 0,
					startY = 0,
					distY = 0,
					startTamp = 0,
					endX = 0,
					endY = 0,
					endTamp = 0;
				document.addEventListener("touchstart", (ev) => {
					startX = ev.changedTouches[0].clientX;
					startY = ev.changedTouches[0].clientY;
					distY = ev.changedTouches[0].clientY;
					startTamp = ev.timeStamp;
				});
				document.addEventListener("touchmove", (ev) => {
					endX = ev.changedTouches[0].clientX;
					endY = ev.changedTouches[0].clientY;
					endTamp = ev.timeStamp;
					$this.moveListeners.forEach((listener) => {
						let target = document.querySelector(
							"[data-id=" + listener.target + "]"
						);
						let rect = target.getBoundingClientRect();
						let over =
							rect.top < endY &&
							rect.top + rect.height > endY &&
							rect.left < endX &&
							rect.left + rect.width > endX;
						if (over) {
							let event = new MouseEvent("mousemove", {
								clientX: endX,
								clientY: endY,
							});
							listener.over = true;
							target.dispatchEvent(event);
						} else if (listener.over) {
							listener.over = false;
							let event = new MouseEvent("mouseleave");
							target.dispatchEvent(event);
						}
					});
				});
				document.addEventListener("touchend", (ev) => {
					if (
						Math.abs(startX - endX) > 20 &&
						Math.abs(startTamp - endTamp) < 150
					) {
						$this.swipeListeners.forEach((listener) => {
							let target = document.querySelector(
								"[data-id='" + listener.target + "']"
							);
							let rect = target.getBoundingClientRect();
							let over =
								rect.top < endY &&
								rect.top + rect.height > endY &&
								rect.left < endX &&
								rect.left + rect.width > endX;
							if (over) {
								let event = new CustomEvent("swipe", {
									detail: Math.sign(startX - endX),
								});
								target.dispatchEvent(event);
							}
						});
					}
				});
			},
		},
		mounted() {
			window.scrollTo(0, 0);
			const lang = localStorage.getItem("lang");
			if (lang) {
				this._set_lang(lang);
			}
			this.refresh();
		},
	};
</script>

<style lang="css">
	#app {
		width: 100%;
		max-width: $max-width;
		margin: 0 auto;
		font-family: $font-montserrat;
		font-weight: 300;
		font-style: normal;
		font-size: 1rem;
		line-height: 1.5rem;
		color: #fff;
	}
</style>
