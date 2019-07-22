<template>
	<div class="main-wrapper">
		<CAHHeader></CAHHeader>

		<keep-alive>
			<component v-bind:is="currentTab()"></component>
		</keep-alive>
	</div>
</template>

<script>
import CAHHeader from "@/components/Header.vue";
import { mapState, mapMutations } from "vuex";
import { auth } from "@/firebase.js";

export default {
	name: "SignIn",
	components: {
		CAHHeader,
		SignInForm: () => import("@/components/SignInForm.vue"),
		SignOutForm: () => import("@/components/SignOutForm.vue"),
	},
	created() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.SET_TAB("SignOutForm");
			} else if (!user) {
				this.SET_TAB("SignInForm");
			}
		});
	},
	methods: {
		...mapState(["currentTab"]),
		...mapMutations(["SET_TAB"]),
	},
};
</script>
