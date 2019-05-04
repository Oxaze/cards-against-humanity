<template>
	<div class="create-or-join-wrapper">
		<button class="btn btn--primary" @click="changeTab('Create')">Create</button>
		<button class="btn btn--primary" @click="changeTab('Join')">Join</button>
	</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	name: "CreateOrJoinSwitch",
	data() {
		return {};
	},
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
