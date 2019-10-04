<template>
	<header class="czar-header">
		<!-- <h2 class="czar-header__text">
			<span class="czar-header__text__link">{{ name }}</span
			><br />
			<span style="margin-left: 100px">is Czar</span>
		</h2> -->
		<span class="czar-header__name"><slot></slot></span>
		<br />
		<span class="czar-header__text">is Czar</span>
	</header>
</template>

<script>
export default {
	name: "CzarDisplay",
};
</script>
