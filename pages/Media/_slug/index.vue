<template>
	<section id="media-detail" v-if="post">
		<div
			class="banner"
			:style="{
				backgroundImage:
					'url(' +
					getURI(
						'https://cacg.kz/api/public/storage/posts/captions/' + post.caption
					) +
					')',
			}"
		>
			<div class="banner-top">
				<h3 class="gs_reveal">{{ post.titles[_getLang] }}</h3>
				<p class="author gs_reveal" data-gsapduration="0.2">
					{{ post.author.name }}
				</p>
				<p class="position gs_reveal" data-gsapduration="0.4">
					{{ post.author.name }}
				</p>
			</div>
			<div class="cacg-banner-bottom">
				<p class="date gs_reveal" data-gsapduration="0.6">
					{{ post.published_arr[_getLang] }}
				</p>
				<div class="tags">
					<button
						class="main-btn gs_reveal"
						v-for="(tag, ind) in post.tags"
						:key="tag.slug"
						:data-gsapduration="0.2 * ind + 0.6"
						@click="filterTag(tag.slug)"
					>
						{{ tag[_getLang] }}
					</button>
				</div>
			</div>
		</div>
		<div class="content_wrapper">
			<AnimFigure
				:src="'/images/figure-2.png'"
				x="3"
				y="5"
				scale="1.2"
			/>
			<AnimFigure
				:src="'/images/figure-2.png'"
				x="88"
				y="40"
				scale="1.2"
			/>
			<AnimFigure
				:src="'/images/figure-1.png'"
				x="3"
				y="55"
				scale="1.2"
			/>
			<AnimFigure
				:src="'/images/figure-3.png'"
				x="88"
				y="65"
				scale="1.2"
			/>
			<AnimFigure
				:src="'/images/figure-5.png'"
				x="3"
				y="75"
				scale="1.2"
			/>
			<AnimFigure
				:src="'/images/figure-1.png'"
				x="85"
				y="86"
				scale="1.2"
			/>
			<div class="content">
				<div
					class="gs_reveal content-data"
					v-html="post.bodies[_getLang]"
				></div>
				<div class="links" ref="links">
					<span class="border"></span>
					<div class="links-items" ref="linksItems">
						<div v-for="(elem, ind) in post.sources" :key="ind">
							<div class="link_elem gs_reveal" :data-gsapduration="0.2 * ind">
								<h4>{{ elem[_getLang] }}</h4>
								<p>
									<a :href="elem.url">{{ elem.url }}</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="news_wrapper" v-if="posts.length">
			<AnimFigure
				:src="'/images/figure-2.png'"
				x="36"
				y="70"
				scale="1.2"
			/>
			<div class="news_content">
				<h4 class="gs_reveal">{{ _getDictionary.mediaSimilarArticles }}</h4>
				<div class="news_list">
					<div
						class="news gs_reveal"
						v-for="(elem, ind) in posts"
						:key="elem.id"
						@click="linkTo(elem.slug)"
						:data-gsapduration="0.2 * ind"
					>
						<div class="img">
							<img
								:src="
									'https://cacg.kz/api/public/storage/posts/captions/' +
									elem.caption
								"
								alt=""
							/>
						</div>
						<div class="news_text">
							<div class="news_text_header">
								<h4 class="news_title">
									{{ ellipsis(elem.titles[_getLang], 6) }}
								</h4>
								<span class="news_date">{{ elem.published_arr[_getLang] }}</span>
							</div>
							<div
								class="news_text_data"
								v-html="ellipsis(elem.descriptions[_getLang], 20)"
							></div>
							<div class="news_text_bottom">
								<button>
									{{ _getDictionary.btnReadMore }}
									<img
										:src="'/images/arrow-to-right.svg'"
										alt=""
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import { mapGetters } from "vuex";
	import scrolltrigger from "~/mixins/scrolltrigger.js";

	function shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}

	export default {
		scrollToTop: true,
		mixins: [scrolltrigger],
		async asyncData({ params, $http }) {
			let data = await $http.$get(
				`https://cacg.kz/api/public/api/admin/posts/${params.slug}`
			);
			let post = data.post;
			post.body.replace(/posts\/images\/.*?\.png/g, (imagePath) => {
				return "https://cacg.kz/api/public/storage/posts/captions/" + imagePath;
			});
			let tags = post.tags.map((elem) => elem.slug);
			let dataPost = await $http.$get(
				`https://cacg.kz/api/public/api/admin/posts`
			);
			let posts = dataPost.data;
			posts = shuffle(
				posts.filter((elem) => {
					return (
						elem.tags.find((tag) => tags.indexOf(tag.slug) !== -1) &&
						elem.slug !== params.slug
					);
				})
			).slice(0, 3);
			return { post, posts };
		},
		data() {
			return {
				linksHeight: 0,
				start: null,
			};
		},
		computed: {
			...mapGetters([
				"_getScrollTop",
				"_getDictionary",
				"_getLang",
				"_getBaseUrl",
			]),
		},
		watch: {
			_getScrollTop(val) {
				if (this.linksHeight === null) return;
				let s = window.innerHeight - this.getTop();
				if (s > 100) {
					if (!this.start) {
						this.start = val;
					}
					if (val - this.start < this.linksHeight) {
						this.$refs.linksItems.style.height = val - this.start + "px";
					} else {
						this.$refs.linksItems.style.height = this.linksHeight + "px";
						this.linksHeight = null;
					}
				}
			},
		},
		methods: {
			ellipsis(text, max) {
				let arr = text.split(" ");
				return arr.length > max ? arr.slice(0, max).join(" ") + "..." : text;
			},
			linkTo(link) {
				this.$router.push("/media/" + link);
			},
			getURI(src) {
				return encodeURI(src);
			},
			getTop() {
				return this.$refs.linksItems.getBoundingClientRect().top;
			},
			filterTag(slug) {
				this.$router.push({
					path: "/media",
					query: {
						page: 1,
						"tags[]": [slug],
					},
				});
			},
			enter(element) {
				const width = getComputedStyle(element).width;

				element.style.width = width;
				element.style.position = "absolute";
				element.style.visibility = "hidden";
				element.style.height = "auto";

				const height = getComputedStyle(element).height;

				element.style.width = null;
				element.style.position = null;
				element.style.visibility = null;
				element.style.height = 0;

				getComputedStyle(element).height;

				requestAnimationFrame(() => {
					element.style.height = height;
				});
			},
			afterEnter(element) {
				element.style.height = "auto";
			},
			leave(element) {
				const height = getComputedStyle(element).height;

				element.style.height = height;

				getComputedStyle(element).height;

				requestAnimationFrame(() => {
					element.style.height = 0;
				});
			},
		},
		mounted() {
			this.$nextTick(() => {
				this.linksHeight = this.$refs.linksItems.getBoundingClientRect().height;
				this.$refs.linksItems.style.height = "0px";
			});
		},
	};
