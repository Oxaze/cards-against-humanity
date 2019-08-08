<template>
	<div class="sign-in-wrapper">
		<v-wait for="loadingNext" style="height: 100%">
			<template slot="waiting">
				<div class="spinner">
					<hollow-dots-spinner
						:animation-duration="1125"
						:dot-size="18"
						:dots-num="3"
						color="#3f51b5"
					/>
				</div>
			</template>

			<form @submit.prevent="signInUser" class="form">
				<div class="form__input-group">
					<input
						v-model="nickname"
						type="text"
						autocomplete="off"
						spellcheck="false"
						required
						name="nickname"
						v-validate="'required|alpha|min:4'"
						id="nickname"
						class="form__input form__input--primary"
					/>
					<label for="nickname" class="form__lable">Nickname</label>
					<transition name="error-message__transition">
						<span class="error-message" v-if="errors.has('nickname')">{{
							errors.first("nickname")
						}}</span>
					</transition>
				</div>

				<button type="submit" class="btn btn--secondary">Sign In</button>
			</form>
		</v-wait>
	</div>
</template>

<script>
import { HollowDotsSpinner } from "epic-spinners";
import { mapActions } from "vuex";
import { auth, db } from "@/firebase.js";

export default {
	name: "SignInFrom",
	components: {
		HollowDotsSpinner,
	},
	data() {
		return { nickname: null };
	},
	methods: {
		signInUser() {
			// debugger;
			const { nickname } = this;

			if (!this.errors.has("nickname") && nickname) {
				this.$wait.start("loadingNext");
				db.collection("players")
					.where("nickname", "==", nickname)
					.get()
					.then(snapshot => {
						console.log("Current User:", !!auth.currentUser, 0);
						const docIDs = [];

						if (auth.currentUser) {
							snapshot.forEach(doc => {
								docIDs.push(doc.id);
							});
						}

						// Login if same nickname is not given anywhere elese exept if its the own uid
						if (
							!snapshot.docs.length ||
							(auth.currentUser ? docIDs.includes(auth.currentUser.uid) : false)
						) {
							auth.signInAnonymously().catch(error => {
								console.error(error.code, error.message);
								this.$validator.errors.add({ field: "nickname", msg: error.message });
							});

							auth.onAuthStateChanged(user => {
								if (user) {
									const { uid } = user;

									db.collection("players")
										.doc(uid)
										.set({ nickname });

									this.addUserdata({ nickname, uid });
									console.log("User is signed in with id", uid);

									this.$router.push("create-or-join");
									this.$wait.end("loadingNext");
								} else {
									console.log("User is not signed in (anymore)");
								}
							});
						} else {
							this.$validator.errors.add({
								field: "nickname",
								msg: "Nickname already assigned to another Player.",
							});
						}
					})
					.catch(err => {
						console.error(err);
					});
			}
		},
		...mapActions(["addUserdata"]),
	},
};
</script>
