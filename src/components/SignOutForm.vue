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

			<form @submit.prevent="signOutUser" class="form">
				<button type="submit" class="btn btn--primary">Sign Out</button>
			</form>
		</v-wait>
	</div>
</template>

<script>
import { HollowDotsSpinner } from "epic-spinners";
import { mapState, mapMutations } from "vuex";
import { auth, db } from "@/firebase.js";

export default {
	name: "SignOutFrom",
	components: {
		HollowDotsSpinner,
	},
	methods: {
		async signOutUser() {
			this.$wait.start("loadingNext");
			auth.currentUser.delete();
			const x = await this.user().nickname;

			db.collection("players")
				.where("nickname", "==", this.user().nickname)
				.get()
				.then(snapshot => {
					if (snapshot.docs.length) {
						snapshot.forEach(doc => {
							doc.ref
								.delete()
								.then(() => {
									this.$router.go();

									this.$wait.end("loadingNext");
								})
								.catch(err => {
									this.$wait.end("loadingNext");
									console.error(err);
								});
						});
					} else {
						this.$wait.end("loadingNext");
						console.error("User has to be in database in order to delte him");
					}
				})
				.catch(err => {
					this.$wait.end("loadingNext");
					console.error(err);
				});

			// Not necessary due to router listener:
			// this.SET_TAB("CreateOrJoinSwitch");
			this.DELETE_USER();
		},
		...mapState(["user"]),
		...mapMutations(["SET_TAB", "DELETE_USER"]),
	},
};
</script>
