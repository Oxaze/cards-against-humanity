<template>
	<div class="sign-in-wrapper">
		<!-- <v-wait for="loadingNext" style="height: 100%"> -->
		<v-wait for="loadingNext">
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
		async signInUser() {
			if (!this.errors.has("nickname") && this.nickname) {
				this.$wait.start("loadingNext");
				const nicknameIsInDatabase = await this.isNicknameInDatabase();

				// Is username already in database?
				if (nicknameIsInDatabase) {
					this.$wait.end("loadingNext");
					// Username is in database, throw error in simple version
					this.$validator.errors.add({
						field: "nickname",
						msg: "Nickname already assigned to another Player.",
					});
				}

				if (!nicknameIsInDatabase) {
					// Username is not in database, sign in
					auth
						.signInAnonymously()
						.then(ref => {
							const { uid } = ref.user;
							const { nickname } = this;

							db.collection("players")
								.doc(uid)
								.set({ nickname });

							console.log("User is signed in with ID", uid);
							this.addUserdata({ nickname, uid });
							this.$router.push("create-or-join");

							this.$wait.end("loadingNext");
						})
						.catch(error => {
							this.$wait.end("loadingNext");
							console.error("Error 3", error.code, error.message);
							this.$validator.errors.add({ field: "nickname", msg: error.message });
						});
				}
			} else {
				console.error("Error 1");
			}
		},
		isNicknameInDatabase() {
			return new Promise((resolve, reject) => {
				db.collection("players")
					.where("nickname", "==", this.nickname)
					.get()
					.then(snapshot => {
						resolve(!!snapshot.docs.length);
					})
					.catch(err => {
						console.error("Case 2", err);
						reject(err);
						debugger;
					});
			});
		},
		...mapActions(["addUserdata"]),
	},
};
</script>
