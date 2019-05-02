<template>
	<div class="sign-in-view">
		<CAHHeader></CAHHeader>
		<form @submit.prevent="signInUser">
			<div v-if="errors.lenght">
				<ul>
					<li v-for="error in errors" :key="error">{{ error }}</li>
				</ul>
			</div>

			<label for="nickname">Nickname</label>
			<input v-model="nickname" type="text" name="nickname" />
			<button v-on:click="signInUser" class="btn">Sign In</button>
		</form>
	</div>
</template>

<script>
import CAHHeader from "@/components/Header.vue";
import { auth, db } from "@/firebase.js";
import { mapActions } from "vuex";

export default {
	name: "SignIn",
	components: {
		CAHHeader,
	},
	data() {
		return { nickname: null, errors: ["cock"] };
	},
	// created() {},
	// computed: {},
	methods: {
		signInUser() {
			this.errors = [];
			const { nickname } = this;

			if (nickname) {
				auth.signInAnonymously().catch(error => {
					console.log(error.code, error.message);
					this.errors.push(error.message);
				});

				auth.onAuthStateChanged(user => {
					if (user) {
						const { uid } = user;

						db.collection("players")
							.doc(uid)
							.set({ nickname });

						this.addUserdata({ nickname, uid });
						console.log("User is signed in with id", uid);
						this.$router.push("join");
					} else {
						console.log("User is not signed in (anymore)");
					}
				});
			} else {
				this.errors.push("Nickname required.");
			}
		},
		...mapActions(["addUserdata"]),
	},
};
</script>
