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
			players: [],
		},
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
		},
		SET_TAB(state, newTab) {
			state.currentTab = newTab;
		},
		SET_SERVER(state, server) {
			state.room = server;
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
		addRoomdata({ commit }, { id, players }) {
			if (id && players) {
				commit("SET_SERVER", { id, players });
			} else {
				throw new Error("Either players or room ID not defined.");
			}
		},
	},
	getters: {},
	plugins: [vuexPersist.plugin],
});
