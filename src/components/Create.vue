<template>
	<div class="sign-in-wrapper">
		<form @submit.prevent="createServer" class="form">
			<div class="form__input-group">
				<input
					v-model="serverName"
					type="text"
					autocomplete="off"
					spellcheck="false"
					required
					name="serverName"
					v-validate="'required|alpha|min:4'"
					id="serverName"
					class="form__input form__input--primary"
				/>
				<label for="serverName" class="form__lable">Server Name</label>
				<transition name="error-message__transition">
					<span class="error-message" v-if="errors.has('serverName')">{{
						errors.first("serverName")
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

			<button type="submit" class="btn btn--secondary">Create Server</button>
		</form>
	</div>
</template>

<script>
import { db } from "@/firebase.js";
import { mapActions, mapState } from "vuex";

export default {
	name: "Create",
	data() {
		return {
			serverName: null,
			password: null,
			maxPlayers: null,
		};
	},
	// created() {},
	// computed: {},
	methods: {
		createServer() {
			const { serverName, password, maxPlayers } = this;
			const userRef = db.collection("players").doc(this.user().uid);
			const serverRef = db.collection("rooms").doc();

			if (
				!this.errors.has("serverName") &&
				!this.errors.has("password") &&
				!this.errors.has("maxPlayers") &&
				serverName &&
				password &&
				maxPlayers
			) {
				serverRef.set({
					name: serverName,
					password,
					maxPlayers,
					owner: userRef,
					players: [userRef],
				});

				this.$router.push(`servers/${serverRef.id}`);
			}
		},
		...mapState(["user"]),
	},
};
</script>
