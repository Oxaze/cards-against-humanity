import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexPersist = new VuexPersistence({
	storage: window.localStorage,
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
			// ...
		},
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
		},
		SET_TAB(state, newTab) {
			state.currentTab = newTab;
		},
		SET_SERVER(state, roomID) {
			state.room.id = roomID;
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
		addRoomdata({ commit }, id) {
			if (id) {
				commit("SET_SERVER", id);
			} else {
				throw new Error("Room ID not defined.");
			}
		},
	},
	getters: {},
	plugins: [vuexPersist.plugin],
});
