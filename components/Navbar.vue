<template>
	<nav :class="{ active: navbar }">
		<button id="mobile-nav-button" @click="navbar = true">
			<img src="/images/menu-mobile-icon.png" />
		</button>
		<button id="nav-button" @click="navbar = true">
			{{ _getDictionary.btnMenu }}
			<svg
				width="13"
				height="13"
				viewBox="0 0 13 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.771973 0.95347C0.771973 0.719273 0.961827 0.529419 1.19602 0.529419H4.58843C4.82263 0.529419 5.01248 0.719273 5.01248 0.95347V4.84314H1.19602C0.961826 4.84314 0.771973 4.65329 0.771973 4.41909V0.95347Z"
					fill="white"
				/>
				<path
					d="M0.771973 12.1838C0.771973 12.418 0.961827 12.6078 1.19602 12.6078H4.58843C4.82263 12.6078 5.01248 12.418 5.01248 12.1838V8.29412H1.19602C0.961826 8.29412 0.771973 8.48398 0.771973 8.71817V12.1838Z"
					fill="white"
				/>
				<path
					d="M12.6455 0.95347C12.6455 0.719273 12.4557 0.529419 12.2215 0.529419H8.82905C8.59486 0.529419 8.405 0.719273 8.405 0.95347V4.84314H12.2215C12.4557 4.84314 12.6455 4.65329 12.6455 4.41909V0.95347Z"
					fill="white"
				/>
				<path
					d="M12.6455 12.1838C12.6455 12.418 12.4557 12.6078 12.2215 12.6078H8.82905C8.59486 12.6078 8.405 12.418 8.405 12.1838V8.29412H12.2215C12.4557 8.29412 12.6455 8.48398 12.6455 8.71817V12.1838Z"
					fill="white"
				/>
			</svg>
		</button>
		<div class="navbar">
			<button id="nav-close"></button>
			<SvgLine :x="Math.abs(svg1)" :dir="Math.sign(svg1)" data-name="svg1" />
			<div
				class="submenu-wrap listeners"
				:data-id="'nav-menu-item-1' + randomId"
				:class="{ active: submenu }"
				@mousemove="mousemove"
				@mouseleave="mouseleave"
			>
				<span @click.stop="submenu = !submenu">{{
					_getDictionary.navMenuItemAbout
				}}</span>
				<span class="submenu">
					<a href="/compony">{{ _getDictionary.navMenuItemCompany }}</a>
					<a href="/team">{{ _getDictionary.navMenuItemTeam }}</a>
				</span>
			</div>
			<SvgLine :x="Math.abs(svg2)" :dir="Math.sign(svg2)" data-name="svg2" />
			<div
				class="listeners"
				:data-id="'nav-menu-item-2' + randomId"
				@mousemove="mousemove"
				@mouseleave="mouseleave"
			>
				<a href="/media">{{ _getDictionary.navMenuItemMedia }}</a>
			</div>
			<SvgLine :x="Math.abs(svg3)" :dir="Math.sign(svg3)" data-name="svg3" />
			<div
				class="listeners"
				:data-id="'nav-menu-item-3' + randomId"
				@mousemove="mousemove"
				@mouseleave="mouseleave"
			>
				<a href="/demo">{{ _getDictionary.navMenuItemDemo }}</a>
			</div>
			<SvgLine :x="Math.abs(svg4)" :dir="Math.sign(svg4)" data-name="svg4" />
		</div>
	</nav>
</template>
<script>
	import { mapActions, mapGetters } from "vuex";
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	export default {
		name: "Navbar",
		data() {
			return {
				randomId: null,
				navbar: false,
				submenu: false,
				svg1: 0,
				svg2: 0,
				svg3: 0,
				svg4: 0,
			};
		},
		computed: {
			...mapGetters(["_getDictionary"]),
		},
		watch: {
			navbar(newVal) {
				if (!newVal) {
					this.submenu = false;
					this.langsActive = false;
				}
			},
		},
		methods: {
			...mapActions(["_add_listener"]),
			mousemove(e) {
				let s = e.currentTarget.getBoundingClientRect();
				let x = e.clientX - s.left;
				this[e.currentTarget.previousElementSibling.dataset.name] =
					-1 * Math.floor((x * 100) / s.width);
				this[e.currentTarget.nextElementSibling.dataset.name] = Math.floor(
					(x * 100) / s.width
				);
				e.currentTarget.style.cssText =
					"background: linear-gradient(to right, transparent " +
					Math.floor((x * 100) / s.width - 30) +
					"%, rgba(255, 255, 255, 0.05) " +
					Math.floor((x * 100) / s.width) +
					"%, transparent " +
					Math.floor((x * 100) / s.width + 30) +
					"%);";
			},
			mouseleave(e) {
				this[e.currentTarget.previousElementSibling.dataset.name] = 0;
				this[e.currentTarget.nextElementSibling.dataset.name] = 0;
				e.currentTarget.style.cssText = "";
			},
		},
		beforeMount() {
			this.randomId = getRandomInt(1000000);
		},
		mounted() {
			document.body.addEventListener("click", (e) => {
				if (
					!e.target.closest("#mobile-nav-button") &&
					!e.target.closest("#nav-button")
				) {
					this.navbar = false;
				}
			});
			this.$el.querySelectorAll(".listeners").forEach((listener) => {
				this._add_listener({
					event: "mousemove",
					target: listener.dataset.id,
				});
			});
		},
	};
