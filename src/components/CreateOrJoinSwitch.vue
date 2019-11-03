<template>
	<div class="create-or-join-wrapper">
		<div>		<button class="btn btn--primary" @click="changeTab('Create')" style="margin-bottom: 1.5rem">Create</button>
		<button class="btn btn--primary" @click="changeTab('Join')">Join</button></div>

	</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	name: "CreateOrJoinSwitch",
	// data() {
	// 	return {};
	// },
	// created() {},
	// computed: {},
	methods: {
		changeTab(newTab) {
			this.SET_TAB(newTab);
		},
		...mapMutations(["SET_TAB"]),
	},
};
</script>
