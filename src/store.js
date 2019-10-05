import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import router from "./router";
import { db } from "./firebase";

const vuexPersist = new VuexPersistence({
	reducer: state => ({ user: state.user, room: state.room }),
});

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {
			nickname: "",
			uid: "",
		},
		currentTab: "",
		room: {
			id: "",
			players: [],
			maxPoints: null,
			owner: null,
			started: null,
			czar: null,
		},
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
		},
		SET_TAB(state, newTab) {
			state.currentTab = newTab;
		},
		SET_ROOM(state, room) {
			state.room = room;
		},
		SET_ROOM_REALTIMEDATA(state) {
			let players = [];

			db.collection(`rooms/${router.currentRoute.params.id}/players`).onSnapshot(snapshot => {
				players = [];
				snapshot.forEach(doc => {
					players.push({
						name: doc.data().name,
						score: doc.data().score,
						isCzar: doc.data().isCzar,
						uid: doc.id,
					});
				});
				state.room.players = players;
			});

			db.collection("rooms")
				.doc(router.currentRoute.params.id)
				.onSnapshot(doc => {
					// Change to be real data
					state.room.czar = doc.data().czar ? doc.data().czar.data().name : "Deine Mudda";
					state.room.started = doc.data().started;
				});
		},
		SET_ROOM_METADATA(state) {
			db.collection("rooms")
				.doc(router.currentRoute.params.id)
				.get()
				.then(doc => {
					state.room.maxPoints = doc.data().maxPoints;
					state.room.owner = doc.data().owner.id;
					state.room.id = doc.id;
				})
				.catch(err => {
					console.error(err);
				});
		},
		SET_ROOM_STARTED(state, bool) {
			state.room.started = bool;
		},
		DELETE_USER(state) {
			state.user.nickname = "";
			state.user.uid = "";
		},
	},
	actions: {
		addUserdata({ commit }, { nickname, uid }) {
			if (nickname && uid) {
				commit("SET_USER", { nickname, uid });
			} else {
				throw new Error("Either nickname or UID not defined.");
			}
		},
		addRoomdata({ commit }, { id }) {
			if (id) {
				commit("SET_ROOM", { id });
			} else {
				throw new Error("Room ID not defined.");
			}
		},
		setRoomdata({ commit }) {
			commit("SET_ROOM_REALTIMEDATA");
			commit("SET_ROOM_METADATA");
		},
		setStarted({ commit, state }, bool) {
			if (typeof bool === "boolean") {
				db.collection("rooms")
					.doc(state.room.id)
					.update({ started: true })
					.then(() => {
						commit("SET_ROOM_STARTED", bool);
						console.log("Started game successfully.");
					})
					.catch(err => {
						console.error(err);
					});
			} else {
				throw new Error("Argument is not a boolean.");
			}
		},
	},
	getters: {
		getPlayers(state) {
			return state.room.players;
		},
		getMaxPoints(state) {
			return state.room.maxPoints;
		},
		getUserIsOwner(state) {
			return state.room.owner === state.user.uid;
		},
		getStarted(state) {
			return state.room.started;
		},
		getCzar(state) {
			return state.room.czar;
		},
	},
	plugins: [vuexPersist.plugin],
});
