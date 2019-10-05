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
			const nameLength = this.$el.querySelector(".czar-header__name").innerHTML.length;
			const numA = 0.02 * nameLength ** 2 - 0.92 * nameLength + 8;
			const numB = 0.01 * nameLength ** 3 - 0.12 * nameLength ** 2 - 0.14 * nameLength + 6.73;
			const nameWrapperPaddingLeft = document.querySelector(".czar-header__name__wrapper").style
				.paddingLeft;
			const textWrapperPaddingRight = document.querySelector(".czar-header__text__wrapper").style
				.paddingRight;

			document.querySelector(".czar-header__name__wrapper").style.paddingLeft = `${
				numA !== 8 ? numA : document.querySelector(".czar-header__name__wrapper").style.paddingLeft
			}rem`;
			document.querySelector(".czar-header__text__wrapper").style.paddingRight = `${
				numB !== 6.73
					? numB
					: document.querySelector(".czar-header__text__wrapper").style.paddingRight
			}rem`;
		},
	},
};
</script>
