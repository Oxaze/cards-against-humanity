<template>
	<div class="sign-in-wrapper">
		<form @submit.prevent="signOutUser" class="form">
			<button type="submit" class="btn btn--primary">Sign Out</button>
		</form>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import { auth } from "@/firebase.js";

export default {
	name: "SignOutFrom",
	methods: {
		signOutUser() {
			auth.currentUser.delete();
			console.log("User delted", auth.currentUser);

			this.SET_TAB("CreateOrJoinSwitch");
			this.DELETE_USER();
		},
		...mapMutations(["SET_TAB", "DELETE_USER"]),
	},
};
</script>
