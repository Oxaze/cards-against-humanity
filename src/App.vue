<template>
	<div id="app">
		<nprogress-container></nprogress-container>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view />
	</div>
</template>

<style src="./styles/main.scss" lang="scss"></style>

<script>
import NprogressContainer from "vue-nprogress/src/NprogressContainer.vue";

export default {
	components: {
		NprogressContainer,
	},
};
</script>