</script>
<style  lang="scss" scoped>
	nav {
		position: fixed;
		top: 4rem;
		right: 4rem;
		z-index: 5;
	}
	#mobile-nav-button {
		display: none;
	}
	#nav-button {
		width: 7.1rem;
		height: 2.15rem;
		box-sizing: border-box;
		border: 0.085rem solid #001aff;
		font-family: $font-micra;
		font-weight: 400;
		font-style: normal;
		font-size: 0.9rem;
		line-height: 0.925rem;
		color: #fff;
		text-transform: uppercase;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		transition: 0.3s ease-in-out;
		background-color: transparent;
		cursor: pointer;
	}
	#nav-button:hover {
		background-color: #001aff;
	}
	nav.active #nav-button {
		opacity: 0;
	}
	#nav-button svg {
		margin-left: 0.8rem;
		pointer-events: none;
	}
	#nav-button img {
		display: none;
	}
	.navbar {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		max-width: 37rem;
		height: 100vh;
		padding-top: 5rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $box-shadow-color;
		backdrop-filter: blur(4.3rem) brightness(50%);
		transition: 0.3s ease-in-out;
		transform: translateX(100%);
		box-shadow: 0 0 4.15rem 0.5rem $box-shadow-color;
		z-index: 5;
	}
	nav.active .navbar {
		transform: translateX(0%);
	}
	#nav-close {
		position: absolute;
		top: 4.4rem;
		right: 4.4rem;
		width: 1.2rem;
		height: 1.2rem;
		background: url("/images/close.svg");
		background-size: contain;
		z-index: 5;
		transition: 0.7s ease-in-out;
		opacity: 0;
		cursor: pointer;
	}
	nav.active #nav-close {
		opacity: 1;
	}
	.navbar > .listeners {
		position: relative;
		display: block;
		width: 100%;
		height: 5.55rem;
		font-family: "Gotham Pro", Arial, Helvetica, sans-serif;
		font-weight: bold;
		font-size: 1.6rem;
		letter-spacing: 0.1rem;
		color: #fff;
		text-align: center;
		transition: 0.4s ease-in-out;
		line-height: 5.55rem;
		vertical-align: middle;
		transform: translateX(5rem);
	}
	.navbar > .listeners a {
		display: block;
		width: 100%;
		height: 100%;
		font-family: "Gotham Pro", Arial, Helvetica, sans-serif;
		font-weight: bold;
		font-size: 1.6rem;
		color: #fff;
	}
	.navbar svg {
		transform: translateX(-100%);
		opacity: 0;
		transition: 0.4s ease-in-out;
		margin-bottom: -6px;
		margin-top: -6px;
	}
	nav.active svg {
		opacity: 1;
		transform: translateX(0);
	}
	.navbar .listeners:nth-child(5) {
		transition-delay: 0.1s;
	}
	.navbar .listeners:nth-child(7) {
		transition-delay: 0.2s;
	}
	.navbar .listeners:nth-child(9) {
		transition-delay: 0.3s;
	}
	nav.active .listeners {
		transform: translateX(0);
	}
	.submenu-wrap {
		position: relative;
		display: block;
		width: 100%;
		height: 5.55rem;
		font-family: "Gotham Pro", Arial, Helvetica, sans-serif;
		font-weight: bold;
		font-size: 1.6rem;
		letter-spacing: 0.1rem;
		color: #fff;
		text-align: center;
		transition: 0.4s ease-in-out;
		line-height: 5.55rem;
		vertical-align: middle;
		transform: translateX(5rem);
		overflow: hidden;
	}
	nav.active .submenu-wrap {
		transform: translateX(0);
	}
	.submenu-wrap.active {
		height: 11.15rem;
	}
	.submenu-wrap > span:first-child {
		position: relative;
		width: 100%;
		height: 5.55rem;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.submenu-wrap > span:first-child:before,
	.submenu-wrap > span:first-child:after {
		content: "";
		position: absolute;
		background-color: #fff;
		width: 1.35rem;
		height: 1.74px;
		left: 45%;
		margin-top: -0.87px;
		top: 50%;
		transform-origin: center;
		transform: rotateZ(0deg);
		margin-left: -7rem;
		transition: 0.3s ease-in-out;
	}
	.submenu-wrap.active > span:first-child:before {
		transform: rotateZ(45deg);
	}
	.submenu-wrap > span:first-child:after {
		transform: rotateZ(90deg);
	}
	.submenu-wrap.active > span:first-child:after {
		transform: rotateZ(135deg);
	}
	.submenu {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: 5.1rem;
	}
	.navbar > .listeners .submenu > a {
		display: block;
		font-family: "Gotham Pro", Arial, Helvetica, sans-serif;
		color: #fff;
		font-weight: 300;
		font-size: 1rem;
		letter-spacing: 1.92px;
		width: 100%;
		height: 2.5rem;
		text-align: center;
		line-height: 2.5rem;
		-webkit-text-fill-color: white;
		-webkit-text-stroke: 0.5px #000;
		vertical-align: middle;
	}
	@media (max-width: 991.98px) {
		.navbar {
			max-width: 100%;
		}
	}
	@media (max-width: 767.98px) {
		nav {
			top: 4.2rem;
			right: 2rem;
		}
		.submenu > a {
			-webkit-text-fill-color: white;
			-webkit-text-stroke: unset !important;
		}
	}
	@media (max-width: 575.98px) {
		#nav-button {
			display: none;
		}
		#mobile-nav-button {
			display: block;
			width: 2.33rem;
		}
		#mobile-nav-button img {
			width: 100%;
			height: auto;
		}
	}
	@media (max-width: 480px) {
		nav {
			top: 5.5rem;
			right: 1.6rem;
		}
		#nav-close {
			top: 6.5rem;
			right: 4rem;
		}
	}
</style>