</script>
<style lang="scss">
	.content-data img {
		width: 100%;
		height: auto;
		margin-bottom: 9rem;
		margin-top: 3.85rem;
		box-shadow: 0 4px 2.65rem 0.3rem $box-shadow-color;
	}
	.content-data h3,
	.content-data h4 {
		font-size: 1.2rem;
		margin-top: 3rem;
		margin-bottom: 2.5rem;
	}
</style>

<style lang="scss" scoped>
	.banner {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 8.7rem 2rem 7.1rem;
		box-sizing: border-box;
		height: 40rem;
		background-position: center;
		background-size: cover;
		background-color: rgba(0, 0, 0, 0.3);
		background-blend-mode: darken, luminosity;
		text-align: center;
		margin-bottom: 9rem;
	}
	.banner h3 {
		margin-bottom: 2rem;
		line-height: 1.5;
	}
	.author {
		font-size: 1.2rem;
		font-weight: 400;
		line-height: 1.5;
		margin: 0;
		margin-bottom: 1rem;
		text-transform: uppercase;
		-webkit-text-stroke: unset;
	}
	.position {
		-webkit-text-stroke: unset;
		margin: 0;
	}
	.date {
		-webkit-text-stroke: unset;
		margin: 0;
		margin-bottom: 2.5rem;
		text-transform: uppercase;
	}
	.tags {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.main-btn {
		width: auto;
		height: auto;
		font-family: $font-montserrat;
		text-transform: capitalize;
		padding: 0.5rem 0.8rem;
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.5;
		letter-spacing: 0.15rem;
		margin: 0 0.75rem 0.8rem;
	}
	.content_wrapper {
		position: relative;
	}
	.content {
		width: 100%;
		box-sizing: border-box;
		padding: 0 1rem;
		max-width: 43.2rem;
		margin: 0 auto 4rem;
		line-height: 2;
		letter-spacing: 0.12rem;
		word-wrap: break-word;
	}
	.content p {
		margin: 0;
		margin-bottom: 2rem;
	}
	.content h4 {
		margin-top: 9rem;
		font-family: $font-micra;
	}
	.links {
		position: relative;
		padding-left: 3rem;
		margin: 4rem 0;
		font-size: 0.9rem;
	}
	.links-items {
		overflow: hidden;
	}
	.links-items div:first-child .link_elem {
		padding: 4.15rem 0 1.3rem;
	}
	.links-items div:last-child .link_elem {
		padding: 1.3rem 0 4.15rem;
	}
	.links h4 {
		margin: 0 0 0.5rem;
	}
	.links p {
		margin: 0;
	}
	.links a,
	.links a:hover,
	.links a:visited {
		color: inherit;
	}
	.border {
		position: absolute;
		left: 0;
		top: 0;
		width: 1px;
		height: 100%;
		background: linear-gradient(to bottom, transparent, #fff, transparent);
	}
	.border:before,
	.border:after {
		content: "";
		position: absolute;
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		left: 50%;
		top: 0;
		transform: translate(-50%, -50%);
		box-shadow: 0 0 13px 5px $box-shadow-color;
		background: linear-gradient(130deg, #0a2bda, #4098ff);
	}
	.border:after {
		transform: translate(-50%, -50%);
		top: 100%;
	}
	.link_elem {
		padding: 1.3rem 0 2.45rem;
	}
	.link_elem h3 {
		font-weight: 300;
		margin-bottom: 0.5rem;
	}
	.expand-enter-active,
	.expand-leave-active {
		transition: height 1s cubic-bezier(0.3, 0.68, 0.53, 1.54);
		overflow: hidden;
	}
	.expand-enter,
	.expand-leave-to {
		height: 0;
	}
	.news_wrapper {
		position: relative;
	}
	.news_content {
		width: 100%;
		max-width: 60rem;
		box-sizing: border-box;
		padding: 2rem 1rem 10rem;
		margin: 0 auto;
	}
	.news_wrapper h4 {
		margin: 0;
		margin-bottom: 2.5rem;
	}
	.news_list {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: stretch;
		flex-wrap: wrap;
	}
	.news {
		max-width: 30%;
		margin-right: 2.5%;
		margin-bottom: 3.85rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
	}
	.img {
		width: 100%;
		max-height: 11.3rem;
		margin-bottom: 1rem;
	}
	.img img {
		display: block;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		object-fit: contain;
		box-shadow: 0 0 3.2965rem 0.397rem $box-shadow-color;
	}
	.news_text_header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 0.5rem;
	}
	.news_text_header h4 {
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 1rem;
	}
	.news_date,
	.news_text_data {
		-webkit-text-stroke: 0.5px #000;
		line-height: 1.1rem;
		font-size: 0.6rem;
	}
	.news_text_data {
		max-height: 4.4rem;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: 1rem;
	}
	.news_text_bottom {
		text-align: right;
	}
	.news_text_bottom button {
		font-size: 0.9rem;
		line-height: 1.32rem;
		color: #fff;
		-webkit-text-stroke: 1px #000;
		cursor: pointer;
	}
	.news_text_bottom button img {
		vertical-align: middle;
		width: 2rem;
		margin-left: 1rem;
	}
	@media (max-width: 991.98px) {
		.banner {
			margin-bottom: 4rem;
		}
		.content {
			padding: 0 2rem;
			margin-bottom: 16rem;
		}
		.content h4 {
			margin-top: 4rem;
			text-align: center;
		}
		.link_elem h4 {
			text-align: left;
		}
		.news_wrapper {
			display: none;
		}
	}
	@media (max-width: 480px) {
		.content h4 {
			margin-top: 5rem;
		}
		.content {
			padding: 0 2rem;
		}
	}
</style>