<template>
	<div class="overflow-wrapper" ref="wrapper">
		<div
			class="scroll_line"
			:class="{ active: active, focus: focus }"
			@mousedown="mouseDown"
		>
			<span class="scroller" ref="scroller"></span>
		</div>
		<div
			class="scroller_container"
			@wheel="move_scrollAter"
			ref="scrollerContainer"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	export default {
		name: "Overflow",
		data() {
			return {
				active: false,
				focus: false,
				scroll: 0,
				animate: false,
			};
		},
		computed: {
			...mapState(["_scrollAt", "_overflowInit"]),
		},
		watch: {
			scroll(val) {
				this._set_scroll_top(val);
			},
			_scrollAt(val) {
				if (val === null) return;
				this.changeScroll(val);
			},
			_overflowInit() {
				this.init();
			},
		},
		methods: {
			...mapActions(["_set_scroll_top"]),
			init() {
				let container = this.$refs.scrollerContainer;
				let wrapper = this.$refs.wrapper;
				this.active = container.clientHeight > wrapper.clientHeight;
				this.$refs.scroller.style.height =
					Math.floor(
						(wrapper.clientHeight * wrapper.clientHeight) / container.clientHeight
					) + "px";
			},
			changeScroll(val) {
				let scroller = this.$refs.scroller;
				let scrollerContainer = this.$refs.scrollerContainer;
				let wrapper = this.$refs.wrapper;
				let scroll = this.scroll + val;
				if (scroll < 0) {
					this.scroll = 0;
					scrollerContainer.style.top = "0px";
				} else if (
					scroll >
					scrollerContainer.clientHeight - wrapper.clientHeight
				) {
					this.scroll = scrollerContainer.clientHeight - wrapper.clientHeight;
					scrollerContainer.style.top =
						-(scrollerContainer.clientHeight - wrapper.clientHeight) + "px";
				} else {
					this.scroll = scroll;
					scrollerContainer.style.top = -scroll + "px";
				}
				scroller.style.top =
					Math.floor(
						(this.scroll * wrapper.clientHeight) / scrollerContainer.clientHeight
					) + "px";

				this.animate = true;
				setTimeout(() => {
					this.animate = false;
				}, 200);
			},
			move_scrollAter(event) {
				if (this.animate) return;
				let scroller = this.$refs.scroller;
				let scrollerContainer = this.$refs.scrollerContainer;
				let wrapper = this.$refs.wrapper;
				let step = Math.sign(event.deltaY) * 200;
				if (this.scroll + step < 0) {
					this.scroll = 0;
					scrollerContainer.style.top = "0px";
				} else if (
					this.scroll + step >
					scrollerContainer.clientHeight - wrapper.clientHeight
				) {
					this.scroll = scrollerContainer.clientHeight - wrapper.clientHeight;
					scrollerContainer.style.top =
						-(scrollerContainer.clientHeight - wrapper.clientHeight) + "px";
				} else {
					this.scroll += step;
					scrollerContainer.style.top = -this.scroll + "px";
				}
				scroller.style.top =
					Math.floor(
						(this.scroll * wrapper.clientHeight) / scrollerContainer.clientHeight
					) + "px";

				this.animate = true;
				setTimeout(() => {
					this.animate = false;
				}, 200);
			},
			mouseDown(event) {
				event.preventDefault();
				event.stopPropagation();
				let scroller = this.$refs.scroller,
					scrollerContainer = this.$refs.scrollerContainer,
					scrollerParentCoords = scroller.parentNode.getBoundingClientRect(),
					scrollerCoords = scroller.getBoundingClientRect();

				let $this = this;
				this.animate = true;
				document.addEventListener(
					"mouseup",
					() => {
						this.animate = false;
					},
					{ once: true }
				);
				if (event.target.classList.contains("scroller")) {
					let shiftY =
						event.clientY - scrollerCoords.top + scrollerParentCoords.top;
					let top = 0;
					this.focus = true;

					function scroll(e) {
						e.preventDefault();
						e.stopPropagation(true);
						if (
							e.clientX > scrollerCoords.left - 100 &&
							e.clientX < scrollerCoords.left + 100 &&
							e.clientY > scrollerParentCoords.top
						) {
							top = e.clientY - shiftY;

							if (
								top > 0 &&
								top + scrollerCoords.height < scrollerParentCoords.height
							) {
								scroller.style.top = top + "px";
								$this.scroll =
									(scrollerContainer.clientHeight / scrollerParentCoords.height) *
									top;
								scrollerContainer.style.top = -$this.scroll + "px";
							}
						}
					}

					document.addEventListener("mousemove", scroll);
					document.addEventListener("mouseup", deleteScroll);

					function deleteScroll() {
						$this.focus = false;
						document.removeEventListener("mousemove", scroll);
						document.removeEventListener("mouseup", deleteScroll);
					}
				} else {
					let step = 10,
						start = event.clientY - scrollerParentCoords.top,
						top = scrollerCoords.top - scrollerParentCoords.top,
						dir = start > top ? 1 : -1;

					let id = requestAnimationFrame(scroll);
					function scroll() {
						if (start < top || start > top + scrollerCoords.height) {
							top += step * dir;
							if (
								top > 0 &&
								top + scrollerCoords.height < scrollerParentCoords.height
							) {
								scroller.style.top = top + "px";
								$this.scroll =
									(scrollerContainer.clientHeight / scrollerParentCoords.height) *
									top;
								scrollerContainer.style.top = -$this.scroll + "px";
								id = requestAnimationFrame(scroll);
							}
						}
					}
				}
			},
		},
		updated() {
			this.init();
		},
		mounted() {
			window.addEventListener("resize", () => {
				this.init();
			});
			setTimeout(() => {
				this.init();
			}, 100);
		},
	};
</script>

<style  lang="scss" scoped>
	.overflow-wrapper {
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	.scroller_container {
		width: 100%;
		position: relative;
		top: 0px;
		transition: all 0.2s ease-in-out;
	}
	.scroll_line {
		position: fixed;
		top: 0;
		right: 0;
		width: 5px;
		height: 100%;
		background: #e0e0e0;
		display: none;
		overflow: hidden;
		cursor: pointer;
		z-index: 200;
	}
	.scroll_line.active {
		display: block;
	}
	.scroll_line.focus,
	.scroll_line:hover {
		width: 10px;
	}
	.scroller {
		position: absolute;
		display: block;
		width: 100%;
		background: #020202;
		transition: all 0.2s linear;
	}
	@media (max-width: 575.98px) {
		.scroll_line.active {
			display: none;
		}
	}
</style>