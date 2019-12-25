export const state = () => ({
	currentTab: "",
});

export const mutations = {
	setTab(state, newTab) {
		state.currentTab = newTab;
	},
};
