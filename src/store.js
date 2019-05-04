import Vue from "vue";
import Vuex from "vuex";
// import { db } from "./firebase";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {
			nickname: "",
			uid: "",
		},
		currentTab: "CreateOrJoinSwitch",
		server: {
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
		SET_SERVER(state, serverID) {
			state.server.id = serverID;
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
		addServerdata({ commit }, id) {
			if (id) {
				commit("SET_SERVER", id);
			} else {
				throw new Error("Server ID not defined.");
			}
		},
	},
	getters: {},
});
