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
			if (!this.errors.has("nickname") && this.nickname) {
				// Search for already existing players with same nickname
				db.collection("players")
					.where("nickname", "==", this.nickname)
					.get()
					.then(snapshot => {
						console.log(snapshot.docs, 2);
						console.log(auth.currentUser, 3);

						const docIDs = [];
						snapshot.forEach(doc => {
							docIDs.push(doc.id);
						});

						// If no user with same nickname exists, sign in with predefined signInWithNewNickname function
						if (!snapshot.docs.length) {
							this.signInWithNewNickname();
						}

						// If nickname is in database and uid is the same,
						if (snapshot.docs.length && docIDs.includes(auth.currentUser.uid)) {
							console.log("object");
						}
					})
					.catch(err => {
						console.error("Case 2", err);
					});
			} else {
				console.error("Case 1");
			}
		},
		signInWithNewNickname() {
			// ...
		},
		...mapActions(["addUserdata"]),
	},
};
</script>
