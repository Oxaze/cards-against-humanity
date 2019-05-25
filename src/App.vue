<template>
	<div id="app">
		<nprogress-container></nprogress-container>

		<router-view style="flex: 1;" />

		<footer class="footer" role="contentinfo">
			<div class="footer__wrapper">
				<ul class="footer__list">
					<li class="footer__item footer__item--first">
						<router-link :to="{ path: '/imprint' }">Imprint</router-link>
					</li>
					<li class="footer__item">
						<router-link :to="{ path: '/privacy' }">Privacy</router-link>
					</li>
					<!-- TODO: ADD SETTINGS WHEEL WITH DARK MODE SUPPORT AND V-IF STATEMENT -->
					<li class="footer__item" @click="test">
						<a href="#">destory</a>
					</li>
				</ul>
			</div>
		</footer>
	</div>
</template>

<style src="./styles/main.scss" lang="scss"></style>

<script>
import NprogressContainer from "vue-nprogress/src/NprogressContainer.vue";
import { auth } from "./firebase.js";

export default {
	components: {
		NprogressContainer,
	},
	methods: {
		test() {
			auth.currentUser.delete();
			console.log("User delted", auth.currentUser);
		},
	},
};
</script>
