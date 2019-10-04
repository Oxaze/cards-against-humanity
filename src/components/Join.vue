<template>
	<div class="sign-in-wrapper">
		<form @submit.prevent="joinRoom" class="form">
			<div class="form__input-group">
				<input
					v-model="roomID"
					type="text"
					autocomplete="off"
					spellcheck="false"
					required
					name="roomID"
					v-validate="'required|alpha_num|min:20|max:20'"
					id="roomID"
					class="form__input form__input--primary"
				/>
				<label for="roomName" class="form__lable">Room ID</label>
				<transition name="error-message__transition">
					<span class="error-message" v-if="errors.has('roomID')">{{
						errors.first("roomID")
					}}</span>
				</transition>
			</div>

			<button type="submit" class="btn btn--secondary">Join Room</button>
		</form>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { db } from "@/firebase.js";

export default {
	name: "Join",
	data() {
		return {
			roomID: null,
		};
	},
	// created() {},
	// computed: {},
	methods: {
		joinRoom() {
			// TODO: Add vue.wait
			const { roomID } = this;
			const userRef = this.user().uid ? db.collection("players").doc(this.user().uid) : null;
			const roomRef = db.collection("rooms").doc(roomID)
				? db.collection("rooms").doc(roomID)
				: null;

			if (!this.errors.has("roomID") && roomID) {
				roomRef
					.collection("players")
					.doc(this.user().uid)
					.set({
						isCzar: false,
						name: this.user().nickname,
						score: 0,
					});

				if (roomRef && userRef) {
					roomRef
						.collection("players")
						.doc(this.user().uid)
						.set({
							isCzar: false,
							name: this.user().nickname,
							score: 0,
						});

					userRef.update({ room: roomRef });

					const players = [{ uid: this.user().uid, name: this.user().nickname, score: 0 }];
					roomRef
						.get()
						.then(doc => {
							const a = doc.data().maxPoints;
							this.addRoomdata({ id: roomID, players, maxPoints: a });
						})
						.catch(err => {
							console.error(err);
						});
					console.log(`Joined room with ID ${roomRef.id} successfully`);

					this.$router.push(`room/${roomRef.id}`);
				} else if (!userRef) {
					this.$validator.errors.add({
						field: "roomName",
						msg: "User not logged in.",
					});
				} else {
					this.$validator.errors.add({
						field: "roomName",
						msg: "Unknown error.",
					});
				}
			}
		},
		...mapState(["user"]),
		...mapActions(["addRoomdata"]),
	},
};
</script>
