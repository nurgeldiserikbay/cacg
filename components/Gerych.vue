<template>
	<div class="wrapper">
		<Triangles class="triangles triangle-blue" :x="x" :y="y" :speed="80" :src="'/images/triangle-blue.svg'" />
		<Triangles :x="x" :y="y" :speed="30" class="triangles triangle-red" :src="'/images/triangle-red.svg'" />
		<Triangles :x="x" :y="y" :speed="60" class="triangles triangle-yellow" :src="'/images/triangle-yellow.svg'" />
		<img class="main_img" :src="'/images/gerych.png'" alt="" />
		<div class="glitch">
			<div class="glitch__item"></div>
			<div class="glitch__item"></div>
			<div class="glitch__item"></div>
			<div class="glitch__item"></div>
			<div class="glitch__item"></div>
		</div>
		<div class="front"></div>
	</div>
</template>
<script>
export default {
	name: "Gerych",
	props: ["x", "y"],
};
</script>
<style lang="scss" scoped>
.wrapper {
	width: 100%;
	height: 100%;
}

.front {
	pointer-events: none;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 7;
	mix-blend-mode: luminosity;
	animation: gradient 2s linear infinite;
	mask-image: url("/images/gerych-mask.png");
	-webkit-mask-size: contain;
	-webkit-mask-position: 50% 50%;
	-webkit-mask-repeat: no-repeat;
}

@keyframes gradient {
	0% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0rem,
				rgba(0, 0, 0, 0.05) 0.5rem,
				rgba(255, 255, 255, 0.05) 0.5rem,
				rgba(255, 255, 255, 0.05) 1rem);
	}

	5% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0.05rem,
				rgba(0, 0, 0, 0.05) 0.55rem,
				rgba(255, 255, 255, 0.05) 0.55rem,
				rgba(255, 255, 255, 0.05) 1.05rem);
	}

	10% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0.1rem,
				rgba(0, 0, 0, 0.05) 0.6rem,
				rgba(255, 255, 255, 0.05) 0.6rem,
				rgba(255, 255, 255, 0.05) 1.1rem);
	}

	15% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0.15rem,
				rgba(0, 0, 0, 0.05) 0.65rem,
				rgba(255, 255, 255, 0.05) 0.65rem,
				rgba(255, 255, 255, 0.05) 1.15rem);
	}

	20% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0.2rem,
				rgba(0, 0, 0, 0.05) 0.7rem,
				rgba(255, 255, 255, 0.05) 0.7rem,
				rgba(255, 255, 255, 0.05) 1.2rem);
	}

	25% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0.25rem,
				rgba(0, 0, 0, 0.05) 0.75rem,
				rgba(255, 255, 255, 0.05) 0.75rem,
				rgba(255, 255, 255, 0.05) 1.25rem);
	}

	30% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0.3rem,
				rgba(0, 0, 0, 0.05) 0.8rem,
				rgba(255, 255, 255, 0.05) 0.8rem,
				rgba(255, 255, 255, 0.05) 1.3rem);
	}

	35% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0.35rem,
				rgba(0, 0, 0, 0.05) 0.85rem,
				rgba(255, 255, 255, 0.05) 0.85rem,
				rgba(255, 255, 255, 0.05) 1.35rem);
	}

	40% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0.4rem,
				rgba(0, 0, 0, 0.05) 0.9rem,
				rgba(255, 255, 255, 0.05) 0.9rem,
				rgba(255, 255, 255, 0.05) 1.4rem);
	}

	45% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0.45rem,
				rgba(0, 0, 0, 0.05) 0.95rem,
				rgba(255, 255, 255, 0.05) 0.95rem,
				rgba(255, 255, 255, 0.05) 1.45rem);
	}

	50% {
		background-image: repeating-linear-gradient(to top,
				rgba(0, 0, 0, 0.05) 0.5rem,
				rgba(0, 0, 0, 0.05) 1rem,
				rgba(255, 255, 255, 0.05) 1rem,
				rgba(255, 255, 255, 0.05) 1.5rem);
	}

	55% {
		background-image: repeating-linear-gradient(to top,
				rgba(255, 255, 255, 0.05) 1.05rem,
				rgba(255, 255, 255, 0.05) 1.55rem,
				rgba(0, 0, 0, 0.05) 1.55rem,
				rgba(0, 0, 0, 0.05) 2.05rem);
	}

	60% {
		background-image: repeating-linear-gradient(to top,
				rgba(255, 255, 255, 0.05) 1.1rem,
				rgba(255, 255, 255, 0.05) 1.6rem,
				rgba(0, 0, 0, 0.05) 1.6rem,
				rgba(0, 0, 0, 0.05) 2.1rem);
	}

	65% {
		background-image: repeating-linear-gradient(to top,
				rgba(255, 255, 255, 0.05) 1.15rem,
				rgba(255, 255, 255, 0.05) 1.65rem,
				rgba(0, 0, 0, 0.05) 1.65rem,
				rgba(0, 0, 0, 0.05) 2.15rem);
	}

	70% {
		background-image: repeating-linear-gradient(to top,
				rgba(255, 255, 255, 0.05) 1.2rem,
				rgba(255, 255, 255, 0.05) 1.7rem,
				rgba(0, 0, 0, 0.05) 1.7rem,
				rgba(0, 0, 0, 0.05) 2.2rem);
	}

	75% {
		background-image: repeating-linear-gradient(to top,
				rgba(255, 255, 255, 0.05) 1.25rem,
				rgba(255, 255, 255, 0.05) 1.75rem,
				rgba(0, 0, 0, 0.05) 1.75rem,
				rgba(0, 0, 0, 0.05) 2.25rem);
	}

	80% {
		background-image: repeating-linear-gradient(to top,
				rgba(255, 255, 255, 0.05) 1.3rem,
				rgba(255, 255, 255, 0.05) 1.8rem,
				rgba(0, 0, 0, 0.05) 1.8rem,
				rgba(0, 0, 0, 0.05) 2.3rem);
	}

	85% {
		background-image: repeating-linear-gradient(to top,
				rgba(255, 255, 255, 0.05) 1.35rem,
				rgba(255, 255, 255, 0.05) 1.85rem,
				rgba(0, 0, 0, 0.05) 1.85rem,
				rgba(0, 0, 0, 0.05) 2.35rem);
	}

	90% {
		background-image: repeating-linear-gradient(to top,
				rgba(255, 255, 255, 0.05) 1.4rem,
				rgba(255, 255, 255, 0.05) 1.9rem,
				rgba(0, 0, 0, 0.05) 1.9rem,
				rgba(0, 0, 0, 0.05) 2.4rem);
	}

	95% {
		background-image: repeating-linear-gradient(to top,
				rgba(255, 255, 255, 0.05) 1.45rem,
				rgba(255, 255, 255, 0.05) 1.95rem,
				rgba(0, 0, 0, 0.05) 1.95rem,
				rgba(0, 0, 0, 0.05) 2.45rem);
	}

	100% {
		background-image: repeating-linear-gradient(to top,
				rgba(255, 255, 255, 0.05) 1.5rem,
				rgba(255, 255, 255, 0.05) 2rem,
				rgba(0, 0, 0, 0.05) 2rem,
				rgba(0, 0, 0, 0.05) 2.5rem);
	}
}

