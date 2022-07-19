<template>
	<div
		v-if="submited"
		class="submited"
		v-html="_getDictionary.formEndText"
	></div>
	<form v-else class="form" ref="form">
		<div
			class="form-group"
			:class="{
				error: errorMessagesName,
			}"
		>
			<label for="name">{{ _getDictionary.formNameLabel }}</label>
			<input
				class="input"
				type="text"
				id="name"
				name="name"
				v-model="name"
				@click="errorMessagesName = ''"
				:placeholder="errorMessagesName"
			/>
		</div>
		<div
			class="form-group"
			:class="{
				error: errorMessagesPosition,
			}"
		>
			<label for="position">{{ _getDictionary.formPositionLabel }}</label>
			<div
				class="select"
				:class="{ active: select }"
				data-name="position"
				@click="(select = !select), (errorMessagesPosition = '')"
			>
				<div class="selected input">
					{{ position || _getDictionary.formPositionDefaultValue }}
				</div>
				<div class="options" @whell.prevent.stop="" v-if="select">
					<div
						class="option"
						v-for="p in _getDictionary.formPositions"
						:key="p"
						@click="position = p"
					>
						{{ p }}
					</div>
				</div>
			</div>
		</div>
		<div
			class="form-group"
			:class="{
				error: errorMessagesFile,
			}"
		>
			<label for="file">{{ _getDictionary.formFileLabel }}</label>
			<div class="input file">
				<span>{{
					errorMessagesFile ||
					(file && file.name) ||
					_getDictionary.formFileDefaultValue
				}}</span>
				<input
					type="file"
					id="file"
					name="file"
					ref="fileInput"
					@change="valFile"
					accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
text/plain, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.presentationml.slideshow, application/vnd.openxmlformats-officedocument.presentationml.presentation"
				/>
			</div>
		</div>
		<button id="submit" class="main-btn" @click.prevent="submit">
			{{ _getDictionary.formBtn }}
		</button>
	</form>
</template>
<script>
	import { mapGetters } from "vuex";
	export default {
		data() {
			return {
				submited: false,
				name: "",
				email: "",
				select: false,
				file: null,
				position: "",
				errorMessagesName: "",
				errorMessagesEmail: "",
				errorMessagesPosition: false,
				errorMessagesFile: "",
			};
		},
		computed: {
			...mapGetters(["_getDictionary"]),
		},
		methods: {
			valName() {
				if (!this.name) {
					this.errorMessagesName = this._getDictionary.formNameError;
					this.name = "";
				} else {
					this.errorMessagesName = "";
				}
			},
			valPosition() {
				if (!this.position) {
					this.errorMessagesPosition = true;
				} else {
					this.errorMessagesPosition = false;
				}
			},
			valFile() {
				if (!this.$refs.fileInput.files.length) {
					this.errorMessagesFile = this._getDictionary.formFileDefaultValue;
				} else if (this.$refs.fileInput.files[0].size > 10485760) {
					this.errorMessagesFile = this._getDictionary.formFileError;
					this.file = null;
				} else {
					this.file = this.$refs.fileInput.files[0];
					this.errorMessagesFile = "";
				}
				return;
			},
			async submit() {
				if (this.submited) return;
				this.valName();
				this.valPosition();
				this.valFile();
				if (
					this.errorMessagesName ||
					this.errorMessagesPosition ||
					this.errorMessagesFile
				)
					return;
				let formData = new FormData();
				formData.append("name", this.name);
				formData.append("position", this.position);
				let file = this.file;
				formData.append("file", file, file.name);
				try {
					await fetch("https://cacg.kz/api/public/api/admin/sendCV", {
						method: "POST",
						headers: {
							"Access-Control-Allow-Origin": "no-cors",
						},
						body: formData,
					});
					this.submited = true;
				} catch (e) {
					console.log(e);
				}
			},
		},
		mounted() {
			document.addEventListener("click", (e) => {
				if (!e.target.closest("div[data-name='position']")) {
					this.select = false;
				}
			});
		},
	};
</script>

<style lang="scss">
	.submited {
		font-family: $font-micra;
		margin: 0 auto;
		width: 100%;
		max-width: 31rem;
		padding: 2.5rem 3rem;
		box-sizing: border-box;
		box-shadow: 0 0 83px 10px $box-shadow-color;
		text-align: center;
		font-size: 0.9rem;
	}
	.submited p {
		margin: 0;
	}
	.submited p:first-child {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
</style>
<style lang="scss" scoped>
	.form {
		margin: 0 auto;
		width: 100%;
		max-width: 31rem;
		box-sizing: border-box;
		padding: 2.5rem 3rem;
		box-shadow: 0 0 83px 10px $box-shadow-color;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-start;
	}
	.form-group {
		position: relative;
		margin-bottom: 2rem;
	}
	.form-group label {
		display: block;
		font-family: $font-montserrat;
		font-size: 1.2rem;
		line-height: 1.8rem;
		margin-bottom: 0.5rem;
		font-weight: 400;
		font-style: normal;
		letter-spacing: 0.036rem;
		text-transform: uppercase;
		transition: 0.3s linear;
	}
	.form-group.error label {
		color: #ff4040;
	}
	.input {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		border: none;
		background: transparent;
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23FFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
		background-repeat: no-repeat;
		background-size: 99% 99%;
		background-position: center;
		outline: none;
		padding: 0 4rem 0 2.2rem;
		line-height: 3rem;
		height: 3rem;
		vertical-align: middle;
		font-size: 1rem;
		-webkit-text-stroke: 0.5px #000;
		color: #fff;
		transition: 0.3s linear;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.error .input {
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23F00' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
	}
	.input:after {
		content: "";
		position: absolute;
		right: 2rem;
		top: 50%;
		width: 1.5rem;
		height: 0.8rem;
		margin-top: -0.4rem;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		transform-origin: center;
		transition: all 0.3s linear;
	}
	.input::placeholder {
		font-size: 1rem;
		-webkit-text-stroke: 0.5px #000;
		color: #fff;
	}
	.select {
		position: relative;
		cursor: pointer;
	}
	.selected:after {
		background-image: url("/images/select-arrow.svg");
	}
	.select.active .selected:after {
		transform: rotateZ(-180deg);
	}
	.options {
		position: absolute;
		left: 0;
		top: 120%;
		width: 100%;
		box-sizing: border-box;
		height: 7.5rem;
		overflow-y: auto;
		z-index: 5;
		-webkit-text-stroke: 0.2px #000;
		background-color: #202020;
		box-shadow: 0 0 7px 2px $box-shadow-color;
	}
	.option {
		min-height: 2.4rem;
		padding: 0.5rem 0.5rem 0.5rem 2.2rem;
		box-sizing: border-box;
		position: relative;
	}
	.option:after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(to right, transparent, #fff, transparent);
	}
	.file {
		cursor: pointer;
	}
	.file:after {
		height: 1.5rem;
		margin-top: -0.75rem;
		background-image: url("/images/file-download.svg");
	}
	.file input {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		width: 100%;
		height: 100%;
	}
	#submit {
		width: 12.9rem;
		height: 3.4rem;
		font-size: 1rem;
		font-weight: normal;
		font-family: $font-montserrat;
		margin: 0 auto;
	}
	@media (max-width: 767.98px) {
		.submited {
			max-width: 100%;
			padding: 4rem;
		}
		.form {
			max-width: 100%;
			padding: 4rem;
		}
	}
	@media (max-width: 575.98px) {
		#media {
			padding: 10rem 0% 10rem;
		}
		.input {
			-webkit-text-stroke: unset !important;
		}
	}
</style>