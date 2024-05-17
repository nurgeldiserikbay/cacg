<template>
	<section id="media">
		<AnimFigure
			:src="'./images/figure-2.png'"
			x="60"
			y="2"
			scale="1.2"
		/>
		<AnimFigure
			:src="'./images/figure-3.png'"
			x="2"
			y="40"
			scale="1.2"
		/>
		<AnimFigure
			:src="'./images/figure-4.png'"
			x="88"
			y="60"
			scale="1.2"
		/>
		<h1 class="gs_reveal">{{ _getDictionary.mediaTitle }}</h1>
		<div
			class="image-slider-parent gs_reveal"
			ref="imgSlider"
			:data-gsapduration="0.3"
		>
			<ImageSliderRight v-if="slides" :slides="slides" />
		</div>
		<div class="tags-wrapper">
			<div>
				<button
					class="tags gs_reveal"
					:class="{ active: !currentTags.length }"
					@click="filterTag()"
				>
					{{ _getDictionary.btnAll }}
				</button>
			</div>
			<div v-for="(tag, ind) in tags" :key="tag.slug">
				<button
					v-if="tag.total_posts"
					class="tags gs_reveal"
					:data-gsapduration="0.1 * ind"
					:class="{
						active: currentTags.find((elem) => elem === tag.slug),
					}"
					@click="filterTag(tag.slug)"
				>
					{{ tag[_getLang] }}
				</button>
			</div>
		</div>
		<div class="news_wrapper">
			<div class="news_list">
				<div
					class="news gs_reveal"
					v-for="elem in getNews"
					:key="elem.slug"
					data-gsapduration="0.3"
					@click="linkTo(elem.slug)"
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
							<span class="news_date">{{ elem.published_arr[_getLang] }}</span>
							<h4 class="news_title">
								{{ ellipsis(elem.titles[_getLang], 5) }}
							</h4>
						</div>
						<div
							class="news_text_data"
							v-html="ellipsis(elem.descriptions[_getLang], 25)"
						></div>
						<div class="news_text_bottom">
							<button>
								{{ _getDictionary.btnReadMore }}
								<img
									:src="'./images/arrow-to-right.svg'"
									alt=""
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Pagination
				v-if="filteredPosts.length > max"
				class="gs_reveal"
				:length="Math.ceil(filteredPosts.length / max)"
				:totalVisible="7"
				:value="currentPage"
				v-model="currentPage"
				@click="changePage"
			/>
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
		async asyncData({ query, $http }) {
			const dataTags = await $http.$get(
				`https://cacg.kz/api/public/api/admin/tags`
			);
			const tags = dataTags.data;
			let selectedTags = query["tags[]"] || [];
			selectedTags =
				typeof selectedTags === "string" ? [selectedTags] : selectedTags;
			let page = query.page ? Number(query.page) : 1;
			let dataPost = await $http.$get(
				`https://cacg.kz/api/public/api/admin/posts`
			);
			let posts = dataPost.data;
			return { tags, posts, page, selectedTags };
		},
		data() {
			return {
				currentPage: 1,
				currentTags: [],
				max: 6,
				slides: null,
			};
		},
		computed: {
			...mapGetters(["_getDictionary", "_getLang", "_getBaseUrl"]),
			filteredPosts() {
				if (this.currentTags.length === 0) return this.posts;
				return this.posts.filter((post) => {
					return post.tags.find(
						(tag) => this.currentTags.indexOf(tag.slug) !== -1
					);
				});
			},
			getNews() {
				let c = (this.currentPage - 1) * this.max;
				return this.filteredPosts.slice(c, c + this.max);
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
			getPopPosts() {
				let posts = shuffle([...this.posts]);
				posts = posts.slice(0, Math.min(4, posts.length));
				return posts.map((elem, index) => {
					return {
						id: String(index),
						title: this.ellipsis(elem.titles[this._getLang], 5),
						author: elem.author.name,
						text: [this.ellipsis(elem.descriptions[this._getLang], 20)],
						img: encodeURI(
							"https://cacg.kz/api/public/storage/posts/captions/" + elem.caption
						),
						slug: elem.slug,
					};
				});
			},
			filterTag(slug) {
				this.currentPage = 1;
				if (!slug) this.currentTags = [];
				else {
					if (this.currentTags.find((elem) => elem === slug)) {
						this.currentTags = this.currentTags.filter((elem) => elem !== slug);
					} else {
						this.currentTags.push(slug);
					}
				}
				this.$router.push({
					path: "/media",
					query: {
						page: 1,
						"tags[]": [...this.currentTags],
					},
				});
			},
			changePage() {
				window.scrollTo(
					0,
					this.$refs.imgSlider.offsetTop + this.$refs.imgSlider.offsetHeight + 100
				);
				this.$router.push({
					path: "/media",
					query: {
						page: this.currentPage,
						"tags[]": [...this.currentTags],
					},
				});
			},
		},
		mounted() {
			if (this.page) {
				this.currentPage = this.page;
			}
			if (this.selectedTags) this.currentTags = this.selectedTags;
			this.slides = this.getPopPosts();
		},
	};
