import VuexPersistence from "vuex-persist";

const vuexPersist = new VuexPersistence({
	// reducer: state => ({ user: state.user, room: state.room }),
});
export const plugins = [vuexPersist.plugin];

export const state = () => ({
	currentTab: "",
});

export const mutations = {
	setTab(state, newTab) {
		state.currentTab = newTab;
	},
};
