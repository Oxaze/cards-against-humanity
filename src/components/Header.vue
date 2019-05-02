<template>
	<header class="header">
		<h1>
			<router-link class="header__text" :to="{ path: '/' }">Cards Against Humanity</router-link>
		</h1>
	</header>
</template>

<script>
export default {
	name: "CAHHeader",
};
</script>