</script>
<style lang="scss" scoped>
	#media {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 11.6rem 16% 20rem;
	}
	.image-slider-parent {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 9rem;
		width: 100%;
	}
	.tags-wrapper {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		margin-bottom: 3.35rem;
	}
	.tags {
		padding: 0.5rem 0.8rem;
		font-size: 1rem;
		cursor: pointer;
		color: #fff;
		background-color: rgba(255, 255, 255, 0.05);
		margin: 0 0.75rem 1rem;
		-webkit-text-stroke: 0.5px #000;
		transition: 0.3s linear;
		font-weight: 300;
	}
	.tags:hover,
	.tags.active {
		background-color: #001aff;
		-webkit-text-stroke: unset;
	}
	.news_wrapper {
		width: 100%;
	}
	.news_list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;
		flex-wrap: wrap;
	}
	h4 {
		font-family: $font-micra;
		text-transform: uppercase;
		font-size: 1rem;
	}
	.news {
		min-width: 46%;
		max-width: 46%;
		margin-bottom: 3.85rem;
		flex-grow: 1;
		flex-basis: 297px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		cursor: pointer;
	}
	.img {
		width: 100%;
		max-height: 17.6rem;
		margin-bottom: 1rem;
	}
	.img img {
		display: block;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		object-fit: cover;
		box-shadow: 0 0 3.2965rem 0.397rem $box-shadow-color;
	}
	.news_text_header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
	.news_text_header h4 {
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.news_date {
		margin-bottom: 0.4rem;
	}
	.news_date,
	.news_text_data {
		-webkit-text-stroke: 0.5px #000;
		line-height: 1.5;
	}
	.news_text_data {
		height: 7.5rem;
		overflow: hidden;
		font-weight: light;
		text-overflow: ellipsis;
		margin-bottom: 1rem;
	}
	.news_text_bottom {
		opacity: 0;
		text-align: right;
		transition: all 0.3s;
	}
	.news:hover .news_text_bottom {
		opacity: 1;
	}
	.news_text_bottom button {
		font-size: 1.2rem;
		line-height: 1.32rem;
		color: #fff;
		-webkit-text-stroke: 1px #000;
		cursor: pointer;
	}
	.news_text_bottom button img {
		vertical-align: middle;
		width: 3rem;
		margin-left: 1rem;
	}
	@media (max-width: 1650px) {
		#media {
			padding: 11.6rem 12% 16rem;
		}
	}
	@media (max-width: 1199.98px) {
		#media {
			padding: 11.6rem 10% 14rem;
		}
	}
	@media (max-width: 991.98px) {
		#media {
			padding: 11.6rem 10% 14rem;
		}
	}
	@media (max-width: 767.98px) {
		#media {
			padding: 11.6rem 7% 10rem;
		}
		.news_wrapper {
			width: 80%;
		}
		.large_p {
			text-align: center;
			mask-position: 4rem;
			padding: 0 1rem;
		}
		.news_list {
			justify-content: center;
		}
		.news {
			max-width: 100%;
		}
	}
	@media (max-width: 575.98px) {
		#media {
			padding: 11.6rem 0% 10rem;
		}
		.tags,
		.news_date,
		.news_text_data,
		.news_text_bottom button {
			-webkit-text-stroke: unset !important;
		}
	}
</style>