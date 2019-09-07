<template>
	<div class="sign-in-wrapper">
		<form @submit.prevent="signOutUser" class="form">
			<button type="submit" class="btn btn--primary">Sign Out</button>
		</form>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { auth, db } from "@/firebase.js";

export default {
	name: "SignOutFrom",
	methods: {
		async signOutUser() {
			auth.currentUser.delete();
			const x = await this.user().nickname;
			console.log(54, "User delted", auth.currentUser);
			console.log(x, 65);

			db.collection("players")
				.where("nickname", "==", this.user().nickname)
				.get()
				.then(snapshot => {
					console.log(!!snapshot.docs.length);
					if (snapshot.docs.length) {
						snapshot.forEach(doc => {
							console.log(doc);
							doc.ref
								.delete()
								.then(() => {
									console.log("User deleted", 4);
								})
								.catch(err => {
									console.error(err);
									debugger;
								});
						});
					} else {
						console.error("User has to be in database in order to delte him");
					}
				})
				.catch(err => {
					console.error(err);
					debugger;
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
