<template>
	<footer class="footer">
		<AnimFigure :src="'/images/figure-6.png'" x="70" y="-20" scale="1.2" />
		<div class="footer-top">
			<Logotype />
		</div>
		<div class="footer-content">
			<div class="contacts">
				<address>
					<div class="tel">
						<span class="legend">{{ _getDictionary.footerDataLegend }}</span>
						<div>
							<a href="tel:+77074564573"><img :src="'/images/tel.png'" alt="" />+ 7 707 456 45
								73</a>
							<a class="mob-email" href="mailto:info@cacg.kz">
								<span>-</span> info@cacg.kz</a>
						</div>
					</div>
					<div class="address">
						<span class="legend">{{ _getDictionary.footerAddressLegend }}</span>
						<a href="https://goo.gl/maps/KSyRGVmy22J7wgg28" target="_blank"><img :src="'/images/place.png'"
								alt="" /></a>{{ _getDictionary.address }}
					</div>
				</address>
				<div class="socials">
					<a href="https://web.whatsapp.com/send?phone=+77074564573&text&app_absent=0" target="_blank"
						class="whatsapp"></a>
					<a href="https://t.me/cacg" class="telegram" target="_blank"></a>
					<a href="#s" class="instagram" target="_blank"></a>
				</div>
			</div>
			<ul class="footer-menu">
				<li>
					<NuxtLink to="/compony">{{
							_getDictionary.navMenuItemCompany
					}}</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/team">{{ _getDictionary.navMenuItemTeam }}</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/demo">{{ _getDictionary.navMenuItemDemo }}</NuxtLink>
				</li>
			</ul>
			<div class="email-card">
				<div>
					<span>{{ _getDictionary.footerEmailCaption }}</span>
					<a href="mailto:info@cacg.kz"><img :src="'/images/email-arrow.png'" alt="" />
						info@cacg.kz</a>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<p class="copyright">{{ _getDictionary.footerCopyright }}</p>
			<p class="verify" v-html="_getDictionary.footerVerify"></p>
		</div>
	</footer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	name: "Footer",
	computed: {
		...mapGetters(["_getDictionary"]),
	},
};
</script>
<style  lang="scss" scoped>
.footer {
	position: relative;
	padding: 4.5rem 12.3% 2rem;
	display: flexbox;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	box-shadow: 0 0 83px 10px $box-shadow-color;
}

.footer-top {
	margin-bottom: 3rem;
}

.footer-content {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	margin-bottom: 1.7rem;
}

.contacts {
	width: 33%;
	display: flex;
	flex-direction: column;
}

address {
	display: flex;
	flex-direction: column;
	font-style: normal;
}

address img {
	vertical-align: middle;
	margin-right: 1rem;
}

.legend {
	display: none;
}

.tel {
	font-size: 1rem;
	font-weight: normal;
	margin-bottom: 1.6rem;
	color: #fff;
}

.tel a {
	color: #fff;
}

.mob-email {
	display: none;
}

.socials {
	margin-top: 1.5rem;
}

.socials>a {
	display: inline-block;
	width: 2.6rem;
	height: 2.6rem;
	border-radius: 50%;
	cursor: pointer;
	margin-right: 0.65rem;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}

.socials>a:nth-child(1) {
	background-image: url("/images/whatsapp.png");
}

.socials>a:nth-child(2) {
	background-image: url("/images/telegram.png");
}

.socials>a:nth-child(3) {
	background-image: url("/images/instagram.png");
}

.footer-menu {
	width: 33%;
	list-style: none;
	padding: 0;
	margin: 0;
	margin-top: -1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
}

.footer-menu li {
	margin-bottom: 2.5rem;
}

.footer-menu a {
	font-size: 1rem;
	font-weight: 300;
	color: #fff;
}

.footer-menu li:last-child {
	margin-bottom: 0;
}

.email-card {
	width: 33%;
	display: flex;
	justify-content: flex-end;
}

.email-card span {
	display: block;
	margin-bottom: 0.5rem;
}

.email-card a {
	font-size: 1.6rem;
	font-weight: bold;
	color: #fff;
}

.email-card a img {
	width: 0.85rem;
	height: auto;
	vertical-align: middle;
	margin-right: 1rem;
}

.footer-bottom {
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	font-size: 0.9rem;
}

.footer-bottom p {
	width: 33%;
	-webkit-text-stroke: unset;
	letter-spacing: 0.1rem;
}

.verify {
	margin: 0;
	text-align: center;
	margin-left: -0.3rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.copyright {
	margin: 0;
}

@media (max-width: 1599.98px) {
	.footer {
		position: relative;
		padding: 3.1rem 6.5% 1.25rem;
	}
}

@media (max-width: 1199.98px) {
	.footer-menu {
		display: none;
	}

	.contacts {
		width: 45%;
	}

	.email-card {
		width: 45%;
	}

	.footer-bottom {
		justify-content: space-between;
	}

	.footer-bottom p {
		width: 50%;
	}

	.footer-bottom .verify {
		text-align: right;
	}
}

@media (max-width: 991.98px) {
	.copyright {
		text-align: center;
	}
}

@media (max-width: 575.98px) {
	.footer-top {
		display: none;
	}

	.contacts {
		width: 100%;
		align-items: stretch;
		text-align: center;
		letter-spacing: 0.216rem;
	}

	.address {
		position: relative;
		font-size: 1.2rem;
		font-weight: 400;
		order: 1;
		padding-bottom: 2rem;
		margin-bottom: 2rem;
	}

	.socials {
		margin-top: 0;
		position: relative;
		padding-bottom: 2rem;
	}

	.socials:after,
	.address:after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(to right, transparent, #fff, transparent);
	}

	.address img {
		display: none;
	}

	.socials>a {
		width: 3.5rem;
		height: 3.5rem;
	}

	.tel {
		order: 2;
		font-size: 1.2rem;
		font-weight: 500;
	}

	.tel img {
		display: none;
	}

	.mob-email {
		display: inline-block;
		margin-left: 1rem;
	}

	.mob-email span {
		margin-right: 1rem;
	}

	.legend {
		display: block;
		font-size: 1rem;
		line-height: 1.2;
		font-weight: 300;
		margin-bottom: 1rem;
	}

	.email-card {
		display: none;
	}

	.footer-bottom {
		flex-direction: column;
	}

	.footer-bottom p {
		width: 100%;
		text-align: center;
		order: 2;
	}

	.footer-bottom .verify {
		text-align: center;
		order: 1;
		margin-bottom: 1.5rem;
	}
}

@media (max-width: 448px) {
	.mob-email span {
		display: none;
	}
}
</style>