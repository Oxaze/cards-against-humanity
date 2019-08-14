<template>
	<div class="sign-in-wrapper">
		<form @submit.prevent="createRoom" class="form">
			<div class="form__input-group">
				<input
					v-model="roomName"
					type="text"
					autocomplete="off"
					spellcheck="false"
					required
					name="roomName"
					v-validate="'required|alpha|min:4'"
					id="roomName"
					class="form__input form__input--primary"
				/>
				<label for="roomName" class="form__lable">Room Name</label>
				<transition name="error-message__transition">
					<span class="error-message" v-if="errors.has('roomName')">{{
						errors.first("roomName")
					}}</span>
				</transition>
			</div>

			<br />

			<div class="form__input-group">
				<input
					v-model="password"
					type="password"
					autocomplete="off"
					spellcheck="false"
					required
					name="password"
					v-validate="'required|alpha_dash|min:3'"
					id="password"
					class="form__input form__input--primary"
				/>
				<label for="password" class="form__lable">Password</label>
				<transition name="error-message__transition">
					<span class="error-message" v-if="errors.has('password')">{{
						errors.first("password")
					}}</span>
				</transition>
			</div>

			<br />

			<div class="form__input-group">
				<input
					v-model="maxPlayers"
					type="number"
					autocomplete="off"
					spellcheck="false"
					required
					name="maxPlayers"
					v-validate="'required|decimal|max_value:10'"
					id="maxPlayers"
					class="form__input form__input--primary"
				/>
				<label for="maxPlayers" class="form__lable">Maximal Players</label>
				<transition name="error-message__transition">
					<span class="error-message" v-if="errors.has('maxPlayers')">{{
						errors.first("maxPlayers")
					}}</span>
				</transition>
			</div>

			<button type="submit" class="btn btn--secondary">Create Room</button>
		</form>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { db } from "@/firebase.js";

export default {
	name: "Create",
	data() {
		return {
			roomName: null,
			password: null,
			maxPlayers: null,
		};
	},
	// created() {},
	// computed: {},
	methods: {
		createRoom() {
			const { roomName, password, maxPlayers } = this;
			const userRef = this.user().uid ? db.collection("players").doc(this.user().uid) : null;
			const roomRef = db.collection("rooms").doc();

			if (
				!this.errors.has("roomName") &&
				!this.errors.has("password") &&
				!this.errors.has("maxPlayers") &&
				roomName &&
				password &&
				maxPlayers
			) {
				db.collection("rooms")
					.where("name", "==", roomName)
					.get()
					.then(snapshot => {
						if (!snapshot.docs.length && userRef) {
							// Set initial room data
							roomRef.set({
								name: roomName,
								password,
								maxPlayers,
								owner: userRef,
								started: false,
								czar: null,
								locked: false,
							});

							// Add player to room data
							roomRef
								.collection("players")
								.doc(this.user().uid)
								.set({
									isCzar: false,
									name: this.user().nickname,
									score: 0,
								});

							userRef.update({ room: roomRef });
							this.addRoomdata(roomRef.id);
							console.log(`Created Room with ID ${roomRef.id} successfully`);

							this.$router.push(`room/${roomRef.id}`);
						} else if (!userRef) {
							this.$validator.errors.add({
								field: "roomName",
								msg: "User not logged in.",
							});
						} else {
							this.$validator.errors.add({
								field: "roomName",
								msg: "Room name already exists.",
							});
						}
					})
					.catch(err => {
						console.log(err);
					});
			}
		},
		...mapState(["user"]),
		...mapActions(["addRoomdata"]),
	},
};
</script>