.triangles {
	position: absolute;
}

.triangle-blue {
	left: 67%;
	top: 15%;
	width: 10%;
}

.triangle-red {
	left: 12%;
	top: 23%;
	z-index: 6;
	width: 30%;
}

.triangle-yellow {
	left: 30%;
	top: 6%;
	width: 20%;
}

.main_img {
	width: 100%;
	height: auto;
	object-fit: contain;
	pointer-events: none;
	opacity: 0;
}

.glitch {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	z-index: 5;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	pointer-events: none;
}

.glitch .glitch__item {
	background: url("/images/gerych.png") no-repeat 50% 50% / contain;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	position: absolute;
	pointer-events: none;
}

.glitch .glitch__item:nth-child(n + 2) {
	opacity: 0;
	animation-duration: 2s;
	animation-delay: 0.2s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}

.glitch .glitch__item:nth-child(2) {
	background-color: transparent;
	background-blend-mode: none;
	animation-name: glitch-anim-2;
}

.glitch .glitch__item:nth-child(2) {
	background-color: transparent;
	background-blend-mode: none;
	animation-name: glitch-anim-3;
}

.glitch .glitch__item:nth-child(4) {
	background-color: transparent;
	background-blend-mode: none;
	animation-name: glitch-anim-4;
}

@keyframes glitch-anim-2 {
	0% {
		opacity: 1;
		transform: translate3d(10px, 0, 0);
		-webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
		clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
	}

	2% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
		clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
	}

	4% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
		clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
	}

	6% {
		-webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
		clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
	}

	8% {
		-webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
		clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
	}

	10% {
		-webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
		clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
	}

	12% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
		clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
	}

	14% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}

	16% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}

	18% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}

	20% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
		clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
	}

	21.9% {
		opacity: 1;
		transform: translate3d(10px, 0, 0);
	}

	22%,
	100% {
		opacity: 0;
		transform: translate3d(0, 0, 0);
		-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
		clip-path: polygon(0 0, 0 0, 0 0, 0 0);
	}
}

@keyframes glitch-anim-3 {
	0% {
		opacity: 1;
		transform: translate3d(calc(-1 * 10px), 0, 0);
		-webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
		clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
	}

	3% {
		-webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
		clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
	}

	5% {
		-webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
		clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
	}

	7% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}

	9% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
		clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
	}

	11% {
		-webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
		clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
	}

	13% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}

	15% {
		-webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
		clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
	}

	17% {
		-webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
		clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
	}

	19% {
		-webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
		clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
	}

	20% {
		-webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
		clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
	}

	21.9% {
		opacity: 1;
		transform: translate3d(calc(-1 * 10px), 0, 0);
	}

	22%,
	100% {
		opacity: 0;
		transform: translate3d(0, 0, 0);
		-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
		clip-path: polygon(0 0, 0 0, 0 0, 0 0);
	}
}

@keyframes glitch-anim-4 {
	0% {
		opacity: 1;
		transform: translate3d(0, calc(-1 * 5px), 0) scale3d(-1, -1, 1);
		-webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
		clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
	}

	1.5% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
		clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
	}

	2% {
		-webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
		clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
	}

	2.5% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}

	3% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
		clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
	}

	5% {
		-webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
		clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
	}

	5.5% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
		clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
	}

	7% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
		clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
	}

	8% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
		clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
	}

	9% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
		clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
	}

	10.5% {
		-webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
		clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
	}

	11% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
		clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
	}

	13% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
		clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
	}

	14% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
		clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
	}

	14.5% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
		clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
	}

	15% {
		-webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
		clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
	}

	16% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}

	18% {
		-webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
		clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
	}

	20% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
		clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
	}

	21.9% {
		opacity: 1;
		transform: translate3d(0, calc(-1 * 5px), 0) scale3d(-1, -1, 1);
	}

	22%,
	100% {
		opacity: 0;
		transform: translate3d(0, 0, 0);
		-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
		clip-path: polygon(0 0, 0 0, 0 0, 0 0);
	}
}
</style>