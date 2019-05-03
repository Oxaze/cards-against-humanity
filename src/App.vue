<template>
	<div id="app">
		<nprogress-container></nprogress-container>

		<router-view style="flex: 1;" />

		<footer class="footer1" role="contentinfo">
			<router-link :to="{ path: '/imprint' }">Impressum</router-link>
			<router-link :to="{ path: '/privacy' }">Datenschutz</router-link>
		</footer>
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
