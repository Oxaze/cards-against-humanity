<template>
	<div class="main-wrapper">
		<CAHHeader></CAHHeader>

		<div class="sign-in-wrapper">
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
		</div>
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
		return { nickname: null };
	},
	// created() {},
	// computed: {},
	methods: {
		signInUser() {
			const { nickname } = this;

			if (!this.errors.has("nickname") && nickname) {
				db.collection("players")
					.where("nickname", "==", nickname)
					.get()
					.then(snapshot => {
						// ASK AUTH IF ALREADY LOGED IN OR IF UID ALREADY EXISTS FOR THIS NICKNAME
						if (!snapshot.docs.length) {
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
					.catch(err => {});
			}
		},
		...mapActions(["addUserdata"]),
	},
};
</script>
