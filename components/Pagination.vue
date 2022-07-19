<template>
	<ul class="pagination" :class="['pagination', { disabled: disabled }]">
		<li v-for="(item, index) in items" :key="'paging_' + index">
			<span v-if="isNaN(Number(item))" class="pagination-more">{{ item }}</span>
			<button
				v-else
				type="button"
				:class="[{ active: item === value }]"
				@click="setCurrent(item)"
			>
				{{ item }}
			</button>
		</li>
	</ul>
</template>
<script>
	export default {
		name: "app-pagination",
		props: {
			length: {
				type: Number,
				default: 0,
				validator: (val) => val % 1 === 0,
			},
			totalVisible: Number,
			disabled: Boolean,
			value: {
				type: [Number, String],
				default: 1,
			},
		},
		model: {
			event: "click",
		},
		data: () => ({
			maxButtons: 10,
		}),
		computed: {
			items() {
				const maxLength =
					this.totalVisible > this.maxButtons
						? this.maxButtons
						: this.totalVisible || this.maxButtons;
				if (this.length <= maxLength || maxLength < 1) {
					return this.getRange(1, this.length);
				}
				const even = maxLength % 2 === 0 ? 1 : 0;
				const left = Math.floor(maxLength / 2);
				const right = this.length - left + 1 + even;
				if (this.value > left && this.value < right) {
					const start = this.value - left + 2;
					const end = this.value + left - 2 - even;
					return [1, "...", ...this.getRange(start, end), "...", this.length];
				} else if (this.value === left) {
					const end = this.value + left - 1 - even;
					return [...this.getRange(1, end), "...", this.length];
				} else if (this.value === right) {
					const start = this.value - left + 1;
					return [1, "...", ...this.getRange(start, this.length)];
				} else {
					return [
						...this.getRange(1, left),
						"...",
						...this.getRange(right, this.length),
					];
				}
			},
		},
		methods: {
			setCurrent(num) {
				this.$emit("click", num);
			},
			getRange(from, to) {
				const range = [];
				from = from > 0 ? from : 1;
				for (let i = from; i <= to; i++) {
					range.push(i);
				}
				return range;
			},
		},
	};
</script>
<style lang="scss" scoped>
	.pagination {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}
	.pagination-more,
	button {
		min-width: 2.7rem;
		box-sizing: border-box;
		padding: 0 0.5rem;
		height: 2.7rem;
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.05);
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: $font-micra;
		font-size: 1.2rem;
		font-weight: 400;
		color: #fff;
		margin-right: 1.5rem;
		margin-bottom: 1rem;
		transition: all 0.3s linear;
	}
	.pagination-more {
		cursor: unset;
	}
	button:hover,
	.active {
		background-color: #001aff;
	}
</style>