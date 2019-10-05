<template>
	<header class="czar-header">
		<div class="czar-header__name__wrapper">
			<span class="czar-header__name"><slot></slot></span>
		</div>
		<div class="czar-header__text__wrapper">
			<span class="czar-header__text">is Czar</span>
		</div>
	</header>
</template>

<script>
export default {
	name: "CzarDisplay",
	updated() {
		this.nameMargin();
	},
	methods: {
		nameMargin() {
			const nameLength = document.querySelector(".czar-header__name").innerHTML.length;
			const numA = 0.02 * nameLength ** 2 - 0.92 * nameLength + 8;
			const numB = 0.01 * nameLength ** 3 - 0.12 * nameLength ** 2 - 0.14 * nameLength + 6.73;
			document.querySelector(".czar-header__name__wrapper").style.paddingLeft = `${numA}rem`;
			document.querySelector(".czar-header__text__wrapper").style.paddingRight = `${numB}rem`;
		},
	},
};
</script>
